'use client'
import styles from '../page.module.css'
import '../styles.css'
import { Accordion, Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


export default function About() {
    const router = useRouter();
    const[name,setName] = useState('');

    function getData(){

        alert('Thank You '+ name +  ' For Contact Us')
    }
    return (
        <>
            <Container fluid >
                <Row className={styles.dark}>
                    <hr></hr>
                  
                </Row>
              

                <Row className={`${styles.banner}     text-light`} >
                    <Col lg={12} >
                    <section id="contact ">

                        <h1 className="section-header">Contact</h1>

                        <div className="contact-wrapper animate__animated animate__slideInDown">

                           

                            <form id="contact-form" className="form-horizontal" role="form">

                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  required  onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required />
                                    </div>
                                </div>

                                <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                                <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND" onClick={getData}>
                                    <div className="alt-send-button">
                                     <span className="send-text">SEND</span>
                                    </div>

                                </button>

                            </form>

                          

                            <div className="direct-contact-container">

                                <ul className="contact-list">
                                    <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Ahmedabad, India</span></i></li>

                                    <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">+91 7283947790</a></span></i></li>

                                    <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">divyapbagul@gmail.com</a></span></i></li>

                                </ul>

                                <hr></hr>
                                    <ul className="social-media-list">
                                        <li><a href="#" target="_blank" className="contact-icon">
                                                <img src='https://img.icons8.com/?size=512&id=12599&format=png' style={{height:"50px"}} /> </a>
                                        </li>
                                        <li><a href="#" target="_blank" className="contact-icon">
                                        <img src='https://img.icons8.com/?size=512&id=32309&format=png' style={{height:"50px"}} /></a>
                                        </li>
                                        <li><a href="#" target="_blank" className="contact-icon">
                                        <img src='https://img.icons8.com/?size=512&id=8808&format=png' style={{height:"50px"}} /></a>
                                        </li>
                                        <li><a href="#" target="_blank" className="contact-icon">
                                        <img src='https://img.icons8.com/?size=512&id=16712&format=png' style={{height:"50px"}} /></a>
                                        </li>
                                    </ul>
                                    <hr></hr>

                                        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                                    </div>

                            </div>

                    </section>

        </Col>
                </Row>


            </Container>
        </>
    )
}
