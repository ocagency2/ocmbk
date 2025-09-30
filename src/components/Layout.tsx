import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Award, Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-[#08070A] text-[#ECE8E3] font-['Inter'] antialiased">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-[#08070A]/95 backdrop-blur-lg border-b border-[#ECE8E3]/10' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#FFD777] rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-[#08070A]" />
            </div>
            <span className="text-xl font-['Playfair_Display'] font-bold">Gallaa</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/marketplace" 
              className={`hover:text-[#D4AF37] transition-colors duration-300 ${
                isActive('/marketplace') ? 'text-[#D4AF37]' : ''
              }`}
            >
              Marketplace
            </Link>
            <Link 
              to="/credit" 
              className={`hover:text-[#D4AF37] transition-colors duration-300 ${
                isActive('/credit') ? 'text-[#D4AF37]' : ''
              }`}
            >
              Credit Solutions
            </Link>
            <Link 
              to="/pricing" 
              className={`hover:text-[#D4AF37] transition-colors duration-300 ${
                isActive('/pricing') ? 'text-[#D4AF37]' : ''
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-[#D4AF37] transition-colors duration-300 ${
                isActive('/about') ? 'text-[#D4AF37]' : ''
              }`}
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 text-[#ECE8E3] hover:text-[#D4AF37] transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-medium rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300">
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#08070A]/98 backdrop-blur-lg border-t border-[#ECE8E3]/10">
            <div className="px-6 py-4 space-y-4">
              <Link to="/marketplace" className="block py-2 hover:text-[#D4AF37] transition-colors">Marketplace</Link>
              <Link to="/credit" className="block py-2 hover:text-[#D4AF37] transition-colors">Credit Solutions</Link>
              <Link to="/pricing" className="block py-2 hover:text-[#D4AF37] transition-colors">Pricing</Link>
              <Link to="/about" className="block py-2 hover:text-[#D4AF37] transition-colors">About</Link>
              <div className="pt-4 border-t border-[#ECE8E3]/10 space-y-2">
                <Link to="/login" className="block w-full text-left py-2 hover:text-[#D4AF37] transition-colors">
                  Sign In
                </Link>
                <Link to="/register" className="block w-full px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-medium rounded-lg text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#ECE8E3]/5 border-t border-[#ECE8E3]/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#FFD777] rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#08070A]" />
                </div>
                <span className="text-xl font-['Playfair_Display'] font-bold">Gallaa</span>
              </div>
              <p className="text-[#ECE8E3]/70 mb-6">
                India's premier luxury B2B marketplace, connecting manufacturers and retailers with smart credit solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-[#ECE8E3]/70">
                <li><Link to="/marketplace" className="hover:text-[#D4AF37] transition-colors">Marketplace</Link></li>
                <li><Link to="/credit" className="hover:text-[#D4AF37] transition-colors">Credit Solutions</Link></li>
                <li><Link to="/pricing" className="hover:text-[#D4AF37] transition-colors">Pricing</Link></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[#ECE8E3]/70">
                <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Partners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-[#ECE8E3]/70">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#ECE8E3]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#ECE8E3]/60 mb-4 md:mb-0">
              © 2025 Gallaa. All rights reserved. | CIN: U74999DL2024PTC123456
            </p>
            <div className="flex items-center space-x-6 text-sm text-[#ECE8E3]/60">
              <span>Made in India 🇮🇳</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;