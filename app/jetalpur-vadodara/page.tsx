import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Jetalpur, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Jetalpur, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate jetalpur vadodara, flats in jetalpur, property for sale jetalpur, houses in jetalpur vadodara",
};

export default function JetalpurVadodaraPage() {
  return <AreaPageTemplate area="jetalpur" areaName="Jetalpur" />;
}
