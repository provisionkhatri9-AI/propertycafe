type PriceAndFloor = {
  area: string;
  price: string;
}

export type Property = {
  id: number;
  top: {
    title: string;
    location: string;
    price: number;
    views: number;
    latestUpdate: string;
  };
  images: {
    cover: string;
    tour360: string;
    floorPlan: string;
    area: string;
    room: string;
  };
  typeAndPricing: {
    type: string;
    area: string;
    averageRate: string;
  };
    features : {
    ratePerAnna: string;
    area: string;
    facing: string;
    beds: number;
    kitchens: number;
    livingRooms: number;
    floors: number;
    balconies: number;
    parkings: number;
    baths: number;
    storeroom:number,
    cctv:number;
    garden:number;
    pool:number;
    wifi:number;
    ac:number;
    securityStaff:number

    };
    ownerInfo:{
        image:string;
        name:string;
        location:string;
        countryCode:string;
        number:number

    };
    overview:{
        heading:string;
        discription:string;
        quote:string;
        price:string
    },
    highlights:{
        totalArea:string;
        builtArea: string;
        roadType:string;
        propertyId: string;
        propertyFace: string;
        roadAccess: string;
    }
    priceAndFloor:PriceAndFloor[]
    roomAndSize: {
      type: string;
      size: string;
    }[]

};

export interface PropertyState {
  properties: Property[];
  selectedId: number | null;
}