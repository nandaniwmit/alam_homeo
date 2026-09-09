import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle, AlertTriangle, XCircle, ShoppingBag, ExternalLink, RefreshCw, Sparkles } from 'lucide-react';
import { MedicineStockItem } from '../types';
import rawStockData from '../data/medicineStock.json';
import { SITE_CONFIG } from '../data/siteConfig';

interface MedicineStockCheckerProps {
  onSelectMedicineForOrder?: (medName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ 
  onSelectMedicineForOrder,
  compact = false 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [stockList] = useState<MedicineStockItem[]>(rawStockData as MedicineStockItem[]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    stockList.forEach(item => cats.add(item.category));
    return ['All', ...Array.from(cats)];
  }, [stockList]);

  const filteredMedicines = useMemo(() => {
    return stockList.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.indication.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.potency && item.potency.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [stockList, searchTerm, selectedCategory, statusFilter]);

  const handleOrderClick = (medicine: MedicineStockItem) => {
    if (onSelectMedicineForOrder) {
      onSelectMedicineForOrder(`${medicine.name} (${medicine.brand})`);
    } else {
      const message = encodeURIComponent(
        `Hello ${SITE_CONFIG.businessName},\nI would like to inquire/order:\nMedicine: ${medicine.name}\nBrand: ${medicine.brand}\nPotency/Pack: ${medicine.potency || 'Standard'}\nMRP: ₹${medicine.mrp}\n\nPlease confirm availability and delivery to my address.`
      );
      window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${message}`, '_blank');
    }
  };

  return (
    <div id="medicine-stock-checker" className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800 transition-all">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Live Inventory Checker
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Real-Time Medicine Stock Availability
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Search genuine homeopathic dilutions, mother tinctures, biochemic salts, Dr. Reckeweg drops, and health devices in stock at our Aurangabad store.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
          <RefreshCw className="w-4 h-4 text-emerald-600 animate-spin-slow" />
          <span>Updated Hourly by Pharmacist</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mt-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="medicine-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by medicine name, brand (e.g. Reckeweg, Schwabe), condition (e.g. hair, acne, BP)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex gap-2">
            <select
              id="category-filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by Category"
              className="px-3.5 py-3 bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="All">All Categories</option>
              {categories.filter(c => c !== 'All').map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              id="status-filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by Stock Status"
              className="px-3.5 py-3 bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="All">All Status</option>
              <option value="Available">Available</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        {!compact && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-4 mb-3">
        <span>Showing <strong>{filteredMedicines.length}</strong> items in dispensary catalog</span>
        <span>Store Code: <strong>ALAM-824101</strong></span>
      </div>

      {/* Medicines Table / Grid */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-inner">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100/80 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider">
              <th className="py-3.5 px-4">Medicine & Indication</th>
              <th className="py-3.5 px-3">Brand / Potency</th>
              <th className="py-3.5 px-3">MRP</th>
              <th className="py-3.5 px-3">Status</th>
              <th className="py-3.5 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
            {filteredMedicines.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-12 text-slate-400 dark:text-slate-500">
                  <div className="max-w-md mx-auto space-y-3">
                    <p className="font-semibold text-slate-700 dark:text-slate-300 text-base">
                      No matching medicines found for &quot;{searchTerm}&quot;
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Looking for a rare dilution, specific potencies (1M, 10M, LM), or uncommon patents? Contact our chief pharmacist directly on WhatsApp.
                    </p>
                    <button
                      onClick={() => {
                        const message = encodeURIComponent(
                          `Hello Alam Homeo, I am searching for this medicine which was not listed in the checker: "${searchTerm}". Can you check if it is in dispensary stock?`
                        );
                        window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${message}`, '_blank');
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm transition"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Inquire Custom Order on WhatsApp
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              filteredMedicines.map((item) => (
                <tr 
                  key={item.id} 
                  className="hover:bg-emerald-50/40 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {item.indication}
                    </div>
                  </td>
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span className="font-medium text-slate-800 dark:text-slate-200">{item.brand}</span>
                    {item.potency && (
                      <span className="block text-xs text-slate-400 dark:text-slate-500 font-mono">
                        {item.potency}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                    ₹{item.mrp}
                  </td>
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    {item.status === 'Available' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        Available ({item.availableQuantity})
                      </span>
                    )}
                    {item.status === 'Limited Stock' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        Limited ({item.availableQuantity} left)
                      </span>
                    )}
                    {item.status === 'Out of Stock' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        Out of Stock
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => handleOrderClick(item)}
                      disabled={item.status === 'Out of Stock'}
                      title={item.status === 'Out of Stock' ? 'Currently Out of Stock' : 'Order via WhatsApp'}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition shadow-xs ${
                        item.status === 'Out of Stock'
                          ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
        <p>
          * MRP is subject to manufacturer revision. Genuine seal and batch inspection guaranteed.
        </p>
        <p className="text-emerald-700 dark:text-emerald-400 font-medium">
          Doorstep Home Delivery across Aurangabad (824101)
        </p>
      </div>
    </div>
  );
};
