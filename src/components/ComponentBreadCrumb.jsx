import React from "react";

const ComponentBreadCrumb = () => {
  return (
    <div className="bg-[#F6F6F6] w-full mt-4">
      <div className="max-w-[1116px] m-auto py-12">
        <h4 className="text-[#000000] text-[24px] font-semibold">Cart</h4>

        <div className="flex w-[142px] h-[25px] items-center">
          <p className="text-[#5C5F6A] text-[14px] ">Ecommerce</p>
          <img src="/images/Chevron Right.svg" alt="right" />
          <p className="text-[#0E1422] text-[14px] font-semibold">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentBreadCrumb;
