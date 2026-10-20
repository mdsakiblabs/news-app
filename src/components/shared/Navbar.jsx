import React from "react";
import Image from "next/image";
import newsLogo from "../../../public/NEWS 360 Global Broadcast Logo.png";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";
const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div>
      {/* DeskTop view */}
      <div className="parent hidden md:visible  w-full md:flex justify-center items-center">
        <div className="wrapper w-270">
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
      <div className="parent md:hidden bg-amber-500 w-full px-5 flex justify-between items-center py-2">
        <MobileMenu>
          <NavLinks />
        </MobileMenu>
        <div className="flex justify-center items-center">
          <Image
            src={newsLogo}
            width={40}
            height={40}
            alt="logo"
            className="w-8 h-8"
          ></Image>
          <h1 className="text-[13px] font-bold font-sans text-red-700">
            News 360
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="px-2 py-1 border bg-green-400 cursor-pointer text-[8px]">
            সাইন ইন
          </button>
          <button className="px-2 py-1 border bg-red-700 text-white text-[8px] cursor-pointer">
            সাইন আপ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
