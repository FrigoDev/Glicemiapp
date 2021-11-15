import React from "react";
import { Button, Form, Card } from 'react-bootstrap'; 
const medicamento = () => {
    return (
        <Card className="mx-auto" style={{ width: '20rem', margin: 'auto' }}>
            <Card.Header>
                <h2 className="fw-bold text-center">Medicamento</h2>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-center">Medicamento</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Medicamento"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dosis</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Dosis"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Número de dosis</Form.Label>
                        <Form.Control type="text" name="name" placeholder="# de dosis"/>
                    </Form.Group>
                </Form>
                <div className="text-center">
                    <Button variant="primary"  type="submit">
                        Registrar
                    </Button>
                </div> 
            </Card.Body>
        </Card>
    );
}
export default medicamento;