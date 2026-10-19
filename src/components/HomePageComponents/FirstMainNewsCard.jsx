import Image from "next/image";
import Link from "next/link";
import React from "react";

const FirstMainNewsCard = ({ data }) => {
  const firsNews = data[0];
 
  return (
    <Link href={`/details/${firsNews.id}`}>
    <div className="border border-[#e0d9d9] rounded overflow-hidden cursor-pointer">
      <Image
        src={firsNews.imageUrl}
        alt={firsNews.imageAlt}
        width={500}
        height={500}
        
      />
      <div className="px-3 py-2">
        <h2 className="mt-2 font-semibold text-[14px] text-red-600">{firsNews.category}</h2>
        <h3 className="text-xl font-bold my-2">{firsNews.title}</h3>
        <p className="line-clamp-3 text-[14px] font-light">{firsNews.description}</p>
      </div>
    </div>
    </Link>
  );
};

export default FirstMainNewsCard;
