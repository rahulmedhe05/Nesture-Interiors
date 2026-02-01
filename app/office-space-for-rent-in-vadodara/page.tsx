import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "office-space-for-rent-in-vadodara";

export const metadata: Metadata = {
  title: "Office Space for Rent in Vadodara | Furnished & Unfurnished",
  description: "Office space for rent in Vadodara. Furnished & unfurnished offices available at competitive rates. Flexible lease terms.",
  keywords: "office space for rent vadodara, office on rent vadodara, furnished office vadodara, coworking space vadodara",
  openGraph: {
    title: "Office Space for Rent in Vadodara",
    description: "Office space for rent in Vadodara. Furnished & unfurnished offices available at competitive rates.",
    type: "website",
    locale: "en_IN",
  },
};

export default function OfficeSpaceForRentPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
