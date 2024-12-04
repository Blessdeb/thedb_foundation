import Image from "next/image";

import Button from "@/lib/components/button";
import Highlight from "@/lib/components/highlight";
import Numbers from "@/lib/components/numbers";
import Link from "next/link";

export default function SectionThree() {
  return (
    <div className="">
      <div className="text-center">
        <p className="text-sm text-[#F25353] font-semibold">Our Impact</p>
        <h1 className="text-3xl leading-[1.2] mt-2 ">
          Ways We Help Around The World
        </h1>
      </div>

      <Highlight />

      <Numbers />

      <div
        className="w-full flex justify-center
      min-[571px]:justify-end pr-4 pl-4 min-[571px]:pr-0  min-[571px]:pl-0 items-center  mt-[40px] relative h-[424px]"
      >
        <Image
          src={"/image/image-five.png"}
          alt="Cover Image"
          className=" filter absolute   w-full h-full object-cover rounded-[0px]"
          width={2740}
          height={2740}
          quality={75}
        />

        <div className="absolute rounded-[0px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6138830532212884)_0%)] sm:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(0,0,0,1)_100%)] w-full h-full"></div>

        <div className="relative flex flex-col items-center gap-5 pr-0  min-[571px]:pr-[80px] ">
          <div className="">
            <object
              aria-label="svg"
              className="w-[34px] absolute 
              min-[571px]:top-0 top-[-40px] 
              min-[571px]:left-[-50px] left-[-10px]"
              type="image/svg+xml"
              data={"/svg/quote.svg"}
            ></object>
            <p
              className="font-medium text-white 
            sm:text-[28px] text-[22px] min-[571px]:w-[340px] w-full text-center"
            >
              Children need you to be a part of change in this world
            </p>

            <object
              aria-label="svg"
              className="w-[34px] absolute 
              min-[571px]:right-[50px] right-[10px] -scale-x-100"
              type="image/svg+xml"
              data={"/svg/quote.svg"}
            ></object>
          </div>

          <Button className="w-[142px] h-[49px] btn-gradient">
            <Link target="_blank" href="https://forms.gle/k3oq6TWuTgsbNtXU9">
              Partner with us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
