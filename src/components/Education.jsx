import React from 'react';
import '../assets/styles/components/Education.scss'
import divider from '../assets/static/section-divider.png';
const Education = () => (
    <section id="timeline">
        <br/>
        <br/>
        <h2>EDUCACIÓN</h2>
        <img src={divider} alt=""/>
        <ul>
            <li>
                <div className="education">
                    <time>2010-2017</time>
                    <p><i className="fas fa-graduation-cap fa-2x"></i></p>
                    <h2>Unidad Educativa Fiscal Abdón Calderón</h2>
                    <p>Bachiller en Ciencias.</p>
                </div>
            </li>
            <li>
                <div className="education">
                    <time>2017-2022</time>
                    <p><i className="fas fa-user-graduate fa-2x"></i></p>
                    <h2>Universidad Politécnica Salesiana</h2>
                    <p>Estudiante de 9no semestre en Ingeniería en Ciencias de la Computacion.</p>
                </div>
            </li>
        </ul>
    </section>
);

export default Education;