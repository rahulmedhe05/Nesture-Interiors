import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Undera, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Undera, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate undera vadodara, flats in undera, property for sale undera, houses in undera vadodara",
};

export default function UnderaVadodaraPage() {
  return <AreaPageTemplate area="undera" areaName="Undera" />;
}
