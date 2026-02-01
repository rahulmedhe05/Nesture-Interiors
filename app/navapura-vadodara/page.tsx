import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Navapura, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Navapura, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate navapura vadodara, flats in navapura, property for sale navapura, houses in navapura vadodara",
};

export default function NavapuraVadodaraPage() {
  return <AreaPageTemplate area="navapura" areaName="Navapura" />;
}
