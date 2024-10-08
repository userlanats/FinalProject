import React from "react";

const FashionParadise = () => {
  return (
    <div className="bg-[#F6F6F6] w-full h-[304px]">
      <div className="max-w-[1116px] mx-auto flex justify-between items-center mt-[168px]">
        <div>
          <h1 className="w-[351px] h-[29px] text-24px mt-[52px] text-[#0E1422] font-bold">
            Browse Our Fashion Paradise!
          </h1>
          <p className="w-[462px] h-[50px] mt-[24px] text-[#5C5F6A] text-[14px]">
            Step into a world of style and explore our diverse collection of{" "}
            <br></br>clothing categories.
          </p>

          <button className="bg-[#0E1422] text-[#FFFFFF] flex items-center justify-center w-[177px] h-[44px] rounded-[4px] mt-[32px]">
            Start Browsing
            <img
              className="items-center ml-[6px] w-[13px] h-[12px]"
              src="/images/arrowright.svg"
              alt=""
            />
          </button>
        </div>
        <img
          className="w-[225px] h-[311px]"
          src="/images/naqsovipancho.png"
          alt="pancho"
        />
      </div>
    </div>
  );
};

export default FashionParadise;
