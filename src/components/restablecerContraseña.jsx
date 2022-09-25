import React , {useState}  from "react";
import { Button, Form, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { headersData } from './configs'
import axios from 'axios';

const RestablecerContraseña = () => {
    return(
        <Card className="mx-auto my-5 logregcard" style={{ width: '23rem' , marginTop: 'auto'}}>
            <Card.Header>{
                console.log(import.meta.env.VITE_APP_URI)
                }
            <h2 className="fw-bold text-center">Restablecer contraseña</h2>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nueva Contraseña</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirmar nueva Contraseña</Form.Label>
                        <Form.Control type="password" name="confPassword" placeholder="Confirmar contraseña" />
                    </Form.Group>
                </Form>
                <div className="text-center">
                    <Button variant="primary"  type="submit">
                        Enviar
                    </Button>
                </div>
            </Card.Body>
        </Card>           
    )
}
export default RestablecerContraseña;