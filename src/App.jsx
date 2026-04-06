import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Shuba from './pages/Shuba';
import Ashuba from './pages/Ashuba';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 scroll-smooth flex flex-col min-h-screen">
        <style>{`
          @keyframes chatBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-chat-bounce {
            animation: chatBounce 1.5s ease-in-out infinite;
          }

          @keyframes sectionBounce {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(-10px); }
            50% { transform: translateY(0); }
            75% { transform: translateY(-6px); }
          }
          .bounce-target {
            animation: sectionBounce 0.9s ease-in-out forwards;
          }
        `}</style>
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            {/* The Main Home Page with all scrolling sections */}
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Services />
                <Reviews />
                <Location />
                <Contact />
              </>
            } />

            {/* Alias route for explicit home landing */}
            <Route path="/home" element={
              <>
                <Home />
                <About />
                <Services />
                <Reviews />
                <Location />
                <Contact />
              </>
            } />

            {/* The Separate Gallery Pages */}
            <Route path="/shuba" element={<Shuba />} />
            <Route path="/ashuba" element={<Ashuba />} />

            {/* Redirect any unknown path back to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />

        {/* Floating Chat Button - Updated to match website colors */}
        <button
          type="button"
          onClick={() => alert('Chat with AI coming soon!')}
          className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-orange-500/40 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 animate-chat-bounce transition-colors duration-200"
          aria-label="Chat with AI"
        >
          <span>Chat with AI</span>
        </button>
      </div>
    </Router>
  );
}

export default App;