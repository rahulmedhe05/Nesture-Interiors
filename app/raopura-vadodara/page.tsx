import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Raopura, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Raopura, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate raopura vadodara, flats in raopura, property for sale raopura, houses in raopura vadodara",
};

export default function RaopuraVadodaraPage() {
  return <AreaPageTemplate area="raopura" areaName="Raopura" />;
}
