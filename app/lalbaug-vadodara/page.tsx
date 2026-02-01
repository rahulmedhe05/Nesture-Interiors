import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Lalbaug, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Lalbaug, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate lalbaug vadodara, flats in lalbaug, property for sale lalbaug, houses in lalbaug vadodara",
};

export default function LalbaugVadodaraPage() {
  return <AreaPageTemplate area="lalbaug" areaName="Lalbaug" />;
}
