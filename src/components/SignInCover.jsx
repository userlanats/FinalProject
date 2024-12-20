import React from "react";

const SignInCover = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="h-[160px] max-w-[1116px] m-auto mt-[40px]">
        <h1 className="text-[24px] text-[#0E1422] font-bold pt-[49px]">
          Sign In
        </h1>
        <div className="flex gap-[4px] pt-[8px]">
          <a className="text-[#5C5F6A]" href="/">
            Ecommerce
          </a>
          <img
            className="w-[24px] h-[24px] "
            src="/images/Chevron Right.svg"
            alt=""
          />
          <a className="font-semibold text-[#0E1422]" href="/signin">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInCover;
