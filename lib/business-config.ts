// Business Configuration with unique colors and details for each vertical

export interface BusinessConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  icon: string;
  services: string[];
  areas: string[];
}

// Common areas for all businesses - 40 areas of Vadodara
export const vadodaraAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
  "race-course",
  "productivity-road",
  "nizampura",
  "gorwa",
  "ajwa-road",
  "bill",
  "dabhoi-road",
  "diwalipura",
  "ellora-park",
  "jetalpur",
  "karelibagh",
  "lalbaug",
  "laxmipura",
  "navapura",
  "new-sama-road",
  "panigate",
  "pratapnagar",
  "race-course-circle",
  "raopura",
  "refinery-road",
  "salatwada",
  "sama-savli-road",
  "sevasi",
  "sindhrot",
  "tp-13",
  "undera",
  "vemali",
  "vishwamitri",
  "wadi",
];

export const businesses: BusinessConfig[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    slug: "real-estate",
    tagline: "Find Your Dream Property in Vadodara",
    description: "Trusted real estate services in Vadodara",
    colors: {
      primary: "#1E3A5F", // Deep Blue
      secondary: "#4A90D9", // Sky Blue
      accent: "#0D1B2A", // Navy
      gradient: "from-blue-900 to-blue-700",
    },
    icon: "🏢",
    services: [
      "Property Buying",
      "Property Selling",
      "Rental Services",
      "Commercial Property",
      "Residential Property",
      "Plot & Land",
      "Property Valuation",
      "Home Loans Assistance",
      "Legal Documentation",
      "Investment Advisory",
    ],
    areas: vadodaraAreas,
  },
];

export const getBusinessBySlug = (slug: string): BusinessConfig | undefined => {
  return businesses.find((b) => b.slug === slug);
};

export const getAreaDisplayName = (area: string): string => {
  const areaNames: Record<string, string> = {
    vadodara: "Vadodara",
    alkapuri: "Alkapuri",
    akota: "Akota",
    "old-padra-road": "Old Padra Road",
    gotri: "Gotri",
    "vasna-bhayli-road": "Vasna-Bhayli Road",
    manjalpur: "Manjalpur",
    sama: "Sama",
    karelibaug: "Karelibaug",
    "waghodia-road": "Waghodia Road",
    chhani: "Chhani",
    harni: "Harni",
    kalali: "Kalali",
    atladara: "Atladara",
    "vadsar-road": "Vadsar Road",
    tarsali: "Tarsali",
    sayajigunj: "Sayajigunj",
    subhanpura: "Subhanpura",
    tandalja: "Tandalja",
    makarpura: "Makarpura",
    fatehgunj: "Fatehgunj",
    "race-course": "Race Course",
    "productivity-road": "Productivity Road",
    nizampura: "Nizampura",
    gorwa: "Gorwa",
    "ajwa-road": "Ajwa Road",
    bill: "Bill",
    "dabhoi-road": "Dabhoi Road",
    diwalipura: "Diwalipura",
    "ellora-park": "Ellora Park",
    jetalpur: "Jetalpur",
    karelibagh: "Karelibagh",
    lalbaug: "Lalbaug",
    laxmipura: "Laxmipura",
    navapura: "Navapura",
    "new-sama-road": "New Sama Road",
    panigate: "Panigate",
    pratapnagar: "Pratapnagar",
    "race-course-circle": "Race Course Circle",
    raopura: "Raopura",
    "refinery-road": "Refinery Road",
    salatwada: "Salatwada",
    "sama-savli-road": "Sama Savli Road",
    sevasi: "Sevasi",
    sindhrot: "Sindhrot",
    "tp-13": "TP 13",
    undera: "Undera",
    vemali: "Vemali",
    vishwamitri: "Vishwamitri",
    wadi: "Wadi",
  };
  return areaNames[area] || area;
};

export const allAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
  "race-course",
  "productivity-road",
  "nizampura",
  "gorwa",
  "ajwa-road",
  "bill",
  "dabhoi-road",
  "diwalipura",
  "ellora-park",
  "jetalpur",
  "karelibagh",
  "lalbaug",
  "laxmipura",
  "navapura",
  "new-sama-road",
  "panigate",
  "pratapnagar",
  "race-course-circle",
  "raopura",
  "refinery-road",
  "salatwada",
  "sama-savli-road",
  "sevasi",
  "sindhrot",
  "tp-13",
  "undera",
  "vemali",
  "vishwamitri",
  "wadi",
];
