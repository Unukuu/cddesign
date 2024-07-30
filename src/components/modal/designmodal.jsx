import { HiOutlineXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
const atags = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Testimonials", link: "#Testimonials" },
  { name: "Contact", link: "#Contact" },
];
const Designmodal = () => {
  const { theme, setTheme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="box w-[320px] h-[667px] bg-white absolute dark:bg-black right-0 top-14 border-solid border-[1px] border-gray-100 flex flex-col gap-10 p-3"
    >
      <div className="flex justify-between text-3xl font-[900] text-[#111827] dark:text-white">
        <p>UNU</p>
        <button>
          <HiOutlineXMark />
        </button>
      </div>
      <div className="flex p-4 gap-4 flex-col text-gray-600 dark:text-white border-y-[1px] border-solid border-gray-500">
        {atags.map((value) => {
          return <a href={value.link}>{value.name}</a>;
        })}
      </div>
      <div className="flex justify-between text-gray-600 dark:text-white">
        <p>Switch theme</p>
        <button className="text-xl">
          {theme === "light" ? (
            <MdOutlineWbSunny
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <IoMoonOutline
              onClick={() => {
                setTheme("light");
              }}
            />
          )}
        </button>
      </div>
    </motion.div>
  );
};
export default Designmodal;
