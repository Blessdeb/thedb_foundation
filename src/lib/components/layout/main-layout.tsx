"use client";

import React, { useState } from "react";
import Button from "../button";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";

interface MainLayoutProps {
  children?: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState<null | "about" | "donate">(null);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleSubmenuOpen = (menu: "about" | "donate") => setSubmenu(menu);
  const handleBackToMain = () => setSubmenu(null);

  return (
    <div className="w-full h-screen">
      {/* Nav Bar */}
      <div className="nav fixed bg-white 3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex z-50 flex-row justify-between shadow-md items-center h-[70px] w-full">
        <div className="flex gap-2 items-center">
          <Image
            alt="db-logo"
            className="w-[120px]"
            src="/image/db-logo.png"
            width={1700}
            height={1700}
          />
          {/* <p className="text-[13px] leading-[1.2]">
            The Deborah <br /> Bless Foundation
          </p> */}
        </div>
        <div className="hidden min-[1095px]:flex flex-row items-center gap-4">
          {/* Links for larger screens */}
          <div className="w-[100px] relative group text-sm flex flex-col items-center">
            <Link href="/">Home</Link>

            <hr className="w-full h-1 hidden group-hover:block absolute bottom-[-25px]  bg-red-500" />
          </div>
          <div className="w-[100px] text-sm ">
            <div className="relative group flex justify-center w-full main-link">
              <Link aria-label="about page" href="/about">
                About us
              </Link>
              <div className="absolute flex justify-center items-end pb-2 bg-white h-[45px] w-full sub-link top-[20px]">
                <Link aria-label="team page" href="/team">
                  Team
                </Link>
              </div>

              <hr className="w-full h-1 hidden group-hover:block absolute bottom-[-48px]  bg-red-500" />
            </div>
          </div>
          <div className="w-[100px] relative group text-sm flex justify-center">
            <Link aria-label="impact page" href="/impact">
              Our Impact
            </Link>
            <hr className="w-full h-1 hidden group-hover:block absolute bottom-[-25px]  bg-red-500" />
          </div>
          <div className="w-[100px] text-sm ">
            <div className="relative group flex justify-center w-full main-link">
              <Link aria-label="donate page" href="/donate">
                Donate
              </Link>
              {/* <div className="absolute hidden justify-center items-end pb-2 bg-white h-[45px] w-full sub-link top-[20px]">
                <Link href="/partner">Partner</Link>
              </div> */}

              <hr className="w-full h-1 hidden group-hover:block absolute bottom-[-25px]  bg-red-500" />
            </div>
          </div>
          <div className="w-[100px] relative group text-sm flex justify-center">
            <Link aria-label="blog page" href="/blog">
              Blog
            </Link>

            <hr className="w-full h-1 hidden group-hover:block absolute bottom-[-25px]  bg-red-500" />
          </div>
        </div>

        <div className="min-[1095px]:hidden  bg-white block">
          <Hamburger toggled={menuOpen} toggle={handleMenuToggle} size={28} />
        </div>

        <Button className="btn-gradient hidden min-[1095px]:block">
          <Link target="_blank" href="https://forms.gle/k3oq6TWuTgsbNtXU9">
            Contact us
          </Link>
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white  flex flex-col z-40">
          {/* Main Menu */}
          <div
            className={`flex flex-col items-center justify-center text-black w-full h-full transition-transform duration-300 ${
              submenu ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <Link href="/" onClick={handleMenuToggle}>
              <p className="text-xl mb-4">Home</p>
            </Link>
            <p
              onClick={() => handleSubmenuOpen("about")}
              className="text-xl mb-4 cursor-pointer"
            >
              About Us
            </p>
            <Link
              aria-label="impact page"
              href="/impact"
              onClick={handleMenuToggle}
            >
              <p className="text-xl mb-4">Our Impact</p>
            </Link>
            <Link
              aria-label="donate page"
              href="/donate"
              onClick={handleMenuToggle}
            >
              <p className="text-xl mb-4">Donate</p>
            </Link>
            <Link
              aria-label="blog page"
              href="/blog"
              onClick={handleMenuToggle}
            >
              <p className="text-xl">Blog</p>
            </Link>
          </div>

          {/* Submenu for About Us */}
          {submenu === "about" && (
            <div className="absolute top-0 left-0 w-full h-full bg-white  flex flex-col items-center justify-center text-black transition-transform duration-300">
              <button
                onClick={handleBackToMain}
                className="absolute top-[6rem] left-[2rem] text-2xl"
              >
                ←
              </button>
              <Link
                aria-label="about page"
                href="/about"
                onClick={handleMenuToggle}
              >
                <p className="text-xl mb-4">About Us</p>
              </Link>
              <Link
                aria-label="team page"
                href="/team"
                onClick={handleMenuToggle}
              >
                <p className="text-xl">Team</p>
              </Link>
            </div>
          )}

          {/* Submenu for Donate */}
          {submenu === "donate" && (
            <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center text-black transition-transform duration-300">
              <button
                onClick={handleBackToMain}
                className="absolute top-[6rem] left-[2rem] text-2xl"
              >
                ←
              </button>
              <Link
                aria-label="donate page"
                href="/donate"
                onClick={handleMenuToggle}
              >
                <p className="text-xl mb-4">Donate</p>
              </Link>
              <Link href="/partner" onClick={handleMenuToggle}>
                <p className="text-xl">Partner</p>
              </Link>
            </div>
          )}
        </div>
      )}
      <div className="h-[70px]"></div>
      {children}

      <div
        className="w-full relative flex flex-col 
         min-[924px]:h-[500px] sm:h-[700px] h-[980px]  min-[507px]:mt-10 mt-10 bg-[#131313]"
      >
        <div className=" w-full pt-[6rem]   3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem]  h-fit pb-16">
          <div
            className="flex gap-20  
              min-[924px]:gap-0  justify-between 
               min-[924px]:items-start 
            min-[924px]:flex-row flex-col"
          >
            <div className="text-white">
              <h1
                className="text-2xl font-semibold w-[full] 
                min-[982px]:w-[490px]"
              >
                The Deborah Bless <br /> Foundation
              </h1>
              <p
                className="mt-4 font-normal text-sm  w-[280px]  
                min-[1066px]:w-[320px] min-[1132px]:w-[450px]"
              >
                Since its inception, the Deborah Bless Foundation has been a
                beacon of hope, empowering individuals and communities across
                Nigeria.
              </p>

              <div className="mt-4 flex gap-4 items-center">
                <Link target="_blank" href="https://twitter.com/Dblessdevotion">
                  <div className="ring-1 rounded-full p-3 ring-white ">
                    <object
                      className="w-[18px] pointer-events-none"
                      type="image/svg+xml"
                      data={"/svg/X.svg"}
                    ></object>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/dblessdevotion"
                >
                  <div className="ring-1 rounded-full p-3 ring-white ">
                    <object
                      aria-label="svg"
                      className="w-[18px] pointer-events-none"
                      type="image/svg+xml"
                      data={"/svg/instagram.svg"}
                    ></object>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61558369198106"
                >
                  <div className="ring-1 rounded-full p-3 ring-white ">
                    <object
                      aria-label="svg"
                      className="w-[18px] pointer-events-none"
                      type="image/svg+xml"
                      data={"/svg/facebook.svg"}
                    ></object>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@dblessdevotional"
                >
                  <div className="ring-1 rounded-full p-3 ring-white ">
                    <object
                      aria-label="svg"
                      className="w-[18px] pointer-events-none"
                      type="image/svg+xml"
                      data={"/svg/tiktok.svg"}
                    ></object>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="flex flex-col w-full 
              sm:w-auto sm:flex-row gap-20
              min-[1066px]:gap-40"
            >
              <div className=" flex w-[99px] flex-col gap-2 text-white">
                <h1 className="text-lg w-[99px] font-semibold">Short Links</h1>

                <Link aria-label="blog page" href="/blog">
                  <h1 className="text-sm  font-normal">Blog</h1>
                </Link>
                <Link aria-label="about page" href="/about">
                  <h1 className="text-sm font-normal">About</h1>
                </Link>
                <Link aria-label="impact page" href="/impact">
                  <h1 className="text-sm  font-normal">Impact</h1>
                </Link>
                <Link aria-label="team page" href="/team">
                  <h1 className="text-sm  font-normal">Team</h1>
                </Link>
                <Link aria-label="donate page" href="/donate">
                  <h1 className="text-sm  font-normal">Donate</h1>
                </Link>
              </div>

              <div className="flex flex-col gap-2 text-white">
                <h1 className="text-lg font-semibold">Contact us</h1>
                <p className="flex font-normal text-sm flex-row gap-3">
                  <object
                    aria-label="svg"
                    className="w-[24px]"
                    type="image/svg+xml"
                    data={"/svg/location.svg"}
                  ></object>
                  MIB Plaza No 23, 1st Avenue Gwarinpa Nigeria
                </p>
                <p className="flex mt-2 text-sm  font-normal flex-row gap-3">
                  <object
                    aria-label="svg"
                    className="w-[24px]"
                    type="image/svg+xml"
                    data={"/svg/mail.svg"}
                  ></object>
                  info@deborahblessfoundation.com
                </p>
                <p className="flex mt-2 text-sm  font-normal flex-row gap-3">
                  <object
                    aria-label="svg"
                    className="w-[24px]"
                    type="image/svg+xml"
                    data={"/svg/phone.svg"}
                  ></object>
                  +234-9016 292 9162
                </p>
              </div>
            </div>
          </div>

          <div className="flex 3xl:pr-[18rem] 3xl:pl-[18rem] sm:flex-row flex-col min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] left-0 bottom-[3rem] w-full absolute items-center justify-between">
            <div className="w-full bg-[#181818] flex justify-center items-center h-[80px]">
              <p className="text-white text-[10px] sm:text-sm">
                © Copyright{" "}
                <span className="font-bold">thedeborahblessfoundation</span> All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
