import { MainLayout } from "@/lib/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <MainLayout>
      <div className="w-full min-[1161px]:pb-[8rem] pb-[18rem]">
        <div className="mt-[4rem]  min-[1055px]:mt-[4rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
          <div className="w-full flex flex-col items-center mt-40">
            <p className="text-sm text-[#F25353] font-semibold">Our Team</p>
            <h1 className="text-semibold text-3xl mt-2 ">Meet The Squad</h1>
            <div className="w-full">
              <div className="w-full mt-[3rem] p-3 min-[1093px]:h-[690px] h-[450px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white">
                <Image
                  src={
                    "https://res.cloudinary.com/dci2ylcbr/image/upload/v1732143604/new_ndop6h.jpg"
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
                  &rdquo;We believe every child should have a chance at a good
                  life, good food and overall a great future that is why we try
                  everything in our power to provide, nurture and cater for each
                  child.&rdquo;
                </h1>
                <p className="min-[577px]:mt-10 mt-10 font-medium  min-[1066px]:text-[22px] text-[14px] text-[#666666]">
                  DEBORAH, JAMES, MARIAM
                </p>
                <p className="mt-1 text-[14px]   min-[1066px]:text-[18px] text-[#666666]">
                  Team , The Deborah Bless Foundation
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-24">
            <div className="flex pb-10 min-[893px]:pb-0 flex-col min-[893px]:flex-row   bg-[rgba(62,77,98,0.11)] gap-10">
              <div className="min-[893px]:w-[513px] w-full shrink-0 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white p-2 h-[306px] min-[893px]:h-[442px]">
                <Image
                  src={
                    "https://res.cloudinary.com/dci2ylcbr/image/upload/v1731743656/founder_icyxa3.webp"
                  }
                  alt="Cover Image"
                  className="filter object-cover shrink-0 w-full h-full"
                  width={6740}
                  height={6740}
                  quality={100}
                />
              </div>

              <div className="min-[893px]:pt-16 pt-0 min-[893px]:pr-10 pl-5 min-[893px]:pl-0 pr-5 min-[1041px]:pr-40">
                <h1 className="text-[22px] w-full min-[1041px]:w-[310px]  font-semibold">
                  DEBORAH ANUOLUWA OGWUCHE
                </h1>
                <p className="mt-2">
                  President & Chief Executive Officer, The DB Foundation
                </p>
                <p className="mt-4 text-[#666666] w-full text-[14px]">
                  Deborah Ogwuche is a business leader and software engineer who
                  graduated from ALX-Holberton School in Silicon Valley, USA.
                  She is also a hospitality/nutrition education expert and the
                  recipient of the Stanford Seed Aspire program for African
                  Entrepreneurs. As the CEO/ Manager of Abuja Culinary School,
                  she led the school to having the highest 5-star ratings for
                  any school in Nigeria and the first school in Nigeria to break
                  a Guinness World Record in 2024. She is a published author,
                  speaker, mentor, and technology expert.
                </p>
              </div>
            </div>

            {/*  */}

            <div className="flex mt-20 pb-10 min-[893px]:pb-0 flex-col min-[893px]:flex-row   bg-[rgba(62,77,98,0.11)] gap-10">
              <div className="min-[893px]:w-[513px] w-full shrink-0 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white p-2 h-[306px] min-[893px]:h-[442px]">
                <Image
                  src={
                    "https://res.cloudinary.com/dci2ylcbr/image/upload/v1731745060/5Z3A3629-1_1_h6zth0.webp"
                  }
                  alt="Cover Image"
                  className="filter object-cover object-top  shrink-0 w-full h-full"
                  width={6740}
                  height={6740}
                  quality={100}
                />
              </div>

              <div className="min-[893px]:pt-16 pt-0 min-[893px]:pr-10 pl-5 min-[893px]:pl-0 pr-5 min-[1041px]:pr-40">
                <h1 className="text-[22px] w-full min-[1041px]:w-[310px]  font-semibold">
                  James Ughe
                </h1>
                <p className="mt-2">
                  Chief Operating Officer, The DB Foundation
                </p>
                <p className="mt-4 text-[#666666] w-full text-[14px]">
                  James Ughe has over a decade of experience in the education
                  sector and is the Administrative Officer at Abuja Culinary
                  School. Renowned for his expertise in project execution,
                  organization, and data management, James combines passion,
                  resilience, and a strong work ethic to drive
                  excellence in his role.
                </p>
              </div>
            </div>

            {/*  */}

            <div className="flex mt-20 pb-10 min-[893px]:pb-0 flex-col min-[893px]:flex-row   bg-[rgba(62,77,98,0.11)] gap-10">
              <div className="min-[893px]:w-[513px] w-full shrink-0 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white p-2 h-[306px] min-[893px]:h-[442px]">
                <Image
                  src={
                    "https://res.cloudinary.com/dci2ylcbr/image/upload/v1731745631/mariam_1_yzsuqu.webp"
                  }
                  alt="Cover Image"
                  className="filter   object-cover shrink-0 w-full h-full"
                  width={6740}
                  height={6740}
                  quality={100}
                />
              </div>

              <div className="min-[893px]:pt-16 pt-0 min-[893px]:pr-10 pl-5 min-[893px]:pl-0 pr-5 min-[1041px]:pr-40">
                <h1 className="text-[22px] w-full min-[1041px]:w-[310px]  font-semibold">
                  Mariam Raji
                </h1>
                <p className="mt-2">Chief Program Officer, The DB Foundation</p>
                <p className="mt-4 text-[#666666] w-full text-[14px]">
                  Mariam Raji is a skilled administrator with 5 years of
                  experience as a Program Assistant. A proficient data analyst,
                  she has worked with Prohealth International and the UN World
                  Food Program. She also served as an Administrative Assistant
                  for EU-SUFEGOR at B&S Europe and as Secretary to the Deputy
                  Director at the Archives and History Bureau. Renowned for her
                  excellence in management, business communication, and office
                  planning, Mariam excels in building strong relationships
                  with diverse people.
                </p>
              </div>
            </div>

            {/*  */}
          </div>

          <div
            className="flex min-[1161px]:flex-row flex-col min-[1161px]:pr-[12rem] pr-0 
         min-[1161px]:items-center gap-40 min-[1161px]:gap-0 items-start justify-between mt-60 bg-red-00 w-full"
          >
            <div className="">
              <h1 className="text-3xl font-extrabold">Join Our Revolution</h1>
              <p className="mt-2 w-[80%] text-lg">
                Get the latest information on our work and be part of the
                solution.
              </p>
              <div
                className="grid mt-16 min-[546px]:grid-cols-[repeat(2,0.3fr)] grid-cols-[repeat(1,1fr)] 
      grid-rows-[repeat(1,1fr)]
      min-[546px]:grid-rows-[repeat(1,1fr)] gap-10"
              >
                <div className="">
                  <object
                    aria-label="svg"
                    className="w-[51px]"
                    type="image/svg+xml"
                    data={"/svg/suitcase.svg"}
                  ></object>
                  <h1 className="mt-[15px] font-semibold text-2xl">
                    Get Involved
                  </h1>

                  <Link
                    className="group  relative"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyts79Tw5qLhgco3hxAxjzYs1YYA2SdnB8iUJB7ka0cKAIfA/viewform"
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
                      <span className="group-hover:ml-[1rem] block">
                        {" "}
                        Learn More
                      </span>
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
                  <h1 className="mt-[15px] font-semibold text-2xl">
                    Support DBF
                  </h1>

                  <Link
                    aria-label="donate page"
                    className="group  relative"
                    href="/donate"
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
                      <span className="group-hover:ml-[1rem] block">
                        {" "}
                        Learn More
                      </span>
                    </p>
                  </Link>
                </div>

                <div className="">
                  <object
                    aria-label="svg"
                    className="w-[51px]"
                    type="image/svg+xml"
                    data={"/svg/church.svg"}
                  ></object>
                  <h1 className="mt-[15px] font-semibold text-2xl">
                    Buy A Plate
                  </h1>

                  <Link
                    aria-label="donate page"
                    className="group  relative"
                    href="/donate"
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
                      <span className="group-hover:ml-[1rem] block">
                        {" "}
                        Learn More
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="min-[1161px]:mt-0 mt-20">
              <div className=" rounded-[19px] relative w-[317px] h-[356px] border-dashed border-2 border-[#F25353]">
                <div
                  className="top-[-140px] min-[1161px]:top-[-90px] right-[29px] 
              min-[1161px]:right-[-190px] bg-white p-2 w-[251px] absolute shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)]  h-[350px]"
                >
                  <Image
                    src={"/image/image-four.png"}
                    alt="Cover Image"
                    className=" filter object-cover h-full w-full"
                    width={2740}
                    height={2740}
                    quality={75}
                  />
                </div>

                <div
                  className="absolute bg-white p-2 min-[1161px]:bottom-[-90px] bottom-[-230px] left-[31px] 
              min-[1161px]:left-[-90px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] w-[251px] h-[350px]  "
                >
                  <Image
                    src={"/image/image-two.png"}
                    alt="Cover Image"
                    className=" filter object-cover w-full h-full "
                    width={2740}
                    height={2740}
                    quality={75}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
