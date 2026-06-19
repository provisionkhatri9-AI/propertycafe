import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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
        quote:string
    },
    highlights:{
        totalArea:string;
        builtArea: string;
        roadType:string;
        propertyId: string;
        propertyFace: string;
        roadAccess: string;
    }

};

interface PropertyState {
  properties: Property[];
  selectedId: number | null;
}

const initialState: PropertyState = {
  properties: [
  {
    id: 1,
    top: {
      title: "Bhandari Niwas for Sale in Budhanilkaltha, Kathmandu",
      location: "Central Mall, Kathmandu 4000",
      price: 2200000,
      views: 600,
      latestUpdate: "Dec 12, 2024",
    },
    images: {
      cover: "/featuredproduct3.jpg",
      tour360: "/360tour.jpg",
      floorPlan: "/floorplan.jpg",
      area: "/location.jpg",
      room: "/room.jpg",
    },
    typeAndPricing: {
      type: "2BHK Apartment",
      area: "3-4 anna",
      averageRate: "40k/anna",
    },
    features:{
        ratePerAnna: "46.93",
        area: "4.76",
        facing: "South East",
        beds: 4,
        kitchens: 2,
        livingRooms: 1,
        floors: 3,
        balconies: 3,
        parkings: 2,
        baths: 2,
        storeroom:2,
        cctv:1,
        garden:1,
        pool:1,
        wifi:2,
        ac:2,
        securityStaff:1
        
    },
    ownerInfo:{
        image: "/agent1.jpg",
        name : "Richard East",
        location: "Kathmandu",
        countryCode: "+977",
        number: 98412345660
    },
    overview:{
        heading : "Bhandari Niwas",
        discription : "Lorem ipsum dolor sit amet consectetur. Auctor platea commodo metus donec quam eros massa odio. Odio tristique cursus sed venenatis ac eget quam arcu adipiscing. Rhoncus nulla ullamcorper condimentum mi condimentum duis nunc nibh.Lorem ipsum dolor sit amet consectetur. Auctor platea commodo metus donec quam eros massa odio. Odio tristique cursus sed venenatis ac eget quam arcu adipiscing. Rhoncus nulla ullamcorper condimentum mi condimentum duis nunc nibh.Lorem ipsum dolor sit amet consectetur. Auctor platea commodo metus donec quam eros massa odio. Odio tristique cursus sed venenatis ac eget quam arcu adipiscing. Rhoncus nulla ullamcorper condimentum mi condimentum duis nunc nibh...",
        quote: "Neo-classical design house are now exclusively availabe on sale. Hurry up, Only 6 units remaining. "
    },
    highlights:{
        totalArea: "18-0-0 Ropani",
        builtArea : "3000 Ropani",
        roadType: "Black Topped",
        propertyId : "12873",
        propertyFace : "South East",
        roadAccess: "20 Feet"
    }
  },

],
  selectedId: null,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setSelectedId(state, action: PayloadAction<number>) {
      state.selectedId = action.payload;
    },
  },
});



export const { setSelectedId } = propertySlice.actions;
export default propertySlice.reducer;