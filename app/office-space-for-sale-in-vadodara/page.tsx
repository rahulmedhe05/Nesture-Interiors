import { Metadata } from "next";
import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";

const KEYWORD_SLUG = "office-space-for-sale-in-vadodara";

export const metadata: Metadata = {
  title: "Office Space for Sale in Vadodara | Commercial Offices",
  description: "Office space for sale in Vadodara. Commercial offices in prime business locations with modern facilities. IT parks & business centers.",
  keywords: "office space for sale vadodara, commercial office vadodara, office for sale vadodara, business space vadodara",
  openGraph: {
    title: "Office Space for Sale in Vadodara",
    description: "Office space for sale in Vadodara. Commercial offices in prime business locations with modern facilities.",
    type: "website",
    locale: "en_IN",
  },
};

export default function OfficeSpaceForSalePage() {
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === KEYWORD_SLUG);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
