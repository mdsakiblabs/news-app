import Link from "next/link";
import React from "react";

const LatestHeadlineScrollLinks = async () => {
  let latestHeading = [];

  try {
    const res = await fetch(
      "https://news-api-v2.vercel.app/api/news?limit=10",
      {
        next: { revalidate: 300 },
      },
    );

    if (!res.ok) {
      return (
        <div className=" text-sm text-white">
          Latest headlines are temporarily unavailable.
        </div>
      );
    }

    const data = await res.json();

    if (!Array.isArray(data?.data)) {
      throw new Error("Invalid news API response");
    }

    latestHeading = data.data.filter((elem) => elem?.id && elem?.title);
  } catch (error) {
    console.error("Failed to load latest headlines:", error);
  }

  // Fallback UI when API fails or returns no headlines
  if (latestHeading.length === 0) {
    return (
      <div className="w-full py-2  text-sm text-white">
        Latest headlines are temporarily unavailable.
      </div>
    );
  }

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div className="flex shrink-0" key={copy}>
            {latestHeading.map((elem) => (
              <Link
                href={`/details/${elem.id}`}
                key={elem.id}
                className="shrink-0"
              >
                <span className="hover:underline">{elem.title}</span>
                <span className="mx-3">•</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestHeadlineScrollLinks;
