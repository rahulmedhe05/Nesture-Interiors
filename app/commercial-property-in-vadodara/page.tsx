import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "commercial-property-in-vadodara";

export const metadata: Metadata = {
  title: "Commercial Property in Vadodara | All Types of Business Spaces",
  description: "All types of commercial property in Vadodara. Offices, shops, showrooms & industrial spaces. Buy or rent at competitive prices.",
  keywords: "commercial property vadodara, business property vadodara, commercial space vadodara, commercial real estate vadodara",
  openGraph: {
    title: "Commercial Property in Vadodara",
    description: "All types of commercial property in Vadodara. Offices, shops, showrooms & industrial spaces.",
    type: "website",
    locale: "en_IN",
  },
};

export default function CommercialPropertyPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
