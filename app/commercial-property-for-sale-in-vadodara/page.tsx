import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "commercial-property-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "Commercial Property for Sale in Vadodara | Shops, Offices & More",
  description: "Commercial property for sale in Vadodara. Shops, offices, showrooms & warehouses at best prices in prime commercial zones.",
  keywords: "commercial property for sale vadodara, commercial real estate vadodara, business property vadodara",
  openGraph: {
    title: "Commercial Property for Sale in Vadodara",
    description: "Commercial property for sale in Vadodara. Shops, offices, showrooms & warehouses at best prices.",
    type: "website",
    locale: "en_IN",
  },
};

export default function CommercialPropertyForSalePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
