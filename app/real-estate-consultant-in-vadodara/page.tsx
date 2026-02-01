import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "real-estate-consultant-in-vadodara";

export const metadata: Metadata = {
  title: "Real Estate Consultant in Vadodara | Top Property Experts",
  description: "Expert real estate consultants in Vadodara. Get professional advice for all your property needs - buying, selling, renting & investment.",
  keywords: "real estate consultant vadodara, property consultant vadodara, real estate advisor vadodara, property expert vadodara",
  openGraph: {
    title: "Real Estate Consultant in Vadodara",
    description: "Expert real estate consultants in Vadodara. Get professional advice for all your property needs.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RealEstateConsultantPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
