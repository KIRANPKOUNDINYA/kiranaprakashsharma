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

          @keyframes ringWobble {
            0%, 20%, 100% { transform: rotate(0deg); }
            4%, 12% { transform: rotate(-15deg); }
            8%, 16% { transform: rotate(20deg); }
          }
          .animate-ring-infinite {
            animation: ringWobble 2s ease-in-out infinite;
          }
        `}</style>
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
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

            <Route path="/shuba" element={<Shuba />} />
            <Route path="/ashuba" element={<Ashuba />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />

        <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
          <a
            href="tel:+919513311293"
            // --- UPDATED: Added border-2 border-green-200 to give it a sharp green outline! ---
            className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white border-2 border-green-200 shadow-2xl shadow-green-500/40 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors duration-300"
            aria-label="Call"
          >
            <svg 
              className="w-6 h-6 animate-ring-infinite" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => alert('Chat with AI coming soon!')}
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-orange-500/40 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 animate-chat-bounce transition-colors duration-200"
            aria-label="Chat with AI"
          >
            <span>Chat with AI</span>
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;