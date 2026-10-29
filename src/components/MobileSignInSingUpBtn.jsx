import React from "react";

const MobileSignInSingUpBtn = () => {
  return (
    <div className="flex gap-4 flex-col">
      <button className=" cursor-pointer flex justify-items-start text-green-600">
        সাইন ইন
      </button>
      <button className="cursor-pointer text-red-600">
        সাইন আপ
      </button>
    </div>
  );
};

export default MobileSignInSingUpBtn;
