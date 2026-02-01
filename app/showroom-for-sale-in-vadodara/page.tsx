import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "showroom-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "Showroom for Sale in Vadodara | Premium Commercial Spaces",
  description: "Showrooms for sale in Vadodara. Premium commercial spaces on main roads with high visibility. Ideal for automobile, furniture & retail.",
  keywords: "showroom for sale vadodara, showroom vadodara, commercial showroom vadodara, big showroom vadodara",
  openGraph: {
    title: "Showroom for Sale in Vadodara",
    description: "Showrooms for sale in Vadodara. Premium commercial spaces on main roads with high visibility.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ShowroomForSalePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
