import React, { useState, useEffect, useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/future/image";

import { Thumb } from "./EmblaCarouselThumb";
import { Container } from "./styles";

interface IEmblaCarousel {
  slides: string[];
}

const EmblaCarousel = ({ slides }: IEmblaCarousel) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMoreThan5Images, setIsMoreThan5Images] = useState(false);
  const [mainViewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
  });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    // selectedClass: "",
    align: "center",
    dragFree: true,
    draggable: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs],
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);
  return (
    <Container>
      <div className="embla">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {slides.map((e, index) => (
              <div className="embla__slide embla__slide-main" key={index}>
                <Image
                  className="embla__slide__img"
                  src={e}
                  alt="A cool cat."
                  width="0"
                  height="0"
                  sizes="100vw"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
        <div className="embla embla--thumb">
          <div className="embla__viewport" ref={thumbViewportRef}>
            <div className="embla__container embla__container--thumb">
              {slides.map((e, index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  imgSrc={e as unknown as StaticImageData}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EmblaCarousel;
