import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "showroom-space-in-vadodara";

export const metadata: Metadata = {
  title: "Showroom Space in Vadodara | Large Showrooms on Main Roads",
  description: "Showroom space in Vadodara. Large showrooms on main roads perfect for automobile, furniture & retail businesses. Sale & rent options.",
  keywords: "showroom space vadodara, showroom for sale vadodara, showroom for rent vadodara, large showroom vadodara",
  openGraph: {
    title: "Showroom Space in Vadodara",
    description: "Showroom space in Vadodara. Large showrooms on main roads perfect for automobile, furniture & retail.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ShowroomSpacePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
