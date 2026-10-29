import Link from "next/link";
import React from "react";
import MobileSignInSingUpBtn from "./MobileSignInSingUpBtn";

const NavLinks = async () => {
  let filteredNavLinks = [];

  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return (
        <nav>
          <ul className="flex flex-col gap-4 md:flex-row">
            <li>
              <Link href="/">হোম</Link>
            </li>
          </ul>
        </nav>
      );
    }

    const data = await res.json();

    if (!Array.isArray(data?.data)) {
      throw new Error("Invalid categories API response");
    }

    filteredNavLinks = data.data.filter((elem) => elem?.scrapable === true);
  } catch (error) {
    console.error("Failed to load categories:", error);
  }

  return (
    <nav>
      <ul className="flex flex-col gap-4 md:flex-row">
        <li>
          <Link href="/">হোম</Link>
        </li>

        {filteredNavLinks.map((elem) => (
          <li key={elem.slug}>
            <Link href={`/category/${elem.slug}`}>{elem.title}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex justify-items-start mt-4">
        <MobileSignInSingUpBtn />
      </div>
    </nav>
  );
};

export default NavLinks;
