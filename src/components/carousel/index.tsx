import React from "react";
import { useRef } from "react";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";

import { IProjects } from "database/projects";
import Image from "next/image";

import { withTranslation } from "../../../i18n";
import { CarouselContainer, CarouselItem } from "./styles";

interface ICarousel {
  projectSelected?: IProjects;
  t: any;
}

const Carousel = ({ projectSelected, t }: ICarousel) => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const handleRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;

      const maximumWidth =
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
      const actualWidth = carouselRef.current.scrollLeft;

      if (maximumWidth === actualWidth) {
        carouselRef.current.scrollLeft = 0;
      }
    }
  };

  const handleLeft = () => {
    if (carouselRef.current) {
      console.log(carouselRef.current.offsetWidth);
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
      const maximumWidth =
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
      const actualWidth = carouselRef.current.scrollLeft;

      //   Ajeitar comportamento dessa barra de carousel;
      // Ajustar tamanho da foto
      if (actualWidth === 0) {
        carouselRef.current.scrollLeft = maximumWidth;
      }
    }
  };

  return (
    <CarouselContainer className="project-carousel-image">
      <ul ref={carouselRef}>
        {projectSelected?.images.map((image, i) => {
          return (
            <CarouselItem key={image}>
              <Image
                src={image}
                alt={t(`projects.${i}.project-name`)}
                width={9}
                height={16}
                layout="responsive"
                objectFit={"cover"}
                className="project-figure"
              />
            </CarouselItem>
          );
        })}
      </ul>

      <ul>
        {projectSelected?.images.map((image, i) => {
          return (
            <li key={image + i}>
              <button className="carousel__indicator"></button>
            </li>
          );
        })}
      </ul>

      <button
        className="arrow-right carousel-arrow"
        onClick={(e) => handleRight(e)}
      >
        <ImCircleRight />
      </button>

      <button
        className="arrow-left carousel-arrow"
        onClick={(e) => handleLeft(e)}
      >
        <ImCircleLeft />
      </button>
    </CarouselContainer>
  );
};
Carousel.getInitialProps = async () => ({
  namespacesRequired: ["projects"],
});

export default withTranslation("projects")(Carousel);
