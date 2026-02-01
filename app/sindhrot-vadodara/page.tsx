import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Sindhrot, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Sindhrot, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate sindhrot vadodara, flats in sindhrot, property for sale sindhrot, houses in sindhrot vadodara",
};

export default function SindhrotVadodaraPage() {
  return <AreaPageTemplate area="sindhrot" areaName="Sindhrot" />;
}
