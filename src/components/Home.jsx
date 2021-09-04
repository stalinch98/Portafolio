import React from 'react';
import '../assets/styles/components/Home.scss'
import fondo from '../assets/static/fondo.jpg';
const Home = () => (
    <section id="home" style={{ backgroundImage: `url(${fondo})` }}>
        <div className="intro">
            <h2>STALIN CHIGUANO</h2>
            <h1>DESARROLLADOR DE SOFTWARE</h1>
            <div className="social-icons">
                <ul>
                    <li>
                        <a href=""><i className="fab fa-github fa-2x"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="fab fa-linkedin fa-2x"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="mouse-icon">
            <div className="wheel"></div>
        </div>

    </section>
);

export default Home;