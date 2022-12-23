import 'animate.css';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import headerImg from "../assets/img/header-img.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Developer", "Web Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Router>
    <section className="banner" id="home">
      <Container>
        <Row className="d-flex justify-content-*-center">
          <Col xs={12} md={6} xl={7}>
              <div className="animate__animated animate__fadeIn">
                <span className="tagline">Bem-vindo ao meu portfólio</span>
                <h1>{`Oi! Eu sou Miguel,`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Developer", "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Sou apaixonado por tecnologia e animais, diariamente desenvolvo e aprimoro projetos enquanto busco me inserir no mercado de trabalho como Desenvolvedor Júnior</p>
                  <HashLink to='#connect'>
                  <button onClick={() => console.log('connect')}>Contato <ArrowRightCircle size={25} /></button>
                  </HashLink>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div className="animate__animated animate__zoomIn">
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
    </Router>
  )
}