import React from "react";
import Image from "next/image";
import newsLogo from "../../../public/NEWS 360 Global Broadcast Logo.png";
import NavLinks from "../NavLinks";
const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="parent w-full flex justify-center items-center">
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
  );
};

export default Navbar;
