import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "shop-for-rent-in-vadodara";

export const metadata: Metadata = {
  title: "Shop for Rent in Vadodara | Retail Space at Competitive Rates",
  description: "Shops for rent in Vadodara. Prime retail locations with high footfall at competitive rents. Flexible lease terms available.",
  keywords: "shop for rent vadodara, shop on rent vadodara, retail space rent vadodara, commercial shop rent vadodara",
  openGraph: {
    title: "Shop for Rent in Vadodara",
    description: "Shops for rent in Vadodara. Prime retail locations with high footfall at competitive rents.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ShopForRentPage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
