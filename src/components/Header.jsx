import React from "react";
import Icons from "./Icons";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import Discount from "./Discount";

const Header = () => {
  return (
    <div>
      <Discount />
      <div className="flex items-center text-center mt-[30px] ">
        <Logo />
        <div className="flex gap-[81px] items-center">
          <Navigation />
          <Search />
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Header;
