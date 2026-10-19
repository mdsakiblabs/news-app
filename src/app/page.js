import LatestHeadlinesScrollBar from "@/components/HomePageComponents/LatestHeadlinesScrollBar";
import MainNews from "@/components/HomePageComponents/MainNews";
import OtherSectionNews from "@/components/HomePageComponents/OtherSectionNews";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const Home = async () => {
 
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const mainNewsHeadlines = data.data[0].articles
  const otherSectionNews = data.data.slice(1)
  // console.log(otherSectionNews)

 

  return (
    <div>
      <LatestHeadlinesScrollBar />
     
      <div className="grid grid-cols-3 max-w-270 mx-auto mt-5">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNewsHeadlines} />
          <OtherSectionNews otherSectionNews={otherSectionNews}/>
        </div>



        {/* most read section */}
        <div className="col-span-1 bg-green-500"></div>
      </div>

    </div>
  );
};

export default Home;
