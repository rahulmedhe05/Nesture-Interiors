import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "apartments-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "Apartments for Sale in Vadodara | Budget to Luxury Flats",
  description: "Find apartments for sale in Vadodara. From budget to luxury apartments in top residential societies. RERA registered projects with best amenities.",
  keywords: "apartments for sale vadodara, flats for sale vadodara, residential apartments vadodara, new apartments vadodara",
  openGraph: {
    title: "Apartments for Sale in Vadodara",
    description: "Find apartments for sale in Vadodara. From budget to luxury apartments in top residential societies.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ApartmentsForSalePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
