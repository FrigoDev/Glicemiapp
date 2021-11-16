import React from "react";
import { Row, Col, Image, Button, Form, FormControl, InputGroup, Card } from 'react-bootstrap';
import './diario.css'

const PData = (props) => {
    return (
        <tr>
            <th className="fw-normal" scope="row">{props.fecha}</th>
            <td>{props.hora}</td>
            <td>{props.glucosa}</td>
            <td>{props.Insulina}</td>
        </tr>
    );
}



const diario = () => {
    return (
        <>
            <Card className="mx-auto" style={{ width: '23rem' }}>
                <Card.Header>
                    <Row>
                        <Col className="mx-auto text-center">
                            <Image className="my-1" src="UserIcon.png" roundedCircle />
                            <h2 className="fs-3">Nombre del paciente</h2>
                            <h4 className="fs-5">Edad:x</h4>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <h3 className="text-center">Diario</h3>
                    <h5 className="text-center">Registro de azúcar</h5>
                    <Form>
                        <InputGroup>
                            <FormControl placeholder="Nivel de azúcar" />
                            <InputGroup.Text className="fw-bold">mg/dl</InputGroup.Text>
                        </InputGroup>
                        <div className="text-center">
                            <Button className="mt-3">Registrar</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="page-content">
                <div className="table-responsive text-center">
                    <table className="table table-hover">
                        <thead className="Table-thead">
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Glucosa(mg/dl)</th>
                                <th scope="col">Insulina(Bolo)</th>
                            </tr>
                        </thead>
                        <tbody>

                            <PData fecha="10/11" hora="10:00" glucosa="100" Insulina="1" />

                            <tr>
                                <th className="fw-normal" scope="row">12/11</th>
                                <td>18:00</td>
                                <td>130</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th className="fw-normal" scope="row">13/11</th>
                                <td>20:00</td>
                                <td>90</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th className="fw-normal" scope="row">14/11</th>
                                <td>8:00</td>
                                <td>30</td>
                                <td>0</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}
export default diario;