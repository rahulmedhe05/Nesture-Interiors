import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "flats-for-sale-near-me-in-vadodara";

export const metadata: Metadata = {
  title: "Flats for Sale Near Me in Vadodara | 1/2/3 BHK Apartments",
  description: "Find flats for sale near you in Vadodara. 1BHK, 2BHK, 3BHK apartments in your preferred location. Ready possession & new projects available.",
  keywords: "flats for sale near me vadodara, apartments near me vadodara, 2bhk flat near me vadodara, flat for sale vadodara",
  openGraph: {
    title: "Flats for Sale Near Me in Vadodara",
    description: "Find flats for sale near you in Vadodara. 1BHK, 2BHK, 3BHK apartments in your preferred location.",
    type: "website",
    locale: "en_IN",
  },
};

export default function FlatsForSaleNearMePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
