"use client";

import Button from "../../lib/components/button";
import { useEffect } from "react";
import { MainLayout } from "@/lib/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function DonatePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.setAttribute("paypalExpress", "false");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <MainLayout>
      <div className="w-full pb-[11rem]">
        <div className="mt-[4rem]  min-[1055px]:mt-[4rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
          <div className="text-center">
            <p className="text-sm text-[#F25353] font-semibold">Donate Now</p>
            <h1 className="text-3xl leading-[1.2] mt-2 ">
              Contribute To Our Mission
            </h1>
          </div>
          <div className="flex flex-col min-[940px]:flex-row mt-[5rem] gap-20 min-[940px]:gap-0 items-center justify-between">
            <div>
              <div
                className="
              

                w-full

              min-[451px]:w-[420px]
              
              min-[1153px]:w-[570px]"
              >
                {/* <iframe
                  src="https://donorbox.org/embed/the-deborah-blessed-foundation?language=en-us"
                  name="donorbox"
                  allow="payment"
                  allowPaymentRequest="allowpaymentrequest"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  height="900px"
                  width="100%"
                  style={{
                    maxWidth: "500px",
                    minWidth: "250px",
                    maxHeight: "none!important",
                  }}
                ></iframe> */}

                <div className="w-full border border-solid border-[#ddd] flex flex-col  items-center h-full pb-16">
                  <div className="w-full flex justify-center items-center h-[70px] bg-[#F25353]">
                    <Image
                      src={"/image/db-logo-white.png"}
                      alt="Cover Image"
                      className="object-cover w-[80px] filter"
                      width={2740}
                      height={2740}
                      quality={75}
                    />
                  </div>

                  <p className="mt-8 w-[80%] text-center">
                    {" "}
                    Each and every donation to the DBF helps change the world.
                  </p>

                  <div className="pl-4 w-full mt-10 pr-4 ">
                    <hr className="w-full  h-[1px] bg-[#ddd]" />
                  </div>

                  <Button className="btn-gradient mt-9 ">
                    <Link
                      target="_blank"
                      href="https://paystack.com/pay/deborahbless"
                    >
                      Make Donation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div
                className=" 

              w-full
              
                min-[451px]:w-[430px]  
              
              
              min-[1153px]:w-[530px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white p-2 h-[630px]"
              >
                <Image
                  src={"/image/image-three.png"}
                  alt="Cover Image"
                  className="object-cover w-full h-full filter"
                  width={2740}
                  height={2740}
                  quality={75}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
