import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const ListingRightSide = () => {
  const [apiData, setApiData] = useState([]);
  const getProductData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const resData = await res.json();

      console.log(resData);
      setApiData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="">
      <h4 className="text-[#000000] text-[14px] font-semibold">
        Applied Filters
      </h4>
      <div className="flex gap-[12px]">
        <button className="gap-[10px] flex border-[1px] rounded-full w-[111px] h-[36px] items-center justify-center text-[#0E1422] text-[12px] font-semibold mt-[12px]">
          Perfume
          <img
            className="w-[20px] h-[20px]"
            src="/images/close.svg"
            alt="close"
          />
        </button>
        <button className="gap-[10px] flex border-[1px] rounded-full w-[111px] h-[36px] items-center justify-center text-[#0E1422] text-[12px] font-semibold mt-[12px]">
          Size: M
          <img
            className="w-[20px] h-[20px]"
            src="/images/close.svg"
            alt="close"
          />
        </button>
      </div>
      <div className="flex justify-between  h-[24px] mt-[24px] items-center">
        <p className="text-[#5C5F6A] text-[12px]">Showing 1-9 of 36 results.</p>

        <button className="flex gap-[6px] w-[106px] h-[24px] text-[#5C5F6A] text-[12px] items-center ">
          SORT BY
          <img src="/images/dropdown.svg" alt="dropdown" />
        </button>
      </div>
      <div className="grid grid-cols-3  gap-[24px] max-w-[1116px] mt-[16px]">
        {apiData.slice(11, 21).map((product, index) => (
          <Link
            key={index}
            className="w-[264px] col-span-1 h-[434px] px-[8px] py-[16px]"
            to={`/product/${product.id}`}
          >
            <div className="w-[264px] h-[150x]   py-[16px]">
              <img className="w-[237px] h-[312px]" src={product.image} />
            </div>
            <div className="">
              <p className="text-[14px] text-[#0E1422] align-center w-[176px] h-[70px] font-bold">
                {product.title.slice(0, 40)}
              </p>
            </div>
            <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[10px] pb-[10px]">
              <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2 mt-[12px]">
                {product.rating.count === 0 ? "Stock Out" : "IN STOCK"}
              </button>
              <p className="text-[#474B57] text-[14px] font-semibold mt-[12px]">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ListingRightSide;
