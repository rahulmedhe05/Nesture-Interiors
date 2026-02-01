import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Vasna Road, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Vasna Road, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate vasna road vadodara, flats in vasna road, property for sale vasna road, houses in vasna road vadodara",
};

export default function VasnaRoadVadodaraPage() {
  return <AreaPageTemplate area="vasna-road" areaName="Vasna Road" />;
}
