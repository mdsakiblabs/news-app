import CategoryPageCard from "@/components/CategoryPageCard";
import React from "react";

const page = async ({ params }) => {
  let { id } = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
  const data = await res.json();
  const catagoryData = data.data;

  if (!catagoryData) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-2xl font-bold mb-3">News Not Found</h1>
        <p className="text-gray-500">
          Sorry, we couldn't find the news you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-270 mx-auto my-7 px-5 md:px-0">
      <h1 className="text-2xl font-semibold border-b-2 border-red-600 pb-1 mb-6">
        {data.title}
      </h1>
      <div className="md:grid md:grid-cols-3 md:gap-5 items-stretch flex flex-col gap-5">
        {catagoryData.map((elem, ind) => {
          return <CategoryPageCard data={elem} key={ind} />;
        })}
      </div>
    </div>
  );
};

export default page;
