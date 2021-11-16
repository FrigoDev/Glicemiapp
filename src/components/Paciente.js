import React,{useState,useEffect} from "react";
import { Row, Col, Image, Button, Card } from 'react-bootstrap';
import BarChart from "./graphics";
import './paciente.css'
import {useParams,useHistory} from 'react-router-dom';
import axios from 'axios';

const Dosis = (props) => {    
      
    const handleClick = async(e) => {
      console.log(e.target.checked);
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
    const history = useHistory();
    const [paciente, setPaciente] = useState({});
    let {cedula}=useParams();
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const fechaActual = año + "-" + mes + "-" + dia;
    const obtener_paciente = async() => {
        const res = await axios.post(`${process.env.REACT_APP_URI}/Getpacienteunico`,{email:localStorage.getItem('correo'),cedula:cedula});
        const dosis =await axios.post(`${process.env.REACT_APP_URI}/GetDosis`,{email:localStorage.getItem('correo'),cedula:cedula,fecha:fechaActual}); 
        setPaciente({...res.data,dosis:dosis.data});
        
    }
    useEffect(() => {
        obtener_paciente();
    }, []);

    console.log(paciente);
    

    return(
        <div className="fluid-container">
            <Card className="mx-auto" style={{ width: '23rem' }}>
                <Card.Header>
                    <Row>
                            <Col className="text-center">
                                <Image className="my-1" src={paciente.foto===""?"userIcon.png":paciente.foto} roundedCircle/>
                                <h2>{paciente.nombre}</h2>
                                <h4>Edad: {paciente.edad}</h4>
                            </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <div className="container">
                        <div className="d-flex justify-content-between mx-1 mb-3">
                            <Button variant="primary" size="lg" onClick={()=>{history.push( `/diario/${cedula}`)}}  block>Abrir diario</Button>
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
                                        history.push(`/medicamento/${cedula}`)
                                    }}>Agregar medicamento</Button>
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
            <div className="page-content-1">
                <BarChart />
            </div>
        </div>
    );
}
export default Paciente