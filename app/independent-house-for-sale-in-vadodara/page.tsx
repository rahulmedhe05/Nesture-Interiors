import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "independent-house-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "Independent House for Sale in Vadodara | Your Dream Home",
  description: "Independent houses for sale in Vadodara. Own your dream home with private space & parking. Bungalows, row houses & individual houses.",
  keywords: "independent house vadodara, house for sale vadodara, individual house vadodara, bungalow vadodara",
  openGraph: {
    title: "Independent House for Sale in Vadodara",
    description: "Independent houses for sale in Vadodara. Own your dream home with private space & parking.",
    type: "website",
    locale: "en_IN",
  },
};

export default function IndependentHousePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
