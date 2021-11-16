import React , {useState}  from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'; 
import P_reg from "./P_reg";
import UploadImage from "./UploadImage";
import { Row, Col, Image as Basura, Button, Form, Card } from 'react-bootstrap';
const Reg = () => {
    const [image, setImage] = useState('');
    const [datos, setDatos] = useState({}); 
    const history = useHistory();
    const iftipo = () => {
        const regt1=
    <   Card className="mx-auto my-5" style={{ width: '20rem' , marginTop: 'auto'}}>
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
                <Form.Label className='reglabel'>¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></Form.Label>            
            </Form.Group>
            <div className="text-center">
                <Button variant="primary"  type="submit">
                    Registrar
                </Button>   
            </div>       
        </Form>
    </Card.Body>
</Card>;
const regt2= <Card className="mx-auto" style={{ width: '20rem'  }}>
<Card.Header>
<h2 className="fw-bold text-center">Paciente</h2>
</Card.Header>
<Card.Body>
    <Form onSubmit={handleSubmit}>
        <Row>
            <Col className="text-center">
                <Basura className="my-1 tamañoImg" src={image? image:'userIcon.png'}  roundedCircle/>
                <UploadImage image={setImage}/>
                
            </Col>
        </Row>
        <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" placeholder="Teléfono" name="telefono" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Cédula</Form.Label>
            <Form.Control type="text" placeholder="Cédula" name="cédula" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Edad</Form.Label>
            <Form.Control type="text" placeholder="Edad" name="edad" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>EPS</Form.Label>
            <Form.Control type="text" placeholder="EPS" name="eps" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className='reglabel'>¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></Form.Label>            
            </Form.Group>
        <div className="text-center">
        <Button variant="primary" type="submit">
            Registrar
        </Button>
        </div>    
    </Form>
</Card.Body>
</Card> ;
if(localStorage.getItem('tipo')== 1){
    return (regt2);
}
else{
    return (regt1);
}
        }
    
    const [user, setUser] = useState({}); 
    const handleChange = (e) => {
    const { name, value } = e.target;
            setUser({ ...user, [name]: value });
        };
        const  handleSubmit = async (e) => { 
            e.preventDefault();
            await axios.post(`${process.env.REACT_APP_URI}/register`, user)
            history.push('/login');
        }
        if(localStorage.getItem('tipo')== 1){
            const  handleSubmit = async (e) => { 
                e.preventDefault();
                await axios.post(`${process.env.REACT_APP_URI}/registerPacientes`, {"email":localStorage.getItem("correo") ,"imagen":image,"datosP":datos}, user)
                history.push('/login');
            }
        };  
    return(
    iftipo()
    );
}
export default Reg