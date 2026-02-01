import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Vasna Bhayli Road, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Vasna Bhayli Road, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate vasna bhayli road vadodara, flats in vasna bhayli road, property for sale vasna bhayli road, houses in vasna bhayli road vadodara",
};

export default function VasnaBhayliRoadVadodaraPage() {
  return <AreaPageTemplate area="vasna-bhayli-road" areaName="Vasna Bhayli Road" />;
}
