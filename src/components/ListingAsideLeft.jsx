import React from "react";
import ListingCategory from "./ListingCategory";

const ListingAsideLeft = () => {
  return (
    <aside className="h-[828px] w-[248px] border-[1px] rounded-[6px] border-[#E6E7E8]">
      <div className="px-[18px] py-[24px]">
        <h3 className="text-[#0E1422] text-[14px] font-semibold">Categories</h3>
        <ListingCategory />

        <div className="mt-[40px]">
          <h6 className="text-[14px] font-semibold text-[#0E1422]">COLORS</h6>
          <div className="flex mt-[12px] gap-[10px]">
            <button className="rounded-[100px]  w-[24px] h-[24px] bg-[#A3BEF8]"></button>
            <button className="rounded-[100px]  w-[24px] h-[24px] bg-[#FFD58A]"></button>
            <button className="rounded-[100px]  w-[24px] h-[24px] bg-[#83B18B]"></button>
            <button className="rounded-[100px]  w-[24px] h-[24px] bg-[#4078FF]"></button>
          </div>
        </div>
        <div className="mt-[52px]">
          <div>
            <h5 className="text-[14px] font-semibold text-[#0E1422]">SIZE</h5>
            <div className="flex gap-[8px] mt-[12px]">
              <button className="w-[40px] h-[40px] rounded-[4px] border-[1px] text-[#5C5F6A] text-[12px]">
                S
              </button>
              <button className="w-[40px] h-[40px] rounded-[4px] border-[1px] text-[#5C5F6A] text-[12px]">
                M
              </button>
              <button className="w-[40px] h-[40px] rounded-[4px] border-[1px] text-[#5C5F6A] text-[12px]">
                L
              </button>
              <button className="w-[40px] h-[40px] rounded-[4px] border-[1px] text-[#5C5F6A] text-[12px]">
                XL
              </button>
            </div>
            <div className="mt-[8px]">
              <button className="w-[40px] h-[40px]  rounded-[4px] border-[1px] text-[#5C5F6A] text-[12px]">
                XXL
              </button>
            </div>
          </div>
          <div className="mt-[40px]">
            <p className="text-[#0E1422] text-[14px] font-semibold">Price</p>
            <input
              className="mt-[24px]"
              type="range"
              id="vol"
              name="vol"
              min="0"
              max="1000"
            ></input>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ListingAsideLeft;
