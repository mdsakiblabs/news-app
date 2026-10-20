import React from "react";
import FirstMainNewsCard from "./FirstMainNewsCard";
import MainNewsList from "./MainNewsList";

const MainNews = ({ news }) => {
   
  return (
    <div>
      {/* first news */}

      <div className="px-5 flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-3">
        <FirstMainNewsCard data={news} />
        <MainNewsList data={news} />
      </div>


    </div>
  );
};

export default MainNews;
