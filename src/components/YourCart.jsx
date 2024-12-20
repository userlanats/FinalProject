// import React from "react";

// const YourCart = () => {
//   return (
//     <div className="bg-white w-full">
//       <div className="max-w-[1116px] m-auto mt-[72px]">
//         <div className="w-[628px]  ">
//           <p className="text-[#000000] text-[16px] font-bold ">Your cart</p>
//           <hr className="mt-[18px]"></hr>

//           <div className="mt-[48px] flex  ">
//             <div className="w-[80px] h-[80px] bg-[#F6F6F6] flex justify-between ">
//               <img
//                 className="w-[44px] h-[62px] m-auto mt-[9px]"
//                 src="/images/swiperphoto1.png"
//                 alt="tshirt"
//               />
//             </div>
//             <div className="ml-[32px] ">
//               <p className="text-[14px] text-[#0E1422] font-semibold">
//                 Raw Black T-Shirt Lineup
//               </p>
//               <div className="flex ">
//                 <h6 className="text-[12px] text-[#5C5F6A] mt-[6px]">Color: </h6>
//                 <button className="rounded-full bg-[#98BE9E] w-[12px] h-[12px] mt-[8px] ml-[8px]"></button>
//                 <h6 className="ml-[8px] text-[#5C5F6A]">—</h6>
//                 <h6 className="text-[#5C5F6A] text-[12px] mt-[6px] ml-[8px]">
//                   Size: M
//                 </h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourCart;

import React, { useEffect, useState } from "react";
import Counter2 from "./Counter2";

const YourCart = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const getAllProductsAndUserCart = async () => {
    setIsLoading(true);
    try {
      // Fetching products
      const products_res = await fetch("https://fakestoreapi.com/products");
      const products_data = await products_res.json();

      // Fetching user cart
      const cart_res = await fetch("https://fakestoreapi.com/carts/5");
      const cart_products = await cart_res.json();

      let cart_products_data = [];

      for (let index = 0; index < cart_products.products.length; index++) {
        const element = cart_products.products[index];

        products_data.find((product) => {
          if (product.id === element.productId) {
            cart_products_data.push(product);
          }
        });
      }

      setProducts(cart_products_data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllProductsAndUserCart();
  }, []);

  return (
    <div className=" max-w-[1116px] m-auto py-12 flex justify-between items-center ">
      <div className=" ">
        <div className="w-[628px]  ">
          <p className="text-[#000000] text-[16px] font-bold ">Your cart</p>
          <hr className="mt-[18px]"></hr>
        </div>

        {isLoading && <p className="text-2xl text-black">Loading...</p>}

        <div className="space-y-4 mt-[15px]  ">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-center gap-8 border max-w-[700px] rounded-xl p-4 shadow-md"
            >
              <img src={product.image} width={100} alt={product.title} />

              <div className="flex gap-[30px] items-center">
                <h2 className="w-[185px] font-semibold">{product.title}</h2>
                <p className="font-bold">${product.price}</p>

                <Counter2 />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-1 h-[430px] rounded-[4px] py-[32px] px-[24px]">
        <h1 className="font-semibold">Order Summary</h1>
        <div>
          <div className="flex justify-between mt-[40px]">
            <p className="text-[#5C5F6A]">Subtotal</p>
            <p className="text-[#0E1422] font-semibold">$20.98</p>
          </div>
          <div className="flex justify-between mt-[12px]">
            <p className="text-[#5C5F6A]">Shipping: </p>
            <p className="text-[#0E1422] font-semibold">Free</p>
          </div>
          <div className="flex justify-between mt-[12px]">
            <p className="text-[#5C5F6A]">Tax: </p>
            <p className="text-[#0E1422] font-semibold">$ 3.00</p>
          </div>
          <hr className="mt-[24px]"></hr>
          <div className="flex justify-between mt-[24px]">
            <p className="text-[14px] text-[#0E1422] font-semibold">Total</p>
            <p className="text-[14px] text-[#0E1422] font-semibold">$23.98</p>
          </div>
          <a href="#">
            <button
              className="w-[296px] h-[44px] mt-[32px] rounded-[4px] bg-[#0E1422] text-white hover:scale-110 duration-500"
              type="submit"
              value="Submit"
            >
              Checkout
            </button>
          </a>

          <div className="border-b w-[110px] border-[#0E1422] mt-[15%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] hover:scale-110 duration-500">
            <a
              href="#"
              className="text-[#0E1422] font-semibold mt-[32px] text-[12px]"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
