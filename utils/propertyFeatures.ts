import type { Property } from "@/type/DetailPageType";

export type FeatureItem = {
  image: string;
  value: string | number;
  label: string;
};

export const getPropertyFeatures = (
  features: Property["features"]
): FeatureItem[] => {
  return [
    {
      image: "/arrowsquaredash.png",
      value: features.ratePerAnna,
      label: "k/anna",
    },
    {
      image: "/arrowsquaredash.png",
      value: features.area,
      label: "anna",
    },
    {
      image: "/bed.png",
      value: features.beds,
      label: "Bed",
    },
    {
      image: "/kitchen.png",
      value: features.kitchens,
      label: "Kitchen",
    },
    {
      image: "/compas.png",
      value: features.facing,
      label: "Navigation",
    },
    {
      image: "/livingroom.png",
      value: features.livingRooms,
      label: "Living Room",
    },
    {
      image: "/floor.png",
      value: features.floors,
      label: "Floors",
    },
    {
      image: "/balcony.png",
      value: features.balconies,
      label: "Balconies",
    },
    {
      image: "/parking.png",
      value: features.parkings,
      label: "Parkings",
    },
    {
      image: "/bath.png",
      value: features.baths,
      label: "Baths",
    },
    {
      image: "/livingroom.png",
      value: features.cctv,
      label: "cctv",
    },
    {
      image: "/floor.png",
      value: features.ac,
      label: "Floors",
    },
    {
      image: "/balcony.png",
      value: features.garden,
      label: "Balconies",
    },
    {
      image: "/parking.png",
      value: features.pool,
      label: "Parkings",
    },
    {
      image: "/bath.png",
      value: features.baths,
      label: "Baths",
    },
    {
      image: "/parking.png",
      value: features.storeroom,
      label: "Parkings",
    },
    {
      image: "/bath.png",
      value: features.wifi,
      label: "Baths",
    },
  ];
};