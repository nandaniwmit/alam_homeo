import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Globe, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const WMITModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleTriggerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.classList.contains('wmit-popup-trigger') || target.closest('.wmit-popup-trigger'))) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleTriggerClick);
    return () => document.removeEventListener('click', handleTriggerClick);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div 
        id="wmit-info-modal"
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-emerald-100 dark:border-slate-800 text-slate-800 dark:text-slate-100 relative"
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-bold text-xl">
            W
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">WebMaker IT Solutions</h3>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Official Digital Technology Partner</p>
          </div>
        </div>

        <div className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300 mb-6">
          <p className="leading-relaxed">
            This digital platform and Progressive Web Application (PWA) for <strong>{SITE_CONFIG.businessName}</strong> was architected by WebMaker IT Solutions (WMIT).
          </p>

          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Enterprise-grade Security & PWA Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
              <Award className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Local SEO & High-Performance Healthcare UI</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
              <HeartHandshake className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Real-Time Inventory & WhatsApp Ordering Systems</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
          <a
            href="https://webmakerit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
          >
            <Globe className="w-4 h-4" />
            <span>Visit WebMaker IT</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
