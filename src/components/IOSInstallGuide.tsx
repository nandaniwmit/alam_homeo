import React from 'react';
import { X, Share2, PlusSquare, Smartphone } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        id="ios-install-modal" 
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-emerald-100 dark:border-slate-800 text-slate-800 dark:text-slate-100 relative"
      >
        <button
          onClick={onClose}
          aria-label="Close installation guide"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Install {SITE_CONFIG.shortName} App</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Add to your iPhone or iPad Home Screen</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
          Install the official {SITE_CONFIG.businessName} app for instant medicine search, quick WhatsApp ordering, and offline access without opening the browser each time:
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-emerald-50/70 dark:bg-slate-800/60 border border-emerald-100/60 dark:border-slate-700/50">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 font-bold text-sm">
              1
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                Tap the Share button <Share2 className="w-4 h-4 inline text-blue-500" />
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Located at the bottom of Safari on iPhone, or top bar on iPad.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-emerald-50/70 dark:bg-slate-800/60 border border-emerald-100/60 dark:border-slate-700/50">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 font-bold text-sm">
              2
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                Select &quot;Add to Home Screen&quot; <PlusSquare className="w-4 h-4 inline text-emerald-600" />
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Scroll down in the share sheet options and tap &quot;Add to Home Screen&quot;.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-emerald-50/70 dark:bg-slate-800/60 border border-emerald-100/60 dark:border-slate-700/50">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 font-bold text-sm">
              3
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-900 dark:text-white">
                Tap &quot;Add&quot; in the top-right corner
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                The {SITE_CONFIG.shortName} icon will appear directly on your home screen!
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm transition shadow-md shadow-emerald-600/20 text-center"
        >
          Got It, Thanks!
        </button>
      </div>
    </div>
  );
};
