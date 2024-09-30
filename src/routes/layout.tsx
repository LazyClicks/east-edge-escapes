import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
// Supports weights 200-800
import "@fontsource-variable/plus-jakarta-sans";
// import { type ApartmentDetailsProps } from "~/components/card_details/card_details";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <main class="mx-4 my-4 flex h-fit flex-col gap-8 md:mx-14 lg:mx-16 xl:mx-20 2xl:mx-24">
      <Slot />
    </main>
  );
});
