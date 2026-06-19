export type LocationSales = {
  [location: string]: string[];
};

export const locationSales :LocationSales = {
  Imadol: [
    "Apartment in Imadol",
    "House for Sale in Imadol",
    "Land for Sale in Imadol",
  ],

  Baneshwor: [
    "Apartment in Baneshwor",
    "House in Baneshwor",
    "Commercial Space in Baneshwor",
  ],

  Koteshwor: [
    "Apartment in Koteshwor",
    "Villa in Koteshwor",
    "Land in Koteshwor",
  ],
};

export const propertyTypes : string[] = [
  "Apartment",
  "Land",
  "House",
  "Villa",
  "Commercial House",
  "Commercial Rental Spaces",
  "Commercial Lands",
];

export const places = [
  "Kathmandu",
  "Pokhara",
  "Chitwan",
  "Butwal",
  "Jhapa",
  "Kavre Palanchok",
];

export const brsi : string[]=[
  "Buy",
  "Rent",
  "Invest",
  "Services"
]
export const footerLinks : string[] = [
  "About",
  "Our Team",
  "Location",
  "Contact Us",
  "Help",
  "Terms and Conditions",
  "Privacy and Policy",
  "Careers",
];