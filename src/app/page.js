import MainNews from "@/components/HomePageComponents/MainNews";
import MostReadSection from "@/components/HomePageComponents/MostReadSection";
import OtherSectionNews from "@/components/HomePageComponents/OtherSectionNews";
import React from "react";

const Home = async () => {
  let mainNewsHeadlines = [];
  let otherSectionNews = [];
  let mostReadData = [];

  // News sections API
  try {
    const res = await fetch(
      "https://news-api-v2.vercel.app/api/news/sections",
      { next: { revalidate: 300 } },
    );

    if (res.ok) {
      const data = await res.json();

      if (Array.isArray(data?.data)) {
        mainNewsHeadlines = Array.isArray(data.data[0]?.articles)
          ? data.data[0].articles
          : [];

        otherSectionNews = data.data.slice(1);
      }
    }
  } catch (error) {
    console.error("Failed to load news sections:", error);
  }

  // Most read API
  try {
    const mostReadSecRes = await fetch(
      "https://news-api-v2.vercel.app/api/news/most-read",
      { next: { revalidate: 300 } },
    );

    if (mostReadSecRes.ok) {
      const mostReadNews = await mostReadSecRes.json();

      if (Array.isArray(mostReadNews?.data)) {
        mostReadData = mostReadNews.data;
      }
    }
  } catch (error) {
    console.error("Failed to load most-read news:", error);
  }

  return (
    <div className="max-w-270 mx-auto my-7">
      <div className="md:grid grid-cols-3 gap-5">
        {/* News section */}
        <div className="md:col-span-2">
          {mainNewsHeadlines.length > 0 || otherSectionNews.length > 0 ? (
            <>
              {mainNewsHeadlines.length > 0 && (
                <MainNews news={mainNewsHeadlines} />
              )}

              {otherSectionNews.length > 0 && (
                <OtherSectionNews otherSectionNews={otherSectionNews} />
              )}
            </>
          ) : (
            <p className="py-4 text-center text-gray-500">
              News is temporarily unavailable.
            </p>
          )}
        </div>

        {/* Most read section */}
        <div className="md:col-span-1">
          {mostReadData.length > 0 ? (
            <MostReadSection data={mostReadData} />
          ) : (
            <p className="py-4 text-center text-gray-500">
              Most-read news is temporarily unavailable.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
