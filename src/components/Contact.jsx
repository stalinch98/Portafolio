import React from 'react';
import '../assets/styles/components/Contact.scss'
import divider from '../assets/static/section-divider.png';
const url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042776.193951151!2d-79.54981257958015!3d-0.18619061570813528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito!5e0!3m2!1sen!2sec!4v1629959521728!5m2!1sen!2sec";
const Contact = () => (
    <section id="contact">
        <div className="container">
            <h2>CONTACTO
            </h2>
            <img src={divider} alt="" />

            <div className="contact-info">
                <div id="left">
                    <div className="contact-forms">
                        <div className="cell"> <i className="fa fa-mobile-alt fa-2x"></i>
                            <div className="contact-number"> <strong>CELULAR:</strong><span> +593 995882909</span> </div>
                        </div>
                        <div className="email"> <i className="fa fa-at fa-2x"></i>
                            <div className="contact-email"> <strong>EMAIL:</strong><a href="stalin_dany98@hotmail.com"> Escribir un Correo</a> </div>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src={url}/>
                    </div>
                </div>

                <div id="right">
                    <div className="message">
                        <h3>ENVÍAME UN MENSAJE CORTO</h3>
                        <form action="">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" />

                            <label htmlFor="email">Correo electrónico</label>
                            <input type="text" id="email" />

                            <label htmlFor="asunto">Asunto</label>
                            <input type="text" id="asunto" />
                            <label htmlFor="msj">Mensaje</label>
                            <textarea id="msj" cols="30" rows="10"></textarea>

                            <input type="submit" value="ENVIAR" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Contact;