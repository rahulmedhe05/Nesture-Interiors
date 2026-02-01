import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Vemali, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Vemali, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate vemali vadodara, flats in vemali, property for sale vemali, houses in vemali vadodara",
};

export default function VemaliVadodaraPage() {
  return <AreaPageTemplate area="vemali" areaName="Vemali" />;
}
