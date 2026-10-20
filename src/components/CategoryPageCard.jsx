import React from "react";
import Image from "next/image";
import Link from "next/link";
const CategoryPageCard = ({ data }) => {
  return (
    
    <Link href={`/details/${data.id}`} className="block h-full">
  <div className="h-full flex flex-col border border-[#e0d9d9] rounded overflow-hidden cursor-pointer">
    <Image
      src={data.imageUrl}
      alt={data.imageAlt}
      width={500}
      height={500}
      className="w-full h-40 object-cover"
    />

    <div className="px-3 py-2 flex-1">
      <h2 className="mt-2 font-semibold text-[14px] text-red-600">
        {data.category}
      </h2>

      <h3 className="text-[17px] line-clamp-3 font-bold my-2">
        {data.title}
      </h3>

      <p className="line-clamp-3 text-[14px] font-light">
        {data.description}
      </p>
    </div>
  </div>
</Link>
  );
};

export default CategoryPageCard;
