import Button from "@/lib/components/button";
import Image from "next/image";
import Link from "next/link";

export default function SectionTwo() {
  return (
    <div className="">
      <div
        className="flex flex-col  min-[1018px]:flex-row min-[1018px]:gap-0 
      min-[722px]:gap-[180px] gap-[310px]  items-center justify-between"
      >
        <div className="">
          <div className=" rounded-[19px] relative w-[317px] h-[356px] border-dashed border-2 border-[#F25353]">
            <div className="top-[-140px] min-[722px]:top-[-90px] right-[29px] min-[722px]:right-[-190px] bg-white p-2 w-[251px] absolute shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)]  h-[350px]">
              <Image
                src={"/image/image-four.png"}
                alt="Cover Image"
                className=" filter  object-cover h-full w-full"
                width={2740}
                height={2740}
                quality={75}
              />
            </div>
            <div
              className="absolute bg-white p-2 min-[722px]:bottom-[-90px] bottom-[-230px] left-[31px] 
              min-[722px]:left-[-20px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] w-[251px] h-[350px]  "
            >
              <Image
                src={"/image/image-two.png"}
                alt="Cover Image"
                className=" filter  object-cover w-full h-full "
                width={2740}
                height={2740}
                quality={75}
              />
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-[#F25353] font-semibold">Our Story</p>
          <h1
            className="text-3xl w-full leading-[1.2] mt-2 
          min-[491px]:w-[370px]"
          >
            Learn A Little About Us And What We Hope To Achieve
          </h1>
          <p
            className="mt-[30px] text-[#666666] w-full 
          min-[491px]:w-[370px] min-[1132px]:w-[450px]"
          >
            We believe every child deserves the right to nutritious food, access
            to education, and the opportunity to take control of their own
            destiny. This vision fuels everything we do, from our outreach
            programs to our on-the-ground initiatives.
          </p>
          <Button className="mt-10 w-[142px] h-[49px] btn-gradient">
            <Link aria-label="about page" href="/about">
              Learn More
            </Link>
          </Button>
        </div>
      </div>

      <div
        className="flex  flex-col min-[1018px]:flex-row  min-[1018px]:gap-0 min-[722px]:gap-[250px] relative z-10 gap-[310px] min-[1018px]:mt-[20rem] 
      mt-[7rem]
      sm:mt-[12rem] items-center justify-between"
      >
        <div className="">
          <p className="text-sm text-[#F25353] font-semibold">The Team</p>
          <h1
            className="text-3xl leading-[1.2] mt-2
          w-full 
          min-[491px]:w-[329px]"
          >
            The Minds Behind The DB Foundation
          </h1>
          <p
            className="mt-[15px] text-[#666666] 
          w-full
          min-[491px]:w-[370px] min-[1132px]:w-[450px]"
          >
            At the Deborah Bless Foundation, we are a passionate team dedicated
            to creating lasting change in the lives of those who need it most.
            Want to find out how you can be part of the team?
          </p>
          <Link aria-label="team page" className="group  relative" href="/team">
            <p className="mt-[15px] flex items-center text-[#F25353]">
              <span className="w-[0px] block transition-all  duration-[0.1s] group-hover:w-[24px]"></span>
              <object
                aria-label="svg"
                className="transition-all pointer-events-none absolute  duration-[0.1s] ease-[ease-in-out]  w-[24px] group-hover:translate-x-[0px]
              group-hover:opacity-[1] opacity-[0] translate-x-[-15px] h-[24px]"
                type="image/svg+xml"
                data={"/svg/arrow.svg"}
              ></object>
              <span className="group-hover:ml-[1rem] block"> Learn More</span>
            </p>
          </Link>
        </div>

        <div className="">
          <div className=" rounded-[19px] relative w-[317px] h-[356px] ">
            <div
              className="absolute 
              min-[722px]:top-[-120px] bg-white p-2 top-[-230px] left-[1px] z-20 min-[722px]:left-[-200px] w-[295px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] h-[410px]"
            >
              <Image
                src={"/image/image-five.png"}
                alt="Cover Image"
                className="filter  h-full w-full  object-cover "
                width={2740}
                height={2740}
                quality={75}
              />
            </div>

            <div className="absolute bottom-[-5px] z-10 left-[20px] w-[263px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white p-2 h-[260px]">
              <Image
                src={"/image/image-two.png"}
                alt="Cover Image"
                className=" filter   object-cover h-full w-full"
                width={2740}
                height={2740}
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
