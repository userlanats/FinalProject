import React from "react";
import Header from "../components/Header";
import Cover from "../components/Cover";
import FeatureItems from "../components/FeatureItems";
import BestSeling from "../components/BestSeling";
import FashionParadise from "../components/FashionParadise";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";


const Main = () => {
  return (
    <div>
      <Header />
      <Cover />
      <FeatureItems />
      <BestSeling />
      <FashionParadise />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Main;
