import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
  const [productlist, setProductlist] = useState([]);
  const [showLatest, setShowLatest] = useState(false);

  const fetchProductlist = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setProductlist(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductlist();
  }, []);

  const handleClick = (click) => {
    setShowLatest(click === "latest");
  };

  const showProducts = showLatest
    ? productlist.slice(12, 16)
    : productlist.slice(4, 8);

  return (
    <div className="mt-[152px]">
      <div>
        <div className="flex justify-center gap-[24px]">
          <button
            onClick={() => handleClick("featured")}
            className={`w-[92px] h-[31px] font-semibold border-solid border-2 rounded-[100px] ${
              !showLatest ? "border-[#E9E9EB]" : ""
            } text-[14px] hover:scale-110 hover:bg-gray-200 duration-500`}
          >
            Featured
          </button>
          <button
            onClick={() => handleClick("latest")}
            className={`text-[14px] ${
              showLatest ? "text-[#5C5F6A]" : "text-gray-400"
            } hover:scale-110 duration-500`}
          >
            Latest
          </button>
        </div>

        <div className="flex justify-between max-w-[1116px] m-auto mt-[80px]">
          {showProducts.map((product, index) => (
            <div key={index}>
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="cursor-pointer transition hover:scale-110 duration-500">
                  <img
                    className="w-[248px] h-[312px] px-5 py-5"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div>
                  <p className="font-medium text-sm mt-3 w-[248px] h-[40px]">
                    {product.title}
                  </p>
                  <div className="flex items-center mt-7 gap-[16px]">
                    <button className="text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                      IN STOCK {product.stock}
                    </button>
                    <div className="mt-3 ml-2 font-normal text-sm text-center">
                      ${product.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productlist;
