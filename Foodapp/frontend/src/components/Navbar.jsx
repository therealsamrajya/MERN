import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  // Determine the background class based on the current path
  const getBackgroundClass = () => {
    switch (location.pathname) {
      case "/menu":
        return "bg-menu-background";
      case "/about":
        return "bg-about-background";
      default:
        return "bg-custom-background";
    }
  };

  return (
    <div className="relative h-[100vh]">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-80 ${getBackgroundClass()}`}></div>

      <div className="relative flex flex-col items-center z-10">
        {/* Icons */}
        <div className="absolute flex-row gap-[1rem] top-3 left-2  mt-4 ml-4 flex space-x-4 z-50">
          <FaFacebook className="text-heading hover:text-gray-300 cursor-pointer h-[3rem] w-[3rem] max-sm:h-[1.5rem] max-sm:w-[1.5rem] z-50" />
          <FaTwitter className="text-heading hover:text-gray-300 cursor-pointer h-[3rem] w-[3rem] max-sm:h-[1.5rem] max-sm:w-[1.5rem]" />
          <FaInstagram className="text-heading hover:text-gray-300 cursor-pointer h-[3rem] w-[3rem] max-sm:h-[1.5rem] max-sm:w-[1.5rem]" />
        </div>

        <div className="absolute top-3 right-0 mt-4 mr-4">
          <Button
            value="Contact Us"
            className=" border-white border-[1px] text-heading bg-transparent h-[3rem] font-semibold uppercase w-[12rem] hover:bg-heading hover:text-dark max-sm:w-[8rem] max-sm:h-[1.5rem] font-button"
          />
        </div>

        <div className="flex items-center justify-center">
          <NavLink to="/">
            <img
              className="h-[3rem] w-[19rem] items-center my-[2rem] max-sm:w-[10rem] max-sm:h-[2rem]"
              src="./src/images/logo2.png"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div className="flex flex-row justify-center items-center gap-[3rem] text-[1.5rem]">
          <NavLink
            className="font-secondary text-heading hover:text-slate-300 hover:underline underline-offset-4"
            to="/">
            Home
          </NavLink>
          <NavLink
            className="font-secondary text-heading hover:text-slate-300 hover:underline underline-offset-4"
            to="/menu">
            Menu
          </NavLink>
          <NavLink
            className="font-secondary text-heading hover:text-slate-300 hover:underline underline-offset-4"
            to="/about">
            About Us
          </NavLink>
        </div>

        {location.pathname === "/" && (
          <div className="flex flex-col items-center">
            <div className="flex flex-col text-heading text-[5rem] mt-[8rem] max-sm:text-[2rem] items-center justify-center font-secondary">
              <span className="font-bold font-primary">
                Crafting Culinary Harmony in Every Bite
              </span>
              <span className="text-[2rem] max-sm:text-[1rem] font-secondary">
                Everything you want to eat in one place
              </span>
            </div>
            <div className="flex flex-row justify-center items-center gap-[3rem] text-[1.2rem] ">
              <Button
                value="Order Now"
                className="mt-[2rem] font-button bg-button h-[3rem] font-semibold uppercase w-[12rem] py-2 hover:bg-red-500 text-heading"
              />
              <Button
                value="Takeaway"
                className="mt-[2rem] border-white border-[1px] font-button bg-transparent h-[3rem] font-semibold uppercase w-[12rem] hover:bg-heading hover:text-dark text-heading"
              />
            </div>
          </div>
        )}

        {location.pathname === "/menu" && (
          <div className="flex flex-col items-center text-heading text-4xl mt-[3rem] font-bold font-primary">
            <h2>MENU ITEMS</h2>
            <span className="text-center mt-[3rem] font-primary font-semibold text-6xl">
              Items that include your culnary taste <br />
              Items that suit your mood we have got it here
            </span>
          </div>
        )}

        {location.pathname === "/About" && (
          <div className="flex flex-col items-center text-heading text-4xl mt-[2rem]">
            <h2>About Us</h2>
            {/* Add any additional elements for the About Us page here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
