import React from "react";
import { Card } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import SetType from './set_tipo';

//recibir props y retornar una vista
const PData = (props) => {
    return (
        <tr class="unread" >
            <td><FaIcons.FaUserCircle className=' fa-5x text-black' /></td>
            <td>
                <h6 class="mb-1">{props.name}</h6>
                <p class="m-0">{props.description}</p>
            </td>
        </tr>
    );
}

const Home = () => {
        const history = useHistory();
        const envio = async () => {
            await axios.post("http://192.168.1.3:4000/subscription", { "subs": JSON.parse(localStorage.getItem('subs')), "email": localStorage.getItem("correo") })
        }

        if (localStorage.getItem('correo') === null) {
            history.push('/login');
        }
        else {
            if (localStorage.getItem('tipo') === '0') {
                return (<SetType />)
            }
            envio();
        }

        return (
            <Card className="mx-auto" style={{ width: '20rem' }}>
                <Card.Header>
                    <h2 className="fw-bold text-center">Pacientes</h2>
                </Card.Header>
                <Card.Body>
                    <div class="card-block px-0 py-3">

                        <table class="table table-hover">
                            <tbody>


                                <PData name="Isaac" description="Soy un trollazo"></PData>



                                <tr class="unread">
                                    <td><FaIcons.FaUserCircle className=' fa-5x text-black' /></td>
                                    <td>
                                        <h6 class="mb-1">Mathilde Andersen</h6>
                                        <p class="m-0">Lorem Ipsum is simply text of…</p>
                                    </td>

                                </tr>
                                <tr class="unread">
                                    <td><FaIcons.FaUserCircle className=' fa-5x text-black' /></td>
                                    <td>
                                        <h6 class="mb-1">Karla Sorensen</h6>
                                        <p class="m-0">Lorem Ipsum is simply…</p>
                                    </td>

                                </tr>
                                <tr class="unread">
                                    <td><FaIcons.FaUserCircle className=' fa-5x text-black' /></td>
                                    <td>
                                        <h6 class="mb-1">Ida Jorgensen</h6>
                                        <p class="m-0">Lorem Ipsum is simply text of…</p>
                                    </td>

                                </tr>
                                <tr class="unread">
                                    <td><FaIcons.FaUserCircle className=' fa-5x text-black' /></td>
                                    <td>
                                        <h6 class="mb-1">Albert Andersen</h6>
                                        <p class="m-0">Lorem Ipsum is simply dummy…</p>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </Card.Body>
            </Card>
        );
    }
    export default Home