import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-start ml-[2rem] gap-[9rem] max-sm:grid max-sm:grid-cols-2 max-sm:gap-[3rem] mb-[2rem]">
        <div className="flex flex-col items-center justify-center">
          <span className="text-button font-primary text-4xl max-sm:text-2xl">
            Mandala Meals
          </span>
          <span className="mt-[1rem] text-center    font-secondary text-gray text-2xl max-sm:text-xl">
            Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit.
          </span>
          <div className="flex flex-row gap-[3rem] mt-[2rem] ">
            <FaFacebook className="h-[3rem] w-[3rem] cursor-pointer text-dark max-sm:h-[2rem] max-sm:w-[2rem]" />
            <FaTwitter className="h-[3rem] w-[3rem] cursor-pointer text-dark  max-sm:h-[2rem] max-sm:w-[2rem]" />
            <FaInstagram className="h-[3rem] w-[3rem] cursor-pointer text-dark  max-sm:h-[2rem] max-sm:w-[2rem]" />
          </div>
        </div>
        <div className="flex flex-col gap-[2rem]  mt-[2rem] items-center">
          <span className="font-primary text-dark text-4xl max-sm:text-2xl">
            About Us
          </span>
          <div className="flex flex-col gap-[1rem] font-secondary text-2xl text-gray max-sm:text-xl ">
            <span>Our Story</span>
            <span>Our Location</span>
            <span>Featured</span>
            <span>Contact Us</span>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem]  mt-[2rem] items-center">
          <span className="font-primary text-dark text-4xl max-sm:text-2xl ">
            Our Menu
          </span>
          <div className="flex flex-col gap-[1rem] font-secondary text-2xl text-gray max-sm:text-xl ">
            <span>Momo</span>
            <span>Pizza</span>
            <span>Burger</span>
            <span>Fries</span>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] mt-[2rem] items-center">
          <span className="font-primary text-dark text-4xl max-sm:text-2xl">
            Our Location
          </span>
          <div className="flex flex-col gap-[1rem] font-secondary text-2xl text-gray max-sm:text-xl ">
            <span>Mandala Meals Kathmandu</span>
            <span>Mandala Meals Chitwan</span>
            <span>Mandala Meals Pokhara</span>
            <span>Mandala Meals Dhangadhi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
