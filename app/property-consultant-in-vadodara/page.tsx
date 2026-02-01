import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "property-consultant-in-vadodara";

export const metadata: Metadata = {
  title: "Property Consultant in Vadodara | Expert Property Advisors",
  description: "Hire the best property consultant in Vadodara. Professional guidance for property buying, selling & investment. Trusted advisors since 2008.",
  keywords: "property consultant vadodara, property advisor vadodara, real estate consultant vadodara, property expert vadodara",
  openGraph: {
    title: "Property Consultant in Vadodara",
    description: "Hire the best property consultant in Vadodara. Professional guidance for property buying, selling & investment.",
    type: "website",
    locale: "en_IN",
  },
};

export default function PropertyConsultantPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
