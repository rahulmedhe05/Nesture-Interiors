import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "shop-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "Shop for Sale in Vadodara | Retail Spaces in Prime Locations",
  description: "Shops for sale in Vadodara. Retail spaces in malls, high streets & commercial complexes. High footfall locations at best prices.",
  keywords: "shop for sale vadodara, retail shop vadodara, shop in mall vadodara, commercial shop vadodara",
  openGraph: {
    title: "Shop for Sale in Vadodara",
    description: "Shops for sale in Vadodara. Retail spaces in malls, high streets & commercial complexes.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ShopForSalePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
