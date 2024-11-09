import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeItem, setActiveItem] = useState(""); // State to track the active item
  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle item click
  const handleItemClick = (item, path) => {
    setActiveItem(item); // Update the active item state
    navigate(path); // Navigate to the specified path
  };

  const activeIitem =
    location.pathname === "/"
      ? "NLEX"
      : location.pathname === "/SOUTH"
      ? "SOUTH"
      : location.pathname === "/CII"
      ? "CII"
      : "";

  return (
    <div className="border-b shadow-xl border-b-gray-900 bg-[#202121] relative z-10 text-gray-500 flex justify-between items-center max-w-auto  mx-auto h-24 px-4 text-l">
      <h1 className=" text-3xl font-bold primary-color ml-4">
        DTRR and ETC RENAMER (DER)
      </h1>
      <ul className="hidden md:flex ">
        <li
          className={`p-5 cursor-pointer transition-colors duration-300 hover:text-orange-300 ${
            activeIitem === "NLEX" ? "text-orange-500" : ""
          }`}
          onClick={() => handleItemClick("NLEX", "/")}
        >
          NLEX
        </li>
        <li
          className={`p-5 cursor-pointer transition-colors duration-300 hover:text-orange-300 ${
            activeIitem === "CII" ? "text-orange-500" : ""
          }`} // Add active class
          onClick={() => handleItemClick("CII", "/CII")}
        >
          CII
        </li>
        <li
          className={`p-5 cursor-pointer transition-colors duration-300 hover:text-orange-300 ${
            activeIitem === "SOUTH" ? "text-orange-500" : ""
          }`} // Add active class
          onClick={() => handleItemClick("SOUTH", "/SOUTH")}
        >
          SOUTH
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden ">
        {nav ? (
          <AiOutlineClose className="cursor-pointer" size={20} />
        ) : (
          <AiOutlineMenu className="cursor-pointer" size={20} />
        )}
      </div>

      <div
        className={
          nav
            ? "text-gray-300 fixed h-full left-0 top-0 w[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" mt-8 text-3xl primary-color m-4">
          DTRR and ETC RENAMER (DER)
        </h1>
        <ul className="p-8 text-2xl">
          <li
            className={`p-5 cursor-pointer transition-colors duration-300 hover:text-orange-300 ${
              activeIitem === "NLEX" ? "text-orange-500" : ""
            }`}
            onClick={() => handleItemClick("NLEX", "/")}
          >
            NLEX
          </li>
          <li
            className={`p-5 cursor-pointer transition-colors duration-300 hover:text-orange-300 ${
              activeIitem === "CII" ? "text-orange-500" : ""
            }`} // Add active class
            onClick={() => handleItemClick("CII", "/CII")}
          >
            CII
          </li>
          <li
            className={`p-5 cursor-pointer transition-colors duration-300 hover:text-orange-300 ${
              activeIitem === "SOUTH" ? "text-orange-500" : ""
            }`} // Add active class
            onClick={() => handleItemClick("SOUTH", "/SOUTH")}
          >
            SOUTH
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
