import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  ShoppingBag, 
  Search, 
  FlaskConical, 
  Leaf, 
  Pill, 
  Activity, 
  HeartPulse, 
  Sparkles, 
  ClipboardCheck, 
  Truck, 
  CheckCircle, 
  Phone,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface OutletContextType {
  openWhatsAppModal: (medName?: string) => void;
}

export const Services: React.FC = () => {
  const { openWhatsAppModal } = useOutletContext<OutletContextType>();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Homeopathic Medicine', 'Tissue Salts', 'Formulations', 'Medical Equipment', 'Personal Care', 'Pharmacy Service', 'Delivery Service'];

  const filteredServices = activeCategoryFilter === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategoryFilter);

  // Icon mapping helper
  const getIcon = (name: string) => {
    switch (name) {
      case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
      case 'Leaf': return <Leaf className="w-6 h-6" />;
      case 'Pill': return <Pill className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      default: return <FlaskConical className="w-6 h-6" />;
    }
  };

  return (
    <div id="services-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 text-left">
      <SEOHead
        title="Dispensary Services & Live Medicine Stock Checker | Alam Homeo"
        description="Search real-time stock of homeopathic dilutions, mother tinctures, biocombination tablets, and health monitors at Alam Homeo in Aurangabad, Bihar."
        canonicalPath="/services"
      />

      <Breadcrumbs items={[{ label: 'Services & Stock Checker' }]} />

      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          Complete Pharmacy Catalog
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Pharmacy Services & Real-Time Medicine Stock
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          From German potencies and pure botanical extracts to digital diagnostic equipment, discover our comprehensive dispensary services and verify live inventory in Aurangabad.
        </p>
      </div>

      {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER COMPONENT */}
      <section id="inventory-checker-section">
        <MedicineStockChecker onSelectMedicineForOrder={(med) => openWhatsAppModal(med)} />
      </section>

      {/* Category Wise Service Navigation Filter */}
      <section className="space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Category-Wise Healthcare Services
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select a category to view detailed descriptions, available brands, and fulfillment options.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategoryFilter === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.detailedDesc}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block uppercase tracking-wider">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Available Brands Tag List */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Authorized Brands / Standards:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.brandsAvailable.map((b, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 text-[11px] font-medium border border-emerald-100 dark:border-slate-700"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => openWhatsAppModal(service.title)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-2 shadow-md shadow-emerald-600/20"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order / Inquire on WhatsApp</span>
                </button>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency & Prescription Callout */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="px-3 py-1 rounded-full bg-emerald-700 text-emerald-100 text-xs font-bold uppercase tracking-wider">
            Prescription Verification Helpline
          </span>
          <h3 className="text-2xl font-bold">Have a Doctor&apos;s Prescription Slip?</h3>
          <p className="text-xs text-emerald-100 leading-relaxed">
            Snap a clear photo and send it directly to our chief pharmacist via WhatsApp. We will cross-check all potencies, prepare globules if prescribed, and confirm the bill before dispatch.
          </p>
        </div>

        <button
          onClick={() => openWhatsAppModal()}
          className="px-6 py-3.5 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 text-sm font-bold shadow-lg transition flex items-center gap-2 shrink-0"
        >
          <ShoppingBag className="w-4 h-4 text-emerald-600" />
          <span>Send Prescription via WhatsApp</span>
        </button>
      </section>

    </div>
  );
};
