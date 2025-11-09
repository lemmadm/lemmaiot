import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
  onConsultationClick: () => void;
}

const NavLinks: React.FC<{ className?: string, onLinkClick?: () => void }> = ({ className, onLinkClick }) => (
    <>
        <a href="/" className={className} onClick={onLinkClick}>Home</a>
        <a href="/services" className={className} onClick={onLinkClick}>Services</a>
        <a href="/about" className={className} onClick={onLinkClick}>About Us</a>
        <a href="/tools" className={className} onClick={onLinkClick}>Free Tools</a>
        <a href="/contact" className={className} onClick={onLinkClick}>Contact</a>
    </>
);

const Header: React.FC<HeaderProps> = ({ onConsultationClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <img src="https://lemmaiot.com.ng/assets/images/logo.png" alt="LemmaIoT Logo" className="h-12 w-auto" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="text-gray-600 hover:text-brand-blue transition-colors font-medium" />
          </div>

          <div className="hidden md:block">
            <button onClick={onConsultationClick} className="bg-brand-blue text-white px-6 py-3 rounded-full hover:bg-brand-blue-dark transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Free Consultation
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-700">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
            <NavLinks className="block text-gray-700 hover:text-brand-blue text-lg" onLinkClick={handleMobileLinkClick} />
            <button onClick={() => { setIsMenuOpen(false); onConsultationClick(); }} className="mt-4 w-full text-center bg-brand-blue text-white px-6 py-3 rounded-full hover:bg-brand-blue-dark transition font-semibold">
              Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
