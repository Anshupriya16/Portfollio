import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import SampleWork from './components/Samplework.jsx';
import Skills from './components/Skill.jsx';
import Achievement from './components/Achievement.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx'
const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<SampleWork />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;