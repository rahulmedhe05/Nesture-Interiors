import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Padra, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Padra, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate padra vadodara, flats in padra, property for sale padra, houses in padra vadodara",
};

export default function PadraVadodaraPage() {
  return <AreaPageTemplate area="padra" areaName="Padra" />;
}
