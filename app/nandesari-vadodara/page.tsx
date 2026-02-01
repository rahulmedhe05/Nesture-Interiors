import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Nandesari, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Nandesari, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate nandesari vadodara, flats in nandesari, property for sale nandesari, houses in nandesari vadodara",
};

export default function NandesariVadodaraPage() {
  return <AreaPageTemplate area="nandesari" areaName="Nandesari" />;
}
