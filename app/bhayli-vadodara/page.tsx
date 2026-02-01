import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Bhayli, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Bhayli, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate bhayli vadodara, flats in bhayli, property for sale bhayli, houses in bhayli vadodara",
};

export default function BhayliVadodaraPage() {
  return <AreaPageTemplate area="bhayli" areaName="Bhayli" />;
}
