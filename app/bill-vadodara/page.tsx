import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Bill, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Bill, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate bill vadodara, flats in bill, property for sale bill, houses in bill vadodara",
};

export default function BillVadodaraPage() {
  return <AreaPageTemplate area="bill" areaName="Bill" />;
}
