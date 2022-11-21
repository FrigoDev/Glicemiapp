import React from "react";
import { Row, Col, Image, Button, Card,Modal} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate}  from 'react-router-dom';
import {headersData} from './configs'

const Set_tipo = () => {
    const history = useNavigate();
    const cambiar_tipo = async(tipo) => {
        await axios.put(`${import.meta.env.VITE_APP_URI}/userType`, {tipo} ,headersData)
        localStorage.setItem('tipo', tipo);
        window.location.reload();  
    }
    return (
        <>
        <h1 className="text-center mb-md-4 mb-3">Tipos de cuenta</h1>
        <div className="row justify-content-between mx-3 mx-md-5">
            <Card className="col-md-6 text-center p-0 mb-3" style={{ maxWidth: '28rem' }}>
                <Card.Header>
                    <h3>Cuenta de usuario unico</h3>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                Maneja tu diario personal de glicemia
                            </li>
                            <li className="mb-1">
                                Crea recordatorios para tu medicamento
                            </li>
                            <li className="mb-1">
                                Registra tus niveles de glucosa
                            </li>
                        </ul>
                    </Card.Text>
                    <Button onClick={()=>{history("/Retype")}} >Seleccionar</Button>
                </Card.Body>
            </Card>
            <Card className="col-md-6 text-center p-0 mb-3" style={{ maxWidth: '28rem' }}>
                <Card.Header>
                    <h3>Cuenta multipacientes</h3>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                Administra registros sobre la condición de tus pacientes
                            </li>
                            <li className="mb-1">
                                Crea recordatorios para el medicamento de tus pacientes
                            </li>
                            <li className="mb-1">
                                Registra los niveles de glucosa de tus pacientes
                            </li>
                        </ul>
                    </Card.Text>
                   <Button onClick={()=>{cambiar_tipo(2)}} > Seleccionar</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}
export default Set_tipo;