import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  ShoppingBag, 
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GalleryItem } from '../types';

interface OutletContextType {
  openWhatsAppModal: (medName?: string) => void;
}

export const Gallery: React.FC = () => {
  const { openWhatsAppModal } = useOutletContext<OutletContextType>();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Store Front', 'Shelves & Storage', 'Products', 'Devices', 'Consultation'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const activeLightboxItem: GalleryItem | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div id="gallery-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 text-left">
      <SEOHead
        title="Store Gallery & Dispensary Tour | Alam Homeo Aurangabad"
        description="View photos of Alam Homeo dispensary racks, genuine German homeopathic formulations, mother tinctures, and diagnostic monitors in Aurangabad, Bihar."
        canonicalPath="/gallery"
      />

      <Breadcrumbs items={[{ label: 'Gallery' }]} />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          Visual Tour
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Store Front, Dispensary & Products Gallery
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Inspect our hygienic dispensary environment, neatly arranged German dilution racks, diagnostic instruments, and authentic homeopathic medicines.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors"></div>

              {/* Lightbox Zoom Trigger */}
              <button
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Enlarge photo: ${item.title}`}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-full shadow-lg text-emerald-600 dark:text-emerald-400">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </button>

              {/* Category Badge */}
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider">
                {item.category}
              </span>
            </div>

            {/* Caption */}
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevLightbox}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-50 hidden sm:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextLightbox}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-50 hidden sm:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-full p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {activeLightboxItem.category}
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {activeLightboxItem.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  {activeLightboxItem.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setLightboxIndex(null);
                  openWhatsAppModal(`Photo Inquiry: ${activeLightboxItem.title}`);
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-2 shrink-0"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Callout */}
      <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Visit Our Dispensary in Aurangabad
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Conveniently situated near Ramesh Chowk, MG Road, Aurangabad, Bihar 824101.
          </p>
        </div>

        <button
          onClick={() => openWhatsAppModal()}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition shadow-md shrink-0"
        >
          Check Specific Remedy in Dispensary
        </button>
      </div>

    </div>
  );
};
