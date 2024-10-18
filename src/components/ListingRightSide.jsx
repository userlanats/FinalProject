import React from "react";
import Pagination from "./Pagination";

const ListingRightSide = () => {
  return (
    <div className="">
      <h4 className="text-[#000000] text-[14px] font-semibold">
        Applied Filters
      </h4>
      <div className="flex gap-[12px]">
        <button className="gap-[10px] flex border-[1px] rounded-full w-[111px] h-[36px] items-center justify-center text-[#0E1422] text-[12px] font-semibold mt-[12px]">
          Perfume
          <img
            className="w-[20px] h-[20px]"
            src="/images/close.svg"
            alt="close"
          />
        </button>
        <button className="gap-[10px] flex border-[1px] rounded-full w-[111px] h-[36px] items-center justify-center text-[#0E1422] text-[12px] font-semibold mt-[12px]">
          Size: M
          <img
            className="w-[20px] h-[20px]"
            src="/images/close.svg"
            alt="close"
          />
        </button>
      </div>
      <div className="flex justify-between  h-[24px] mt-[24px] items-center">
        <p className="text-[#5C5F6A] text-[12px]">Showing 1-9 of 36 results.</p>

        <button className="flex gap-[6px] w-[106px] h-[24px] text-[#5C5F6A] text-[12px] items-center ">
          SORT BY
          <img src="/images/dropdown.svg" alt="dropdown" />
        </button>
      </div>
      <div className="grid grid-col-3 grid-flow-col gap-[24px] max-w-[1116px] mt-[16px]">
        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/Ltshirt1.png"
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
        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/tshirt-2.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            Monochromatic Wardrobe
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px] ">
            <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$27.00</p>
          </div>
        </div>
        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/tshirt-3.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            Essential Neutrals
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px] ">
            <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$22.00</p>
          </div>
        </div>
      </div>
      <div className="grid grid-col-3 grid-flow-col gap-[24] max-w-[1116px] mt-[16px]">
        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/tshirt-4.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            UTRAANET Black
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px] ">
            <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$43.00</p>
          </div>
        </div>
        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/Ltshirt5.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            Elegant Ebony Sweatshirts
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px] ">
            <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$35.00</p>
          </div>
        </div>
        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/Ltshirt6.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            Sleek and Cozy Black
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px] ">
            <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$57.00</p>
          </div>
        </div>
      </div>
      <div className="grid grid-col-3 grid-flow-col gap-[24] max-w-[1116px] mt-[16px]">
        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/tshirt-7.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            Raw Black Tees
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px] ">
            <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$19.00</p>
          </div>
        </div>
        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/tshirt-8.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            MOCKUP Black
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px] ">
            <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$30.00</p>
          </div>
        </div>
        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
          <img
            className="w-full h-[312px] rounded"
            src="images/Ltshirt7.png"
            alt="tshirt-1"
          />
          <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
            Athletic Shirt
          </p>
          <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px] ">
            <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
              IN STOCK
            </button>
            <p className="text-[#474B57] text-[14px]">$35.00</p>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ListingRightSide;
