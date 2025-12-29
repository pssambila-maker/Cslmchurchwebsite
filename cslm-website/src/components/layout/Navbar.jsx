import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Prayers', path: '/prayers' },
    { name: 'Donations', path: '/donate' }, // Changed to verify if user wants "Donations" link AND "Donate" button, image shows both
    { name: 'Contact', path: '/contact' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md">
      {/* Top Bar / Main Navbar Area */}
      <div className="bg-[#00aeef] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 md:h-28">

            {/* Logo Section - Left */}
            <div className="flex-shrink-0 flex items-center h-full py-2">
              <Link to="/" onClick={closeMenu} className="h-full flex items-center gap-3">
                <img
                  src="/images/church-logo-transparent.png"
                  alt="Christ Successful Life Ministries Logo"
                  className="h-full w-auto object-contain max-h-20 md:max-h-24"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-white font-heading font-bold text-xl md:text-2xl leading-tight tracking-wide">
                    Christ Successful Life Ministries
                  </span>
                  <span className="text-blue-100 font-medium text-sm md:text-base tracking-wider">
                    Church
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Side Container */}
            <div className="hidden md:flex flex-col justify-center items-end h-full space-y-2 py-2">

              {/* Top Contact Row */}
              <div className="flex items-center space-x-6 text-white text-sm font-medium">
                <a href="mailto:cslmchurch@gmail.com" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                  <FaEnvelope />
                  <span>cslmchurch@gmail.com</span>
                </a>
                <a href="tel:+12488285305" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                  <FaPhone className="rotate-90" />
                  <span>+1 248-828-5305</span>
                </a>
                <Link to="/donate" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                  <FaHeart />
                  <span>Donate</span>
                </Link>
              </div>

              {/* Bottom Navigation Row */}
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-1 text-white hover:text-blue-100 transition-colors duration-200 font-semibold text-base relative group`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                    ></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-blue-100 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#009bd5] border-t border-blue-400 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 text-white">
              {/* Mobile Contact Info */}
              <div className="flex flex-col space-y-2 mb-4 text-sm border-b border-blue-300 pb-4">
                <a href="mailto:cslmchurch@gmail.com" className="flex items-center gap-2">
                  <FaEnvelope /> <span>cslmchurch@gmail.com</span>
                </a>
                <a href="tel:+12488285305" className="flex items-center gap-2">
                  <FaPhone /> <span>+1 248-828-5305</span>
                </a>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#0089bd] rounded-md transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={closeMenu}
                className="block px-3 py-2 bg-white text-[#00aeef] text-center rounded-md font-bold mt-4 shadow-sm"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
