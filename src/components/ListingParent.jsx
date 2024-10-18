import React from "react";
import ListingAsideLeft from "./ListingAsideLeft";
import ListingRightSide from "./ListingRightSide";

const ListingParent = () => {
  return (
    <div className="max-w-[1116px] m-auto gap-[29px] flex  mt-[32px]">
      <ListingAsideLeft />
      <ListingRightSide />
    </div>
  );
};

export default ListingParent;
