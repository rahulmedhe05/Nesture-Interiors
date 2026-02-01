import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Old Padra Road, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Old Padra Road, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate old padra road vadodara, flats in old padra road, property for sale old padra road, houses in old padra road vadodara",
};

export default function OldPadraRoadVadodaraPage() {
  return <AreaPageTemplate area="old-padra-road" areaName="Old Padra Road" />;
}
