import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in VIP Road, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in VIP Road, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate vip road vadodara, flats in vip road, property for sale vip road, houses in vip road vadodara",
};

export default function VIPRoadVadodaraPage() {
  return <AreaPageTemplate area="vip-road" areaName="VIP Road" />;
}
