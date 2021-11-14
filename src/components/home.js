import React from "react";
import {  Card } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

const Home = () => {
    return(
        <Card className="mx-auto" style={{ width: '20rem' }}>
        <Card.Header>
        <h2 className="fw-bold text-center">Pacientes</h2>
        </Card.Header>
        <Card.Body>
        <div class="card-block px-0 py-3">
                                            
                                                <table class="table table-hover">
                                                    <tbody>
                                                        <tr class="unread">
                                                            <td><FaIcons.FaUserCircle className=' fa-5x text-black' /></td>
                                                            <td>
                                                                <h6 class="mb-1">Isabella Christensen</h6>
                                                                <p class="m-0">Lorem Ipsum is simply…</p>
                                                            </td>
                                                            
                                                        </tr>
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
                                        
                                  

    
    
    )
}
export default Home