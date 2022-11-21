import React, {useState} from "react";
import { Button, Form, Card,Row,Col } from 'react-bootstrap'; 
import {useParams,useNavigate, json} from 'react-router-dom';
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


const CambiarMedicamento = ({medicamento,actualizar}) => {
    const {cedula}=useParams();
    
    const [datos, setDatos] = useState(medicamento)
    
    const [horarios,setHorarios]=useState(medicamento.horarios.map((x)=>moment(x.hora, 'HH:mm:ss').format('HH:mm')))

    const handleonChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const id=medicamento.id;
        const cambios=medicamento
        let horariosNormales= medicamento.horarios.map((x)=>moment(x.hora, 'HH:mm:ss').format('HH:mm'))
        const horariosEliminados=horariosNormales.filter((x)=>!horarios.includes(x))
        const horariosNuevos=horarios.filter((x)=>!horariosNormales.includes(x))
        let envio={}
        if(cambios.nombre!==datos.nombre){
            envio={...envio,nombre:datos.nombre}
        }
        if(cambios.dosis!==datos.dosis){
            envio={...envio,dosis:datos.dosis}
        }
        const {data:respuesta}=await axios.put(`${import.meta.env.VITE_APP_URI}/medicamento/${cedula}/${id}`,{datos:envio  , horariosEliminados,horariosNuevos:Array.from(new Set(horariosNuevos))},headersData)
        actualizar(respuesta)
    }

    return (
                <Form onSubmit={handleSubmit} className="mx-auto" style={{ width: '16rem', margin: 'auto' }}>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-center">Nombre del Medicamento</Form.Label>
                        <Form.Control type="text" name="nombre" value={datos.nombre} onChange={handleonChange} placeholder="Medicamento" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dosis Ingerida</Form.Label>
                        <Form.Control type="text" name="dosis" value={datos.dosis} onChange={handleonChange} placeholder="Dosis" />
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
    const [showEdit,setShowEdit]=useState(false)
    const [editar, setEditar] = useState();
    const [actualizacion,setActualizacion]=useState({id:-1}) 
    console.log(editar);
    const handleShow = () => setShow(true);
    return(
        <>
            <Card className="mx-auto" style={{maxWidth : '28rem'}}>
                <Card.Body>
                    <Card.Title className="text-center">Medicamentos</Card.Title>
                    <VerMedicamento actualizacion={actualizacion} setEditar={(data)=>{setEditar(data),setShowEdit(true)}}/>
                    <div className="text-center">
                        <Button variant="primary" onClick={handleShow}>
                            Registrar medicamento
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        

        <Modal open={show} setOpen={setShow} nombre={"Nuevo medicamento"} >
            <Medicamento/>
        </Modal>
         <Modal open={showEdit}  setOpen={setShowEdit}><CambiarMedicamento actualizar={(data)=>{setActualizacion(data);setShowEdit(false)}} medicamento={editar}></CambiarMedicamento></Modal>
        </>
    )
}

export default MostrarModal;