import React from "react";

const YourCart = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1116px] m-auto mt-[72px]">
        <div className="w-[628px]  ">
          <p className="text-[#000000] text-[16px] font-bold ">Your cart</p>
          <hr className="mt-[18px]"></hr>
          <div className="mt-[48px] flex  ">
            <div className="w-[80px] h-[80px] bg-[#F6F6F6] flex justify-between ">
              <img
                className="w-[44px] h-[62px] m-auto mt-[9px]"
                src="/images/swiperphoto1.png"
                alt="tshirt"
              />
            </div>
            <div className="ml-[32px] ">
              <p className="text-[14px] text-[#0E1422] font-semibold">
                Raw Black T-Shirt Lineup
              </p>
              <div className="flex ">
                <h6 className="text-[12px] text-[#5C5F6A] mt-[6px]">Color: </h6>
                <button className="rounded-full bg-[#98BE9E] w-[12px] h-[12px] mt-[8px] ml-[8px]"></button>
                <h6 className="ml-[8px] text-[#5C5F6A]">—</h6>
                <h6 className="text-[#5C5F6A] text-[12px] mt-[6px] ml-[8px]">
                  Size: M
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
