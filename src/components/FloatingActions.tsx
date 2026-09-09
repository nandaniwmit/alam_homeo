import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Container (Bottom Right) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="pointer-events-auto p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          aria-label="Call Alam Homeo Store"
          className="pointer-events-auto p-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 transition-all transform hover:scale-105 group relative"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none">
            Call Store: {SITE_CONFIG.formattedPhone}
          </span>
        </a>

        {/* Floating WhatsApp Medicine Order Button */}
        <button
          onClick={onOpenWhatsAppModal}
          id="floating-whatsapp-btn"
          aria-label="Chat & Order on WhatsApp"
          className="pointer-events-auto p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 transition-all transform hover:scale-110 group relative flex items-center justify-center animate-bounce-slight"
        >
          {/* Custom WhatsApp Icon / Chat Vector */}
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-emerald-950 text-emerald-200 text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg border border-emerald-800 pointer-events-none flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
            WhatsApp Medicine Order
          </span>

          {/* Pulse notification dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </button>
      </div>

      {/* Sticky Bottom Quick Action Bar for Mobile Devices (under 640px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span>Call Store</span>
        </a>
        <button
          onClick={onOpenWhatsAppModal}
          className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </>
  );
};
