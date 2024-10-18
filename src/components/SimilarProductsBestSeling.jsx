import React from "react";

const SimilarProductsBestSeling = () => {
  return (
    <div className="  max-w-[1116px] min-w-[1170px] h-[568px] m-auto">
      <div className="mt-[136px]">
        <h1 className="text-[24px] text-[#0E1422] font-bold ">
          You might also like
        </h1>
        <h5 className="text-[12px] text-[#878A92] mt-[8px]  ">
          SIMILAR PRODUCTS
        </h5>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-[56px] max-w-[1116px] m-auto ">
        <div className="w-[264px] h-[434px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/tshirt-1.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            Classic Monochrome Tees
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px] ">
            <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$35.00</p>
          </div>
        </div>
        <div className="w-[264px] h-[434px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/tshirt-2.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            Monochromatic Wardrobe
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px]">
            <button className="text-[#0E1422] w-[89px] h-[28px]  text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$27.00</p>
          </div>
        </div>
        <div className="w-[264px] h-[434px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/tshirt-3.png"
            alt="tshirt-3"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            Essential Neutrals
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px]">
            <button className="text-[#0E1422] w-[89px] h-[28px]  text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$22.00</p>
          </div>
        </div>
        <div className="w-[264px] h-[434px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/tshirt-4.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            UTRAANET Black
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px]">
            <button className="text-[#0E1422] w-[89px] h-[28px]  text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$43.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductsBestSeling;
