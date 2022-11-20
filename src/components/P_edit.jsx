import React,{useState} from 'react';
import UploadImage from "./UploadImage";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Image as Basura, Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';
import {headersData} from './configs';

const P_edit = ({userdata,changeData}) => {
    const history = useNavigate();
    const [datos,setDatos]=useState({...userdata})
    const [image, setImage] = useState('');
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async(e) => {
        let data = datos;
        e.preventDefault();
        if (image !== '') {
            data.foto = image;
        }
        Object.keys(datos).forEach((key) => (data[key] == null || data[key] == ''|| data[key] == userdata[key]) && delete data[key]);
        const {data:pacienteEdit }= await axios.put(`${import.meta.env.VITE_APP_URI}/Pacientes/${userdata.cedula}`,{...data}, headersData);
        console.log(pacienteEdit);
        changeData(pacienteEdit.paciente,userdata.cedula);
    }
    return(
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col className="text-center">
                            <Basura className="my-1 tamañoImg" src={image? image:`${import.meta.env.VITE_APP_URI}/public/${datos.foto}`}  roundedCircle/>
                            <UploadImage image={setImage}/>
                            
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name="nombre" value={datos.nombre}  onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos" name="apellido" value={datos.apellido}   onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Teléfono" name="telefono" value={datos.telefono}   onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cédula</Form.Label>
                        <Form.Control type="text" placeholder="Cédula" name="cedula" value={datos.cedula}   onChange={handleChange}/>   
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="text" placeholder="Edad" name="edad" value={datos.edad}   onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>EPS</Form.Label>
                        <Form.Control type="text" placeholder="EPS" name="eps" value={datos.eps}   onChange={handleChange}/>
                    </Form.Group>
                    <div className="text-center">
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
                    </div>    
                </Form>
           
    );
}
export default P_edit