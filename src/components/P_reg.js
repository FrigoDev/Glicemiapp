import React from "react";
import { Row, Col, Image, Button, Form } from 'react-bootstrap';
const P_reg = () => {
    return(
        <div className="container">
        <h2 className="fw-bold text-center">Paciente</h2>
        <Form>
            <Row>
                <Col className="text-center">
                    <Image className="my-1" src="UserIcon.png" roundedCircle/>
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
    </div>
      

    
    
    )
}
export default P_reg