import Link from "next/link";
import React from "react";

const LatestHeadlineScrollLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");

  const data = await res.json();
  const latestHeading = data.data;

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div className="flex shrink-0" key={copy}>
            {latestHeading.map((elem, ind) => {
              

              return (
                <Link href={`/details/${elem.id}`} key={ind} className="shrink-0">
                  <span className="hover:underline">{elem.title}</span>
                  <span className="mx-3">•</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestHeadlineScrollLinks;
