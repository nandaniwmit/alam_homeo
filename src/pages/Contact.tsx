import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  ShoppingBag, 
  Navigation, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface OutletContextType {
  openWhatsAppModal: (medName?: string) => void;
}

export const Contact: React.FC = () => {
  const { openWhatsAppModal } = useOutletContext<OutletContextType>();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Medicine Stock Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Also offer direct WhatsApp dispatch
    const encoded = encodeURIComponent(
      `Hello ${SITE_CONFIG.businessName},\nWebsite Contact Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div id="contact-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 text-left">
      <SEOHead
        title="Contact & Store Location | Alam Homeo Aurangabad, Bihar"
        description="Visit Alam Homeo near Ramesh Chowk, MG Road, Aurangabad, Bihar 824101. Phone: +91 8540905120. Store timings, WhatsApp order & Google Map directions."
        canonicalPath="/contact"
      />

      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Contact Alam Homeo & Visit Our Store
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Need medicine verification, urgent doorstep delivery, or directions to our dispensary in Aurangabad, Bihar? Reach out via phone, WhatsApp, or contact form below.
        </p>
      </div>

      {/* Quick Action Buttons (Call Button, WhatsApp Button, Directions Button) */}
      <div className="flex flex-wrap gap-4 pt-1">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          id="contact-call-btn"
          className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/20 flex items-center gap-2 transition active:scale-[0.98]"
        >
          <Phone className="w-4 h-4" />
          <span>Call Us: {SITE_CONFIG.formattedPhone}</span>
        </a>

        <button
          onClick={() => openWhatsAppModal()}
          id="contact-whatsapp-btn"
          className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition active:scale-[0.98]"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>WhatsApp Medicine Order</span>
        </button>

        <a
          href={SITE_CONFIG.social.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          id="contact-directions-btn"
          className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center gap-2 transition"
        >
          <Navigation className="w-4 h-4 text-emerald-600" />
          <span>Get Google Maps Directions</span>
        </a>
      </div>

      {/* Main Grid: Business Information, Hours & Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left 5 Cols: Business Info & Working Hours */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Business Information
            </h3>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">Dispensary Address</span>
                  <span>{SITE_CONFIG.address.full}</span>
                  <span className="block text-xs text-slate-400 mt-0.5">{SITE_CONFIG.address.landmark}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">Helpline & Orders</span>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">
                    {SITE_CONFIG.formattedPhone}
                  </a>
                  <span className="block text-xs text-slate-400 mt-0.5">WhatsApp / Phone Orders Available</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">Email Inquiries</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Working Hours</span>
              </h4>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-50 dark:border-slate-800">
                  <span className="font-medium text-slate-800 dark:text-slate-200">Monday – Saturday</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{SITE_CONFIG.hours.monSat}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50 dark:border-slate-800">
                  <span className="font-medium text-slate-800 dark:text-slate-200">Sunday</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{SITE_CONFIG.hours.sunday}</span>
                </div>
                <div className="p-3 bg-emerald-50 dark:bg-slate-800 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs font-medium">
                  <strong>Urgent Assistance:</strong> 24/7 WhatsApp prescription drop & emergency coordination.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right 7 Cols: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Send an Online Inquiry
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Our pharmacist responds within 30 minutes during working dispensary hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">Inquiry Received Successfully!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has also been initiated on WhatsApp for rapid response from our Aurangabad dispensary team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-600 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Prakash"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-200"
                    >
                      <option value="Medicine Stock Inquiry">Medicine Stock Inquiry</option>
                      <option value="Prescription Verification">Prescription Verification</option>
                      <option value="Doorstep Delivery Request">Doorstep Delivery Request</option>
                      <option value="Medical Device Availability">Medical Device Availability</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Required Medicines <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your query or list the medicine names, brands, or potencies you need..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Connect on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Embedded Google Map Section */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Google Maps Location & Driving Directions
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Easily accessible in central Aurangabad near Ramesh Chowk and MG Road market.
            </p>
          </div>

          <a
            href={SITE_CONFIG.social.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition shrink-0"
          >
            <Navigation className="w-3.5 h-3.5 text-emerald-600" />
            <span>Open in Maps App</span>
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-96 relative bg-slate-100 dark:bg-slate-800 shadow-inner">
          <iframe
            title="Alam Homeo Google Map Location Aurangabad Bihar"
            src="https://maps.google.com/maps?q=Ramesh+Chowk+Aurangabad+Bihar+824101&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
};
