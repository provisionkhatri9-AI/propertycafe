
type AreaType = {
  area: string;
  propertyTypes : string[];
}

type LocationType= {
  location : string;
  areas: AreaType[];
}

export type ExploreData={
  type :"Buy" | "Rent" | "Invest" | "Services";
  locations : LocationType[];
}