import React from 'react';
import UploadImage from "./UploadImage";
import { Row, Col, Image, Button, Form, Card } from 'react-bootstrap';
import './P_reg.css'

const P_reg = () => {

    const [image, setImage] = React.useState('');

    return(
        <Card className="mx-auto" style={{ width: '20rem' , marginTop: '10px' }}>
            <Card.Header>
            <h2 className="fw-bold text-center">Paciente</h2>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Col className="text-center">
                            <Image className="my-1 tamañoImg" src={image? image:'userIcon.png'}  roundedCircle/>
                            <UploadImage image={setImage}/>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Teléfono"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>EPS</Form.Label>
                        <Form.Control type="text" placeholder="EPS"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email EPS</Form.Label>
                        <Form.Control type="email" placeholder="Email EPS"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
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