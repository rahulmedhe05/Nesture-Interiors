import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Karelibagh, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Karelibagh, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate karelibagh vadodara, flats in karelibagh, property for sale karelibagh, houses in karelibagh vadodara",
};

export default function KarelibaughVadodaraPage() {
  return <AreaPageTemplate area="karelibagh" areaName="Karelibagh" />;
}
