import MainNews from "@/components/HomePageComponents/MainNews";
import MostReadSection from "@/components/HomePageComponents/MostReadSection";
import OtherSectionNews from "@/components/HomePageComponents/OtherSectionNews";

import React from "react";

const Home = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const mainNewsHeadlines = data.data[0].articles;
  const otherSectionNews = data.data.slice(1);

  const mostReadSecRes = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read",
  );
  const mostReadNews = await mostReadSecRes.json();
  const mostReadData = mostReadNews.data;

  return (
    <div className="max-w-270 mx-auto my-7">
      <div className="grid grid-cols-3 gap-5 ">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNewsHeadlines} />
          <OtherSectionNews otherSectionNews={otherSectionNews} />
        </div>

        {/* most read section */}
        <div className="col-span-1 ">
          <MostReadSection data={mostReadData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
