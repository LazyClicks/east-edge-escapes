import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Carousel from "~/components/carousel/carousel";
export default component$(() => {
  return (
    <>
      <Carousel></Carousel>
    </>
  );
});

export const head: DocumentHead = {
  title: "East Edge Express | Home",
  meta: [
    {
      name: "description",
      content:
        "Find affordable apartments for rent at East Edge Express. We offer a variety of rental listings to suit your needs.",
    },
    {
      name: "keywords",
      content:
        "apartment rentals, affordable apartments, rentals, real estate, East Edge Express",
    },
  ],
  scripts: [
    {
      props: {
        type: "application/ld+json",
      },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "East Edge Express",
        description: "Apartment rentals and listings.",
        offers: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Place",
            name: "Apartments for Rent",
            description: "Find the best apartment listings.",
          },
        },
      }),
    },
  ],
};
