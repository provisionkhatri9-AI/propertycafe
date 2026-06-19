export type Property ={
  image: string;
  title: string;
  location: string;
  category: string;
}

export const properties : Property[] = [
    {
        image: "/propertybuilding1.jpg",
        title: "Prime Rental Space",
        location: "Kathmandu",
        category: "Commercial",
    },
    {
        image: "/propertybuilding2.jpg",
        title: "Luxury Apartment",
        location: "Lalitpur",
        category: "Residential",
    },
    {
        image: "/propertybuilding3.jpg",
        title: "Office Space for Rent",
        location: "Pokhara",
        category: "Commercial",
    },
    {
        image: "/propertybuilding4.jpg",
        title: "Modern Flat",
        location: "Bhaktapur",
        category: "Residential",
    },
    {
        image: "/propertybuilding4.jpg",
        title: "Modern Flat",
        location: "Bhaktapur",
        category: "Residential",
    },
    ];

    export const catagories :string[] = [
    "New Listing",
    "Trending",
    "Land",
    "New Projects",
    "Bank Properties",
    "Price Reduction",
    "Investment Opportunities"
]