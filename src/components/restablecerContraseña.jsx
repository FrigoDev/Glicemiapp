import React , {useState,useEffect}  from "react";
import { Button, Form, Card } from 'react-bootstrap';
import { useNavigate,useParams } from 'react-router-dom';
import { headersData } from './configs'
import axios from 'axios';

const RestablecerContraseña = () => {
    const [form, setForm] = useState();
    const [error, setError] = useState("");
    const {token} = useParams();
    const confirmarToken= async()=>{
       try{
        const res=await axios.get(`${import.meta.env.VITE_APP_URI}/confrest/${token}`,headersData)
       }
       catch(err){
               setError("El token no es valido")
       }
    }
    useEffect(()=>{
        confirmarToken();
    },[])
    const onchange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if(form.password===form.confPassword){
                const res = await axios.post(`${import.meta.env.VITE_APP_URI}/restablecer/${token}`, form, headersData)
            }
            else{
                setError("Las contraseñas no coinciden")
            }
        } catch (err) {
             setError("El token no es valido")
        }
    }

    if (error==="El token no es valido") {

        return(
        <Card className="mx-auto my-5 logregcard" style={{ width: '23rem' , marginTop: 'auto'}}>
        <Card.Header>
            <h2 className="fw-bold text-center">Restablecer contraseña</h2>
            {error && <h2 className="fw-bold text-center text-danger">{error}</h2>}
        </Card.Header>
        </Card>)
    }

    return(
        <Card className="mx-auto my-5 logregcard" style={{ width: '23rem' , marginTop: 'auto'}}>
            <Card.Header>
            <h2 className="fw-bold text-center">Restablecer contraseña</h2>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nueva Contraseña</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Contraseña" onChange={onchange}  />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirmar nueva Contraseña</Form.Label>
                        <Form.Control type="password" name="confPassword" placeholder="Confirmar contraseña" onChange={onchange} />
                    </Form.Group>
                    <div className="text-center">
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    {error && <p className="text-danger">{error}</p>}
                </div>
                </Form>
            </Card.Body>
        </Card>           
    )
}
export default RestablecerContraseña;