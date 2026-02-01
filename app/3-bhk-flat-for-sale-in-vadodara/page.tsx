import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "3-bhk-flat-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "3 BHK Flat for Sale in Vadodara | Premium Apartments from ₹55L",
  description: "Premium 3 BHK flats for sale in Vadodara. Luxurious living spaces with world-class amenities. Starting ₹55 Lakhs in top societies.",
  keywords: "3 bhk flat vadodara, 3bhk apartment vadodara, luxury flat vadodara, three bedroom flat vadodara, premium apartment vadodara",
  openGraph: {
    title: "3 BHK Flat for Sale in Vadodara",
    description: "Premium 3 BHK flats for sale in Vadodara. Luxurious living spaces with world-class amenities.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ThreeBHKFlatPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
