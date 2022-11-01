import React, {useState,useEffect} from "react";
import {useParams,useNavigate} from 'react-router-dom';
import {headersData} from "./configs";
import axios from 'axios';







 const verMedicamentos=()=>{
    
    const {cedula}=useParams();
    const [medicamentos,setMedicamentos]=useState([])

    const obtener_medicamentos=async()=>{
        const res=await axios.get(`${import.meta.env.VITE_APP_URI}/paciente/medicamento/${cedula}`,headersData);
        setMedicamentos(res.data);}

    useEffect(()=>{
        obtener_medicamentos();
    })

    return(
        <div>
            <h1>Medicamentos</h1>
            <div>
                {medicamentos.map((medicamento,index)=>{
                    return(
                        <div key={index}>
                            <h2>{medicamento.nombre}</h2>
                            <h3>Dosis: {medicamento.dosis}</h3>
                            <h3>Horarios: {medicamento.horarios.map((horario,index)=>{
                                return(
                                    <div key={index}>
                                        <h4>{horario}</h4>
                                    </div>
                                )
                            })}</h3>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )

 }


export default verMedicamentos;