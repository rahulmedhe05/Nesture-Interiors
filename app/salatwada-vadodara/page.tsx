import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Salatwada, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Salatwada, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate salatwada vadodara, flats in salatwada, property for sale salatwada, houses in salatwada vadodara",
};

export default function SalatwadaVadodaraPage() {
  return <AreaPageTemplate area="salatwada" areaName="Salatwada" />;
}
