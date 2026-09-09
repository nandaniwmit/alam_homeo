import React, { useState } from 'react';
import { X, Send, PhoneCall, UploadCloud, FileText, CheckCircle, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine);
  const [hasPrescription, setHasPrescription] = useState(false);
  const [prescriptionFileName, setPrescriptionFileName] = useState('');
  const [preferredTime, setPreferredTime] = useState('Immediate / As Soon As Possible');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update when prefilled changes
  React.useEffect(() => {
    if (prefilledMedicine) {
      setMedicineName(prefilledMedicine);
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFileName(file.name);
      setHasPrescription(true);
    }
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedMessage = 
`*Hello ${SITE_CONFIG.businessName} - Medicine Order*
---------------------------------------
*Customer Name:* ${customerName.trim() || 'Valued Customer'}
*Phone:* ${mobileNumber.trim() || 'Not Provided'}
*Email:* ${email.trim() || 'N/A'}
*Medicine Required:* ${medicineName.trim() || 'Please consult on WhatsApp'}
*Delivery Address:* ${address.trim() || 'Aurangabad, Bihar'}
*Prescription Attached:* ${hasPrescription ? `Yes (${prescriptionFileName || 'Image Ready to Send'})` : 'No'}
*Preferred Delivery Time:* ${preferredTime}
*Special Notes:* ${message.trim() || 'None'}
---------------------------------------
Please confirm medicine availability, total bill, and dispatch timeline. Thank you!`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        id="whatsapp-order-modal"
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 dark:border-slate-800 text-slate-800 dark:text-slate-100 relative my-8"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
            <Send className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white">Quick WhatsApp Medicine Order</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Order genuine medicines & healthcare essentials in Aurangabad</p>
          </div>
        </div>

        <form onSubmit={handleSendViaWhatsApp} className="space-y-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-800 dark:text-slate-200"
              >
                <option value="Immediate / As Soon As Possible">Immediate / Express Delivery</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                <option value="Store Counter Pickup">Store Counter Pickup (Aurangabad)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Name(s) & Potency <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="e.g. Dr. Reckeweg R89 drops (1 bottle), Arnica Montana 200 CH, BC-20"
              className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address in Aurangabad, Bihar <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="House/Street, Landmark, Near Ramesh Chowk, PIN 824101"
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Prescription Upload */}
          <div className="p-3.5 bg-emerald-50/60 dark:bg-slate-800/60 rounded-2xl border border-emerald-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Attach Doctor&apos;s Prescription (Optional)
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPrescription}
                  onChange={(e) => setHasPrescription(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                <span className="ml-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                  {hasPrescription ? 'Yes' : 'No'}
                </span>
              </label>
            </div>

            {hasPrescription && (
              <div className="mt-2">
                <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-emerald-300 dark:border-slate-600 rounded-xl cursor-pointer hover:bg-emerald-50 dark:hover:bg-slate-800 transition">
                  <UploadCloud className="w-6 h-6 text-emerald-600 mb-1" />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    {prescriptionFileName ? prescriptionFileName : 'Click to choose prescription photo / document'}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5">JPG, PNG, PDF up to 10MB (You can also send it directly inside WhatsApp)</span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Special Message or Dosage Note
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Please send pills in dilution, or need urgent dispatch"
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              id="submit-whatsapp-order-btn"
              className="flex-1 py-3 px-5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              id="call-now-order-btn"
              className="py-3 px-5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
