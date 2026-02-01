import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "2-bhk-flat-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "2 BHK Flat for Sale in Vadodara | Family Apartments from ₹32L",
  description: "Spacious 2 BHK flats for sale in Vadodara. Ideal for families with modern amenities & parking. Starting ₹32 Lakhs in prime locations.",
  keywords: "2 bhk flat vadodara, 2bhk apartment vadodara, family flat vadodara, two bedroom flat vadodara",
  openGraph: {
    title: "2 BHK Flat for Sale in Vadodara",
    description: "Spacious 2 BHK flats for sale in Vadodara. Ideal for families with modern amenities & parking.",
    type: "website",
    locale: "en_IN",
  },
};

export default function TwoBHKFlatPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
