import { AreaPageTemplate } from "@/components/area-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate in Pratapnagar, Vadodara | Flats, Houses, Property for Sale",
  description: "Find the best real estate properties in Pratapnagar, Vadodara. Buy/sell flats, houses, villas, and commercial properties. Contact us for expert property consultation.",
  keywords: "real estate pratapnagar vadodara, flats in pratapnagar, property for sale pratapnagar, houses in pratapnagar vadodara",
};

export default function PratapnagarVadodaraPage() {
  return <AreaPageTemplate area="pratapnagar" areaName="Pratapnagar" />;
}
