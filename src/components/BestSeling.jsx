import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BestSeling = () => {
  const [apiData, setApiData] = useState([]);

  const getProductData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");
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
    <div className=" mt-[72px]  w-[1116px] h-[568px] m-auto">
      <div>
        <h5 className="text-[12px] text-[#878A92] w-[71px] h-[24px] ml-[479px]  ">
          Shop Now
        </h5>
        <h1 className="text-[24px] text-[#0E1422] font-bold w-[139px] h-[29px] ml-[478px]">
          Best Selling
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-[20px] mt-[80px] max-w-[1116px] m-auto ">
        {apiData.map((product, index) => (
          <Link key={index} to={`/product/${product.id}`}>
            <div className="w-[264px] h-[434px]   py-[16px]">
              <img className="w-[237px] h-[312px]" src={product.image} />
            </div>
            <div className="">
              <p className="text-[14px] text-[#0E1422] align-center w-[176px] h-[40px] font-bold">
                {product.title}
              </p>
            </div>
            <div className="w-[239px] h-[28px] flex gap-[16px]  items-center mt-[20px]">
              <button className="text-[#0E1422] w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2 mt-[12px]">
                {product.rating.count === 0 ? "Stock Out" : "IN STOCK"}
              </button>
              <p className="text-[#474B57] font-semibold text-[14px] mt-[12px]">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSeling;
