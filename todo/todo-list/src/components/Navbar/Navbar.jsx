// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import Button from "../Button/Button";
import ReusableDiv from "../ReusableDiv/ReusableDiv";
import {
  RxHamburgerMenu,
  CiBoxList,
  CiSearch,
  TbArrowForwardUpDouble,
  FaCalendarAlt,
  FaTasks,
  MdOutlinePersonPin,
  HiOutlineOfficeBuilding,
  IoIosAdd,
} from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <Button
        value={<RxHamburgerMenu />}
        onClick={toggleSidebar}
        className="text-3xl"
      />
      {isSidebarOpen && (
        <div className="w-[20rem] h-[100vh] bg-secondary border-secondary border-[1px] text-text font-primary max-sm:w-[12rem] fixed top-0 left-0 z-50">
          <div className="mt-[1rem] flex flex-row gap-[6rem] text-3xl max-sm:text-[14px] max-sm:gap-[1rem]">
            <Link to="/" className="mx-[3rem]">
              MENU
            </Link>
            <Button value={<RxHamburgerMenu />} onClick={toggleSidebar} />
          </div>

          <div className="flex flex-row items-center max-sm:mt-[10px] mt-[2rem] ml-[1rem] gap-[1px] max-sm:text-[14px] text-2xl">
            <input
              className=" max-sm:w-[8rem]  w-[15rem] bg-secondary rounded-lg text-center outline-none"
              type="text"
              placeholder="Search"
            />
            <Button value={<CiSearch />} />
          </div>

          <div className="mt-[2rem] ml-[1rem] flex flex-col gap-[1rem]">
            <span className="">TASKS</span>
            <ReusableDiv
              buttonIcon={<TbArrowForwardUpDouble size={25} />}
              spanText="Upcoming"
              divValue="1"
            />
            <ReusableDiv
              buttonIcon={<FaTasks size={25} />}
              spanText="Today"
              divValue="3"
            />
            <ReusableDiv
              buttonIcon={<FaCalendarAlt size={25} />}
              spanText="Calendar"
              divValue="15"
            />
          </div>

          <hr className="mt-[1rem] border-dotted" />

          <div className="mt-[1rem] ml-[1rem] flex flex-col gap-[1rem]">
            <span className="">LISTS</span>
            <ReusableDiv
              buttonIcon={<MdOutlinePersonPin size={30} />}
              spanText="Personal"
              divValue="1"
            />
            <ReusableDiv
              buttonIcon={<HiOutlineOfficeBuilding size={25} />}
              spanText="Work"
              divValue="3"
            />
            <ReusableDiv
              buttonIcon={<CiBoxList size={25} />}
              spanText="List 1"
              divValue="15"
            />
            <ReusableDiv
              buttonIcon={<IoIosAdd size={25} />}
              spanText="Create new List"
              divValue="0"
            />
          </div>
          <hr className="mt-[1rem] border-dotted" />

          <div className="flex flex-col">
            <span>TAGS</span>
            <div className=" flex flex-row gap-5 justify-center mt-[1rem] max-sm:text-[14px] max-sm:gap-4 max-sm:flex-col">
              <Button className="text-red-500" value="Tag 1" />
              <Button className="text-blue-500" value="Tag 2" />
              <Button value=" + Add more tags" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
