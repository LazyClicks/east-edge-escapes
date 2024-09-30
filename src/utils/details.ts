import { type ApartmentDetailsProps } from "~/components/card_details/card_details";

export const formatPrice = (
  value: number,
  locale = "en-US",
  currency = "USD",
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
};

export const apartments: ApartmentDetailsProps[] = [
  {
    id: "modern-city-loft",
    name: "Modern City Loft",
    imageUrl:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A stylish modern loft located in the heart of the city, ideal for young professionals with easy access to entertainment and nightlife.",
    tags: ["City", "Loft", "1 Bedroom", "Young Professionals"],
    rating: 3.2,
    ratings: [
      {
        reviewerName: "John Doe",
        reviewText: "Loved the place, very modern and cozy!",
      },
      {
        reviewerName: "Jane Smith",
        reviewText: "Great location, but a bit noisy at night.",
      },
    ],
    startingPrice: 350000,
  },
  {
    id: "luxury-beachfront-villa",
    name: "Luxury Beachfront Villa",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "An exquisite beachfront villa offering stunning ocean views, private pool, and spacious interiors for a luxurious lifestyle.",
    tags: ["Beachfront", "Luxury", "Private Pool", "4 Bedrooms"],
    rating: 4.3,
    ratings: [
      {
        reviewerName: "Alice Green",
        reviewText: "Incredible villa, the views were breathtaking!",
      },
    ],
    startingPrice: 950000,
  },
];
