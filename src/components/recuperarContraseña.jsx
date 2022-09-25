import React , {useState}  from "react";
import { Button, Form, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { headersData } from './configs'
import axios from 'axios';

const RecuperarContraseña = () => {
    return (
        <Card className="mx-auto my-5 logregcard" style={{ width: '23rem' , marginTop: 'auto'}}>
            <Card.Header>{
                console.log(import.meta.env.VITE_APP_URI)
                }
            <h2 className="fw-bold text-center">Recuperar contraseña</h2>
            </Card.Header>
            <Card.Body>
                <Form>
                    <div>Se enviara un enlace para restablecer su contraseña a su correo.</div>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Correo" />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary"  type="submit">
                            Enviar
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default RecuperarContraseña;