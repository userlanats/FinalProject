import React from "react";
import Header from "../components/Header";
import ComponentProperties from "../components/ComponentProperties";
import ProductTshirtDetails from "../components/ProductTshirtDetails";
import ProductReviews from "../components/ProductReviews";
import SimilarProductsBestSeling from "../components/SimilarProductsBestSeling";
import Footer from "../components/Footer"

const Product = () => {
  return (
    <div>
      <Header />
      <hr className="max-w-[1116px] h-[1px] m-auto mt-[18px]"></hr>
      <ComponentProperties />
      <ProductTshirtDetails />
      <ProductReviews />
      <SimilarProductsBestSeling />
      <Footer />
    </div>
  );
};

export default Product;
