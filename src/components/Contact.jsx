import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import '../assets/styles/components/Contact.scss'
import divider from '../assets/static/section-divider.png';
const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042776.193951151!2d-79.54981257958015!3d-0.18619061570813528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito!5e0!3m2!1sen!2sec!4v1629959521728!5m2!1sen!2sec";
const baseURL = "https://portafolio-chiguano.herokuapp.com/api/send";
const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailInput = event.target.email;
        const nameInput = event.target.name;
        const asuntoInput = event.target.asunto;
        const msjInput = event.target.msj;

        const mesaje = {
            "name": nameInput.value,
            "from": emailInput.value,
            "subject": asuntoInput.value,
            "msj": msjInput.value
        };
        axios.post(baseURL, mesaje)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        swal({
            title: "Mensaje Enviado",
            text: "Pronto me pondré en contacto contigo",
            icon: "success",
            button: "Aceptar"
        });

        nameInput.value = "";
        emailInput.value = "";
        asuntoInput.value = "";
        msjInput.value = "";
    };

    return (
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
                            <iframe src={url} />
                        </div>
                    </div>

                    <div id="right">
                        <div className="message">
                            <h3>ENVÍAME UN MENSAJE CORTO</h3>
                            <form onSubmit={handleSubmit} method="POST">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" required />

                                <label htmlFor="email">Correo electrónico</label>
                                <input type="text" id="email" name="email" required />

                                <label htmlFor="asunto">Asunto</label>
                                <input type="text" id="asunto" name="asunto" required />
                                <label htmlFor="msj">Mensaje</label>
                                <textarea id="msj" name="msj" cols="30" rows="10" required></textarea>

                                <input type="submit" value="ENVIAR" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

};

export default Contact;