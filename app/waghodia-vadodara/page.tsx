import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Waghodia, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Waghodia, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate waghodia vadodara, flats in waghodia, property for sale waghodia, houses in waghodia vadodara",
};

export default function WaghodiaVadodaraPage() {
  return <AreaPageTemplate area="waghodia" areaName="Waghodia" />;
}
