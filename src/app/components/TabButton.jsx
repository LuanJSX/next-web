import React from "react";
import { motion } from "framer-motion";


const variants = {
  default: { with: 0},
  active: { with: "calc(100% - 0.75rem"},
}
const TabButton = ({ active, selectTab, children }) => {
const buttonClasses = active ? "text-[#4C89F9]" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#4C89F9] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
       animate={"active" ? "active" : "default"}
      variants={variants}
      className="h-1 bg-gradient-to-br mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
