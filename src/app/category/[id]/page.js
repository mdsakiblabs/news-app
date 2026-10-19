import CategoryPageCard from "@/components/CategoryPageCard";
import React from "react";

const page = async ({ params }) => {
  let { id } = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
  const data = await res.json();
  const catagoryData = data.data;
 
  return (
    <div className="max-w-270 mx-auto my-7">
      <h1 className="text-2xl font-semibold border-b-2 border-red-600 pb-1 mb-6">{data.title}</h1>
      <div className="grid grid-cols-3 gap-5  ">
        {catagoryData.map((elem, ind) => {
          return <CategoryPageCard data={elem} key={ind} />;
        })}
      </div>
    </div>
  );
};

export default page;
