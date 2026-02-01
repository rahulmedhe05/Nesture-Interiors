import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Diwalipura, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Diwalipura, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate diwalipura vadodara, flats in diwalipura, property for sale diwalipura, houses in diwalipura vadodara",
};

export default function DiwalipuraVadodaraPage() {
  return <AreaPageTemplate area="diwalipura" areaName="Diwalipura" />;
}
