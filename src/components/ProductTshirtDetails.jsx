import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProductTshirtDetails = () => {
  return (
    <div className="max-w-[1116px] m-auto h-[574px] flex justify-between ">
      <div className="flex w-[534px] h-[574px] bg-[#F6F6F6] rounded-[5px] mt-[16px] ">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img
              className="mx-auto"
              src="/images/swiperphoto1.png"
              alt="blackTshirt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto"
              src="/images/swiperphoto1.png"
              alt="blackTshirt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto"
              src="/images/swiperphoto1.png"
              alt="blackTshirt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto"
              src="/images/swiperphoto1.png"
              alt="blackTshirt"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-[438px] h-[562] mt-[20px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#0E1422] text-[24px] font-bold">
            Raw Black T-Shirt Lineup
          </h1>
          <img
            className="w-[24px] h-[24px]"
            src="/images/shareIcon.svg"
            alt="shareIcon"
          />
        </div>
        <div className="flex gap-[8px] items-center mt-[12px] ">
          <div className="bg-[#F6F6F6] flex rounded-[100px] w-[167px] h-[28px] items-center gap-[8px] justify-center ">
            <img
              className="w-[24px] h-[24px]"
              src="/images/starIcon.svg"
              alt="starIcon"
            />
            <h6 className="text-[12px] text-[#5C5F6A]">4.2 — 54 Reviews </h6>
          </div>
          <div className="w-[89px] h-[28px] items-center flex justify-center rounded-[100px] text-[#5C5F6A] border-[1px] border-[#E6E7E8] ">
            <h6>IN STOCK</h6>
          </div>
        </div>
        <h1 className="w-[62px] h-[22px] text-[18px] text-[#0E1422] font-bold mt-[24px]">
          $75.00
        </h1>
        <div className="w-[152px] h-[76px] mt-[32px] ">
          <h6 className="text-[12px] text-[#5C5F6A]">AVILABLE COLORS</h6>
          <div className="flex mt-[10px] gap-[10px]">
            <button className="rounded-[100px]  w-[24px] h-[24px] bg-[#A3BEF8]"></button>
            <button className="rounded-[100px]  w-[24px] h-[24px] bg-[#FFD58A]"></button>
            <button className="rounded-[100px]  w-[24px] h-[24px] bg-[#83B18B]"></button>
          </div>
        </div>
        <div className="w-[243px] h-[76px]">
          <h5 className="text-[12px] text-[#5C5F6A]">SELECT SIZE</h5>
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
            <button className="w-[40px] h-[40px] rounded-[4px] border-[1px] text-[#5C5F6A] text-[12px]">
              XXL
            </button>
          </div>
        </div>
        <div className="w-[164px] h-[78px] mt-[32px]">
          <h6 className="text-[#5C5F6A] text-[12px]">QUANTITY</h6>
          <div className="flex justify-between items-center px-[16px] [164px] h-[44px] rounded-[4px] border-[1px] mt-[10px]">
            <img
              className="w-[20px] h-[20px]"
              src="/images/minus.svg"
              alt="minus"
            />
            <h6 className="text-[14px] text-[#202533] font-semibold">1</h6>
            <img
              className="w-[20px] h-[20px]"
              src="/images/plus.svg"
              alt="plus"
            />
          </div>
        </div>
        <div className="flex items-center gap-[10px] mt-[40px]">
          <button className="w-[284px] h-[44px] rounded-[4px] bg-[#0E1422] text-[#FFFFFF] text-[14px]">
            Add to cart
          </button>
          <button className=" border-[1px] rounded-[4px] w-[43px] h-[43px] ">
            <img
              className="w-[24px] h-[24px] m-auto"
              src="/images/heartIcon.svg"
              alt="heart"
            />
          </button>
        </div>
        <h6 className="text-[#5C5F6A] text-[12px] items-center mt-[12px]">
          — Free shipping on orders $100+
        </h6>
      </div>
    </div>
  );
};

export default ProductTshirtDetails;
