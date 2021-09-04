import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Footer/>
  </div>
);

export default App;