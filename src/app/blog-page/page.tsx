import Button from "@/lib/components/button";
import { MainLayout } from "@/lib/components/layout";
import SectionFour from "@/lib/components/section-four";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <MainLayout>
      <div className="w-full relative min-[1161px]:pb-[8rem] pb-[18rem]">
        <div className="min-[1151px]:hidden fixed bottom-0 bg-[#c2cad4] items-center justify-center z-30 w-full h-[60px] left-0 flex">
          <h1 className="font-medium">SHARE THIS ARTICLE</h1>
        </div>
        <div className="mt-[4rem]  min-[1055px]:mt-[4rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
          <div className="w-full">
            <Link aria-label="blog page" href="/blog">
              Go Back
            </Link>
            <div className="w-full mt-[3rem] p-3 min-[1093px]:h-[690px] h-[450px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white">
              <Image
                src={"/image/image-six.png"}
                alt="Cover Image"
                className="filter  object-cover w-full h-full"
                width={2740}
                height={2740}
                quality={75}
              />
            </div>
            <div className="w-full text-center flex flex-col items-center  pt-1 min-[725px]:pt-1 h-fit ">
              <p className=" mt-12 font-medium  min-[1066px]:text-[16px] text-[12px] text-[#666666]">
                January 28, 2024
              </p>
              <div className="min-[1000px]:w-[78%] w-full mt-5">
                <h1
                  className=" 
              min-[1066px]:text-4xl font-extrabold  text-2xl min-[577px]:text-4xl    min-[1066px]:leading-[1.8]"
                >
                  &rdquo;The Ashley Muntego Story: Forever Stamped In The Sands
                  Of Time.&rdquo;
                </h1>
              </div>
            </div>
          </div>

          <div className="flex h-full mt-16 min-[1151px]:mt-28 justify-between flex-row">
            <div className="min-[1151px]:w-[58%] w-full h-fit">
              <p className="text-lg leading-[1.8] ">
                The Clara Lionel Foundation is honored to have received the
                Humanitarian Award from the government of Barbados. Monica
                Fenty, CLF Board Member, accepted the award on behalf of CLF on
                National Heroes Day, April 28, 2022, in the presence of Prime
                Minister Mia Mottley. Jessie Schutt-Aine, CLF Board Member, also
                attended the ceremony. Additionally, this year Rihanna
                celebrated her first anniversary as a National Hero of Barbados,
                an honor she received in 2021. “What an absolute honor to be
                amongst such great men and women who have come before me and
                held this title in commitment to our nation! I will forever
                cherish these memories and continue to represent the Bajan
                people and my home Barbados to the fullest!!” she reflected on
                Instagram. Since CLF’s inaugural project, the founding of the
                Clara Braithwaite Center of Oncology and Nuclear Medicine at
                Queen Elizabeth Hospital in Barbados, CLF’s work in Barbados has
                included annual support for six local schools and nonprofits
                with funding for youth development projects and academic
                programs, an annual scholarship program for Barbadian students
                to pursue higher education, support during the pandemic with the
                provision of ventilators, renewable cold chain storage for
                vaccines and 4,000 tablets for students, continued support of
                QEH and the Barbados Family Planning Association, and various
                climate resilience initiatives at schools and hospitals. CLF was
                selected to receive the Humanitarian Award alongside other
                Barbadians including many frontline responders who served during
                the pandemic. This was the inaugural year for the Awards.
                <br></br>
                The Clara Lionel Foundation is honored to have received the
                Humanitarian Award from the government of Barbados. Monica
                Fenty, CLF Board Member, accepted the award on behalf of CLF on
                National Heroes Day, April 28, 2022, in the presence of Prime
                Minister Mia Mottley. Jessie Schutt-Aine, CLF Board Member, also
                attended the ceremony. Additionally, this year Rihanna
                celebrated her first anniversary as a National Hero of Barbados,
                an honor she received in 2021. “What an absolute honor to be
                amongst such great men and women who have come before me and
                held this title in commitment to our nation! I will forever
                cherish these memories and continue to represent the Bajan
                people and my home Barbados to the fullest!!” she reflected on
                Instagram. Since CLF’s inaugural project, the founding of the
                Clara Braithwaite Center of Oncology and Nuclear Medicine at
                Queen Elizabeth Hospital in Barbados, CLF’s work in Barbados has
                included annual support for six local schools and nonprofits
                with funding for youth development projects and academic
                programs, an annual scholarship program for Barbadian students
                to pursue higher education, support during the pandemic with the
                provision of ventilators, renewable cold chain storage for
                vaccines and 4,000 tablets for students, continued support of
                QEH and the Barbados Family Planning Association, and various
                climate resilience initiatives at schools and hospitals. CLF was
                selected to receive the Humanitarian Award alongside other
                Barbadians including many frontline responders who served during
                the pandemic. This was the inaugural year for the Awards.
              </p>
            </div>
            <div className="h-[1200px]">
              <div className="bg-[rgba(62,77,98,0.11)] hidden sticky min-[1151px]:flex items-center pt-5 flex-col top-20  h-[130px] w-[330px]">
                <h1 className="font-medium">SHARE THIS ARTICLE</h1>
                <div className="flex mt-6 gap-5 flex-row">
                  <object
                    aria-label="svg"
                    className="w-[34px]"
                    type="image/svg+xml"
                    data={"/svg/facebook.svg"}
                  ></object>
                  <object
                    aria-label="svg"
                    className="w-[34px]"
                    type="image/svg+xml"
                    data={"/svg/instagram.svg"}
                  ></object>
                  <object
                    aria-label="svg"
                    className="w-[34px]"
                    type="image/svg+xml"
                    data={"/svg/X.svg"}
                  ></object>
                  <object
                    aria-label="svg"
                    className="w-[34px]"
                    type="image/svg+xml"
                    data={"/svg/link.svg"}
                  ></object>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-[8rem] items-center flex justify-between">
            <Button
              className="border-[2px] hover:text-white hover:bg-[black] w-[170px]  h-[50px]  min-[561px]:w-[240px]"
              variant="outline"
            >
              <p className="text-sm font-medium">PREVIOUS BLOG</p>
            </Button>
            <Button
              className="border-[2px] hover:text-white hover:bg-[black]  w-[170px]  h-[50px]  min-[561px]:w-[240px]"
              variant="outline"
            >
              <p className="text-sm font-medium">NEXT BLOG</p>
            </Button>
          </div>

          <div className="mt-40">
            <SectionFour />
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

                  <p className="mt-[15px] gap-3 flex items-center text-[#F25353]">
                    Learn More
                    <object
                      aria-label="svg"
                      className="w-[24px]"
                      type="image/svg+xml"
                      data={"/svg/arrow.svg"}
                    ></object>
                  </p>
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

                  <p className="mt-[15px] gap-3 flex items-center text-[#F25353]">
                    Learn More
                    <object
                      aria-label="svg"
                      className="w-[24px]"
                      type="image/svg+xml"
                      data={"/svg/arrow.svg"}
                    ></object>
                  </p>
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

                  <p className="mt-[15px] gap-3 flex items-center text-[#F25353]">
                    Learn More
                    <object
                      aria-label="svg"
                      className="w-[24px]"
                      type="image/svg+xml"
                      data={"/svg/arrow.svg"}
                    ></object>
                  </p>
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
                    className=" filter grayscale object-cover h-full w-full"
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
                    className=" filter grayscale object-cover w-full h-full "
                    width={2740}
                    height={2740}
                    quality={75}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </MainLayout>
  );
}
