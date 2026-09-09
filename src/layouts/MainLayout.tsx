import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';
import { WMITModal } from '../components/WMITModal';

export const MainLayout: React.FC = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenWhatsAppModal = (medName?: string) => {
    if (medName) {
      setPrefilledMedicine(medName);
    }
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
    setPrefilledMedicine('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white pb-14 sm:pb-0">
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

      {/* Main Routed Page Content */}
      <main className="flex-grow">
        <Outlet context={{ openWhatsAppModal: handleOpenWhatsAppModal }} />
      </main>

      {/* Mandatory Footer with global tracking & WMIT trigger */}
      <Footer />

      {/* Global WMIT Popup Trigger handler */}
      <WMITModal />

      {/* Global WhatsApp Medicine Order Modal */}
      <WhatsAppOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={handleCloseWhatsAppModal}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />
    </div>
  );
};
