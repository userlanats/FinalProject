import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SimilarProductsBestSeling = () => {
  const [apiData, setApiData] = useState([]);

  const getProductData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?");
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
    <div className="  max-w-[1116px] min-w-[1170px] h-[568px] m-auto ">
      <div className="mt-[136px]">
        <h1 className="text-[24px] text-[#0E1422] font-bold ">
          You might also like
        </h1>
        <h5 className="text-[12px] text-[#878A92] mt-[8px]  ">
          SIMILAR PRODUCTS
        </h5>
      </div>
      <div className="grid grid-cols-4  gap-[20px] mt-[56px] max-w-[1116px] m-auto ">
        <div className="w-[264px] h-[434px] flex gap-[20px] ">
          {apiData.slice(8, 12).map((product, index) => (
            <Link key={index} to={`/product/${product.id}`}>
              <div className="w-[264px] h-[434px]   py-[16px]">
                <img className="w-[237px] h-[312px]" src={product.image} />
              </div>
              <div className="">
                <p className="text-[14px] text-[#0E1422] align-center w-[176px] h-[70px] font-bold">
                  {product.title}
                </p>
              </div>
              <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[20px]">
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
      </div>
    </div>
  );
};

export default SimilarProductsBestSeling;
