import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Vishwamitri, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Vishwamitri, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate vishwamitri vadodara, flats in vishwamitri, property for sale vishwamitri, houses in vishwamitri vadodara",
};

export default function VishwamitriVadodaraPage() {
  return <AreaPageTemplate area="vishwamitri" areaName="Vishwamitri" />;
}
