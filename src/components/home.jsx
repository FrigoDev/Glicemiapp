import React, {useState,useEffect} from "react";
import { Button, Card, Image, Modal } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import{headersData} from './configs'
import SetType from './set_tipo';
import ModalP from './Modales'
import Editar from './P_edit'
//recibir props y retornar una vista
const PData = ({paciente,moverse,editar}) => {
    const [show, setShow] = useState(false);
    return (
        <tr class="unread">
            {paciente.imagen === ''?<td onClick={()=>{moverse(paciente.cedula)}}><FaIcons.FaUserCircle className=' fa-5x text-black' /></td>:<td><Image src={import.meta.env.VITE_APP_URI+"/public/"+paciente.foto} className='img-fluid' roundedCircle /></td>}
            <td className="text-center align-middle" onClick={()=>{moverse(paciente.cedula)}}>
                <h6 class="mb-1">{paciente.nombre +" "+ paciente.apellido}</h6>
                <p class="m-0">{`${paciente.cedula}`}</p>
            </td>
            <td className="text-center align-middle">
                <div style={{cursor: "pointer"}} onClick={()=>editar(paciente)}><FaIcons.FaPen className="fa-2x element_icon my-2"/></div>
                <div style={{cursor: "pointer"}} onClick={()=>setShow(true)}><FaIcons.FaTrash className="fa-2x element_icon my-2"/></div>
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
                    Eliminar paciente
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const Home = () => {
        const [data, setData] = useState([]);
        const [tipo, setTipo] = useState(-1);
        const [show,setShow] = useState(false);
        const [editar,setEditar] = useState({});
        const history = useNavigate();
        const moverse = (paciente) => {
            history(`/paciente/${paciente}`);
        } 
        const envio = async () => {
            try{
                const {data} = await axios.get(`${import.meta.env.VITE_APP_URI}/GetPacientes`,headersData);
                setData(data.usuarios);
                setTipo(data.tipo);
            } 
            catch (error) {
                history('/login');
            }
            
            
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
                                        return <PData key={i} editar={(data)=>{setEditar(data);setShow(true);}} paciente={item} imagen={item.foto} name={item.nombre} moverse={moverse} cedula={item.cedula}  description={`${item.cedula}`}/>
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="text-center">
                            <Link to="/p_reg" ><Button >Registrar paciente</Button></Link>
                        </div>
                    </div>
                </Card.Body>
                <ModalP setOpen={setShow} nombre='Editar paciente' open={show}><Editar
                changeData={(edited,cedula)=>{
                    setData(data.map((item)=>{
                        if(item.cedula === cedula){
                            return edited;
                        }
                        return item;
                    }))
                    setShow(false);
                }}
                userdata={editar}></Editar></ModalP>
            </Card>
        );
    }


    export default Home