import ImageCarousel from "@/lib/components/image-carousel";
import FirstSection from "@/lib/components/section-one";
import SectionThree from "@/lib/components/section-three";
import SectionTwo from "@/lib/components/section-two";
// import Image from "next/image";
// import Button from "@/lib/components/button";
import SectionFour from "@/lib/components/section-four";
import { MainLayout } from "@/lib/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full">
        <div className="w-full z-0  absolute top-0 flex justify-evenly h-full ">
          <hr className="w-[1px] hidden min-[634px]:block h-[70vh] bg-[#ECECEC]" />
          <hr className="w-[1px] block h-[70vh] bg-[#ECECEC]" />
          <hr className="w-[1px] hidden min-[634px]:block h-[70vh] bg-[#ECECEC]" />
          <hr className="w-[1px] block h-[70vh] bg-[#ECECEC]" />
          <hr className="w-[1px]  hidden min-[634px]:block  h-[70vh] bg-[#ECECEC]" />
          <hr className="w-[1px] hidden min-[634px]:block h-[70vh] bg-[#ECECEC]" />
          <hr className="w-[1px] block h-[70vh] bg-[#ECECEC]" />
        </div>
        <div className="relative w-full">
          <div className="w-full flex  flex-col items-center mt-24 min-[431px]:mt-28">
            <p className="sm:text-sm text-xs font-semibold text-[#3E3E3E]  tracking-[2px]">
              THE DEBORAH BLESS FOUNDATION
            </p>
            <div className="w-full flex justify-center  ">
              <h1 className="min-[890px]:text-[55px] mt-1 min-[890px]:pl-0 min-[890px]:pr-0 pl-8 pr-8 text-[38px] text-[#3E3E3E] font-light text-center leading-[1.2] w-[1100px] ">
                <span className="font-semibold text-[#F25353]">
                  EMPOWERING LIVES
                </span>
                , FIGHTING MALNUTRITION,
                <span className="font-semibold"> REDUCING CHILD MORTALITY</span>
              </h1>
            </div>
          </div>
          <div className="w-full mt-32  relative">
            <Link
              aria-label="donate page"
              href="/donate"
              className="btn-gradient cursor-pointer mx-auto my-0 inset-x-0 absolute top-[-90px] rounded-full w-[150px] h-[150px] min-[890px]:w-[160px] min-[890px]:h-[160px] flex flex-col z-20 justify-center items-center border-[8px] 
          min-[890px]:border-[8px] border-solid border-white"
            >
              <div className="text-white font-medium min-[890px]:text-xl text-lg">
                <span className="block ">Donate</span>
                <span className="flex gap-2">
                  Now
                  <object
                    aria-label="svg"
                    className="w-[32px] pointer-events-none"
                    type="image/svg+xml"
                    data={"/svg/arrow.svg"}
                  ></object>
                </span>
              </div>
            </Link>
            <ImageCarousel />
            <div className="bg-white hidden min-[582px]:block  mx-auto my-0 inset-x-0 rounded-[51%_49%_50%_50%_/_56%_56%_44%_44%] w-full absolute h-[120px]  bottom-[-61px] "></div>
            {/* <div className="bottom-[-230px] overflow-hidden bg-clip-content   w-full absolute">
            <div className=" translate-x-[-290px]  bg-white w-[2500px]  h-[290px] rounded-[51%_49%_50%_50%_/_56%_56%_44%_44%]"></div>
          </div> */}
          </div>

          <div className=" mt-[4rem]  min-[1055px]:mt-[11rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full ">
            <object
              aria-label="svg"
              className="min-[582px]:w-[44px] w-[38px] z-0 opacity-50 absolute min-[694px]:left-[70px] top-[-48px]  min-[582px]:top-[-60px] min-[694px]:top-0 left-[20px]"
              type="image/svg+xml"
              data={"/svg/dash-sketch.svg"}
            ></object>
            <FirstSection />
            <object
              aria-label="svg"
              className="w-[44px] z-0 opacity-50 absolute  min-[1332px]:top-[80px] 
            
            min-[694px]:top-[590px]
            
            top-[420px] right-[20px] min-[694px]:right-[70px]"
              type="image/svg+xml"
              data={"/svg/thin-dash-sketch.svg"}
            ></object>
          </div>

          <div className=" w-full pt-[12rem] 3xl:pr-[17rem] 3xl:pl-[17rem] relative  min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] mt-[10rem] min-[1055px]:mt-[14rem] bg-[#ef52520d] h-fit pb-16">
            <object
              aria-label="svg"
              className="w-[44px] opacity-50 z-0 absolute bottom-[30px] min-[1332px]:bottom-[130px] left-[70px]"
              type="image/svg+xml"
              data={"/svg/dash-sketch.svg"}
            ></object>
            <SectionTwo />
            <object
              aria-label="svg"
              className="w-[154px] opacity-68 absolute bottom-[240px] right-[40px] z-10"
              type="image/svg+xml"
              data={"/svg/flower-sketch.svg"}
            ></object>
            <object
              aria-label="svg"
              className="w-[94px] absolute min-[1018px]:top-[110px] top-[18px] right-[70px]"
              type="image/svg+xml"
              data={"/svg/sun-sketch.svg"}
            ></object>
          </div>

          <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem]     min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem]  min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] mt-[8rem] sm:mt-[10rem]  min-[1055px]:mt-[12rem]  h-fit pb-16">
            <SectionThree />
          </div>

          <div
            className=" w-full   3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] 
          mt-[5rem] 
        min-[507px]:mt-[8rem] min-[1055px]:mt-[10rem]  h-fit pb-16"
          >
            <SectionFour />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

// w-full  3xl:pr-[24rem] 3xl:pl-[24rem]   min-[1593px]:pl-[18rem] min-[1593px]:pr-[18rem] min-[1481px]:pl-[14rem] min-[1481px]:pr-[14rem] min-[1293px]:pl-[8rem] min-[1293px]:pr-[8rem] min-[1149px]:pr-[4rem] min-[1149px]:pl-[4rem] pl-[2rem] pr-[2rem]
//           mt-[5rem]
//         min-[507px]:mt-[8rem] [1055px]:mt-[10rem]  h-fit pb-16
