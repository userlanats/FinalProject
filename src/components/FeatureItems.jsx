import React from "react";

const FeatureItems = () => {
  return (
    <div className="grid grid-cols-3 gap-[54px] mt-[88px] max-w-[1116px] m-auto">
      <div>
        <img
          className="w-[48px] h-[48px]"
          src="/images/Icon Box.svg"
          alt="car"
        />
        <h4 className="text-[#202533] font-bold text-[16px] mt-[24px] w-[107px] h-[19px]">
          Free Shipping
        </h4>
        <p className="text-[#5C5F6A] text-[14px] mt-[12px] w-[272px] h-[50px]">
          Upgrade your style today and get FREE shipping on all orders! Don't
          miss out.
        </p>
      </div>
      <div>
        <img
          className="w-[48px] h-[48px]"
          src="/images/guarantee.svg"
          alt="icon"
        />
        <h4 className="text-[#202533] font-bold text-[16px] mt-[24px] w-[178px] h-[19px]">
          Satisfaction Guarantee
        </h4>
        <p className="text-[#5C5F6A] text-[14px] mt-[12px] w-[272px] h-[50px]">
          Shop confidently with our Satisfaction Guarantee: Love it or get a
          refund.
        </p>
      </div>
      <div>
        <img
          className="w-[48px] h-[48px]"
          src="/images/secure.svg"
          alt="icon"
        />
        <h4 className="text-[#202533] font-bold text-[16px] mt-[24px] w-[127] h-[19px]">
          Secure Payment
        </h4>
        <p className="text-[#5C5F6A] text-[14px] mt-[12px] w-[272px] h-[50px]">
          Your security is our priority. Your <br></br>payments are secure with
          us.
        </p>
      </div>
    </div>
  );
};

export default FeatureItems;
