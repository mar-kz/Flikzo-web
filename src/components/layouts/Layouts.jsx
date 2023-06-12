import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";
const Layouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layouts;
