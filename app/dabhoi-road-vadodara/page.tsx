import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Dabhoi Road, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Dabhoi Road, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate dabhoi road vadodara, flats in dabhoi road, property for sale dabhoi road, houses in dabhoi road vadodara",
};

export default function DabhoiRoadVadodaraPage() {
  return <AreaPageTemplate area="dabhoi-road" areaName="Dabhoi Road" />;
}
