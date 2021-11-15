import React from "react";
import { Row, Col, Image, Button, Form, FormControl, InputGroup, Card } from 'react-bootstrap';
import './diario.css'



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
                                <th scope="col">Glucosa</th>
                                <th scope="col">Insulina</th>
                                <th scope="col">Medicamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}
export default diario;