export interface SiteConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  category: string;
  whatsappNumber: string;
  phone: string;
  formattedPhone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
    landmark: string;
  };
  hours: {
    monSat: string;
    sunday: string;
    emergency: string;
  };
  social: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    googleMaps: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
  colors: {
    primary: string;
    primaryHover: string;
    medicalBlue: string;
    accent: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  businessName: "Alam Homeo",
  shortName: "Alam Homeo",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy & Homeopathic Medical Care",
  whatsappNumber: "8540905120",
  phone: "+918540905120",
  formattedPhone: "+91 85409 05120",
  email: "alamhomeo.aurangabad@gmail.com",
  address: {
    street: "Near Ramesh Chowk, MG Road",
    city: "Aurangabad",
    state: "Bihar",
    pincode: "824101",
    country: "India",
    landmark: "Close to Ramesh Chowk Market Hub",
    full: "Near Ramesh Chowk, MG Road, Aurangabad, Bihar 824101"
  },
  hours: {
    monSat: "8:00 AM – 9:30 PM",
    sunday: "9:00 AM – 8:00 PM",
    emergency: "24/7 WhatsApp Support & Urgent Prescription Dispatch"
  },
  social: {
    whatsapp: "https://wa.me/918540905120",
    facebook: "https://facebook.com/alamhomeo",
    instagram: "https://instagram.com/alamhomeo",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Alam+Homeo+Aurangabad+Bihar+824101"
  },
  pwa: {
    enabled: true,
    appName: "Alam Homeo - Pharmacy & Healthcare",
    shortName: "Alam Homeo",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone"
  },
  colors: {
    primary: "#0A8F6A",
    primaryHover: "#087556",
    medicalBlue: "#0284C7",
    accent: "#0A8F6A"
  }
};
