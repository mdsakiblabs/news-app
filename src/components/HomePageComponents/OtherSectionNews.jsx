import Image from "next/image";
import React from "react";
import OtherSectionsCard from "./OtherSectionsCard";


const OtherSectionNews = ({ otherSectionNews }) => {
  const filteredOtherSections = otherSectionNews.filter((elem, ind) => {
    return ![1, 3, 9].includes(ind);
  });

  return (
    <div >
      {filteredOtherSections.map((elem,ind) => {
        const mainNews = elem.articles
        
        return (
          <div key={ind} className="mt-8">
            <h1 className="text-xl font-semibold border-red-600 border-b-2 mb-3 pb-2">{elem.title}</h1>

            <div className="card grid grid-cols-3 gap-3">
               {mainNews.map((elem,ind)=>{
                return <OtherSectionsCard data={elem} key={ind}/>
               })}

            </div>


          </div>
        );
      })}
    </div>
  );
};

export default OtherSectionNews;
