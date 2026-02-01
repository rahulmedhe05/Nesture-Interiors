import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "it-office-space-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "IT Office Space for Sale in Vadodara | Tech Parks & IT Offices",
  description: "IT office space for sale in Vadodara. Tech parks & IT-ready offices with modern infrastructure. Perfect for software companies & startups.",
  keywords: "IT office vadodara, tech park vadodara, IT space vadodara, office for IT company vadodara",
  openGraph: {
    title: "IT Office Space for Sale in Vadodara",
    description: "IT office space for sale in Vadodara. Tech parks & IT-ready offices with modern infrastructure.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ITOfficeSpacePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
