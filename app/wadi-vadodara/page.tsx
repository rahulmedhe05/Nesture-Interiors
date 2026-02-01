import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Wadi, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Wadi, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate wadi vadodara, flats in wadi, property for sale wadi, houses in wadi vadodara",
};

export default function WadiVadodaraPage() {
  return <AreaPageTemplate area="wadi" areaName="Wadi" />;
}
