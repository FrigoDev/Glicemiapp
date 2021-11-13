import React from "react";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Reg = () => {
    return(
        <div className="container">
        <h2 className="fw-bold text-center">Registro</h2>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Teléfono"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Entidad</Form.Label>
                <Form.Control type="text" placeholder="Entidad"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email EPS</Form.Label>
                <Form.Control type="email" placeholder="Email EPS"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></Form.Label>            
            </Form.Group>
            <div className="text-center">
            <Button variant="primary" type="submit">
                Registrar
            </Button>
            </div>
            
        </Form>
    </div>
    );
}
export default Reg