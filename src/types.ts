export interface MedicineStockItem {
  id: string;
  name: string;
  brand: string;
  category: 'Dilution' | 'Mother Tincture' | 'Bio-Chemic' | 'Syrup & Drops' | 'Health Device' | 'Personal Care' | 'Baby Care' | 'Supplements';
  potency?: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  indication: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  features: string[];
  brandsAvailable: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front' | 'Shelves & Storage' | 'Products' | 'Devices' | 'Consultation';
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  verifiedPurchase: boolean;
  comment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Orders & Delivery' | 'Prescriptions' | 'Products' | 'Consultation';
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionFile?: File | null;
  preferredDeliveryTime: string;
  message: string;
}
