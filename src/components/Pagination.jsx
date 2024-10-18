import React from "react";

const Pagination = () => {
  return (
    <nav
      className="max-w-[344px] mt-[64px] flex m-auto "
      aria-label="Page navigation"
    >
      <ul className="flex m-auto list-none items-center gap-[8px] ">
        <li>
          <a href="#" className="px-3 py-1  rounded-l-lg">
            <img
              className="w-[24px] h-[24px]"
              src="/images/Chevron Left.svg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-3 hover:bg-[#F6F6F6]">
            1
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-3 hover:bg-[#F6F6F6]">
            2
          </a>
        </li>

        <li>
          <a href="#" className="px-4 py-3  hover:bg-[#F6F6F6]">
            ...
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-3 hover:bg-[#F6F6F6]">
            23
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-3  hover:bg-[#F6F6F6]">
            24
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-3 ">
            <img
              className="w-[24px] h-[24px]"
              src="/images/Chevron Right.svg"
              alt=""
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
