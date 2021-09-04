import React from 'react';
import '../assets/styles/components/Projects.scss'
import divider from '../assets/static/section-divider.png';
import housetime from '../assets/static/house-time.png';
import cuygle from '../assets/static/cuygle.jpg';
import platzi_video from '../assets/static/platzi-video.png';

const Projects = () => (
    <section id="projects">
        <div className="container">
            <h2>PROYECTOS</h2>
            <img src={divider} alt=""/>
            <div className="card-grid">
                <a className="card" href="https://github.com/stalinch98/HouseTime">
                    <div className="card__background" style={{ backgroundImage: `url(${housetime})` }}></div>
                    <div className="card__content">
                        <h3 className="card__heading">HouseTime</h3>
                    </div>
                </a>
                <a className="card" href="https://github.com/stalinch98/Cuygle">
                    <div className="card__background" style={{ backgroundImage: `url(${cuygle})` }}></div>
                    <div className="card__content">
                        <h3 className="card__heading">Cuygle</h3>
                    </div>
                </a>
                <a className="card" href="https://github.com/stalinch98/Platzi-Video">
                    <div className="card__background" style={{ backgroundImage: `url(${platzi_video})` }}></div>
                    <div className="card__content">
                        <h3 className="card__heading">Platzi Video</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>
);

export default Projects;