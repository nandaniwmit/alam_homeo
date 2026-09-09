import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag, Sun, Moon, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { PWAInstallButton } from './PWAInstallButton';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' }
  ];

  return (
    <>
      {/* Top Notification / Emergency Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Genuine Homeopathic Medicines
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-emerald-400" />
              {SITE_CONFIG.address.city}, Bihar {SITE_CONFIG.address.pincode}
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-emerald-400" />
              Open Today: {SITE_CONFIG.hours.monSat}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1 font-semibold text-white hover:text-emerald-400 transition"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Helpline: {SITE_CONFIG.formattedPhone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={onOpenWhatsAppModal}
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>WhatsApp Prescription Dispatch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800'
            : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Brand Identity */}
            <Link to="/" className="flex items-center space-x-3 group shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-lg shadow-emerald-600/25 group-hover:scale-105 transition-transform">
                {/* SVG Medical Cross + Leaf brand icon */}
                <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                  <path d="M24 10V38M10 24H38" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                  <circle cx="24" cy="24" r="5" fill="#A7F3D0"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight leading-tight flex items-center gap-1.5">
                  {SITE_CONFIG.businessName}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                    Pharmacy
                  </span>
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Aurangabad, Bihar (824101)
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* PWA Add to Home Button */}
              <PWAInstallButton variant="nav" />

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Dark / Light Mode"
                className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>

              {/* WhatsApp Order Button */}
              <button
                onClick={onOpenWhatsAppModal}
                id="header-order-medicine-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Medicine</span>
              </button>
            </div>

            {/* Mobile Menu & Theme Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open Navigation Menu"
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="sm:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-semibold transition ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
              {/* PWA Mobile Add to Home */}
              <PWAInstallButton variant="mobile" />

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>WhatsApp Medicine Order</span>
              </button>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Store ({SITE_CONFIG.formattedPhone})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
