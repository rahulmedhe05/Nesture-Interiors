import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "1-bhk-flat-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "1 BHK Flat for Sale in Vadodara | Affordable Apartments from ₹18L",
  description: "Affordable 1 BHK flats for sale in Vadodara. Perfect for singles, couples & small families. Ready possession available. Starting ₹18 Lakhs.",
  keywords: "1 bhk flat vadodara, 1bhk apartment vadodara, affordable flat vadodara, single bedroom flat vadodara",
  openGraph: {
    title: "1 BHK Flat for Sale in Vadodara",
    description: "Affordable 1 BHK flats for sale in Vadodara. Perfect for singles, couples & small families.",
    type: "website",
    locale: "en_IN",
  },
};

export default function OneBHKFlatPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
