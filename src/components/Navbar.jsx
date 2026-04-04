import React, { useState } from 'react';

const Navbar = () => {
  // State to manage the open/close status of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the button
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Array of your requested navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Pooja list', href: '#pooja-list' },
    { name: 'Review', href: '#review' },
    { name: 'Images', href: '#images' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-orange-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <span className="font-bold text-xl tracking-wide leading-tight">
              Kiranaprakashsharma9
            </span>
            <span className="text-sm text-orange-200 font-medium tracking-wider">
              Srirangapatana Purohit
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-orange-200 transition px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-orange-200 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                // Close (X) Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
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
        <div className="md:hidden bg-orange-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} // Closes the drawer when a link is clicked
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;