import React from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const Footer = () => {
  return (
    <div className="w-full bg-[#03045e] text-white pt-10 pb-2">
      <div className=" flex flex-col justify-center items-center">
        <div className="heading text-center">
          <h1 className="text-5xl font-sans font-semibold">News 360</h1>
          <p className="text-[12px] font-sans font-light">
            Developed by:{" "}
            <span
              className={`${outfit.className} font-semibold tracking-wide text-red-600`}
            >
              Md Sakib Hasan
            </span>{" "}
          </p>
        </div>
        <div className="social-links flex gap-3 my-5 justify-center items-center border-gray-500 w-full py-5 border-t border-b">
            <span className="font-sans text-xl">Follow Me</span>
          <Link href={""}>
            <i className="ri-facebook-circle-fill text-3xl"></i>
          </Link>

          <Link href={""}>
            <i className="ri-instagram-fill text-3xl"></i>
          </Link>

          <Link href={""}>
            <i className="ri-linkedin-box-fill text-3xl"></i>
          </Link>

          <Link href={""}>
            <i className="ri-github-fill text-3xl"></i>
          </Link>
        </div>
        <div className="coppyright">
          <p className="font-sans font-normal text-[13px] text-gray-300">Copyright © 2026, news360</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
