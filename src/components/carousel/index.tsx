import React from "react";

import EmblaCarousel from "./EmblaCarousel";

interface ICarousel {
  images: string[];
}

export const Carousel = ({ images }: ICarousel) => (
  <EmblaCarousel slides={images} />
);
