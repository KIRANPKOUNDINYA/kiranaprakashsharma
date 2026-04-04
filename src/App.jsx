import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;