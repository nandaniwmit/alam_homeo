import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'homeo-dilutions',
    title: 'Genuine Homeopathic Dilutions',
    category: 'Homeopathic Medicine',
    iconName: 'FlaskConical',
    shortDesc: '100% authentic dilutions in all potencies (6CH, 30CH, 200CH, 1M, 10M, 50 Millesimal/LM) sealed in original bottles.',
    detailedDesc: 'We stock a comprehensive spectrum of genuine dilutions sourced straight from certified laboratories. Whether prescribed for acute constitutional therapy or chronic conditions, our clean dispensary guarantees purity and zero contamination.',
    features: [
      'Original sealed bottles from German & Indian manufacturers',
      'All major potencies (30CH, 200CH, 1M, 10M, CM, LM scale)',
      'Dispensed in high-grade globule pills or liquid drops',
      'Temperature & light-controlled dispensary storage'
    ],
    brandsAvailable: ['Dr. Reckeweg (Germany)', 'Schwabe (Germany/India)', 'SBL World Class', 'Bakson', 'Adel Pekana']
  },
  {
    id: 'mother-tinctures',
    title: 'Pure Mother Tinctures (Q Potency)',
    category: 'Homeopathic Medicine',
    iconName: 'Leaf',
    shortDesc: 'Cold-extracted botanical mother tinctures prepared according to German Homeopathic Pharmacopoeia (GHP).',
    detailedDesc: 'Mother tinctures are the therapeutic foundation of clinical homeopathy. Alam Homeo houses over 250+ rare and common mother tinctures, preserved in amber pharmaceutical-grade glass bottles to prevent photo-oxidation.',
    features: [
      'Full-strength botanical and mineral extractions',
      'High organoleptic purity and potent therapeutic yield',
      'Available in 30ml, 100ml, and 450ml dispensary packs',
      'Popular herbal tonics: Ashwagandha, Berberis Aquifolium, Crataegus, Echinacea'
    ],
    brandsAvailable: ['Schwabe Germany', 'Dr. Reckeweg', 'SBL', 'Wheezal', 'Lord’s']
  },
  {
    id: 'biochemic-salts',
    title: 'Bio-chemic Tissue Salts & Combinations',
    category: 'Tissue Salts',
    iconName: 'Pill',
    shortDesc: 'Complete Dr. Schussler 12 tissue remedies and Biocombinations (BC-1 through BC-28) in 3X, 6X, 12X & 30X.',
    detailedDesc: 'Essential cellular inorganic minerals formulated for rapid sublingual absorption. Highly recommended for nutritional deficiencies, bone recovery, skin restoration, nervous tranquility, and pediatric growth.',
    features: [
      'Schussler 12 mineral salts: Calcarea Fluor, Calc Phos, Ferrum Phos, Kali Phos, Silicea, etc.',
      'Comprehensive Biocombination tablets BC-1 (Anemia) to BC-28 (General Tonic)',
      'Lactose-grade base for easy melt-in-mouth intake',
      'Zero side-effects, safe across all age groups'
    ],
    brandsAvailable: ['Dr. Willmar Schwabe', 'SBL', 'Bakson', 'Haslab']
  },
  {
    id: 'patents-syrups',
    title: 'Homeopathic Patents, Syrups & Drops',
    category: 'Formulations',
    iconName: 'Activity',
    shortDesc: 'Clinically proven liquid drops, tonic syrups, liver formulations, kidney stone solutions, and joint tonics.',
    detailedDesc: 'Formulated combinations designed for targeted therapeutic convenience. Includes internationally respected combinations like Reckeweg R-series (R1 to R89), Adel complexes, and soothing herbal cough syrups with honey & tulsi bases.',
    features: [
      'Complete Dr. Reckeweg German Specialty drops (R1 - R89)',
      'Sugar-free syrup variants for diabetic patients',
      'Specialized formulations for liver support, kidney stones & gout',
      'Pediatric syrups for colic, dentition and child immunity'
    ],
    brandsAvailable: ['Dr. Reckeweg', 'Adel', 'Schwabe', 'SBL', 'Bakson', 'Medisynth']
  },
  {
    id: 'health-devices',
    title: 'Healthcare Devices & Diagnostic Tools',
    category: 'Medical Equipment',
    iconName: 'HeartPulse',
    shortDesc: 'Digital BP monitors, glucometers, mesh nebulizers, pulse oximeters, digital thermometers & vaporizers.',
    detailedDesc: 'Hospital-grade home healthcare diagnostic devices to help Aurangabad families monitor chronic ailments with precision. Every instrument is backed by manufacturer warranties and certified accuracy.',
    features: [
      'Clinically validated digital blood pressure monitors with arm cuffs',
      'Instant blood glucose meters with fresh test strips & lancets',
      'Silent ultrasonic and mesh nebulizers for pediatric asthma relief',
      'Fingertip pulse oximeters, infrared thermometers & weighing scales'
    ],
    brandsAvailable: ['Omron', 'Accu-Chek', 'Dr. Morepen', 'BPL Medical', 'Beurer']
  },
  {
    id: 'baby-personal-care',
    title: 'Baby Care & Herbal Dermatology',
    category: 'Personal Care',
    iconName: 'Sparkles',
    shortDesc: 'Gentle homoeo-herbal baby oils, soothing teething solutions, anti-dandruff hair oils, and skin ointments.',
    detailedDesc: 'Chemical-free, dermatologically tested wellness products. Calendula ointments for cuts and burns, Arnica enriched hair tonics for hair fall, and pediatrician-recommended mild gripe waters for infants.',
    features: [
      'Arnica, Jaborandi & Brahmi pure scalp tonics',
      'Calendula, Echinacea, and Berberis topical ointments & creams',
      'Gentle herbal baby washes, diaper rash care, and gripe waters',
      'Natural immune boosters and multivitamins'
    ],
    brandsAvailable: ['Boericke & Tafel (B&T)', 'Bakson Sunny Herbals', 'SBL Silk n Stay', 'Schwabe']
  },
  {
    id: 'prescription-refill',
    title: 'Prescription Dispensing & Guidance',
    category: 'Pharmacy Service',
    iconName: 'ClipboardCheck',
    shortDesc: 'Dedicated pharmacist verification of your doctor’s prescription with accurate dosage explanation.',
    detailedDesc: 'Our experienced staff reads your homeopathic prescription carefully, explains the regimen (before food / after food, dilution frequency, water dilution method), and provides fresh airtight packaging.',
    features: [
      'Verification of potency and dosage directions',
      'Proper pharmaceutical dispensing in sterilized glass vials',
      'Instant WhatsApp prescription upload & home doorstep packaging',
      'Clear oral administration guidance in Hindi & English'
    ],
    brandsAvailable: ['All registered Homoeopathic Doctors prescriptions']
  },
  {
    id: 'home-delivery',
    title: 'Doorstep Medicine Delivery in Aurangabad',
    category: 'Delivery Service',
    iconName: 'Truck',
    shortDesc: 'Prompt delivery of urgent homeopathic supplies, health devices, and chronic refill packages across 824101.',
    detailedDesc: 'Send your medicine list or prescription picture via WhatsApp and our dispatch team ensures prompt packing and safe delivery right to your residence in Aurangabad and neighboring localities.',
    features: [
      'Same-day express dispatch across Aurangabad city zones',
      'Safe shock-resistant packaging for glass dilution bottles',
      'Cash on Delivery & UPI payments accepted',
      'Monthly chronic medicine subscription refill reminders'
    ],
    brandsAvailable: ['Alam Homeo Express Service']
  }
];
