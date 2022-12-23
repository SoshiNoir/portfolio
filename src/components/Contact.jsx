import emailjs from '@emailjs/browser';
import 'animate.css';
import React, { useRef } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import Swal from 'sweetalert2';
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${import.meta.env.VITE_SERVICE}`, `${import.meta.env.VITE_TEMPLATE}`, form.current, `${import.meta.env.VITE_PUBLIC}`)
    .then((result) => {
      Swal.fire({
        icon: 'success',
        title: 'Uhul!',
        text: 'Mensagem enviada',
        background: '#121212',
        color: '#ffffff',
        iconColor: '#7132a2',
      })
      e.target.reset();
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado!',
            background: '#121212',
            color: '#ffffff',
            iconColor: '#7132a2',
          })
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Fale comigo"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
               <div className="animate__animated animate__fadeIn">
                <h2>Fale comigo</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Nome</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Mensagem</label>
                    <textarea name="message" />
                    <input id='sendButton' className='send' type="submit" value="Enviar" />
                </form>
                   </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}