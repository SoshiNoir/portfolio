import 'animate.css';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const projects = [
    {
      title: "Twitter Clone",
      description: "Twitter UI Clone",
      imgUrl: projImg1,
      link: 'https://twitterclone-soshinoir.vercel.app/'
    },
    {
      title: "Github Blog",
      description: "Um blog que consome a API do Github para transformar Issues em post",
      imgUrl: projImg2,
      link: 'https://github-blog-soshinoir.vercel.app/'
    },
    {
      title: "To do TT",
      description: "Aplicação simples para gerenciar tarefas",
      imgUrl: projImg3,
      link: 'https://todott-soshinoir.vercel.app/'
    }
  ];

  const projects2 = [
    {
      title: "Ignite Timer - Não responsivo",
      description: "Aplicação simples de timer",
      imgUrl: projImg4,
      link: 'https://ignitetimer-soshinoir.vercel.app/'
    },
    {
      title: "Ignite Feed",
      description: "Aplicação que simula uma rede social com funções de comentar, apagar e ''aplaudir'' ",
      imgUrl: projImg5,
      link: 'https://ignite-feed-soshinoir.vercel.app/'
    },
    {
      title: "Coffee Delivery - Não responsivo",
      description: "Aplicação que simula um delivery de café com carrinho de compras",
      imgUrl: projImg6,
      link: 'https://coffee-delivery-soshinoir.vercel.app/'
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Conheça meus projetos desenvolvidos com muita atenção e dedicação, busco sempre aprender e aprimorar, sugestões são muito bem-vindas!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Destaques</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Outros</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Saiba mais</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Caso queria saber mais sobre meus projetos, todos eles estão em repositório público no meu perfil do GitHub ou entre em contato comigo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}