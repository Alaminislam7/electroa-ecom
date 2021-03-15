import React from "react";
import HeaderBottom from "./header/HeaderBottom";
import HeaderTop from "./header/HeaderTop";
import NewsLatter from "./NewsLatter";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      {children}
      <NewsLatter />
      <Footer />
    </>
  );
};

export default Layout;
