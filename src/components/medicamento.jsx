import React, {useState} from "react";
import { Button, Form, Card } from 'react-bootstrap'; 
import {useParams,useNavigate} from 'react-router-dom';
import axios from "axios";
import {headersData} from "./configs"
const Medicamento = () => {
    const history = useNavigate();
    const {cedula}=useParams();
    const [datos, setDatos] = useState({})

    const handleonChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post(`${import.meta.env.VITE_APP_URI}/medicamento/${cedula}`,{datos},headersData)
        history(`/paciente/${cedula}`)
    }

    return (
        <Card className="mx-auto" style={{ width: '20rem', margin: 'auto' }}>
            <Card.Header>
                <h2 className="fw-bold text-center">Medicamento</h2>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-center">Medicamento</Form.Label>
                        <Form.Control type="text" name="medicamento" onChange={handleonChange} placeholder="Medicamento" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dosis</Form.Label>
                        <Form.Control type="text" name="dosis" onChange={handleonChange} placeholder="Dosis" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Número de dosis</Form.Label>
                        <Form.Control type="text" name="numeroDosis" onChange={handleonChange} placeholder="Número de dosis" />
                    </Form.Group>
                    <div className="text-center">
                    <Button variant="primary"  type="submit">
                        Registrar
                    </Button>
                </div> 
                </Form>
                
            </Card.Body>
        </Card>
    );
}
export default Medicamento;