import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "houses-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "Houses for Sale in Vadodara | Independent Houses & Bungalows",
  description: "Independent houses for sale in Vadodara. Bungalows, row houses & duplexes in prime locations. Own your dream home with private space.",
  keywords: "houses for sale vadodara, bungalow for sale vadodara, independent house vadodara, duplex for sale vadodara",
  openGraph: {
    title: "Houses for Sale in Vadodara",
    description: "Independent houses for sale in Vadodara. Bungalows, row houses & duplexes in prime locations.",
    type: "website",
    locale: "en_IN",
  },
};

export default function HousesForSalePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
