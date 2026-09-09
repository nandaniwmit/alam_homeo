import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Eye, 
  Heart, 
  Calendar, 
  UserCheck, 
  MapPin, 
  ShoppingBag, 
  CheckCircle2, 
  Building2, 
  Activity,
  Phone
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface OutletContextType {
  openWhatsAppModal: (medName?: string) => void;
}

export const About: React.FC = () => {
  const { openWhatsAppModal } = useOutletContext<OutletContextType>();

  const timeline = [
    {
      year: 'Founding Year',
      title: 'Dispensary Established in Aurangabad',
      desc: 'Started as a specialized homeopathic dispensary near Ramesh Chowk, catering to local homeopathic doctors and families seeking pure dilutions.'
    },
    {
      year: 'Catalog Expansion',
      title: 'Official Partnership with German & Indian Formulations',
      desc: 'Expanded direct procurement tie-ups with Dr. Reckeweg (Germany), Dr. Willmar Schwabe, and SBL to ensure 100% genuine batch integrity.'
    },
    {
      year: 'Diagnostic Division',
      title: 'Healthcare Devices & Diagnostic Monitoring',
      desc: 'Added hospital-grade home health equipment including Omron digital BP monitors, Accu-Chek glucometers, and ultrasonic nebulizers.'
    },
    {
      year: 'Digital & Express Service',
      title: 'WhatsApp Prescription Ordering & PWA Integration',
      desc: 'Launched digital medicine catalog, real-time stock verification, and doorstep medicine delivery for residents across Aurangabad (824101).'
    }
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Uncompromised Purity',
      desc: 'Every dilution and tincture is kept in amber pharmaceutical bottles away from direct sunlight, guaranteeing zero adulteration or loss of active potencies.'
    },
    {
      icon: Heart,
      title: 'Patient-First Compassion',
      desc: 'We take time to explain dosing rules, globulet saturation methods, and lifestyle guidelines so every patient achieves lasting relief.'
    },
    {
      icon: Award,
      title: 'Authenticity Guaranteed',
      desc: 'Zero counterfeit or unbranded concoctions. Sourced exclusively from licensed and GMP-certified laboratories.'
    },
    {
      icon: Building2,
      title: 'Community Roots',
      desc: 'Proudly serving Aurangabad district with honesty, ethical pricing, and responsive round-the-clock emergency support.'
    }
  ];

  const achievements = [
    { metric: '10,000+', label: 'Patients & Families Served in Aurangabad' },
    { metric: '1,500+', label: 'Homeopathic Dilutions & Tinctures in Stock' },
    { metric: '100%', label: 'Authentic Sealed Laboratory Formulations' },
    { metric: '100%', label: 'Local Same-Day Dispatch Commitment' }
  ];

  return (
    <div id="about-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <SEOHead
        title="About Alam Homeo | Our Heritage & Pharmacy Commitment"
        description="Learn about Alam Homeo in Aurangabad, Bihar. Our story, mission, pharmacist message, timeline, and commitment to genuine homeopathic healthcare."
        canonicalPath="/about"
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          Our Heritage & Mission
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Rooted in Healing, Committed to Authentic Homeopathic Care
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {SITE_CONFIG.businessName} was established in Aurangabad, Bihar with a singular mission: to provide families with genuine, laboratory-sealed homeopathic remedies, botanical mother tinctures, and reliable health diagnostics.
        </p>
      </div>

      {/* Business Story & Overview Grid */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 dark:border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              The Story Behind Alam Homeo
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              In a healthcare landscape often burdened by counterfeit remedies and inconsistent potencies, <strong>{SITE_CONFIG.businessName}</strong> was founded near Ramesh Chowk to be the gold standard of trust in Aurangabad. Homeopathy relies fundamentally on the microscopic dilution and succussion of medicinal substances — meaning even a minor impurity or improper storage degrades therapeutic action.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Recognizing this critical reality, our dispensary invested in pharmaceutical-grade climate storage, pure sugar globules, and rigorous inventory controls. Over the years, we have grown into the preferred dispensary for leading homoeopaths, physicians, and conscious families across the Aurangabad district.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700 dark:text-slate-200">
              <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Near Ramesh Chowk, MG Road
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <Activity className="w-3.5 h-3.5 text-emerald-600" />
                PIN: 824101, Bihar
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80"
                alt="Sealed Homeopathic Formulations at Alam Homeo"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Achievements Counter */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 p-6 rounded-3xl text-center shadow-md border border-slate-100 dark:border-slate-800 space-y-1.5"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 block font-display">
              {item.metric}
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-300 font-medium block">
              {item.label}
            </span>
          </div>
        ))}
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Guiding Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Mission, Vision & Principles
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Guiding every interaction, prescription verification, and bottle dispensed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 text-left space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To make authentic, affordable, and high-potency homeopathic medicines readily accessible to every citizen of Aurangabad, while educating patients on correct regimen discipline for holistic, permanent healing.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 text-left space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be recognized as Bihar&apos;s most technologically progressive, digitally accessible, and ethically uncompromising homeopathic healthcare dispensary, bridging traditional medicine with modern convenience.
            </p>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 text-left space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-600">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">{v.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pharmacist / Store Owner Message */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-8 sm:p-12 rounded-3xl border border-emerald-200/60 dark:border-slate-700 text-left">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
              AH
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">A Message from the Pharmacist Desk</h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Alam Homeo Leadership & Dispensary In-Charge</p>
            </div>
          </div>

          <blockquote className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-4 border-emerald-500 pl-4">
            &quot;In homeopathy, the medicine is more than a chemical substance — it is a delicately prepared potentized energy that stimulates the body’s innate vital force. When a patient in Aurangabad trusts us with their doctor’s prescription, we feel a deep moral responsibility to deliver 100% genuine German or Indian potencies, correctly labeled, and with clear guidance on administration. We thank our patrons for making Alam Homeo a trusted healthcare household name.&quot;
          </blockquote>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300 border-t border-emerald-200/70 dark:border-slate-700">
            <span>Direct Helpline: <strong>{SITE_CONFIG.formattedPhone}</strong></span>
            <span>Location: <strong>Ramesh Chowk, Aurangabad, Bihar 824101</strong></span>
          </div>
        </div>
      </section>

      {/* Business Journey & Timeline */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Our Evolution
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Milestones of Trust & Growth
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            From our founding days near Ramesh Chowk to becoming a comprehensive digital-ready healthcare dispensary.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-left">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {item.year}
                </span>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA to Services */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold">Have a Prescription or Looking for a Specific Remedy?</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Use our live searchable medicine inventory or send your prescription via WhatsApp for prompt packaging.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/services"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md"
          >
            Browse Services & Medicine Stock
          </Link>
          <button
            onClick={() => openWhatsAppModal()}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-bold transition flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Prescription Dispatch</span>
          </button>
        </div>
      </div>

    </div>
  );
};
