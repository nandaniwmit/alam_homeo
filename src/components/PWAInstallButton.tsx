import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'mobile' | 'hero' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ className = '', variant = 'nav' }) => {
  const { isInstallable, isInstalled, showIOSGuide, setShowIOSGuide, installSuccess, installApp } = usePWAInstall();

  // If already running in installed standalone mode and not recently installed, hide smoothly
  if (isInstalled && !installSuccess) {
    return null;
  }

  if (installSuccess) {
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 ${className}`}>
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <span>App Installed</span>
      </span>
    );
  }

  // If not installable and not iOS, render subtle install button if requested or keep ready
  return (
    <>
      <button
        id="pwa-add-to-home-btn"
        onClick={installApp}
        aria-label="Add Alam Homeo App to Home Screen"
        title="Install Alam Homeo Progressive Web App on your device"
        className={`inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 select-none ${
          variant === 'nav'
            ? 'px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-slate-700 shadow-xs'
            : variant === 'hero'
            ? 'px-5 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600 shadow-md'
            : 'w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-center shadow-md'
        } ${className}`}
      >
        <span className="text-base" role="img" aria-label="smartphone">📲</span>
        <span>Add to Home</span>
      </button>

      <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
    </>
  );
};
