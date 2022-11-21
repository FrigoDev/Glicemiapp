import React, {useState,useEffect} from "react";
import {Link,useParams,useNavigate} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import {Modal, Button} from 'react-bootstrap';
import {headersData} from "./configs";
import axios from 'axios';
import moment from 'moment';

const ModalEliminar = ({show: medicamento,setShow,eliminar}) => {
    const handleClose = () => setShow();
    const eliminarMedicamento=async()=>{
        try {
            const response = await axios.delete(`${import.meta.env.VITE_APP_URI}/medicamentos/${medicamento.id}`,headersData);
            eliminar(medicamento.id);
            handleClose();
        } catch (error) {
        }}
    return (
        <Modal show={medicamento} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar medicamento</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Está seguro que desea eliminar este medicamento?</Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={eliminarMedicamento}>
                    Eliminar medicamento
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

 const verMedicamentos=({setEditar,actualizacion})=>{
    const {cedula}=useParams();
    const [medicamentos,setMedicamentos]=useState([])
    const [eliminar,setEliminar]=useState()
    const setUso=(id,hora,check)=>{
        axios.put(`${import.meta.env.VITE_APP_URI}/actualizarCheks`,{hora,id,check},headersData)
    }
    const obtener_medicamentos=async()=>{
        const res=await axios.get(`${import.meta.env.VITE_APP_URI}/paciente/medicamento/${cedula}`,headersData);
        setMedicamentos(res.data);}
    useEffect(()=>{
        obtener_medicamentos();
    },[])

    useEffect(()=>{
        setMedicamentos(medicamentos.map(medicamento=>{
            if(medicamento.id===actualizacion.id){
                medicamento=actualizacion;
            }
            return medicamento;
        }))
    },[actualizacion])

    const elminarMedicamento=async(id)=>{
        setMedicamentos(medicamentos.filter(medicamento=>medicamento.id!==id))
    }
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
                <div className="table-responsive  text-center">
                    <table className="table table-hover">
                        <tbody className="text-center align-items-center">
                            <tr>
                                <th className="text-center align-middle">Medicamento</th>
                                <th className="text-center align-middle">Dosis</th>
                                <th className="text-center align-middle">Horario</th>
                                <th className="text-center align-middle">Check</th>
                                <th></th>
                            </tr>
                    {medicamentos.map((medicamento,index)=>{
                        return(
                            <tr key={index}>
                                <td className="text-center align-middle">{medicamento.nombre}</td>
                                <td className="text-center align-middle">{medicamento.dosis}</td>
                                <td className="text-center align-middle">{medicamento.horarios.map((horario,index)=>{
                                return(
                                    <div key={index}>
                                    {moment(horario.hora , 'HH:mm').format('hh:mm A')}
                                    </div>
                                )
                                })}</td>
                                <td className="text-center align-middle">
                                    {
                                        medicamento.horarios.map((horario,index)=>{
                                            return(
                                                <div key={index}>
                                                    <input className="form-check-input" type="checkbox" defaultChecked={horario.fecha} onChange={(e)=>{setUso(medicamento.id,horario.hora,e.target.checked)}}/>
                                                </div>
                                            )
                                        })
                                    }
                                </td>
                                <td className="text-center align-middle">
                                    <FaIcons.FaPen onClick={()=>{setEditar(medicamento)}} style={{cursor: "pointer"}} className="fa-2x element_icon my-2"/>
                                    <div style={{cursor: "pointer"}} onClick={()=>setEliminar(medicamento)}><FaIcons.FaTrash className="fa-2x element_icon my-2"/></div>
                                </td>
                                
                            </tr>
                        )
                    }
                    )}
                        </tbody>
                    </table>
                </div>
                <ModalEliminar eliminar={elminarMedicamento} show={eliminar} setShow={()=>{setEliminar()}} />
            </div>
        </>
    )

 }


export default verMedicamentos;