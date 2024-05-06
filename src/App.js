// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/contact" element={<Contact />} />
           </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

