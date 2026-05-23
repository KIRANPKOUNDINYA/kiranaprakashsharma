import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // The function that handles the scrolling and adds the bounce class
  const scrollAndBounce = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;

    // Remove the class if it exists, trigger a reflow, then add it back to restart the animation
    target.classList.remove('bounce-target');
    void target.offsetWidth; 
    target.classList.add('bounce-target');

    // Smooth scroll to the section
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', hash);

    // Remove the class after the animation finishes (0.9s matches our CSS)
    window.setTimeout(() => {
      target.classList.remove('bounce-target');
    }, 900);
  };

  const handleNavClick = (event, link) => {
    setIsOpen(false); // Close the mobile menu on click
    const hashIndex = link.href.indexOf('#');
    const hash = hashIndex !== -1 ? link.href.slice(hashIndex) : null;

    if (hash) {
      event.preventDefault();
      // If we are already on the home page, just scroll and bounce
      if (location.pathname === '/' || location.pathname === '/home') {
        scrollAndBounce(hash);
      } else {
        // Otherwise, navigate to the home page first with the hash
        navigate(link.href);
      }
    }
  };

  const navLinks = [
    { name: t.common.home, href: '/', isPage: true },
    { name: t.common.aboutUs, href: '/#about', isPage: false },
    { name: t.common.poojaList, href: '/#pooja-list', isPage: false },
    { name: t.common.review, href: '/#review', isPage: false },
    { name: t.common.imagesShuba, href: '/shuba', isPage: true },
    { name: t.common.imagesAshuba, href: '/ashuba', isPage: true },
    { name: t.common.location, href: '/#location', isPage: false },
    { name: t.common.contact, href: '/#contact', isPage: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-orange-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand Name */}
          <Link to="/" className="flex-shrink-0 flex flex-col justify-center hover:opacity-80 transition cursor-pointer">
            <span className="font-bold text-xl tracking-wide leading-tight">
              {t.common.brandName}
            </span>
            <span className="text-sm text-orange-200 font-medium tracking-wider">
              {t.common.brandSubtitle}
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={(e) => handleNavClick(e, link)}
                  className="hover:text-orange-200 transition px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link)}
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
      <div className={`lg:hidden bg-orange-700 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={(e) => handleNavClick(e, link)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600 hover:text-white transition"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600 hover:text-white transition"
              >
                {link.name}
              </a>
            )
          ))}

          <div className="mt-3 px-3 pt-3 border-t border-orange-600">
            <p className="text-sm font-medium text-orange-100 mb-2">{t.home.englishLabel}/{t.home.kannadaLabel}</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLanguage('ENGLISH')}
                className={`w-full rounded-md py-2 text-sm font-bold transition ${language === 'ENGLISH' ? 'bg-white text-orange-700' : 'bg-orange-600 text-white hover:bg-orange-500'}`}
              >
                {t.home.englishLabel}
              </button>
              <button
                type="button"
                onClick={() => setLanguage('KANNADA')}
                className={`w-full rounded-md py-2 text-sm font-bold transition ${language === 'KANNADA' ? 'bg-white text-orange-700' : 'bg-orange-600 text-white hover:bg-orange-500'}`}
              >
                {t.home.kannadaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;