import Button from "@/lib/components/button";
import Link from "next/link";

export default function FirstSection() {
  return (
    <div className="w-full gap-[130px] min-[1055px]:gap-0 justify-between min-[1055px]:flex-row flex-col flex items-center">
      <div className="">
        <p className="text-sm text-[#F25353] font-semibold">What we do</p>
        <h1
          className="text-3xl leading-[1.2] w-full mt-2 
        min-[474px]:w-[420px]"
        >
          We Are On A Life Changing Mission To Reduce Child Mortality
        </h1>
        <p
          className="mt-[30px] text-[#666666] 
       min-[1135px]:w-[550px] w-full min-[474px]:w-[360px]
        "
        >
          Our mission is to provide, nurture, and cater to those in need,
          ensuring that every child has the chance to thrive. Whether it’s
          reducing infant mortality, supporting vocational training, or
          spreading the message of Jesus Christ and His love, our programs aim
          to inspire change that lasts
        </p>
        <Button className="mt-10 w-[142px] h-[49px] btn-gradient">
          <Link aria-label="donate page" href="/donate">
            Donate Now
          </Link>
        </Button>
      </div>

      <div
        className="grid min-[546px]:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)] 
      grid-rows-[repeat(1,1fr)]
      min-[546px]:grid-rows-[repeat(2,1fr)] gap-14"
      >
        <div className="">
          <object
            aria-label="suitcase"
            className="w-[51px]"
            type="image/svg+xml"
            data={"/svg/suitcase.svg"}
          ></object>
          <h1 className="mt-[15px] font-semibold text-lg">Vocational Skills</h1>
          <p className="text-sm text-[#666666] mt-[15px] min-[546px]:w-[220px] w-full">
            We believe that skills lead to empowerment. With a focus on
            vocation...
          </p>
          <Link
            aria-label="about page"
            className="group  relative"
            href="/about"
          >
            <p className="mt-[15px] flex items-center text-[#F25353]">
              <span className="w-[0px] block transition-all  duration-[0.1s] group-hover:w-[24px]"></span>
              <object
                aria-label="arrow"
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
          <object
            aria-label="svg"
            className="w-[51px]"
            type="image/svg+xml"
            data={"/svg/income.svg"}
          ></object>
          <h1 className="mt-[15px] font-semibold text-lg">Income Generation</h1>
          <p className="text-sm text-[#666666] mt-[15px] min-[546px]:w-[220px] w-full">
            We aim to break the cycle of poverty by providing individuals with
            income...
          </p>
          <Link
            aria-label="about page"
            className="group  relative"
            href="/about"
          >
            <p className="mt-[15px] flex items-center text-[#F25353]">
              <span className="w-[0px] block transition-all  duration-[0.1s] group-hover:w-[24px]"></span>
              <object
                aria-label="arrow"
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
          <object
            aria-label="food"
            className="w-[51px]"
            type="image/svg+xml"
            data={"/svg/food.svg"}
          ></object>
          <h1 className="mt-[15px] font-semibold text-lg">
            Combating Infant <br></br> Mortality & Malnutrition
          </h1>
          <p className="text-sm text-[#666666] mt-[15px]  min-[546px]:w-[220px] w-full">
            We recognize that the first years of life are crucial for a
            child’s...
          </p>
          <Link
            aria-label="about page"
            className="group  relative"
            href="/about"
          >
            <p className="mt-[15px] flex items-center text-[#F25353]">
              <span className="w-[0px] block transition-all  duration-[0.1s] group-hover:w-[24px]"></span>
              <object
                aria-label="arrow"
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
          <object
            aria-label="church"
            className="w-[51px]"
            type="image/svg+xml"
            data={"/svg/church.svg"}
          ></object>
          <h1 className="mt-[15px] font-semibold text-lg">
            Gospel <br></br> Outreach & Evangelism
          </h1>
          <p className="text-sm text-[#666666] mt-[15px] min-[546px]:w-[220px] w-full">
            Sharing hope and faith is a vital part of our mission. Through
            Gospel...
          </p>
          <Link
            aria-label="about page"
            className="group  relative"
            href="/about"
          >
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
      </div>
    </div>
  );
}
