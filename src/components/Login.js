import React from "react";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
    <div className="container">
        <h1 className="fw-bold text-center">GlicDiary</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>¿No estas registrado? <Link to="/reg">registrate aquí</Link></Form.Label>            
            </Form.Group>
            <div className="text-center">
            <Button variant="primary" type="submit">
                Iniciar Sesión
            </Button>
            </div>
            
        </Form>
    </div>
    );
}
export default Login;
