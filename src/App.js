// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import WelcomeMessage from './components/WelcomeMessage'; // Import the WelcomeMessage component
import './App.css';

const App = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {showWelcomeMessage && <WelcomeMessage />}
        {!showWelcomeMessage && (
          <>
            <Navigation />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
