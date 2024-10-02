import React from "react";

const Cover = () => {
  return (
    <div className="bg-[#F6F6F6] w-full h-[440px] mt-[21px]   ">
      <div className="max-w-[1116px] m-auto flex justify-between items-center ml-[182px] ">
        <div>
          <h1 className="text-[#202533] text-[32px] font-bold ">
            Fresh Arrivals Online
          </h1>
          <h5 className="text-[#474B57] text-[14px] mt-[12px]">
            Discover Our Newest Collection Today.
          </h5>
          <button className="flex w-[183px] h-[44px] bg-[#0E1422] text-[#FFFFFF] text-[14px] rounded text-center items-center pl-6 mt-[48px]">
            View Collection
            <img className="pt-1" src="/images/Arrow Right (1).svg" alt="" />
          </button>
        </div>

       
        <div className="w-[400px] h-[400px] relative">
          <img
            className="w-[255px] h-[382px] z-40 absolute ml-[80px] top-[56px]"
            src="/images/Hero Image.png"
            alt="Hero"
          />
          <img
            className="min-w-[340px] h-[340px]  absolute  top-[89px] z-0"
            src="/images/Ellipse.png"
            alt="Ellipse"
          />
          <img
            className="w-[38px] h-[37.32px] absolute top-[92.32px]"
            src="/images/Burst-pucker.png"
            alt="Burst"
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;
