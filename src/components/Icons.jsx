import React from "react";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className="flex gap-[32px] ">
      <Link
        className="transition hover:-translate-y-1 hover:scale-110 duration-500 rounded-[5px]"
        to="/Cart"
      >
        <img
          className="w-[19px] h-[19px]"
          src="/images/icon.2.svg"
          alt="cart"
        />
      </Link>
      <Link className="transition hover:-translate-y-1 hover:scale-110 duration-500 rounded-[5px]">
        <img
          className="w-[19px] h-[19px]"
          src="/images/Vector.svg"
          alt="user"
        />
      </Link>
    </div>
  );
};

export default Icons;
