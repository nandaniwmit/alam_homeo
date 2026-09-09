import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  ShoppingBag, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Clock, 
  ArrowRight, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Search,
  Activity,
  Pill,
  Leaf,
  FlaskConical,
  HeartPulse
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { REVIEWS_DATA } from '../data/reviewsData';
import { FAQ_DATA } from '../data/faqData';
import { SEOHead } from '../components/SEOHead';
import { PWAInstallButton } from '../components/PWAInstallButton';

interface OutletContextType {
  openWhatsAppModal: (medName?: string) => void;
}

export const Home: React.FC = () => {
  const { openWhatsAppModal } = useOutletContext<OutletContextType>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Take maximum 6 featured services for preview
  const featuredServices = SERVICES_DATA.slice(0, 6);
  // Take preview reviews
  const previewReviews = REVIEWS_DATA.slice(0, 3);
  // Take preview FAQs
  const previewFaqs = FAQ_DATA.slice(0, 4);

  const featuredMedicines = [
    { name: 'Dr. Reckeweg R89', category: 'Hair Care Drops', brand: 'Dr. Reckeweg Germany', price: '₹330', tag: 'Bestseller' },
    { name: 'Arnica Montana 30 CH', category: 'Pain & Injury Dilution', brand: 'Schwabe', price: '₹195', tag: 'Fast Moving' },
    { name: 'Berberis Aquifolium Q', category: 'Pure Botanical Tincture', brand: 'Schwabe Germany', price: '₹310', tag: 'Top Rated' },
    { name: 'Biocombination No. 20', category: 'Skin Restorative Salts', brand: 'SBL', price: '₹170', tag: 'Popular' }
  ];

  const healthTips = [
    {
      title: 'How to Take Homeopathic Dilutions for Optimal Efficacy',
      desc: 'Keep a 15-minute gap before and after meals. Avoid strong camphor or mint odors right before liquid dilution doses.',
      tag: 'Usage Guide'
    },
    {
      title: 'Managing Seasonal Allergies with Mother Tinctures',
      desc: 'Natural immune support using Echinacea and Ocimum sanctum drops diluted in lukewarm water twice daily.',
      tag: 'Preventive Health'
    },
    {
      title: 'Essential Home Health Monitoring for Seniors',
      desc: 'Why regular blood pressure and blood glucose checks prevent complications before clinical onset.',
      tag: 'Family Care'
    }
  ];

  return (
    <div id="home-page" className="space-y-16 sm:space-y-24">
      <SEOHead
        title="Alam Homeo - Trusted Homeopathic Medical Store & Healthcare | Aurangabad, Bihar"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Aurangabad, Bihar 824101."
        canonicalPath="/"
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Trusted Pharmacy in Aurangabad, Bihar (824101)
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Your Trusted Medical Store for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600">Genuine Medicines</span> & Healthcare Needs
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices. Direct wholesale-authenticated sourcing from Dr. Reckeweg, Schwabe, and SBL.
              </p>

              {/* Three Mandatory Buttons: Call Now, WhatsApp Order, Get Directions */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  id="hero-call-now-btn"
                  className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm shadow-lg shadow-blue-600/25 flex items-center gap-2 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={() => openWhatsAppModal()}
                  id="hero-whatsapp-order-btn"
                  className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center gap-2 transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={SITE_CONFIG.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-get-directions-btn"
                  className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center gap-2 transition"
                >
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>100% Sealed & Authentic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Prompt Local Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Expert Advice</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Healthcare Background Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80"
                    alt="Alam Homeo Dispensary Racks in Aurangabad, Bihar"
                    className="w-full h-[420px] object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-[11px] font-bold uppercase tracking-wider">
                      Aurangabad Dispensary
                    </span>
                    <h3 className="font-bold text-lg mt-1 text-white">Genuine Dilutions & Diagnostic Care</h3>
                    <p className="text-xs text-slate-200 mt-0.5">Near Ramesh Chowk, MG Road, Aurangabad 824101</p>
                  </div>
                </div>

                {/* Floating stock checker callout */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-emerald-100 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">Stock Availability</span>
                    <Link to="/services" className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1">
                      <span>Search Live Inventory &rarr;</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
                alt="Alam Homeo Store Front Counter"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-emerald-900/20"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-3 rounded-xl text-center">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Serving Aurangabad Since Inception</p>
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400">Authentic Healthcare Solutions</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                About Our Pharmacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Dedicated to Authentic Homeopathy & Community Wellness
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Located near Ramesh Chowk in Aurangabad, Bihar, <strong>{SITE_CONFIG.businessName}</strong> has earned the trust of families and practitioners through unwavering fidelity to genuine medicines. We store every dilution, mother tincture, and biochemic compound under optimal temperature control to preserve molecular purity and therapeutic potency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Authorized dealer of Schwabe & Reckeweg</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pure sugar globules & sterilized glass dispensing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified home diagnostic devices with warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rapid WhatsApp prescription fulfillment</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  id="home-about-view-more-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md"
                >
                  <span>Read Complete Story & Heritage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6 WITH VIEW MORE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Our Healthcare Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Comprehensive Pharmacy Services in Aurangabad
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Explore our verified range of homeopathic formulations, diagnostic instruments, and patient services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition group flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  {service.category}
                </span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 transition">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center justify-between">
                <button
                  onClick={() => openWhatsAppModal(service.title)}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </button>
                <Link
                  to="/services"
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                >
                  <span>Details &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            id="home-services-view-more-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-600/20 transition"
          >
            <span>View All Categories & Live Stock Checker</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-slate-100/80 dark:bg-slate-900/60 py-16 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              The Alam Homeo Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Why Aurangabad Families Rely On Us
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              We uphold the highest clinical standards so you always receive genuine formulations with reliable batch security.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200/70 dark:border-slate-800 text-left space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">100% Genuine Seals</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Direct authorized sourcing with hologram seals, clear manufacturing lots, and manufacturer expiry verification.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200/70 dark:border-slate-800 text-left space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Extensive Rare Catalog</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Hard-to-find potencies (1M, 10M, 50 Millesimal), rare botanical tinctures, and complete tissue combinations.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200/70 dark:border-slate-800 text-left space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Doorstep Dispatch</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Same-day prompt home delivery across Aurangabad city zones with shock-resistant liquid bottle wrapping.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200/70 dark:border-slate-800 text-left space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Dosage Guidance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Clear instructions in Hindi and English on dilution water ratios, globule intake, and meal gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Popular in Store
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Top-Moving Medicines & Healthcare Essentials
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>Open Medicine Stock Checker &rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMedicines.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 flex flex-col justify-between text-left relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-extrabold uppercase">
                  {item.tag}
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs text-slate-400 block font-medium">{item.brand}</span>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">{item.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.category}</p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center justify-between">
                <span className="font-extrabold text-base text-slate-900 dark:text-white">{item.price}</span>
                <button
                  onClick={() => openWhatsAppModal(`${item.name} (${item.brand})`)}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW (WITH VIEW MORE TO ABOUT/CONTACT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Real Customer Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Trusted by Patients Across Aurangabad
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Verified local community responses regarding medicine authenticity, friendly guidance, and swift fulfillment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 flex flex-col justify-between text-left space-y-4"
            >
              <div className="space-y-2">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-xs text-slate-900 dark:text-white">{rev.author}</h4>
                <p className="text-[11px] text-slate-400">{rev.location} • {rev.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/about"
            id="home-reviews-view-more-btn"
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-center gap-1"
          >
            <span>Learn More About Our Aurangabad Community Commitment &rarr;</span>
          </Link>
        </div>
      </section>

      {/* 7. FAQ PREVIEW (MAX 4 WITH VIEW MORE) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Questions & Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Quick clarity on prescriptions, WhatsApp dispatch, and homeopathic dilution dispensing.
          </p>
        </div>

        <div className="space-y-3">
          {previewFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs text-left"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full py-4 px-5 text-left font-semibold text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openFaqIndex === idx ? 'transform rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>

              {openFaqIndex === idx && (
                <div className="px-5 pb-4 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/contact"
            id="home-faq-view-more-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition"
          >
            <span>Have More Inquiries? Contact Our Pharmacist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Wellness Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Latest Homeopathic Health Tips
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Practical knowledge for managing daily family wellness naturally and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 text-left space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase">
                  {tip.tag}
                </span>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tip.desc}
                </p>
              </div>

              <button
                onClick={() => openWhatsAppModal(`Health Inquiry: ${tip.title}`)}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 pt-4 border-t border-slate-100 dark:border-slate-800"
              >
                <span>Ask Pharmacist on WhatsApp &rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 9. MAIN CALL TO ACTION (CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-sky-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              Urgent Medicine Delivery • Aurangabad 824101
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Need Genuine Homeopathic Medicines Dispatched Today?
            </h2>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Upload your prescription or send your required dilution names directly via WhatsApp. Our team will verify potency availability and dispatch immediately.
            </p>

            <div className="pt-2 flex flex-wrap gap-3.5 justify-center sm:justify-start">
              <button
                onClick={() => openWhatsAppModal()}
                id="cta-whatsapp-order-btn"
                className="px-6 py-3.5 rounded-2xl bg-white text-emerald-900 font-bold text-sm shadow-lg hover:bg-emerald-50 transition flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                <span>Order via WhatsApp Now</span>
              </button>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                id="cta-call-btn"
                className="px-6 py-3.5 rounded-2xl bg-emerald-950/60 hover:bg-emerald-950/80 border border-emerald-400/40 text-white font-bold text-sm transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline: {SITE_CONFIG.formattedPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
