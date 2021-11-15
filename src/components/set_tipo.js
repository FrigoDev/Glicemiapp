import React from "react";
import { Row, Col, Image, Button, Card } from 'react-bootstrap';

const set_tipo = () => {
    return (
        <>
        <h1 className="text-center mb-md-4 mb-3">Tipos de cuenta</h1>
        <div className="row">
            <Card className="col-md-6 mx-auto text-center p-0 mb-3" style={{ width: '28rem' }}>
                <Card.Header>
                    <h3>Cuenta de usuario unico</h3>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                Maneja tu diario personal de glicemia
                            </li>
                            <li className="mb-1">
                                Crea recordatorios para tu medicamento
                            </li>
                            <li className="mb-1">
                                Registra tus niveles de glucosa
                            </li>
                        </ul>
                    </Card.Text>
                    <Button>Seleccionar</Button>
                </Card.Body>
            </Card>
            <Card className="col-md-6 mx-auto text-center p-0 mb-3" style={{ width: '28rem' }}>
                <Card.Header>
                    <h3>Cuenta multipacientes</h3>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                Administra registros sobre la condición de tus pacientes
                            </li>
                            <li className="mb-1">
                                Crea recordatorios para el medicamento de tus pacientes
                            </li>
                            <li className="mb-1">
                                Registra los niveles de glucosa de tus pacientes
                            </li>
                        </ul>
                    </Card.Text>
                   <Button>Seleccionar</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}
export default set_tipo;