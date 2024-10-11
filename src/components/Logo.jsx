import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 ">
      <img
        className="w-[40px] h-[40px]"
        src="/images/Logomark.svg"
        alt="Logo"
      />
      <h1 className="text-[#0E1422] items-center text-[20px] font-bold">
        Ecommerce
      </h1>
    </div>
  );
};

export default Logo;
