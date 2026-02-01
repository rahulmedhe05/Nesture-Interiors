import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Vadsar Road, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Vadsar Road, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate vadsar road vadodara, flats in vadsar road, property for sale vadsar road, houses in vadsar road vadodara",
};

export default function VadsarRoadVadodaraPage() {
  return <AreaPageTemplate area="vadsar-road" areaName="Vadsar Road" />;
}
