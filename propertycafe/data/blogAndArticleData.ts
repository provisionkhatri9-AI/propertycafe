export interface Blog {
  image: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
}

export const blogsData : Blog[] = [
  {
    image: "/bolg1.jpg",
    title: "Buying Property in Nepal? Avoid These 5 Legal Pitfalls!",
    date: "Jan 3, 2025",
    readTime: "4 min read",
    description:
      "Learn the most common legal mistakes property buyers make in Nepal and how to protect your investment before signing any agreement.",
  },
  {
    image: "/blog2.jpg",
    title: "How to Get a Home Loan in Nepal: A Complete Guide",
    date: "Feb 15, 2025",
    readTime: "6 min read",
    description:
      "Everything you need to know about home loan eligibility, required documents, interest rates, and the application process.",
  },
  {
    image: "/blog3.jpg",
    title: "Top 10 Areas to Invest in Kathmandu Real Estate",
    date: "Mar 12, 2025",
    readTime: "5 min read",
    description:
      "Explore the fastest-growing locations in Kathmandu Valley that offer strong rental demand and long-term property appreciation.",
  },
  
];