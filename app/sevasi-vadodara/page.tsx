import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Sevasi, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Sevasi, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate sevasi vadodara, flats in sevasi, property for sale sevasi, houses in sevasi vadodara",
};

export default function SevasiVadodaraPage() {
  return <AreaPageTemplate area="sevasi" areaName="Sevasi" />;
}
