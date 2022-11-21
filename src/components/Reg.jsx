import React , {useState}  from "react";
import { Button, Form, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 


const headersData = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    },
    withCredentials: true,
  }

const Reg = () => {
    const history = useNavigate();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const handleChange = (e) => {
    const { name, value } = e.target;
            setUser({ ...user, [name]: value });
        };
        const  handleSubmit = async (e) => { 
            const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            e.preventDefault();
            const { name, apellidos, telefono, email, password, confPassword:password2 } = user;
            if(!email || !name || !apellidos || !telefono || !password){
                setError("Todos los campos son obligatorios");
                return;
            }
            if(!emailregex.test(email)){
                setError("El email no es válido");
                return;
            }
            if(password.length<8){
                setError("La contraseña debe tener al menos 8 caracteres");
                return;
            }
            if(!RegExp(/^[0-9]{10}$/).test(telefono)){
                setError("El teléfono no es válido");
                return;
            }
            if(!RegExp(/^[a-zA-Z ]+$/).test(name)){
                setError("El nombre no es válido");
                return;
            }
            if(!RegExp(/^[a-zA-Z ]+$/).test(apellidos)){
                setError("Los apellidos no son válidos");
                return;
            }
            if(password !== password2){
                setError("Las contraseñas no coinciden");
                return;
            }
            try {
                    await axios.post(`${import.meta.env.VITE_APP_URI}/register`, user, headersData);
                    history('/');
                }
            catch (error) {
                setError(error.response.data);
            }
        };  
    return(
        <Card className="mx-auto my-5 logregcard" style={{ width: '22rem' , marginTop: 'auto'}}>
            <Card.Header>{
                console.log(import.meta.env.VITE_APP_URI)
                }
            <h2 className="fw-bold text-center">Registro</h2>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Nombre" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} />
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
                    <Form.Group className="mb-3" controlId="formBasicPasswordConf">
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Confirmar contraseña" name="confPassword" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label className='reglabel'>¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></Form.Label>            
                    </Form.Group>
                    <div className="text-center">
                        <Alert variant="danger" className="mt-3" show={error}>
                            {error}
                        </Alert>
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