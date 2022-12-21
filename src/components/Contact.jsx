import emailjs from '@emailjs/browser';
import 'animate.css';
import React, { useRef } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lh3hgbj', 'template_rvda8m2', form.current, 'v1fnLGe2tHEaCt4EF')
      .then((result) => {
          console.log(result.text);
          console.log(message.sent)
      }, (error) => {
          console.log(error.text);
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
          <TrackVisibility>
              {({ isVisible }) =>
               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Fale comigo</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Nome</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Mensagem</label>
                    <textarea name="message" />
                    <input className='send' type="submit" value="Enviar" />
                </form>
                   </div>}
                    </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}