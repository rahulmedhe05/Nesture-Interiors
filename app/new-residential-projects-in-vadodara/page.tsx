import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "new-residential-projects-in-vadodara";

export const metadata: Metadata = {
  title: "New Residential Projects in Vadodara | RERA Registered 2026",
  description: "Latest new residential projects in Vadodara. RERA registered projects from top builders with best amenities. Book now at pre-launch prices.",
  keywords: "new residential projects vadodara, new projects vadodara 2026, upcoming projects vadodara, RERA approved projects vadodara",
  openGraph: {
    title: "New Residential Projects in Vadodara",
    description: "Latest new residential projects in Vadodara. RERA registered projects from top builders.",
    type: "website",
    locale: "en_IN",
  },
};

export default function NewResidentialProjectsPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
