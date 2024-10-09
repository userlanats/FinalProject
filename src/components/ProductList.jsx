import React from "react";

const ProductList = () => {
  return (
    <div>
      <div className=" mt-[72px]  w-[1116px] h-[568px] m-auto">
        <div className="flex items-center justify-center">
          <button className="text-[#202533] text-[14px] font-semibold w-[92px] h-[31px] rounded-[100px] border-[1px] border-[#E9E9EB]">
            Featured
          </button>
          <button className="ml-[24px] text-[#717171] text-[14px] w-[42px] h-[25px]">
            Latest
          </button>
        </div>

        <div className="grid grid-cols-4 gap-[20px] mt-[80px] max-w-[1116px] m-auto ">
          <div className="w-[264px] h-[434px]">
            <img
              className="w-full h-[312px] rounded"
              src="images/tshirt-5.png"
              alt="tshirt-5"
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
          <div className="w-[264px] h-[434px]">
            <img
              className="w-full h-[312px] rounded"
              src="images/tshirt-6.png"
              alt="tshirt-6"
            />
            <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
              Sleek and Cozy Black
            </p>
            <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[12px]">
              <button className="text-[#0E1422] w-[89px] h-[28px]  text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
                IN STOCK
              </button>
              <p className="text-[#474B57] text-[14px]">$57.00</p>
            </div>
          </div>
          <div className="w-[264px] h-[434px]">
            <img
              className="w-full h-[312px] rounded"
              src="images/tshirt-7.png"
              alt="tshirt-7"
            />
            <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
              Raw Black Tees
            </p>
            <div className="w-[239px] h-[28px] flex gap-[16px] items-center mt-[12px]">
              <button className="text-[#0E1422] w-[89px] h-[28px]  text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
                IN STOCK
              </button>
              <p className="text-[#474B57] text-[14px]">$19.00</p>
            </div>
          </div>
          <div className="w-[264px] h-[434px]">
            <img
              className="w-full h-[312px] rounded"
              src="images/tshirt-8.png"
              alt="tshirt-8"
            />
            <p className="text-[14px] text-[#0E1422] align-center mt-[24px] font-bold">
              MOCKUP Black
            </p>
            <div className="w-[239px] h-[28px] gap-[16px] flex  items-center mt-[12px]">
              <button className="text-[#0E1422] w-[89px] h-[28px]  text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
                IN STOCK
              </button>
              <p className="text-[#474B57] text-[14px]">$30.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
