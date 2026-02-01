import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "real-estate-agents-near-me-in-vadodara";

export const metadata: Metadata = {
  title: "Real Estate Agents Near Me in Vadodara | Top Property Consultants",
  description: "Find trusted real estate agents near you in Vadodara. Expert property consultants for buying, selling & renting. Local agents in all Vadodara areas.",
  keywords: "real estate agents near me vadodara, property agents vadodara, real estate consultants vadodara, local real estate agents",
  openGraph: {
    title: "Real Estate Agents Near Me in Vadodara",
    description: "Find trusted real estate agents near you in Vadodara. Expert property consultants for buying, selling & renting.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RealEstateAgentsNearMePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
