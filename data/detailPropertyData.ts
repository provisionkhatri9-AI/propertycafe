import type { PropertyState } from "@/type/DetailPageType";

export const initialState: PropertyState = {
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
        quote: "Neo-classical design house are now exclusively availabe on sale. Hurry up, Only 6 units remaining. ",
        price : "2.5-3.5 Cr"
    },
    highlights:{
        totalArea: "18-0-0 Ropani",
        builtArea : "3000 Ropani",
        roadType: "Black Topped",
        propertyId : "12873",
        propertyFace : "South East",
        roadAccess: "20 Feet"
    },
    priceAndFloor:[
      {
        area:"4anna",
        price: "2Cr"
      },
      {
        area:"5anna",
        price: "2.5Cr"
      },
      {
        area:"6anna",
        price: "3Cr"
      },
      {
        area:"7anna",
        price: "3.5Cr"
      },
      {
        area:"8anna",
        price: "3.5Cr"
      },
    ],
    roomAndSize:[
    {
      type : "Bedroom 1",
      size : "11’ 10’’ X 10’ 0’’"
    },
    {
      type : "Bedroom 2",
      size : "9’ 1’’ X 10’ 0’’"
    },
    {
      type : "Livingroom 1",
      size : "11’ 1’’ X 10’ 0’’"
    },
    {
      type : "Bathroom 1",
      size : "11’ 10’’ X 10’ 0’’"
    },
    {
      type : "Attached Bathroom 1",
      size : "7’ 10’’ X 10’ 0’’"
    },
    ],
  }

],
  selectedId: null,
};