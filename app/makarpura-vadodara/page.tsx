import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Makarpura, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Makarpura, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate makarpura vadodara, flats in makarpura, property for sale makarpura, houses in makarpura vadodara",
};

export default function MakarpuraVadodaraPage() {
  return <AreaPageTemplate area="makarpura" areaName="Makarpura" />;
}
