import React, {useState,useEffect} from "react";
import { Button, Card, Image, Modal } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import{headersData} from './configs'
import SetType from './set_tipo';

//recibir props y retornar una vista
const PData = (props) => {
    
    const [show, setShow] = useState(false);

    return (
        <tr class="unread" onClick={()=>{props.moverse(props.cedula)}}>
            {props.imagen === ''?<td><FaIcons.FaUserCircle className=' fa-5x text-black' /></td>:<td><Image src={import.meta.env.VITE_APP_URI+"/"+props.imagen} className='img-fluid' roundedCircle /></td>}
            <td className="text-center align-middle">
                <h6 class="mb-1">{props.name}</h6>
                <p class="m-0">{props.description}</p>
            </td>
            <td className="text-center align-middle">
                <Link to="#"><FaIcons.FaPen className="fa-2x text-black my-2"/></Link><div onClick={()=>setShow(true)}><FaIcons.FaTrash className="fa-2x text-black my-2"/></div>
            </td>
            <ModalEliminar show={show} setShow={setShow} />
        </tr>
    );
}

const ModalEliminar = ({show,setShow}) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar paciente</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Está seguro que desea eliminar este paciente?</Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const Home = () => {
        const [data, setData] = useState([]);
        const [tipo, setTipo] = useState(-1);
        const history = useNavigate();
        
        const moverse = (paciente) => {
            history(`/paciente/${paciente}`);
        } 
        const envio = async () => {
            const datos = await axios.get(`${import.meta.env.VITE_APP_URI}/GetPacientes`,headersData);
            
            setData(datos.data.usuarios);
            setTipo(datos.data.tipo);
        }
        useEffect(() => {
            envio();
        }, []);

      
            if (tipo === 0) {
                return (<SetType />)
            }
            else if(tipo ===1){
                if(data.length !== 0){
                    console.log(data[0]);
                    moverse(data[0].cedula);
                }
            }
         
        

        return (
            <Card className="mx-auto" style={{ width: '24rem' }}>
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