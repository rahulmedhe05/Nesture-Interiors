import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in New Sama Road, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in New Sama Road, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate new sama road vadodara, flats in new sama road, property for sale new sama road, houses in new sama road vadodara",
};

export default function NewSamaRoadVadodaraPage() {
  return <AreaPageTemplate area="new-sama-road" areaName="New Sama Road" />;
}
