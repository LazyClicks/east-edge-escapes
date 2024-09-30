import { component$, useSignal } from "@builder.io/qwik";
import { Carousel } from "@qwik-ui/headless";
import Carousel1 from "~/assets/Carousel1.jpg?jsx";
import Carousel2 from "~/assets/Carousel2.jpg?jsx";
import Carousel3 from "~/assets/Carousel3.jpg?jsx";
import Carousel4 from "~/assets/Carousel4.jpg?jsx";
export default component$(() => {
  // useStyles$(styles);
  const carouselImages = [Carousel1, Carousel2, Carousel3, Carousel4];
  const carouselNames = ["Carousel1", "Carousel2", "Carousel3", "Carousel4"];

  const selectedIndex = useSignal<number>(0);
  const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];

  return (
    <Carousel.Root
      class="carousel-root"
      slidesPerView={1}
      gap={30}
      bind:selectedIndex={selectedIndex}
    >
      <div class="carousel-buttons">
        <Carousel.Previous>Prev</Carousel.Previous>
        <Carousel.Next>Next</Carousel.Next>
      </div>
      <Carousel.Scroller class="carousel-scroller">
        {carouselImages.map((ImageComponent, index) => (
          <Carousel.Slide key={index} class="carousel-slide">
            <ImageComponent></ImageComponent>
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
    </Carousel.Root>
  );
});
// internal
// import styles from "./carousel.css?inline";
