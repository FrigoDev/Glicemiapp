import React,{useState,useEffect} from "react";
import { Row, Col, Image, Button, Card } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import BarChart from "./graphics";
import './paciente.css'
import {useParams,useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import ModalP from './Modales'
import Editar from './P_edit'
import {headersData} from './configs'
const Dosis = (props) => {    
      
    const handleClick = async(e) => {
    } 

   return(
        <>
         <div>Dosis {props.index+1} </div>
        <div className="form-check form-check-inline">
          <input className="ml-0 mt-1 m-auto form-check-input" type="checkbox" id="inlineCheckbox1" onChange={handleClick}/>
         </div>
        </>
   ) 
}



const Paciente = () => {
    const history = useNavigate();
    const [paciente, setPaciente] = useState({});
    const [show, setShow] = useState(false);
    const {cedula}=useParams();
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const fechaActual = año + "-" + mes + "-" + dia;
    const obtener_paciente = async() => {
        const res = await axios.get(`${import.meta.env.VITE_APP_URI}/paciente/${cedula}`,headersData );
        setPaciente({...res.data}); 
    }
    useEffect(() => {
        obtener_paciente();
    }, []);


    return(
        <div className="fluid-container">
            <ModalP open={show} setOpen={setShow} nombre='Editar paciente'>
                <Editar userdata={paciente} changeData={(data)=>
                    {
                        setPaciente(data);
                        setShow(false);
                    }}
                />
            </ModalP>
                <Card className="mx-auto" style={{ maxWidth: '23rem' }}>
                <Card.Header>
                    <Row>
                            <Col className="text-center">
                                <Image className="my-1" src={paciente.foto===""?"userIcon.png":import.meta.env.VITE_APP_URI+"/public/"+paciente.foto} roundedCircle/>
                                <div className="d-block text-center">
                                    <div>
                                        <h2 className="d-inline">{paciente.nombre}</h2>
                                        <div className="d-inline text-center" style={{cursor: "pointer"}} onClick={()=>{setShow(true)}}><FaIcons.FaPen style={{height : '2em'}} className="element_icon_2 pb-2"/></div>
                                    </div>
                                </div>
                                <h4>Edad: {paciente.edad}</h4>
                            </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <div className="container">
                        <div className="d-flex justify-content-between mx-1 mb-3">
                            <Button variant="primary" size="lg" onClick={()=>{history( `/diario/${cedula}`)}}  block>Abrir diario</Button>
                            <div className="todate text-center my-auto border-2 rounded p-2 fw-bold" style={{display: 'inline-block'}}>{dia +"/"+ mes +"/"+ año}</div>
                        </div>
                    </div>
                    <div className="container d-flex justify-content-between">
                        <div className="d-inline-flex">
                            <ul className="dosis list-unstyled">{
                                paciente.dosis!==undefined?paciente.dosis.map((x,index)=>{
                                    return(
                                        <li className="d-flex justify-content-between" key={index} >
                                            <Dosis dosis={paciente.dosis} index={index} setpaciente={setPaciente}/>
                                        </li>
                                    )
                                }):null
                            }</ul>
                        </div>
                        <div className="text-center">
                            <ul className="dosis list-unstyled">


                                <li>
                                    <Button className="my-auto" onClick={()=>{
                                        history(`/medicamento/${cedula}`)
                                    }}>Agregar medicamento</Button>
                                </li> 
                            </ul>
                            <ul className="dosis list-unstyled">
                                <li>
                                    <Button className="my-auto"><a className="rec-color" href="https://calendar.google.com/calendar/u/0/r/eventedit" target="_blank">Agregar recordatorio</a></Button>
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