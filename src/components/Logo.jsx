import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 transition hover:scale-110 hover:-translate-y-1 duration-500 ">
      <Link to="/">
        <img
          className="w-[40px] h-[40px]"
          src="/images/Logomark.svg"
          alt="Logo"
        />
      </Link>
      <Link to="/">
        <h1 className="text-[#0E1422] items-center text-[20px] font-bold">
          Ecommerce
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
