import React from 'react';
import '../assets/styles/components/About.scss'
import divider from '../assets/static/section-divider.png';
import me from '../assets/static/me.jpg';

const About = () => (
    <section id="about">
        <div className="container">
            <h2>BIOGRAFIA
            </h2>
            <img src={divider} alt=""/>
            <div className="biography">
                <div className="myphoto">
                    <img src={me} alt=""/>
                </div>
                <div className="info">
                    <ul>
                        <li>
                            <div className="data"> <i className="fa fa-fw fa-id-badge"></i> <strong>Nombre:</strong> </div>
                            <div className="personal-data"><span>Stalin Chiguano</span></div>
                        </li>
                        <li>
                            <div className="data"> <i className="fa fa-fw fa-calendar"></i> <strong>Nacimiento:</strong> </div>
                            <div className="personal-data"><span>21/12/1998</span></div>
                        </li>
                        <li>
                            <div className="data"> <i className="fa fa-fw fa-home"></i> <strong>Localización:</strong> </div>
                            <div className="personal-data"><span>Quito, Ecuador</span></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="short-info">
                <p>
                    Desarrollador de Software (JavaScript, Node.js, Python, etc.)</p>
            </div>
        </div>
    </section>
);

export default About;