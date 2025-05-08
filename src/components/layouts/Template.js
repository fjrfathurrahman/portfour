"use client";
import React from "react";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import { AiOutlineHome } from "react-icons/ai";
import { FiUsers, FiGrid } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
const items = [
  {
    icon: <AiOutlineHome size={18} />,
    label: "Home",
    onClick: () => window.location.href = "#home",
  },
  {
    icon: <FiUsers size={18} />,
    label: "About Us",
    onClick: () => window.location.href = "#about",
  },
  {
    icon: <FiGrid size={18} />,
    label: "Projects",
    onClick: () => window.location.href = "#projects",
  },
  {
    icon: <LuMoonStar size={18} />,
    label: "Theme Toggle",
    onClick: () => window.location.href = "#projects",
  },
];

const Template = ({ children }) => {
  return (
    <div className="container mx-auto px-6 sm:px-12">
      <div className="fixed bottom-4 left-0 right-0 z-[99999999]">
        <NavMenu
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Template;
