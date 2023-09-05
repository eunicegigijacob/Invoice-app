import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import useDarkMode from "../hooks/useDarkMode";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide((state) => !state);
  };

  const transition = {
    type: "spring",
    stiffness: 200,
    damping: 10,
  };

  return (
    <div>
      {/* Header */}

      {/* nav on mobile */}

      <div className="fixed flex w-full  justify-between dark:text-[#EAEAEA] left-0 bottom-0 lg:hidden dark:bg-[#121a25]  bg-[#BBDEFB] border-t border-grayborder cursor-pointer">
        <div className="flex flex-col w-1/6 items-center gap-1 px-2 py-2">
          <HomeIcon className="w-[25px]" />
          <a className="captionmedium text-white">Home</a>
        </div>

        <div className="flex flex-col w-1/4 items-center gap-1 px-2 py-2 dark:bg-[#8c9296]  bg-[#1E88E5]">
          <ClipboardDocumentCheckIcon className="w-[25px]" />
          <a className="captionmedium text-inactivetext">Invoice</a>
        </div>

        <div className="flex flex-col w-1/4 items-center gap-1 px-2 py-2">
          <UserGroupIcon className="w-[25px]" />
          <a className="captionmedium text-inactivetext">More</a>
        </div>

        <div className="  flex  items-center mr-2  ">
          {/* darkMode Button */}

          {colorTheme === "light" ? (
            <motion.img
              onClick={toggleDarkMode}
              initial={{ scale: 0.6, rotate: 90 }}
              animate={{ scale: 1, rotate: 360, transition }}
              whileTap={{ scale: 0.9, rotate: 15 }}
              src={moon}
              className="cursor-pointer h-6"
            />
          ) : (
            <motion.img
              className="cursor-pointer h-7"
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.9, rotate: 15 }}
              initial={{ rotate: 45 }}
              animate={{ rotate: 360, transition }}
              src={sun}
            />
          )}
        </div>
      </div>

      {/* SideBar */}
      <div className=" z-50 hidden lg:block ">
        <div className=" fixed  z-50  lg:w-1/6 px-3 rounded-[4px]  flex-col  top-0 left-0 h-screen dark:bg-[#0c1e39]  bg-[#BBDEFB]">
          <div className=" h-full w-full flex flex-col justify-between items-center">
            {/* Logo */}

            {/* <img src={logo} className="relative" /> */}
            <ul className="flex flex-col w-full ml-4 gap-4 text-base dark:text-[#EAEAEA]  text-black mt-10  cursor-pointer">
              <li className="flex gap-3 w-full  align-center py-3 w-[130px] rounded-[4px]">
                <HomeIcon className="w-[25px]" />
                <p>Home</p>
              </li>
              <li className="flex gap-3  align-center py-3 px-3 w-full dark:bg-[#8c9296]  bg-[#1E88E5] rounded-[4px]">
                <ClipboardDocumentCheckIcon className="w-[25px]" />
                <p>Invoice</p>
              </li>
              <li className="flex gap-3  align-center py-3 w-full rounded-[4px]">
                <UserGroupIcon className="w-[25px]" />
                <p>Contacts</p>
              </li>
              <li className="flex gap-3  align-center py-3 w-full rounded-[4px]">
                <Cog8ToothIcon className="w-[25px]" />
                <p>Settings</p>
              </li>
            </ul>

            {/* Bottom Side */}
            <div>
              {colorTheme === "light" ? (
                <motion.img
                  onClick={toggleDarkMode}
                  initial={{ scale: 0.6, rotate: 90 }}
                  animate={{ scale: 1, rotate: 360, transition }}
                  whileTap={{ scale: 0.9, rotate: 15 }}
                  src={moon}
                  className="cursor-pointer ml-8 h-6"
                />
              ) : (
                <motion.img
                  className="cursor-pointer ml-8 h-7"
                  onClick={toggleDarkMode}
                  whileTap={{ scale: 0.9, rotate: 15 }}
                  initial={{ rotate: 45 }}
                  animate={{ rotate: 360, transition }}
                  src={sun}
                />
              )}

              <div className=" w-[100px] border-dotted border-t border-[#494e6e] my-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
