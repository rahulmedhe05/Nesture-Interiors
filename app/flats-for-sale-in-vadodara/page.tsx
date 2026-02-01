import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "flats-for-sale-in-vadodara";
const BASE_URL = "https://vadodarahomes.in";
const PAGE_URL = `${BASE_URL}/${KEYWORD_SLUG}`;

export const metadata: Metadata = {
  title: "Flats for Sale in Vadodara | 1/2/3 BHK Apartments Starting ₹25 Lakhs",
  description: "Find flats for sale in Vadodara from ₹25 Lakhs. 1BHK, 2BHK, 3BHK apartments in Gotri, Alkapuri, Manjalpur, Harni & more. RERA registered. Ready possession available.",
  keywords: "flats for sale vadodara, 2bhk flat vadodara, 3bhk flat vadodara, apartments vadodara, affordable flats vadodara, ready possession flats vadodara",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Flats for Sale in Vadodara | All Budgets & Locations",
    description: "Find flats for sale in Vadodara from ₹25 Lakhs. 1BHK, 2BHK, 3BHK apartments in all areas. RERA registered projects.",
    url: PAGE_URL,
    siteName: "Real Estate Vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/flats-for-sale-vadodara.jpg`,
        width: 1200,
        height: 630,
        alt: "Flats for Sale in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flats for Sale in Vadodara",
    description: "Find 1/2/3 BHK flats for sale in Vadodara from ₹25 Lakhs. All areas covered.",
    images: [`${BASE_URL}/images/flats-for-sale-vadodara.jpg`],
  },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Flats for Sale in Vadodara",
      "description": "Find 1BHK, 2BHK, 3BHK flats for sale in Vadodara at best prices. RERA registered properties.",
      "url": PAGE_URL,
      "provider": {
        "@type": "RealEstateAgent",
        "name": "Real Estate Vadodara",
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
        { "@type": "ListItem", "position": 2, "name": "Flats for Sale", "item": PAGE_URL }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the starting price of flats in Vadodara?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Flats in Vadodara start from ₹25 Lakhs for 1BHK in areas like Waghodia Road and Tarsali. 2BHK flats start from ₹35 Lakhs and 3BHK from ₹55 Lakhs."
          }
        },
        {
          "@type": "Question",
          "name": "Which are the best areas to buy flats in Vadodara?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Popular areas for buying flats include Gotri, Manjalpur, Harni, Sama, Alkapuri, and New VIP Road. Each offers different price ranges and amenities."
          }
        }
      ]
    }
  ]
};

export default function FlatsForSalePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />
    </>
  );
}
