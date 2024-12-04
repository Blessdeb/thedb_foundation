"use client";

import Image from "next/image";
// import React, { useEffect } from 'react'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="w-full flex flex-row  items-center bg-black h-[400px]  min-[587px]:h-[580px]">
      {/* <Image
        src={"/image/image-three.png"}
        alt="Cover Image"
        className="h-full w-[33%] filter grayscale  object-cover"
        width={2740}
        height={2740}
        quality={75}
      />
      <Image
        src={"/image/image-one.png"}
        alt="Cover Image"
        className="h-full w-[34%] object-cover"
        width={2740}
        height={2740}
        quality={75}
      />
      <Image
        src={"/image/image-two.png"}
        alt="Cover Image"
        className="h-full w-[33%] filter grayscale  object-cover"
        width={2740}
        height={2740}
        quality={75}
      /> */}
      <div className="embla h-full " ref={emblaRef}>
        <div className="embla__container h-full">
          <div className="embla__slide h-full flex-[0_0_100%] min-[760px]:flex-[0_0_35%]">
            <Image
              src={"/image/image-three.png"}
              alt="Image of a child in need"
              className="h-full w-full filter   object-cover"
              width={2740}
              height={2740}
              quality={75}
            />
          </div>
          <div className="embla__slide flex-[0_0_100%] min-[760px]:flex-[0_0_35%]">
            {" "}
            <Image
              src={"/image/image-one.png"}
              alt="Image of a child in need"
              className="h-full w-full filter    object-cover"
              width={2740}
              height={2740}
              quality={75}
            />
          </div>
          <div className="embla__slide flex-[0_0_100%] min-[760px]:flex-[0_0_35%]">
            <Image
              src={"/image/image-two.png"}
              alt="Image of a child in need"
              className="h-full w-full filter   object-cover"
              width={2740}
              height={2740}
              quality={75}
            />
          </div>
          <div className="embla__slide flex-[0_0_100%] min-[760px]:flex-[0_0_35%]">
            <Image
              src={"/image/image-four.png"}
              alt="Image of a child in need"
              className="h-full w-full filter \  object-cover"
              width={2740}
              height={2740}
              quality={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
