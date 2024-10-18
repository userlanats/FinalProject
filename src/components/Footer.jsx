import React from "react";

const Footer = () => {
  return (
    <div className="mt-[176px]  w-full min-w-[1170px] h-[629px]">
      <div className=" bg-[#F6F6F6] w-full">
        <div className="max-w-[1116px] m-auto  h-[200px] flex justify-between ">
          <div className=" mt-[64px] ">
            <h1 className=" text-[24px] text-[#0E1422] font-bold  ">
              Join Our Newsletter
            </h1>
            <p className=" text-[14px] text-[#5C5F6A] mt-[24px] ">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
          <div className="mt-[78px]  ">
            <input
              className="border border-1 rounded-[6px] w-[320px] h-[45px] mr-[16px] text-[#AAAAAA] bg-[#F6F6F6] px-[15px]"
              type="search"
              placeholder="Your email address"
            />
            <button className="w-[116px] h-[44px] rounded-[4px] bg-[#0E1422] text-[#FFFFFF]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between max-w-[1116px] py-[176px] mx-auto">
        <div className="mt-[10px]">
          <div className="flex items-center w-full h-[44px]">
            <img src="/images/logotetrfonze.svg" alt="logo" />
            <h1 className="text-[#0E1422] items-center text-[20px]  font-bold ml-[16px]">
              Ecommerce
            </h1>
          </div>
          <div className="w-[272px] h-[50px] mt-[12px]">
            <p className="text-[14px] text-[#5C5F6A]">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
          </div>

          <div className="flex mt-[32px] gap-[24px] w-full h-[24px]">
            <img
              className="w-[24px] h-[24px]"
              src="/images/Githubicon.svg"
              alt="github"
            />
            <img
              className="w-[24px] h-[24px]"
              src="/images/instaicon.svg"
              alt="instagram"
            />
            <img
              className="w-[24px] h-[24px]"
              src="/images/youtubeicon.svg"
              alt="youtube"
            />
          </div>
        </div>
        <div className="flex justify-between w-[390px] ">
          <div>
            <h5 className="text-[14px] text-[#878A92] w-full h-[25px] ">
              SUPPORT
            </h5>
            <h6 className="mt-[16px] text-[14px] text-[#5C5F6A] w-full h-[25px] ">
              FAQ
            </h6>
            <h6 className="mt-[16px] text-[14px] text-[#5C5F6A] w-full h-[25px]">
              Terms of use
            </h6>
            <h6 className="mt-[16px] text-[14px] text-[#5C5F6A] w-full h-[25px]">
              Privacy Policy
            </h6>
          </div>
          <div>
            <h5 className="text-[14px] text-[#878A92] w-full h-[25px]">
              COMPANY
            </h5>
            <h6 className="mt-[16px] text-[14px] text-[#5C5F6A] w-full h-[25px]">
              About us
            </h6>
            <h6 className="mt-[16px] text-[14px] text-[#5C5F6A] w-full h-[25px]">
              Contact
            </h6>
            <h6 className="mt-[16px] text-[14px] text-[#5C5F6A] w-full h-[25px]">
              Careers
            </h6>
          </div>
          <div>
            <h5 className="text-[14px] text-[#878A92] w-[40px] h-[25px]">
              SHOP
            </h5>
            <h6 className="mt-[16px] text-[14px] text-[#5C5F6A] w-full h-[25px]">
              My Account
            </h6>
            <h6 className="mt-[16px] text-[14px] text-[#5C5F6A] w-full h-[25px]">
              Checkout
            </h6>
            <h6 className="mt-[16px] text-[14px] text-[#5C5F6A] w-full h-[25px]">
              Checkout
            </h6>
          </div>
        </div>
        <div className="">
          <h1 className="text-[14px] text-[#878A92] w-full h-[25px]">
            ACCEPTED PAYMENTS
          </h1>
          <div className="flex mt-[40px] w-[176.03px] h-[32px] opacity-[80%]">
            <img
              className="w-[30.03px] h-[32px]"
              src="/images/Mastercard.svg"
              alt="mastercard"
            />
            <img
              className="w-[56px] h-[32px] "
              src="/images/Amex.svg"
              alt="amex"
            />
            <img
              className="w-[42px] h-[32px] "
              src="/images/Visa.svg"
              alt="visa"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1116px] h-[79px] mx-auto flex justify-center mt-[131px] border-t-[1px] border-t-[#F6F6F6]">
        <h6 className="text-[14px] text-[#5C5F6A] mt-[27px] mb-[27px] w-[237px] h-[25px]">
          © 2023 DevCut. All rights reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
