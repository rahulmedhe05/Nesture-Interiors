import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "industrial-property-in-vadodara";

export const metadata: Metadata = {
  title: "Industrial Property in Vadodara | Factories, Warehouses & GIDC Plots",
  description: "Industrial property in Vadodara. Factories, warehouses & industrial plots in GIDC & other industrial areas. NA plots available.",
  keywords: "industrial property vadodara, factory for sale vadodara, warehouse vadodara, GIDC plot vadodara, industrial land vadodara",
  openGraph: {
    title: "Industrial Property in Vadodara",
    description: "Industrial property in Vadodara. Factories, warehouses & industrial plots in GIDC & other areas.",
    type: "website",
    locale: "en_IN",
  },
};

export default function IndustrialPropertyPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
