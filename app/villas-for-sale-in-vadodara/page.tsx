import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "villas-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "Villas for Sale in Vadodara | Luxury Villas & Gated Communities",
  description: "Premium villas for sale in Vadodara. Gated communities with private gardens & world-class amenities. Luxury living in Vadodara.",
  keywords: "villas for sale vadodara, luxury villas vadodara, gated community vadodara, premium villas vadodara",
  openGraph: {
    title: "Villas for Sale in Vadodara",
    description: "Premium villas for sale in Vadodara. Gated communities with private gardens & world-class amenities.",
    type: "website",
    locale: "en_IN",
  },
};

export default function VillasForSalePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
