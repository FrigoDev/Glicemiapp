import React from "react";
import { Row, Col, Image, Button, Card } from 'react-bootstrap';

const diario = () => {
    return (
        <Card className="mx-auto" style={{ width: '30rem' }}>
            <Card.Header>
                <Row>
                    <Col className="text-center">
                        <Image className="my-1" src="UserIcon.png" roundedCircle />
                        <h2>Nombre del paciente</h2>
                        <h4>Edad:x</h4>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <h3 className="text-center">Diario</h3>
            </Card.Body>
        </Card>
            );
}
export default diario;