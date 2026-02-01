import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Danteshwar, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Danteshwar, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate danteshwar vadodara, flats in danteshwar, property for sale danteshwar, houses in danteshwar vadodara",
};

export default function DanteshwarVadodaraPage() {
  return <AreaPageTemplate area="danteshwar" areaName="Danteshwar" />;
}
