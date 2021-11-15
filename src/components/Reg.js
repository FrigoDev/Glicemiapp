import React , {useState}  from "react";
import { Button, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
const Reg = () => {
     const [user, setUser] = useState({}); 
        const handleChange = (e) => {
            const { name, value } = e.target;
            setUser({ ...user, [name]: value });
        };
        const  handleSubmit = async (e) => { 
            e.preventDefault();
            await axios.post('http://192.168.1.3:4000/register', user)
        };
    return(
        <Card className="mx-auto my-5" style={{ width: '20rem' , marginTop: '20px'}}>
            <Card.Header>
            <h2 className="fw-bold text-center">Registro</h2>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Nombre" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Teléfono" name="telefono" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" name="password" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></Form.Label>            
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
export default Reg