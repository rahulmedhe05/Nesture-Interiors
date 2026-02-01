import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Karodia, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Karodia, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate karodia vadodara, flats in karodia, property for sale karodia, houses in karodia vadodara",
};

export default function KarodiaVadodaraPage() {
  return <AreaPageTemplate area="karodia" areaName="Karodia" />;
}
