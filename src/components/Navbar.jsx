import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // We added an 'isPage' property to tell the Navbar how to handle the click
  const navLinks = [
    { name: 'Home', href: '/', isPage: true },
    { name: 'About us', href: '/#about', isPage: false },
    { name: 'Pooja list', href: '/#pooja-list', isPage: false },
    { name: 'Review', href: '/#review', isPage: false },
    { name: 'Images (Shuba)', href: '/shuba', isPage: true },
    { name: 'Images (Ashuba)', href: '/ashuba', isPage: true },
    { name: 'Location', href: '/#location', isPage: false },
    { name: 'Contact', href: '/#contact', isPage: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-orange-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand Name */}
          <Link to="/" className="flex-shrink-0 flex flex-col justify-center hover:opacity-80 transition cursor-pointer">
            <span className="font-bold text-xl tracking-wide leading-tight">
              Kiranaprakashsharma9
            </span>
            <span className="text-sm text-orange-200 font-medium tracking-wider">
              Srirangapatana Purohit
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="hover:text-orange-200 transition px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-orange-200 transition px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-orange-200 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-orange-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600 hover:text-white transition"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600 hover:text-white transition"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;