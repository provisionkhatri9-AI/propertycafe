export interface FeaturedProperty {
  id:number
  image: string;
  tag: string;
  price: string;
  sqft: number;
  beds: number;
  baths: number;
  location: string;
  postedBy: string;
}

type FeatureKeyType = "sqft" | "beds" | "baths"

export interface FeatureLableIconInt {
  image : string;
  value : FeatureKeyType;
  lable: string
}

export const featureImageIcon : FeatureLableIconInt[]  = [

  {
    image: "/arrowsquaredash.png",
    value : "sqft",
    lable: "sqft"
  },
  {
    image: "/bed.png",
    value : "beds",
    lable : "bed"
  },
  {
  image : "/bath.png",
  value : "baths",
  lable : "bath",
  }
  
]

export const similarData : FeaturedProperty[] = [
    
  {
    id:1,
    image: "/featuredproduct1.jpg",
    tag: "Commercial",
    price: "$290,000",
    sqft: 4247,
    beds: 4,
    baths: 2,
    location: "Tourist Hub, Thamel, Kathmandu",
    postedBy: "Developer / Posted by owner",
  },
  {
    id:2,
    image: "/featuredproduct1.jpg",
    tag: "Commercial",
    price: "$290,000",
    sqft: 4247,
    beds: 4,
    baths: 2,
    location: "Tourist Hub, Thamel, Kathmandu",
    postedBy: "Developer / Posted by owner",
  },
  {
    id:3,
    image: "/featuredproduct2.jpg",
    tag: "Residential",
    price: "$350,000",
    sqft: 3800,
    beds: 3,
    baths: 2,
    location: "Sanepa, Lalitpur",
    postedBy: "Posted by owner",
  },
  {
    id:4,
    image: "/featuredproduct3.jpg",
    tag: "Apartment",
    price: "$420,000",
    sqft: 5100,
    beds: 5,
    baths: 3,
    location: "Lakeside, Pokhara",
    postedBy: "Developer",
  },
  {
    id:5,
    image: "/featuredproduct4.jpg",
    tag: "Villa",
    price: "$580,000",
    sqft: 6500,
    beds: 6,
    baths: 4,
    location: "Budhanilkantha, Kathmandu",
    postedBy: "Premium Seller",
  },
];