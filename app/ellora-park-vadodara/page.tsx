import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Ellora Park, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Ellora Park, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate ellora park vadodara, flats in ellora park, property for sale ellora park, houses in ellora park vadodara",
};

export default function ElloraParkVadodaraPage() {
  return <AreaPageTemplate area="ellora-park" areaName="Ellora Park" />;
}
