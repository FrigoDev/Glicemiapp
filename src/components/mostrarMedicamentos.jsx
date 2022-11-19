import React, {useState,useEffect} from "react";
import {Link,useParams,useNavigate} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import {Modal, Button} from 'react-bootstrap';
import {headersData} from "./configs";
import axios from 'axios';

const ModalEliminar = ({show,setShow}) => {
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar medicamento</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Está seguro que desea eliminar este medicamento?</Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Eliminar medicamento
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

 const verMedicamentos=()=>{
    const [show, setShow] = useState(false);
    const {cedula}=useParams();
    const [medicamentos,setMedicamentos]=useState([])
    const setUso=(id,hora,check)=>{
        axios.put(`${import.meta.env.VITE_APP_URI}/actualizarCheks`,{hora,id,check},headersData)
    }
    const obtener_medicamentos=async()=>{
        const res=await axios.get(`${import.meta.env.VITE_APP_URI}/paciente/medicamento/${cedula}`,headersData);
        setMedicamentos(res.data);}
    useEffect(()=>{
        obtener_medicamentos();
    },[])

    if(medicamentos.length===0){
        return(
            <>
                <h5 className="text-center">No hay medicamentos</h5>
            </>
        )
    }

    return(
        <>
            <div>
                <table class="table table-hover">
                    <tbody className="text-center align-items-center">
                        <tr>
                            <th className="text-center">Medicamento</th>
                            <th className="text-center">Dosis</th>
                            <th className="text-center">Horario</th>
                            <th className="text-center">Check</th>
                            <th></th>
                        </tr>
                {medicamentos.map((medicamento,index)=>{
                    return(
                        <tr key={index}>
                            <td className="text-center">{medicamento.nombre}</td>
                            <td className="text-center">{medicamento.dosis}</td>
                            <td className="text-center">{medicamento.horarios.map((horario,index)=>{
                            return(
                                <div key={index}>
                                   {horario.hora}
                                </div>
                            )
                            })}</td>
                            <td className="text-center">
                                {
                                    medicamento.horarios.map((horario,index)=>{
                                        return(
                                            <div key={index}>
                                                <input type="checkbox" defaultChecked={horario.fecha} onChange={(e)=>{setUso(medicamento.id,horario.hora,e.target.checked)}}/>
                                            </div>
                                        )
                                    })
                                }
                            </td>
                            <td className="text-center align-middle">
                                <Link to="#"><FaIcons.FaPen className="fa-2x text-black my-2"/></Link>
                                <div style={{cursor: "pointer"}} onClick={()=>setShow(true)}><FaIcons.FaTrash className="fa-2x text-black my-2"/></div>
                            </td>
                            <ModalEliminar show={show} setShow={setShow} />
                        </tr>
                    )
                }
                )}
                    </tbody>
                </table>
            </div>
        </>
    )

 }


export default verMedicamentos;