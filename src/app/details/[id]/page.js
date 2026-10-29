import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const { id } = await params;
  let detailsData = null;

  try {
    const res = await fetch(
      `https://news-api-v2.vercel.app/api/article/${id}`,
      { next: { revalidate: 300 } },
    );

    if (res.ok) {
      const data = await res.json();
      detailsData = data?.data ?? null;
    }
  } catch (error) {
    console.error("Failed to load article:", error);
  }

  if (!detailsData) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="mb-3 text-2xl font-bold">News Not Found</h1>
        <p className="text-gray-500">
          Sorry, we couldn't find the news you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-220 mx-auto mb-7 mt-10 flex flex-col items-center justify-center text-center">
      <h1 className="mb-5 md:text-4xl text-2xl px-5 md:px-0 md:font-semibold">{detailsData.title}</h1>

      {detailsData.imageUrl && (
        <div className="px-5 md:px-0 ">
          <Image
            src={detailsData.imageUrl}
            width={600}
            height={600}
            alt={detailsData.title || "News image"}
          />
        </div>
      )}

      <p className="mt-10 text-[17px] leading-6 font-light md:px-0 px-5">{detailsData.text}</p>
    </div>
  );
};

export default Page;
