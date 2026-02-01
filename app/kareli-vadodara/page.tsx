import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Kareli, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Kareli, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate kareli vadodara, flats in kareli, property for sale kareli, houses in kareli vadodara",
};

export default function KareliVadodaraPage() {
  return <AreaPageTemplate area="kareli" areaName="Kareli" />;
}
