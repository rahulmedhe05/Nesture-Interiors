import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Refinery Road, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Refinery Road, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate refinery road vadodara, flats in refinery road, property for sale refinery road, houses in refinery road vadodara",
};

export default function RefineryRoadVadodaraPage() {
  return <AreaPageTemplate area="refinery-road" areaName="Refinery Road" />;
}
