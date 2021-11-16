import React,{useState} from 'react';
import UploadImage from "./UploadImage";
import { Row, Col, Image as Basura, Button, Form, Card } from 'react-bootstrap';

//cambiar las dimensiones de la imagen en base64 a 100x100 y regresarla como base 64

const P_reg = () => {

    const [image, setImage] = useState('');
    const [datos, setDatos] = useState({}); 
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(datos);
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
                            <Basura className="my-1 tamañoImg" src={image? image:'userIcon.png'}  roundedCircle/>
                            <UploadImage image={setImage}/>
                            
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Teléfono" name="telefono" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cédula</Form.Label>
                        <Form.Control type="text" placeholder="Cédula"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>EPS</Form.Label>
                        <Form.Control type="text" placeholder="EPS" name="eps" onChange={handleChange}/>
                    </Form.Group>
                    <div className="text-center">
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