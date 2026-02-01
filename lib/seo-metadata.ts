import { Metadata } from "next";

const BASE_URL = "https://vadodarahomes.in";
const SITE_NAME = "Vadodara Homes";
const DEFAULT_IMAGE = `${BASE_URL}/images/og-default.jpg`;

// Generate metadata for area pages
export function generateAreaMetadata(
  areaSlug: string,
  areaName: string,
  customDescription?: string
): Metadata {
  const pageUrl = `${BASE_URL}/${areaSlug}-vadodara`;
  const title = `Property in ${areaName} Vadodara | Flats, Houses & Commercial`;
  const description = customDescription || 
    `Find property in ${areaName}, Vadodara. 1/2/3 BHK flats, houses, villas & commercial properties. Best prices. Trusted agents. Call now for free consultation.`;

  return {
    title,
    description,
    keywords: `property in ${areaName.toLowerCase()} vadodara, ${areaName.toLowerCase()} flats, ${areaName.toLowerCase()} houses, real estate ${areaName.toLowerCase()}, buy property ${areaName.toLowerCase()}`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/${areaSlug}-vadodara.jpg`,
          width: 1200,
          height: 630,
          alt: `Property in ${areaName} Vadodara`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Property in ${areaName} Vadodara`,
      description,
      images: [`${BASE_URL}/images/${areaSlug}-vadodara.jpg`],
    },
  };
}

// Generate metadata for keyword pages
export function generateKeywordMetadata(
  keywordSlug: string,
  keywordTitle: string,
  customDescription?: string
): Metadata {
  const pageUrl = `${BASE_URL}/${keywordSlug}`;
  const title = `${keywordTitle} | Best Deals & Expert Guidance`;
  const description = customDescription ||
    `Looking for ${keywordTitle.toLowerCase()}? Find the best options with expert guidance. Verified properties, transparent pricing. Call now for free consultation.`;

  return {
    title,
    description,
    keywords: `${keywordTitle.toLowerCase()}, ${keywordSlug.replace(/-/g, ' ')}, vadodara property, real estate vadodara`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/${keywordSlug}.jpg`,
          width: 1200,
          height: 630,
          alt: keywordTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: keywordTitle,
      description,
      images: [`${BASE_URL}/images/${keywordSlug}.jpg`],
    },
  };
}

// Generate JSON-LD schema for area pages
export function generateAreaSchema(areaSlug: string, areaName: string) {
  const pageUrl = `${BASE_URL}/${areaSlug}-vadodara`;
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "name": `${SITE_NAME} - ${areaName}`,
        "url": pageUrl,
        "telephone": "+916353583148",
        "areaServed": {
          "@type": "Place",
          "name": `${areaName}, Vadodara, Gujarat, India`
        },
        "parentOrganization": {
          "@type": "Organization",
          "name": SITE_NAME,
          "url": BASE_URL
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Vadodara", "item": `${BASE_URL}/vadodara` },
          { "@type": "ListItem", "position": 3, "name": areaName, "item": pageUrl }
        ]
      }
    ]
  };
}

// Generate JSON-LD schema for keyword pages
export function generateKeywordSchema(keywordSlug: string, keywordTitle: string, faqs?: { q: string; a: string }[]) {
  const pageUrl = `${BASE_URL}/${keywordSlug}`;
  
  const schema: any = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": keywordTitle,
        "description": `Professional ${keywordTitle.toLowerCase()} services in Vadodara`,
        "url": pageUrl,
        "provider": {
          "@type": "RealEstateAgent",
          "name": SITE_NAME,
          "url": BASE_URL,
          "telephone": "+916353583148"
        },
        "areaServed": {
          "@type": "City",
          "name": "Vadodara"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": keywordTitle, "item": pageUrl }
        ]
      }
    ]
  };

  // Add FAQ schema if provided
  if (faqs && faqs.length > 0) {
    schema["@graph"].push({
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  return schema;
}

// Export constants
export { BASE_URL, SITE_NAME };
