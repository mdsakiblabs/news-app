import Link from "next/link";
import React from "react";

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navData = data.data;

  const filteredNavLinks = navData.filter((elem) => {
    return elem.scrapable === true;
  });

  return (
    <nav>
      <ul className="flex flex-col gap-4 md:flex-row">
        <Link href={"/"}>
          <li>হোম</li>
        </Link>
        {filteredNavLinks.map((elem, ind) => {
          return (
            <li key={ind}>
              <Link href={`/category/${elem.slug}`}>{elem.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
