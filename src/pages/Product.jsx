import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ComponentProperties from "../components/ComponentProperties";
import ProductTshirtDetails from "../components/ProductTshirtDetails";
import ProductReviews from "../components/ProductReviews";
import SimilarProductsBestSeling from "../components/SimilarProductsBestSeling";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState([]);

  const getProductData = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      const resData = await res.json();
      setDetailsData(resData);
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <Header />
      <hr className="max-w-[1116px] h-[1px] m-auto mt-[18px]"></hr>
      <ComponentProperties />
      <ProductTshirtDetails detailsData={detailsData} />
      <ProductReviews />
      <SimilarProductsBestSeling />
      <Footer />
    </div>
  );
};

export default Product;
