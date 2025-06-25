import React from "react";

const Pagination = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-8 md:items-center">
      <div className="flex gap-8 items-center">
        <p className="text-gray-1 text-2xl">
          0<br />1
        </p>
        <div className="h-1 w-[50px] bg-gray-5 -rotate-45"></div>
        <p className="text-gray-4 font-normal text-2xl">05</p>
      </div>
      <div className="flex gap-8">
        <div className="h-[50px] w-[50px] border border-gray-6 grid place-items-center">
        <img src="/arrow-left.svg" alt="left arrow icon" />
      </div>
      <div className="h-[50px] w-[50px] bg-gray-2 border border-gray-6 grid place-items-center">
        <img src="/arrow-right.svg" alt="right arrow icon" />
      </div>
      </div>
    </div>
  );
};

export default Pagination;
