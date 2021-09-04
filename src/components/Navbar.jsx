import React from 'react';
import '../assets/styles/components/Navbar.scss'

const Navbar = () => {

    React.useEffect(() => {
        const toggle = document.querySelector(".toggle");
        const menu = document.querySelector(".menu");
        function toggleMenu() {
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
            } else {
                menu.classList.add("active");
                toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
            }
        }
        toggle.addEventListener("click", toggleMenu, false);
    });

    return (
        <nav>
            <ul className="menu">
                <li className="logo"><a href="#home">Portafolio de Stalin</a></li>
                <li className="item">
                    <a href="#about">ACERCA DE</a>
                </li>
                <li className="item">
                    <a href="#timeline">EDUCACIÓN</a>
                </li>
                <li className="item">
                    <a href="#projects">PROYECTOS</a>
                </li>
                <li className="item">
                    <a href="#skills">HABILIDADES</a>
                </li>
                <li className="item">
                    <a href="#contact">CONTACTO</a>
                </li>
                <li className="toggle"><a><i className="fas fa-bars"></i></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;