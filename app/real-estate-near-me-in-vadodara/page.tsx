import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "real-estate-near-me-in-vadodara";

export const metadata: Metadata = {
  title: "Real Estate Near Me in Vadodara | Properties in Your Area",
  description: "Discover real estate properties near you in Vadodara. Flats, houses, plots & commercial spaces available in all areas.",
  keywords: "real estate near me vadodara, properties near me vadodara, flats near me vadodara, houses near me vadodara",
  openGraph: {
    title: "Real Estate Near Me in Vadodara",
    description: "Discover real estate properties near you in Vadodara. Flats, houses, plots & commercial spaces available.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RealEstateNearMePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
