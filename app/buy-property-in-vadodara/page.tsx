import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "buy-property-in-vadodara";

export const metadata: Metadata = {
  title: "Buy Property in Vadodara | Best Deals on Flats, Houses & Plots",
  description: "Buy property in Vadodara at best prices. Residential & commercial properties available in prime locations. RERA registered projects.",
  keywords: "buy property vadodara, property for sale vadodara, buy flat vadodara, buy house vadodara, property investment vadodara",
  openGraph: {
    title: "Buy Property in Vadodara",
    description: "Buy property in Vadodara at best prices. Residential & commercial properties available in prime locations.",
    type: "website",
    locale: "en_IN",
  },
};

export default function BuyPropertyPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
