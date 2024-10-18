import React from "react";

const ProductReviews = () => {
  return (
    <div className="max-w-[1116px] m-auto flex  justify-between relative">
      <div>
        <div className=" flex items-center gap-[10px] mt-[248px]">
          <img
            className="w-[24px] h-[24px]"
            src="/images/threeDot.svg"
            alt="dot"
          />
          <h6 className="text-[#5C5F6A] text-[14px]">Details</h6>
        </div>

        <div className="w-[241px] h-[41px] flex items-center gap-[10px] rounded-[8px] bg-[#F6F6F6]">
          <img
            className="w-[24px] h-[24px]"
            src="/images/StarIcon.svg"
            alt="star"
          />
          <h6 className="text-[14px] text-[#0E1422]">Reviews</h6>
        </div>
      </div>

      <div className="w-[727px] h-[1000px]">
        <div className="w-full h-[198px] border-b-[1px] mt-[176px]">
          <h6 className="text-[#0E1422] text-[16px] font-bold">Reviews</h6>
          <div className="flex gap-[16px] items-center">
            <h6 className=" font-bold text-[32px] text-[#0E1422]">4.2</h6>
            <p className="text-[14px] text-[#71747E]">— 54 Reviews</p>
          </div>
          <button className="w-[144px] h-[44px] rounded-[4px] border-[1px] bg-[#FFFFFF] text-[#0E1422] border-[#0E1422] text-[14px] mt-[40px]">
            Write a review
          </button>
          <div className="absolute mr-[10px] right-0 flex gap-[6px] items-center">
            <button className="rounded-[4px]">SORT BY</button>
            <img src="/images/Chevron Down.svg" alt="down" />
          </div>
        </div>
        {/* ---------------------------- */}
        <div className="w-full flex h-[161px] rounded-[4px] mt-[24px] ">
          <div className="flex justify-center items-center w-[48px] h-[48px] text-[#4078FF] bg-[#F0F1FF] rounded-full">
            <span>ED</span>
          </div>

          <div className=" w-[90%] ml-4 h-[96px] ">
            <div className="flex justify-between">
              <h5 className="text-[#0E1422] text-[14px] font-semibold">
                Emily Davis
              </h5>

              <div className="flex gap-[10px]">
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/whiteStar.svg"
                  alt="Blackstar"
                />
              </div>
            </div>

            <h5 className="text-[#5C5F6A] text-[12px] mt-[6px]">1 WEEK AGO</h5>
            <p className="text-[#5C5F6A] text-[14px] mt-[16px]">
              This company always goes above and beyond to satisfy their
              customers.
            </p>
          </div>
        </div>
        <div className="w-full flex h-[161px] rounded-[4px]  ">
          <div className="flex justify-center items-center w-[48px] h-[48px] text-[#4078FF] bg-[#F0F1FF] rounded-full">
            <span>ED</span>
          </div>

          <div className=" w-[90%] ml-4 h-[96px] ">
            <div className="flex justify-between">
              <h5 className="text-[#0E1422] text-[14px] font-semibold">
                Daniel Smith
              </h5>

              <div className="flex gap-[10px]">
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/whiteStar.svg"
                  alt="Blackstar"
                />
              </div>
            </div>

            <h5 className="text-[#5C5F6A] text-[12px] mt-[6px]">2 MONTH AGO</h5>
            <p className="text-[#5C5F6A] text-[14px] mt-[16px]">
              I can't believe how affordable and high-quality this item is!
            </p>
          </div>
        </div>
        <div className="w-full flex h-[161px] rounded-[4px] ">
          <div className="flex justify-center items-center w-[48px] h-[48px] text-[#4078FF] bg-[#F0F1FF] rounded-full">
            <span>ED</span>
          </div>

          <div className=" w-[90%] ml-4 h-[96px] ">
            <div className="flex justify-between">
              <h5 className="text-[#0E1422] text-[14px] font-semibold">
                Benjamin Clark
              </h5>

              <div className="flex gap-[10px]">
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/BlackStar.svg"
                  alt="Blackstar"
                />
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/whiteStar.svg"
                  alt="Blackstar"
                />
              </div>
            </div>

            <h5 className="text-[#5C5F6A] text-[12px] mt-[6px]">23 APRIL</h5>
            <p className="text-[#5C5F6A] text-[14px] mt-[16px]">
              These guys know their stuff, and it shows in their products.
            </p>
            <button className="w-[175px] h-[44px] bg-[#FFFFFF] text-[#5C5F6A] text-[14px] rounded-[4px] border-[1px] border-[#B6B7BC] flex mx-auto justify-center items-center mt-[64px]">
              Load more reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
