import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords, getKeywordBySlug } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Generate static params for all real estate keyword pages
export async function generateStaticParams() {
  return realEstateKeywords.map((keyword) => ({
    slug: keyword.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const keywordConfig = realEstateKeywords.find(k => k.slug === slug);
  
  if (!keywordConfig) {
    return { title: "Page Not Found" };
  }
  
  return {
    title: `${keywordConfig.title} | Best Real Estate Services`,
    description: keywordConfig.metaDescription,
    keywords: `${keywordConfig.title}, Real Estate, Property, Vadodara, Gujarat, Buy Property, Sell Property`,
    openGraph: {
      title: keywordConfig.title,
      description: keywordConfig.metaDescription,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function RealEstateKeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const business = getBusinessBySlug("real-estate");
  const keywordConfig = realEstateKeywords.find(k => k.slug === slug);
  
  if (!business || !keywordConfig) {
    notFound();
  }
  
  // Get content for the page
  const content = getBusinessContent("real-estate", "vadodara");
  
  return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
}
