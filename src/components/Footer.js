import React from 'react'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/twitter.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Edgar</h1>
                 <ul className="footer_list">
                        <li>
                            <a href="#home" className="footer_link">Inicio</a>
                        </li>
                        <li>
                            <a href="#technicallevels" className="footer_link">Niveles Tecnicos</a>
                        </li>
                        <li>
                            <a href="#projects" className="footer_link">Proyectos</a>
                        </li>
                    </ul>
                <div className="footer_social">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/edgar-chura-humora-8a6a06251/" target="_blank"><img src={navIcon1} alt="LinkedIn icon" /></a>
                        <a href="" target="_blank"><img src={navIcon2} alt="Twitter icon" /></a>
                        <a href="" target="_blank"><img src={navIcon3} alt="Tiktok icon" /></a>
                    </div>
                </div>
                <span className="footer_copy">&#169; Edgar Chura. Todos los derechos reservados.</span>
            </div>
        </footer>
    )
}
