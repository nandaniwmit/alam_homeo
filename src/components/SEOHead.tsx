import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonicalPath = '' }) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | ${SITE_CONFIG.businessName}`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('content', `https://alamhomeo.com${canonicalPath}`);
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [title, description, canonicalPath]);

  return null;
};
