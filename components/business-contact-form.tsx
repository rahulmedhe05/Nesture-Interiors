"use client";

import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { RealEstateForm } from "./forms/real-estate-form";

interface BusinessContactFormProps {
  business: BusinessConfig;
  area: string;
  keyword?: string;
}

export function BusinessContactForm({ business, area, keyword }: BusinessContactFormProps) {
  const areaName = getAreaDisplayName(area);

  return <RealEstateForm area={areaName} keyword={keyword} />;
}
