// JSON-LD Schema generators for SEO

const BASE_URL = 'https://vadodarahomes.in';
const BUSINESS_NAME = 'Vadodara Homes';
const PHONE = '+916353583148';
const EMAIL = 'info@vadodarahomes.in';

// Real Estate Agent Schema
export function getRealEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": BUSINESS_NAME,
    "image": `${BASE_URL}/logo.png`,
    "url": BASE_URL,
    "telephone": PHONE,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123, Business Hub, Race Course Road",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.3072",
      "longitude": "73.1812"
    },
    "priceRange": "₹₹-₹₹₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Vadodara"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };
}

// Area Page Schema
export function getAreaPageSchema(areaName: string, areaSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": `${BUSINESS_NAME} - ${areaName}`,
    "url": `${BASE_URL}/${areaSlug}-vadodara`,
    "areaServed": {
      "@type": "Place",
      "name": `${areaName}, Vadodara, Gujarat`
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": BUSINESS_NAME,
      "url": BASE_URL
    }
  };
}

// Keyword/Service Page Schema
export function getServicePageSchema(serviceName: string, serviceSlug: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": `${BASE_URL}/${serviceSlug}`,
    "provider": {
      "@type": "RealEstateAgent",
      "name": BUSINESS_NAME,
      "url": BASE_URL,
      "telephone": PHONE
    },
    "areaServed": {
      "@type": "City",
      "name": "Vadodara"
    },
    "serviceType": "Real Estate Services"
  };
}

// FAQ Schema
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Property Listing Schema (for area pages)
export function getPropertyListingSchema(
  areaName: string,
  priceRange: { min: string; max: string },
  propertyType: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${propertyType} in ${areaName}, Vadodara`,
    "description": `Explore ${propertyType.toLowerCase()} for sale in ${areaName}, Vadodara. Price range: ${priceRange.min} - ${priceRange.max}`,
    "url": `${BASE_URL}/${areaName.toLowerCase().replace(/\s+/g, '-')}-vadodara`,
    "numberOfItems": "50+",
    "itemListOrder": "https://schema.org/ItemListOrderDescending"
  };
}

// Local Business with Reviews Schema
export function getLocalBusinessWithReviewsSchema(reviews: { author: string; rating: number; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": BUSINESS_NAME,
    "url": BASE_URL,
    "telephone": PHONE,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.text
    }))
  };
}

// Organization Schema
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BUSINESS_NAME,
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "sameAs": [
      "https://www.facebook.com/realestatevadodara",
      "https://www.instagram.com/realestatevadodara",
      "https://www.linkedin.com/company/realestatevadodara"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE,
      "contactType": "sales",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    }
  };
}

// WebSite Schema for Sitelinks Search Box
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": BUSINESS_NAME,
    "url": BASE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}
