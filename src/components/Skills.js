import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

export  const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        medium:{
            breakpoint:{max: 780, min: 400},
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                       <div className="skill-bx">
                           <h2>
                               ¡¡Lega a Conocerme!!
                           </h2>
                           <p>Mi nombre es Edgar y tengo pasion por la tecnologia,
                           Empecé como autodidacta y ahora estoy estudiando desarrollo de Software Multiplataforma. Además de mi amor por la tecnología y el diseño, también me interesa la literatura, la educación, la historia, la economía y la política. En la sección de proyectos están algunos de los proyectos que he desarrollado hasta el momento.</p>
                           <Carousel responsive={responsive} infinite={true} className="skill-slider">
                               <div className="item">
                                   <i className="uil uil-arrow-up"></i>
                                   <h5>Auto motivacion permanente</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-ear"></i>
                                   <h5>Siempre listo para Aprender otra vez</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-balance-scale"></i>
                                   <h5>Fuerte Etica Laboral</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-presentation-edit"></i>
                                   <h5>Dedicacion</h5>
                               </div>
                           </Carousel>
                       </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
