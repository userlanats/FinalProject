import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />

      <div className=" w-full h-[440px] mt-[150px]  ">
        <div className="max-w-[1116px] mx-auto  justify-between flex items-center ">
          <img
            className="rounded-lg w-[400px] h-[400px]  drop-shadow-2xl           "
            src="/images/mycountry.jpg"
            alt="georgia"
          />
          <p className="text-[60px] text-center text-blue-600 animate-pulse">
            Georgia is part of Europe
          </p>
          <img
            className="rounded-lg w-[500px] h-[500px]   drop-shadow-2xl "
            src="/images/europe.jpg"
            alt="georgia"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
