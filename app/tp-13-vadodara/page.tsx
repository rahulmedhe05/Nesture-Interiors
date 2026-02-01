import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in TP 13, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in TP 13, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate tp 13 vadodara, flats in tp 13, property for sale tp 13, houses in tp 13 vadodara",
};

export default function TP13VadodaraPage() {
  return <AreaPageTemplate area="tp-13" areaName="TP 13" />;
}
