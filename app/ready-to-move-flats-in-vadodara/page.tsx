import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "ready-to-move-flats-in-vadodara";

export const metadata: Metadata = {
  title: "Ready to Move Flats in Vadodara | Immediate Possession Available",
  description: "Ready to move flats in Vadodara. No waiting - shift immediately into your new home with all amenities. Verified properties only.",
  keywords: "ready to move flats vadodara, immediate possession flats vadodara, ready possession apartments vadodara",
  openGraph: {
    title: "Ready to Move Flats in Vadodara",
    description: "Ready to move flats in Vadodara. No waiting - shift immediately into your new home with all amenities.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ReadyToMovePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
