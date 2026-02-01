import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Vadodara, Gujarat. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate vadodara, flats in vadodara, property for sale vadodara, houses in vadodara, property dealer vadodara",
};

export default function VadodaraPage() {
  return <AreaPageTemplate area="vadodara" areaName="Vadodara" />;
}
