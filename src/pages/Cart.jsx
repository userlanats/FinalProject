import React from "react";
import ComponentBreadCrumb from "../components/ComponentBreadCrumb";
import Header from "../components/Header";
import YourCart from "../components/YourCart";

const Cart = () => {
  return (
    <div>
      <Header />
      <ComponentBreadCrumb />
      <YourCart />
    </div>
  );
};

export default Cart;
