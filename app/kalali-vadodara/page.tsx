import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Kalali, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Kalali, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate kalali vadodara, flats in kalali, property for sale kalali, houses in kalali vadodara",
};

export default function KalaliVadodaraPage() {
  return <AreaPageTemplate area="kalali" areaName="Kalali" />;
}
