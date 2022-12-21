import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import image1 from '../assets/img/pokedex1.png';
import image2 from '../assets/img/projImg2 (2).png';
import image3 from '../assets/img/djangoapp.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1280, min: 464 },
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

    return(
        <section className="Projects" id="projects">
            <h1 className="section_title">Mis Proyectos</h1>
                <div className="projects">
                    <Carousel responsive={responsive} infinite={true} className="project-slider">
                            <div className="item align-items-center mt-2 m-auto justify-content-center">
                                <div className="projectcards card align-items-center m-auto">
                                    <p>Proyecto Pokedex</p>
                                    <img src={image1} alt="Pokedex project icon"/>
                                    <div className="technologies">
                                        <h6>Technologias:</h6>
                                        <p>
                                            Dart, Flutter
                                        </p>
                                        <div className="icons">
                                            <a href="" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                            <a href="" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center">
                                <div className="projectcards card align-items-center m-auto">
                                        <p>Formulario de Registro</p>
                                        <img src={image3} className="djangoimg" alt="Django project icon"/>
                                        <div className="technologies">
                                            <h6>Technologias:</h6>
                                            <p>
                                                HTML, CSS, PHP y Sql
                                            </p>
                                            <div className="icons">
                                                <a href="" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                                <a href="" target="_blank"><i className='bx bxl-github'></i></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center align-items-center m-auto">
                                <div className="projectcards card align-items-center m-auto">
                                    <p>Proyecto FrontEnd</p>
                                    <img src={image2} alt="Frontrend project"/>
                                    <div className="technologies colin">
                                        <h6>Technologias:</h6>
                                        <p>
                                            HTML, CSS y JavaScript
                                        </p>
                                        <div className="icons">
                                            <a href="" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                            <a href="" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Carousel>
                </div>
        </section>


    )
}
