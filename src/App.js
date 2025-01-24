import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Navbars/Navbar';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Farming from './Components/Pages/Farming/Farming';
import Footer from './Components/Navbars/Footer/Footer';
import Internship from './Components/Pages/Internship/Internship';
import "../src/Components/i18n/i18n"
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Navbar/>
      <ScrollToTop />
      <div className="content">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/farming" element={<Farming />} />
        <Route path="/internship" element={<Internship />} />

        <Route path="/home" element={<Home/>}/>

      </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
