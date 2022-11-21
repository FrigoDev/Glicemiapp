import React,{useState} from 'react';
import UploadImage from "./UploadImage";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Image as Imagen, Button, Form, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import {headersData} from './configs';
//cambiar las dimensiones de la imagen en base64 a 100x100 y regresarla como base 64

const P_reg = () => {
    const history = useNavigate();
    const [image, setImage] = useState('');
    const [datos, setDatos] = useState({});
    const [error, setError] = useState(false);
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const { nombre, apellidos, telefono, cédula, edad, eps} = datos;
            if(!eps || !nombre || !apellidos || !telefono || !cédula || !edad){
                setError("Todos los campos son obligatorios");
                return;
            }
            if(!RegExp(/^[0-9]{10}$/).test(telefono)){
                setError("El teléfono no es válido");
                return;
            }
            if(!RegExp(/^[a-zA-Z ]+$/).test(nombre)){
                setError("El nombre no es válido");
                return;
            }
            if(!RegExp(/^[a-zA-Z ]+$/).test(apellidos)){
                setError("Los apellidos no son válidos");
                return;
            }
            if(!RegExp(/^[0-9]{10}$/).test(cédula)){
                setError("La cedula no es válida");
                return;
            }
            if(!RegExp(/^[0-9]{1,3}$/).test(edad)){
                setError("La edad no es válida");
                return;
            }
            try {
                    console.log(datos);
                    await axios.post(`${import.meta.env.VITE_APP_URI}/registerPacientes`, {"imagen":image,"datosP":datos}, headersData);
                    history('/');
                }
            catch (error) {
                setError(error.response.data);
            }
        
    }
    return(
        <Card className="mx-auto" style={{ width: '20rem'  }}>
            <Card.Header>
            <h2 className="fw-bold text-center">Paciente</h2>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col className="text-center">
                            <Imagen className="my-1 tamañoImg" src={image? image:'userIcon.png'}  roundedCircle/>
                            <UploadImage image={setImage}/>
                            
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos" name="apellidos" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Teléfono" name="telefono" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cédula</Form.Label>
                        <Form.Control type="text" placeholder="Cédula" name="cédula" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="text" placeholder="Edad" name="edad" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>EPS</Form.Label>
                        <Form.Control type="text" placeholder="EPS" name="eps" onChange={handleChange}/>
                    </Form.Group>
                    <div className="text-center">
                    <Alert variant="danger" className="mt-3" show={error}>
                        {error}
                    </Alert>
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
                    </div>    
                </Form>
            </Card.Body>
    </Card> 
    );
}
export default P_reg