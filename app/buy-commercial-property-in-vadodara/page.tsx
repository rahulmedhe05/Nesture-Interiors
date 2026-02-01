import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "buy-commercial-property-in-vadodara";

export const metadata: Metadata = {
  title: "Buy Commercial Property in Vadodara | Shops, Offices & Showrooms",
  description: "Buy commercial property in Vadodara. Shops, offices, showrooms & industrial properties for sale in prime business locations.",
  keywords: "buy commercial property vadodara, commercial real estate vadodara, office space for sale vadodara, shop for sale vadodara",
  openGraph: {
    title: "Buy Commercial Property in Vadodara",
    description: "Buy commercial property in Vadodara. Shops, offices, showrooms & industrial properties for sale.",
    type: "website",
    locale: "en_IN",
  },
};

export default function BuyCommercialPropertyPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
