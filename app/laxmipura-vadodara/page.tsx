import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Laxmipura, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Laxmipura, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate laxmipura vadodara, flats in laxmipura, property for sale laxmipura, houses in laxmipura vadodara",
};

export default function LaxmipuraVadodaraPage() {
  return <AreaPageTemplate area="laxmipura" areaName="Laxmipura" />;
}
