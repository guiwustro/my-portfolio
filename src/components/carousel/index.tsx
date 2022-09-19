import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";

import { IProjects } from "database/projects";
import Image from "next/image";

import { withTranslation } from "../../../i18n";
import {
  CarouselArrow,
  CarouselContainer,
  CarouselIndicator,
  CarouselIndicatorList,
  CarouselItem,
} from "./styles";

interface ICarousel {
  projectSelected?: IProjects;
  t: any;
}

type IMenuEndAt = "left" | "right";
const Carousel = ({ projectSelected, t }: ICarousel) => {
  const [menuEndAt, setMenuEndAt] = useState<IMenuEndAt>();
  const [currentImage, setCurrentImage] = useState<number>(0);

  const numberOfImages = projectSelected?.images.length;

  const carouselRef = useRef<HTMLUListElement>(null);
  const handleRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;

      if (numberOfImages !== currentImage + 1) {
        setCurrentImage((state) => state + 1);
      }
    }
  };

  const handleLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;

      //   Ajeitar comportamento dessa barra de carousel;
      // Ajustar tamanho da foto
      if (currentImage !== 0) {
        setCurrentImage((state) => state - 1);
      }
    }
  };

  useEffect(() => {
    if (currentImage === 0) {
      setMenuEndAt("left");
    } else if (numberOfImages === currentImage + 1) {
      setMenuEndAt("right");
    } else {
      setMenuEndAt(undefined);
    }
  }, [currentImage, numberOfImages]);

  return (
    <CarouselContainer menuEndAt={menuEndAt} className="project-carousel-image">
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

      <CarouselIndicatorList>
        {projectSelected?.images.map((image, i) => {
          return (
            <li key={image + i}>
              <CarouselIndicator
                isCurrentImage={currentImage === i}
              ></CarouselIndicator>
            </li>
          );
        })}
      </CarouselIndicatorList>

      <CarouselArrow
        className="arrow-right carousel-arrow"
        onClick={() => handleRight()}
      >
        <ImCircleRight />
      </CarouselArrow>

      <CarouselArrow
        className="arrow-left carousel-arrow"
        onClick={() => handleLeft()}
      >
        <ImCircleLeft />
      </CarouselArrow>
    </CarouselContainer>
  );
};
Carousel.getInitialProps = async () => ({
  namespacesRequired: ["projects"],
});

export default withTranslation("projects")(Carousel);
