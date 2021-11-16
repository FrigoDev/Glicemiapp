import React,{useState,useEffect} from "react";
import { Row, Col, Image, Button, Card } from 'react-bootstrap';
import './paciente.css'
import {useParams} from 'react-router-dom';
import axios from 'axios';
const Paciente = () => {
    const [paciente, setPaciente] = useState({});
    let {cedula}=useParams();
    const obtener_paciente = async() => {
        const res = await axios.post(`${process.env.REACT_APP_URI}/Getpacienteunico`,{email:localStorage.getItem('correo'),cedula:cedula});
        console.log(res.data);
        setPaciente(res.data);
        
    }
    useEffect(() => {
        obtener_paciente();
    }, []);

    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    

    return(
        <div className="fluid-container">
            <Card className="mx-auto" style={{ width: '23rem' }}>
                <Card.Header>
                    <Row>
                            <Col className="text-center">
                                <Image className="my-1" src={paciente.foto===""?"userIcon.png":paciente.foto} roundedCircle/>
                                <h2>{paciente.nombre}</h2>
                                <h4>Edad:{paciente.edad}</h4>
                            </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <div className="container">
                        <div className="d-flex justify-content-between mx-1 mb-3">
                            <Button variant="primary" size="lg" block>Abrir diario</Button>
                            <div className="todate text-center my-auto border border-2 rounded p-2 fw-bold" style={{display: 'inline-block', borderColor: '#FE2472' }}>{dia +"/"+ mes +"/"+ año}</div>
                        </div>
                    </div>
                    <div className="container d-flex justify-content-between">
                        <div className="d-inline-flex">
                            <ul className="dosis list-unstyled">
                                <li className="d-flex justify-content-between">
                                    <div>Dosis 1 </div>
                                    <div className="form-check form-check-inline">
                                        <input className="ml-0 mt-1 m-auto form-check-input" type="checkbox" id="inlineCheckbox1" value=""/>
                                    </div>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <div>Dosis 2 </div>
                                    <div className="form-check form-check-inline">
                                        <input className="ml-0 mt-1 m-auto form-check-input" type="checkbox" id="inlineCheckbox1" value=""/>
                                    </div>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <div>Dosis 3 </div>
                                    <div className="form-check form-check-inline">
                                        <input className="ml-0 mt-1 m-auto form-check-input" type="checkbox" id="inlineCheckbox1" value=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <ul className="dosis list-unstyled">
                                <li>
                                    <Button className="my-auto">Agregar medicamento</Button>
                                </li> 
                            </ul>
                            <ul className="dosis list-unstyled">
                                <li>
                                    <Button className="my-auto">Agregar recordatorio</Button>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Paciente