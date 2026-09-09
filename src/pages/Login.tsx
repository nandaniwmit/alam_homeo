import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!identifier.trim()) {
      setErrorMessage('Please enter your registered Email or 10-digit Mobile Number.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    // Simulate secure authentication verification
    setTimeout(() => {
      setIsLoading(false);
      // Demo successful login state for staff or registered customer portal
      setLoginSuccess(true);
    }, 1200);
  };

  return (
    <div id="login-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-left">
      <SEOHead
        title="Secure Portal Login | Alam Homeo Aurangabad"
        description="Secure patient & staff portal login for Alam Homeo, Aurangabad, Bihar. Access prescription records, monthly refills, and store management."
        canonicalPath="/login"
      />

      <Breadcrumbs items={[{ label: 'Portal Login' }]} />

      <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-9 shadow-2xl border border-slate-100 dark:border-slate-800 relative">
          
          {/* Business Logo & Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-lg shadow-emerald-600/25 mx-auto">
              <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
                <path d="M24 10V38M10 24H38" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                <circle cx="24" cy="24" r="5" fill="#A7F3D0"/>
              </svg>
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {SITE_CONFIG.businessName} Portal
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Dispensary Management & Patient Prescription Desk
              </p>
            </div>
          </div>

          {/* Error Alert */}
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 flex items-start gap-2.5 text-rose-700 dark:text-rose-300 text-xs animate-shake">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success State */}
          {loginSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Authenticated Successfully!
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Welcome back to {SITE_CONFIG.businessName}. You are now securely connected to the prescription records & inventory dispatch workspace.
              </p>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-md"
                >
                  <span>Go to Medicine Stock & Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              
              {/* Email / Mobile Field */}
              <div>
                <label 
                  htmlFor="user-identifier"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email or Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="user-identifier"
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Enter email or 10-digit mobile..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              {/* Password Field with Show/Hide Toggle */}
              <div>
                <label 
                  htmlFor="user-password"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="user-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-11 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                  />
                  <span className="text-slate-600 dark:text-slate-400">Remember Me</span>
                </label>

                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Secure Login Button with Loading State */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  id="submit-portal-login-btn"
                  className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying Credentials...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Secure Login</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* Security Assurance Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center space-y-2">
            <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>256-Bit Encrypted Healthcare Session</span>
            </p>
            <p className="text-[11px] text-slate-400">
              Need assistance with your portal access? Contact our helpline at{' '}
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                {SITE_CONFIG.formattedPhone}
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* Forgot Password Modal Helper */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-100 relative text-left">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Password Reset Assistance</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              To protect sensitive patient prescription records, password resets are processed via authenticated verification with our chief pharmacist at the Aurangabad counter or direct WhatsApp OTP.
            </p>
            <div className="space-y-2">
              <a
                href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Alam Homeo, I need assistance resetting my portal password.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold text-center block transition"
              >
                Request Reset OTP on WhatsApp
              </a>
              <button
                onClick={() => setShowForgotPassword(false)}
                className="w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold text-center block hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
