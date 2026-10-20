"use client";

import { useState } from "react";

const MobileMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="cursor-pointer"
      >
        {isOpen ? (
          <span className="text-3xl leading-none">&times;</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 50 50"
            fill="currentColor"
          >
            <path d="M5 9h40v2H5z M5 24h40v2H5z M5 39h40v2H5z" />
          </svg>
        )}
      </button>

      {/* Navigation Menu */}
      {isOpen && (
        <div
          onClick={(e) => {
            if (e.target.closest("a")) {
              setIsOpen(false);
            }
          }}
          className="absolute left-0 top-full z-50 mt-2 min-w-48 rounded border bg-white p-4 shadow-lg"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;