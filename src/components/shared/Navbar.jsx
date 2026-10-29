import React from "react";
import Image from "next/image";
import newsLogo from "../../../public/NEWS 360 Global Broadcast Logo.png";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";
import Link from "next/link";
const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div>
      {/* DeskTop view */}
      <div className="parent hidden md:visible  w-full md:flex justify-center items-center">
        <div className="wrapper w-270 relative">
          {/* socil links */}
          <div className="absolute left-0 top-13 flex gap-10 z-50 items-center justify-center">
            <Link href="https://www.facebook.com/ankon.chowdhury.566477"
             
            >
              <i className="ri-facebook-circle-fill text-4xl"></i>
            </Link>

            <Link href="https://www.instagram.com/sakib_hasan_ankon/?hl=en">
              <i className="ri-instagram-fill text-4xl"></i>
            </Link>

            <Link href={""}>
              <i className="ri-linkedin-box-fill text-4xl"></i>
            </Link>

            <Link href="https://github.com/mdsakiblabs">
              <i className="ri-github-fill text-4xl"></i>
            </Link>
          </div>

          {/* center logo */}
          <div className=" w-full flex justify-center items-center relative">
            <div className="left-side-logo max-w-full  mx-auto flex items-center justify-center gap-2">
              <div>
                <Image
                  src={newsLogo}
                  width={40}
                  height={40}
                  alt="logo"
                  className="translate-y-1.5 w-20 h-20"
                ></Image>
              </div>
              <div className="leading-5">
                <h1 className="text-2xl font-bold font-sans text-red-700">
                  News 360
                </h1>
                <p>{date}</p>
              </div>
            </div>

            <div className="right-side-buttons absolute right-0 flex gap-3">
              <button className="px-4 py-1 border bg-green-400 cursor-pointer">
                সাইন ইন
              </button>
              <button className="px-4 py-1 border bg-red-700 text-white cursor-pointer">
                সাইন আপ
              </button>
            </div>
          </div>

          <div className="navlinks flex w-full justify-center mt-3">
            <NavLinks />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="parent md:hidden  w-full px-5 flex justify-between items-center py-2">
        <div className="flex justify-center items-center">
          <Image
            src={newsLogo}
            width={40}
            height={40}
            alt="logo"
            className="w-12 h-12"
          ></Image>
          <div className="leading-4.5">
            <h1 className="text-[18px] font-bold font-sans text-red-700">
              News 360
            </h1>
            <p className="text-[11px]">{date}</p>
          </div>
        </div>

        <div>
          <MobileMenu>
            <NavLinks />
          </MobileMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
