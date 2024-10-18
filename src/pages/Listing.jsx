import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListingBreadCrumb from "../components/ListingBreadCrumb";
import ListingParent from "../components/ListingParent";

const Listing = () => {
  return (
    <div>
      <Header />
      <ListingBreadCrumb />
      <ListingParent />
      <Footer />
    </div>
  );
};

export default Listing;
