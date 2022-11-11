import React, {useState} from "react";
import { Button, Form, Card,Row,Col } from 'react-bootstrap'; 
import {useParams,useNavigate} from 'react-router-dom';
import {List,ListItem,ListItemText,Divider,IconButton,Card as MCard} from '@mui/material'
import {Delete as DeleteIcon,Add as AddIcon} from '@mui/icons-material/';
import moment from 'moment';
import axios from "axios";
import VerMedicamento from "./mostrarMedicamentos";
import {headersData} from "./configs.jsx"
import Modal from "./modales";


const Medicamento = () => {
    const history = useNavigate();
    const {cedula}=useParams();
    const [datos, setDatos] = useState({})
    const [horarios,setHorarios]=useState([])

    const handleonChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post(`${import.meta.env.VITE_APP_URI}/medicamento/${cedula}`,{...datos, hora:Array.from(new Set(horarios))},headersData)
        history(`/paciente/${cedula}`)
    }

    return (
                <Form onSubmit={handleSubmit} className="mx-auto" style={{ width: '16rem', margin: 'auto' }}>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-center">Nombre del Medicamento</Form.Label>
                        <Form.Control type="text" name="medicamento" onChange={handleonChange} placeholder="Medicamento" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dosis Ingerida</Form.Label>
                        <Form.Control type="text" name="dosis" onChange={handleonChange} placeholder="Dosis" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Row>
                         <Col md={9}>
                            <Form.Label>Hora de ingesta</Form.Label>
                            <Form.Control type="time" name="hora" onChange={handleonChange} />
                        </Col>
                        <Col md={3} className="d-flex align-items-end">
                            <Button variant="primary"  onClick={()=>{
                                setHorarios([...horarios,datos.hora])
                                console.log(horarios);
                            }}>
                                <AddIcon/>
                            </Button>
                        </Col>
                        </Row>

                    </Form.Group>
                    <div className="text-center">
                    
                    </div>
                    {
                        horarios.length>0?
                        <MCard className="my-3">
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 150,
                            '& ul': { padding: 0 },
                        }}
                        subheader={<li />}
                        >
                        {<li>
                                <ul>
                                    {[...new Set(horarios)].map((item, i) => (
                                    <ListItem
                                    secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={()=>{setHorarios([...new Set(horarios)].filter((x)=>x!==item))}}>
                                        <DeleteIcon/>
                                    </IconButton>
                                    }
                                    >
                                    <ListItemText
                                    primary={`${
                                        moment(item, 'HH:mm').format('hh:mm A')
                                    }`}
                                    />
                                    </ListItem>
                                    ))}
                                </ul>
                            </li>}
                        </List>
                    </MCard>:null
                    }
                    <div className="text-center">
                    <Button variant="primary"  type="submit">
                        Registrar
                    </Button>
                </div> 
                </Form>
                
            
    );
}

const MostrarModal=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Card className="mx-auto" style={{ width: '28rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">Medicamentos</Card.Title>
                    <VerMedicamento/>
                    <div className="text-center">
                        <Button variant="primary" onClick={handleShow}>
                            Registrar medicamento
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        

        <Modal open={show}  setOpen={setShow} nombre={"Nuevo medicamento"} >
            <Medicamento/>
        </Modal>
        </>
    )
}

export default MostrarModal;