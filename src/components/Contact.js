import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b7pcbha', 'template_6wad6wq', form.current, 'xYW3NstznYrhhcg5K')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return(
        <section className="contact-section"id="Contact">
            <h2 className="section_title">Contacto <i className='bx bxs-contact'></i></h2>
            <span className="section_subtitle">Ponerse en contacto</span>
            <div className="contact_container grid">
                <div className="contact_content">
                    <div className="contact_info">
                        <div className="container-contact">
                            <div className="contact_content mb-3">
                                <h3 className="contact_title">Escríbeme</h3>
                                <div className="contact_card">
                                    <div className="header-card">
                                        <i className='bx bx-mail-send'></i>
                                        <h3 className="contact_card-title">Email</h3>
                                    </div>
                                    <span className="contact_card-data">edgar.mc654@gmail.com</span>
                                    <a href="edgar.mc654@gmail.com" className="contact_button">Escíbame<i className='bx bx-right-arrow-alt contact_button-icon'></i></a>
                                </div>
                                <div className="contact_card">
                                    <div className="header-card">
                                        <i className='bx bxl-linkedin-square'></i>
                                        <h3 className="contact_card-title">LinkedIn</h3>
                                    </div>
                                    <span className="contact_card-data">Edgar Chura Humora</span>
                                    <a href="https://www.linkedin.com/in/edgar-chura-humora-8a6a06251/" target="_blank" className="contact_button">Escíbame<i className='bx bx-right-arrow-alt contact_button-icon'></i></a>
                                </div>
                                </div>
                            <div className="contact_content">
                                <h3 className="contact_title">Escribe sobre tu proyecto</h3>
                                <form ref={form} onSubmit={sendEmail} className="contact_form">
                                    <div className="contact_form-div">
                                        <label className="contact_form-tag">Nombre</label>
                                        <input type="name" className="form-control" placeholder="Nombre" name ="name" required/>
                                        <div className="mb-3">
                                            <label className="form-label">Email
                                                direccion</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                                   placeholder="Introduzca su email" name="email" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Mensage</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                                      rows="3" placeholder="Describa su proyecto" name="message" required></textarea>
                                        </div>
                                        <button className="send download">Enviar Mensaje<i className='bx bx-envelope'></i></button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
          </div>

        </section>
    )

}