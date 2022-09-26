import React from "react";

import Image, { StaticImageData } from "next/future/image";

interface IThumb {
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  imgSrc: StaticImageData;
}
export const Thumb = ({ selected, onClick, imgSrc }: IThumb) => (
  <div
    className={`embla__slide embla__slide--thumb ${selected && "is-selected"}`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <div className="embla__slide__thumbnail">
        <Image
          src={imgSrc}
          alt="A cool cat."
          width={160}
          height={90}
          className={"image"}
          priority
        />
      </div>
    </button>
  </div>
);
