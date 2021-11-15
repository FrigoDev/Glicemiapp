import React from "react";
import { Row, Col, Image, Button, Card } from 'react-bootstrap';

const set_tipo = () => {
    return (
        <>
        <h1 className="text-center">Tipos de cuenta</h1>
        <div className="d-flex">
            <Card className="mx-auto text-center" style={{ width: '30rem' }}>
                <Card.Header>
                    <h3>Cuenta de usuario unico</h3>
                </Card.Header>
                <Card.Body>
                    <Button>Seleccionar</Button>
                </Card.Body>
            </Card>
            <Card className="mx-auto text-center" style={{ width: '30rem' }}>
                <Card.Header>
                    <h3>Cuenta multipacientes</h3>
                </Card.Header>
                <Card.Body>
                   <Button>Seleccionar</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}
export default set_tipo;