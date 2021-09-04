import React from 'react';
import '../assets/styles/components/Skills.scss'
import divider from '../assets/static/section-divider.png';
import python from '../assets/static/python.png';
import django from '../assets/static/django-logo.png';
const Skills = () => (
    <section id="skills">
        <div className="container">
            <h2>HABILIDADES
            </h2>
            <img src={divider} alt=""/>
            <h3>TÉCNICO
            </h3>

            <div className="skill-progress">
                <div className="html icon"> <i className="fab fa-html5 fa-lg"></i> <span>HTML5</span></div>
                <label htmlFor="">70%</label>
                <div id="progress-html" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="css icon"> <i className="fab fa-css3-alt fa-lg"></i> <span>CSS3</span> </div>
                <label htmlFor="">60%</label>
                <div id="progress-css" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="node icon"> <i className="fab fa-node-js fa-lg"></i> <span>Node.Js</span> </div>
                <label htmlFor="">65%</label>
                <div id="progress-node" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="js icon"> <i className="fab fa-js fa-lg"></i> <span>JavaScript</span> </div>
                <label htmlFor="">70%</label>
                <div id="progress-js" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="jq icon"> <i className="fab fa-js fa-lg"></i> <span>JQuery</span> </div>
                <label htmlFor="">55%</label>
                <div id="progress-jq" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="mysql icon"> <i className="fas fa-database fa-lg"></i> <span>MySQL</span> </div>
                <label htmlFor="">62%</label>
                <div id="progress-mysql" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="mongo icon"> <i className="fab fa-mdb fa-lg"></i> <span>MongoDB</span> </div>
                <label htmlFor="">55%</label>
                <div id="progress-mongo" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="angular icon"> <i className="fab fa-angular fa-lg"></i> <span>Angular</span> </div>
                <label htmlFor="">60%</label>
                <div id="progress-angular" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="react icon"> <i className="fab fa-react fa-lg"></i> <span>React</span> </div>
                <label htmlFor="">57%</label>
                <div id="progress-react" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="python icon"> <img src={python} alt=""/> <span>Python</span> </div>
                <label htmlFor="">60%</label>
                <div id="progress-python" className="progress"></div>
            </div>
            <div className="skill-progress">
                <div className="django icon"> <img src={django} alt=""/> <span>Django</span> </div>
                <label htmlFor="">55%</label>
                <div id="progress-django" className="progress"></div>
            </div>
        </div>
    </section>
);

export default Skills;