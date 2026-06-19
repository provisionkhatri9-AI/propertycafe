interface TopInterface{
    title: string;
    location:string;
    price:number;
    views : number;
    latestUpdate: string
}

export interface TopImagesInterface{
    cover: string;
    tour360: string;
    floorPlan: string;
    area: string;
    room: string;
}

export interface TypeAndPrice{
    type:string
    area:string
    averageRate:string
}

export interface HomeDetail{
    
    top:TopInterface
    images:TopImagesInterface
    typeAndPricing: TypeAndPrice
    
}

export const homeDetail : HomeDetail = {
    

    top :{
        title: "Bhandari Niwas for Sale in Budhanilkaltha, Kathmandu",
        location : "Central Mall, Kathmandu 4000",
        price : 2200000,
        views: 600,
        latestUpdate : "Dec 12, 2024"
    },

    images : {
    cover: "/featuredproduct3.jpg",
    tour360: "/360tour.jpg",
    floorPlan: "/floorplan.jpg",
    area: "/location.jpg",
    room: "/room.jpg",
  },
  
  typeAndPricing:{
    type: "2BHK Apartment",
    area: "3-4 anna",
    averageRate:"40k/anna"
  }

}