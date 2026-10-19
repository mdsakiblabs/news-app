import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  // console.log(id)
  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`);
  const data = await res.json();
  const detailsData = data.data;
  console.log(detailsData.title)
  return (
    <div className="max-w-200 flex flex-col justify-center items-center mx-auto text-center my-7">
      <h1 className="text-4xl mb-5 font-semibold">{detailsData.title}</h1>
      
      {/* image */}
      <div>
        <Image
          src={detailsData.imageUrl}
          width={600}
          height={600}
          alt={detailsData}
          
        />
      </div>

      <p className="my-3">{detailsData.text}</p>
    </div>
  );
};

export default page;
