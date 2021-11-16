import React, {useState,useEffect} from "react";
import { Button, Card, Image } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import SetType from './set_tipo';

//recibir props y retornar una vista
const PData = (props) => {
    
    return (
        <tr class="unread" onClick={()=>{props.moverse(props.cedula)}}>
            {props.imagen === ''?<td><FaIcons.FaUserCircle className=' fa-5x text-black' /></td>:<td><Image src={props.imagen} className='img-fluid' roundedCircle /></td>}
            <td className="text-center align-middle">
                <h6 class="mb-1">{props.name}</h6>
                <p class="m-0">{props.description}</p>
            </td>
        </tr>
    );
}

const Home = () => {
        const [data, setData] = useState([]);
        const history = useHistory();
        
        const moverse = (paciente) => {
            history.push(`/paciente/${paciente}`);
        } 
        const envio = async () => {
            const datos = await axios.post(`${process.env.REACT_APP_URI}/Getacientes`,{email: localStorage.getItem("correo")})
            setData(datos.data);
        }
        useEffect(() => {
            envio();
        }, []);

        if (localStorage.getItem('correo') === null) {
            history.push('/login');
        }
        else {
            if (localStorage.getItem('tipo') === '0') {
                return (<SetType />)
            }
            else if(localStorage.getItem('tipo') === '1'){
                if(data.length !== 0){
                    console.log(data[0]);
                    moverse(data[0].cedula);
                }
            }
            
        }

        return (
            <Card className="mx-auto" style={{ width: '20rem' }}>
                <Card.Header>
                    <h2 className="fw-bold text-center">Pacientes</h2>
                </Card.Header>
                <Card.Body>
                    <div class="card-block px-0">

                        <table class="table table-hover">
                            <tbody>
                                {
                                    data.map((item,i) => 
                                    {
                                        return <PData key={i} imagen={item.foto} name={item.nombre} moverse={moverse} cedula={item.cedula}  description={`${item.cedula}`}/>
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="text-center">
                            <Link to="/p_reg" ><Button >Registrar paciente</Button></Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        );
    }

    export default Home