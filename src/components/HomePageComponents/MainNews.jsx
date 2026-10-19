import React from "react";
import FirstMainNewsCard from "./FirstMainNewsCard";
import MainNewsList from "./MainNewsList";

const MainNews = ({ news }) => {
   
  return (
    <div>
      {/* first news */}

      <div className="grid grid-cols-2 gap-3">
        <FirstMainNewsCard data={news} />
        <MainNewsList data={news} />
      </div>


    </div>
  );
};

export default MainNews;
