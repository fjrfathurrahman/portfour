import React from "react";
import Footer from "./Footer";

const Template = ({ children }) => {
  return (
    <div className="container mx-auto px-6 sm:px-12 border">
      {children}
      <Footer/>
    </div>
  );
};

export default Template;
