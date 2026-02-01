import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Kaladarshan, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Kaladarshan, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate kaladarshan vadodara, flats in kaladarshan, property for sale kaladarshan, houses in kaladarshan vadodara",
};

export default function KaladarshanVadodaraPage() {
  return <AreaPageTemplate area="kaladarshan" areaName="Kaladarshan" />;
}
