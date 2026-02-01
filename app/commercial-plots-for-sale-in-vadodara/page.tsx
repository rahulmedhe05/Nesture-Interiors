import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "commercial-plots-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "Commercial Plots for Sale in Vadodara | NA Plots & Land",
  description: "Commercial plots for sale in Vadodara. NA plots with clear titles in commercial zones. Ideal for building offices, showrooms & shops.",
  keywords: "commercial plot vadodara, NA plot vadodara, commercial land vadodara, plot for sale vadodara",
  openGraph: {
    title: "Commercial Plots for Sale in Vadodara",
    description: "Commercial plots for sale in Vadodara. NA plots with clear titles in commercial zones.",
    type: "website",
    locale: "en_IN",
  },
};

export default function CommercialPlotsPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
