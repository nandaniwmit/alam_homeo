import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Shield, Award, Heart, Send, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // === STEP 11: GLOBAL TRACKING (MANDATORY HOOK) ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer

    // Location Change & Visibility
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach((evt) => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Assurance Banner */}
        <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 mb-14 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Health Tips & Monthly Medicine Reminders</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Subscribe for Healthcare Updates & Refill Alerts</h3>
              <p className="text-xs text-slate-400">Receive seasonal health advice, stock alerts for rare dilutions, and special wellness offers in Aurangabad.</p>
            </div>

            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2.5 max-w-md w-full">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-emerald-600/20"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
          {newsletterSubscribed && (
            <div className="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-400 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4" />
              <span>Thank you! You have been subscribed to {SITE_CONFIG.businessName} health updates.</span>
            </div>
          )}
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800 text-sm">
          
          {/* Column 1: Business Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                AH
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-tight">{SITE_CONFIG.businessName}</span>
                <span className="text-[11px] text-emerald-400 font-medium">Homeopathic Pharmacy & Healthcare</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {SITE_CONFIG.tagline}. Dedicated to delivering genuine German & Indian homeopathic medicines, mother tinctures, biocombinations, and precision health monitors in Aurangabad, Bihar.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-emerald-400 transition">{SITE_CONFIG.formattedPhone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-emerald-400 transition">{SITE_CONFIG.email}</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>About Us & Heritage</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>Services & Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span>Live Medicine Stock Checker</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>Store Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>Contact & Directions</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>Staff / Patient Portal Login</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">Dispensary Hours</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white">Monday – Saturday</span>
                  <span className="text-slate-400">{SITE_CONFIG.hours.monSat}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white">Sunday</span>
                  <span className="text-slate-400">{SITE_CONFIG.hours.sunday}</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-[11px] text-emerald-400">
                <strong>Emergency Helpline:</strong> 24/7 WhatsApp assistance available for urgent medicines.
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-white block mb-2">Connect With Us:</span>
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-emerald-700 hover:bg-emerald-600 flex items-center justify-center text-white text-xs font-bold transition"
                  aria-label="WhatsApp"
                >
                  WA
                </a>
                <a
                  href={SITE_CONFIG.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-blue-700 hover:bg-blue-600 flex items-center justify-center text-white text-xs font-bold transition"
                  aria-label="Google Maps"
                >
                  GM
                </a>
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-indigo-700 hover:bg-indigo-600 flex items-center justify-center text-white text-xs font-bold transition"
                  aria-label="Facebook"
                >
                  FB
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Google Map & Location */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">Store Location</h4>
            <div className="rounded-2xl overflow-hidden border border-slate-700 h-36 relative bg-slate-800 shadow-inner">
              <iframe
                title="Alam Homeo Store Location"
                src="https://maps.google.com/maps?q=Ramesh+Chowk+Aurangabad+Bihar+824101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href={SITE_CONFIG.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
            >
              <span>Open in Google Maps Navigation</span>
              <span>&rarr;</span>
            </a>
          </div>

        </div>

        {/* Legal Links Bar */}
        <div className="pt-6 pb-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <Link to="/about" className="hover:text-white transition">Store Overview</Link>
          <span>•</span>
          <Link to="/services" className="hover:text-white transition">Authentic Dispensary</Link>
          <span>•</span>
          <span className="text-slate-500">Privacy Policy</span>
          <span>•</span>
          <span className="text-slate-500">Terms & Conditions</span>
          <span>•</span>
          <span className="text-slate-500">Medical Disclaimer: Consult certified practitioner for prescription drugs</span>
        </div>

        {/* Copyright Line with EXACT MANDATORY WMIT TRIGGER IN CENTER */}
        <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.</p>
          
          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVE EXACTLY: */}
          <div>
            <a href="#" className="wmit-popup-trigger text-emerald-400 hover:text-emerald-300 font-medium transition underline-offset-2 hover:underline">
              Developed by WMIT
            </a>
          </div>

          <p className="text-[11px] text-slate-500">Aurangabad, Bihar 824101</p>
        </div>

      </div>
    </footer>
  );
}
