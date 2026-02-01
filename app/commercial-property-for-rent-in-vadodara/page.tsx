import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "commercial-property-for-rent-in-vadodara";

export const metadata: Metadata = {
  title: "Commercial Property for Rent in Vadodara | Prime Business Locations",
  description: "Commercial property for rent in Vadodara. Prime locations for your business at affordable rents. Shops, offices & showrooms available.",
  keywords: "commercial property for rent vadodara, shop on rent vadodara, office on rent vadodara, showroom on rent vadodara",
  openGraph: {
    title: "Commercial Property for Rent in Vadodara",
    description: "Commercial property for rent in Vadodara. Prime locations for your business at affordable rents.",
    type: "website",
    locale: "en_IN",
  },
};

export default function CommercialPropertyForRentPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
