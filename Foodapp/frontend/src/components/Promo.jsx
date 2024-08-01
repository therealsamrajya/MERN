import React from "react";
import { RiSmartphoneLine } from "react-icons/ri";
import { FaBox } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";

const Promo = () => {
  return (
    <div className="relative h-[80vh]  ">
      <div className="bg-promo-background absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-80 "></div>
      <div>
        <div className="flex flex-row items-center   gap-[3rem]  justify-center max-sm:flex-col max-sm:gap-1 ">
          <span className=" font-bold font-primary relative text-heading  z-50 text-8xl max-sm:text-5xl max-sm:mt-[4rem]">
            Bringing <br className="max-sm:hidden" /> Happiness{" "}
            <br className="max-sm:hidden" /> to You
          </span>
          <div className="flex flex-row gap-[8rem] max-sm:mt-[-4rem]">
            <div className="flex flex-col justify-center items-center h-screen gap-[2rem]">
              <span className="w-[12rem] h-[12rem] rounded-[50%] bg-button z-40 flex justify-center items-center max-sm:w-[6rem] max-sm:h-[6rem]">
                <RiSmartphoneLine className="text-white text-[8rem] max-sm:text-[4rem]" />
              </span>
              <h3 className="font-primary text-heading max-sm:text-xl z-50 text-4xl">
                Order Online
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center h-screen gap-[2rem]">
              <span className="w-[12rem] h-[12rem] rounded-[50%] bg-button z-40 flex justify-center items-center max-sm:w-[6rem] max-sm:h-[6rem]">
                <FaBox className="text-white text-[8rem] max-sm:text-[4rem]" />
              </span>
              <h3 className="font-primary text-heading max-sm:text-xl z-50 text-4xl">
                Collect
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center h-screen gap-[2rem]">
              <span className="w-[12rem] h-[12rem] rounded-[50%] bg-button z-40 flex justify-center items-center max-sm:w-[6rem] max-sm:h-[6rem]">
                <FaPizzaSlice className="text-white text-[8rem] max-sm:text-[4rem]" />
              </span>
              <h3 className="font-primary text-heading max-sm:text-xl z-50 text-4xl">
                Dine Here
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
