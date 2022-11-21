import React , {useState}  from "react";
import { Button, Form, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { headersData } from './configs'
import axios from 'axios';

const RecuperarContraseña = () => {
    const [email, setEmail] = useState('');

    const enviarCorreo = async (e) => {
        e.preventDefault();
        const res = await axios.post(`${import.meta.env.VITE_APP_URI}/forgotpass`, { email }, headersData);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    return (
        <Card className="mx-auto my-5 logregcard" style={{ width: '23rem' , marginTop: 'auto'}}>
            <Card.Header>{
                }
            <h2 className="fw-bold text-center">Recuperar contraseña</h2>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={enviarCorreo}>
                    <div className="text-dark">Se enviara un enlace para restablecer su contraseña a su correo.</div>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Correo" onChange={onChangeEmail} />
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