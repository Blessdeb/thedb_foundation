import SectionFour from "@/lib/components/section-four";
import Image from "next/image";
import Button from "@/lib/components/button";
import { MainLayout } from "@/lib/components/layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    // <div className="w-full">
    //   <div className="mt-[4rem]  min-[1055px]:mt-[8rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
    //     <div className="flex flex-col items-center">
    //       <h1 className="text-2xl text-center font-medium">ABOUT US</h1>

    //       <div className="w-full mt-[3rem] p-3 min-[1093px]:h-[690px] h-[450px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white">
    //         <Image
    //           src={"/image/image-five.png"}
    //           alt="Cover Image"
    //           className="filter  object-cover w-full h-full"
    //           width={2740}
    //           height={2740}
    //           quality={75}
    //         />
    //       </div>

    //       <p className="mt-[4rem] text-[#666666] text-center w-[88%] text-lg">
    //         {" "}
    //         The Deborah Bless Foundation was established to carry out programs,
    //         events and conferences aimed at spreading the gospel of Jesus christ
    //         WORLDWIDE The Deborah Bless Foundation was established to carry out
    //         programs, events and conferences aimed at spreading the gospel of
    //         Jesus christ. The Deborah Bless Foundation was established to carry
    //         out programs, events and conferences aimed at spreading the gospel
    //         of Jesus christ
    //       </p>
    //     </div>

    //     <div className=" w-full min-[1093px]:mt-[14rem] mt-[8rem] flex flex-col items-center">
    //       <p className="text-sm text-center text-[#F25353] font-semibold">
    //         Our Work
    //       </p>
    //       <h1
    //         className="text-3xl text-center font-semibold w-full leading-[1.2] mt-2
    //       min-[491px]:w-[370px]"
    //       >
    //         Centred Around Seven Solid Pillars
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="w-full pl-[2rem] pr-[2rem] min-[997px]:pr-0 min-[997px]:pl-0 min-[997px]:mt-[9rem] mt-[6rem] flex flex-col gap-[6rem] min-[997px]:gap-[18rem]">
    //     {/* //// */}
    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible "></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0  "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0  "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0  "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0 "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0 "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0 "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0 "></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className=" w-full   3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem]
    //       mt-[5rem]
    //     min-[507px]:mt-[8rem] min-[1055px]:mt-[18rem]  h-fit pb-16"
    //   >
    //     <SectionFour />
    //   </div>
    // </div>
    <MainLayout>
      <div className="w-full">
        <div className="w-full relative">
          <Image
            src={"/image/image-five.png"}
            alt="Cover Image"
            className="filter   object-cover w-full min-[1093px]:h-[320px] h-[310px]"
            width={6740}
            height={6740}
            quality={100}
          />

          <div className="absolute top-0 left-0 z-[8] opacity-[.6] bg-black w-full h-full"></div>

          <div className="absolute z-[10] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] bottom-[2rem]  min-[1093px]:bottom-[3rem] ">
            <h1
              className="min-[1093px]:text-[39px]
          text-[28px]
          font-semibold text-white"
            >
              About Us
            </h1>
            <p className="text-white w-full min-[674px]:w-[590px] text-[14px]">
              We are driven by a deep commitment to change lives and uplift
              communities, one child and one family at a time.
            </p>
          </div>
        </div>
        <div className="mt-[4rem]  min-[1055px]:mt-[4rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
          <div className="w-full">
            <h1 className="text-[24px] font-semibold">
              Who Do They Say We Are?
            </h1>
            <p className="mt-2 text-[16px] text-[#5a5a5a]">
              Deborah Bless Foundation, we are driven by a deep commitment to
              change lives and uplift communities, one child and one family at a
              time. We believe every child deserves the right to nutritious
              food, access to education, and the opportunity to take control of
              their own destiny. This vision fuels everything we do, from our
              outreach programs to our on-the-ground initiatives. Through
              Christ-like compassion, empowerment, and sustainability, we strive
              to create lasting impact for children, youth, and families across
              the World.
            </p>

            <h1 className="mt-8 font-bold text-lg">Our Mission</h1>
            <p className="mt-2 text-[16px] text-[#5a5a5a]">
              Our mission is to provide, nurture, and cater to those in need,
              ensuring that every child has the chance to thrive. Whether it’s
              reducing infant mortality, supporting vocational training, or
              spreading the message of Jesus Christ and His love, our programs
              aim to inspire change that lasts.
            </p>
            <div className="w-full mt-10 flex ">
              <div className="">
                <h1 className="font-bold text-lg">Our Four Core Tenents</h1>
                <p className="mt-2 w-[91%]  text-[16px] text-[#666666]">
                  The Deborah Bless Foundation is built on four foundational
                  pillars that guide our work and ensure that our initiatives
                  are impactful and sustainable:
                </p>
                <ul className="mt-4 pl-5">
                  <li className="mt-1 w-[91%] list-disc  text-[16px] text-[#666666]">
                    <span className="font-semibold text-black">
                      {" "}
                      Combating Infant Mortality & Malnutrition:{"   "}
                    </span>{" "}
                    We recognize that the first years of life are crucial for a
                    child’s development, which is why we focus on combating
                    infant mortality and malnutrition. Through food support,
                    health education, and access to essential resources, we
                    ensure that every child in our care has the chance to grow
                    up healthy and strong.
                  </li>
                  <li className="mt-4 w-[91%] list-disc  text-[16px] text-[#666666]">
                    <span className="font-semibold text-black">
                      {" "}
                      Gospel Outreach & Evangelism:{"   "}
                    </span>{" "}
                    Sharing hope and faith is a vital part of our mission.
                    Through Gospel outreach and evangelism, we provide spiritual
                    guidance, support, and inspiration to communities, offering
                    a Jesus Christ message of love and unity. Our outreach
                    programs bring people together, building strong, faith-based
                    communities and supporting individuals on their spiritual
                    journeys.
                  </li>
                  <li className="mt-4 w-[91%] list-disc  text-[16px] text-[#666666]">
                    <span className="font-semibold text-black">
                      {" "}
                      Vocational Skills Development:{"   "}
                    </span>{" "}
                    We believe that skills lead to empowerment. With a focus on
                    vocational training, we provide opportunities for youths to
                    gain valuable skills that open doors to employment and
                    self-sufficiency. By partnering with organizations like
                    Abuja Culinary School, we’ve been able to award scholarships
                    to underserved youths , improve their futures and give them
                    the means to support themselves and their families.
                  </li>
                  <li className="mt-4 w-[91%] list-disc  text-[16px] text-[#666666]">
                    <span className="font-semibold text-black">
                      {" "}
                      Income Generation:{"   "}
                    </span>{" "}
                    We aim to break the cycle of poverty by providing
                    individuals with income-generating tools and resources. From
                    farming equipment to grinding machines, these tools empower
                    families to earn a steady income, supporting themselves
                    sustainably. By helping families establish small businesses,
                    we enable them to take control of their financial futures,
                    reducing reliance on temporary aid and creating lasting
                    change within their communities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-40">
            <p className="text-sm text-[#F25353] font-semibold">Our Founder</p>
            <h1 className="text-semibold text-3xl mt-2 ">Meet Debbie</h1>
            <div className="w-full">
              <div className="w-full mt-[3rem] p-3 min-[1093px]:h-[690px] h-[450px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white">
                <Image
                  src={
                    "https://res.cloudinary.com/dci2ylcbr/image/upload/v1731743656/founder_icyxa3.webp"
                  }
                  alt="Cover Image"
                  className="filter  object-cover w-full h-full"
                  width={2740}
                  height={2740}
                  quality={75}
                />
              </div>
              <div className="w-full p-5 text-center flex flex-col items-center pb-10 min-[577px]:pb-0 pt-10 min-[725px]:pt-20 min-[577px]:h-[340px] h-fit bg-[rgba(62,77,98,0.11)]">
                <h1
                  className="font-bold 
              min-[1066px]:text-3xl text-xl min-[577px]:text-2xl"
                >
                  &rdquo;I believe every child deserves the right to nutritious
                  food, access to education, and the opportunity to take control
                  of their own destiny.&rdquo;
                </h1>
                <p className="min-[577px]:mt-10 mt-10 font-medium  min-[1066px]:text-[22px] text-[18px] text-[#666666]">
                  DEBORAH ANUOLUWA OGWUCHE
                </p>
                <p className="mt-1 text-[14px]   min-[1066px]:text-[18px] text-[#666666]">
                  President & Chief Executive Officer, The Deborah Bless
                  Foundation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" w-full   3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] 
        mt-[5rem] 
      min-[507px]:mt-[8rem] min-[1055px]:mt-[10rem]  h-fit pb-16"
        >
          <div
            className="w-full flex justify-center
      min-[571px]:justify-end pr-4 pl-4 min-[571px]:pr-0  min-[571px]:pl-0 items-center  relative h-[424px]"
          >
            <Image
              src={"/image/image-five.png"}
              alt="Cover Image"
              className=" filter absolute  w-full h-full object-cover rounded-[0px]"
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
                <Link
                  target="_blank"
                  href="https://forms.gle/k3oq6TWuTgsbNtXU9"
                >
                  Partner with us
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="w-full h-full  mt-[5rem] 
      min-[507px]:mt-[8rem]"
          >
            <SectionFour />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
