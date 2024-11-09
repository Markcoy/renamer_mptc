import React from "react";
import Navbar from "../shared/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex-1 ">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
