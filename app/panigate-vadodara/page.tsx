import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Panigate, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Panigate, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate panigate vadodara, flats in panigate, property for sale panigate, houses in panigate vadodara",
};

export default function PanigateVadodaraPage() {
  return <AreaPageTemplate area="panigate" areaName="Panigate" />;
}
