import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const pic1 = require("../../images/dc-logo.svg").default;
const pic2 = require("../../images/nft-studio-logo.svg").default;

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="bg-black text-white font-kanit font-bold flex gap-x-48 py-4 items-center">
        <div className="flex gap-4 w-[90px] h-[40px]">
          <img src={pic1} alt="" className="" />
          <img src={pic2} alt="" />
        </div>

        <ul className="hidden lg:flex text-neutral-400 gap-5">
          <li className="p-4 hover:text-blue-500">Purchase</li>
          <li className="p-4 hover:text-blue-500">Marketplace</li>
          <li className="p-4 hover:text-blue-500">Collections</li>
          <li className="p-4 hover:text-blue-500">Blog</li>
          <li className="p-4 hover:text-blue-500">FAQs</li>

          <div className=" flex mx-10 pt-2">
            <div className="gap-4 flex">
              <button class="bg-transparent hover:bg-blue-500 font-normal hover:text-white py-2 px-8 border hover:border-transparent text-white rounded-sm text-sm">
                SIGN UP
              </button>
              <button class="bg-blue-500 hover:bg-blue-500 hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent text-white font-normal rounded-sm text-sm">
                LOGIN
              </button>
            </div>
          </div>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            <div className="flex gap-2 w-[90px] h-[40px]">
              <img src={pic1} alt="" className="" />
              <img src={pic2} alt="" />
            </div>
          </h1>
          <li className="p-4 border-b border-gray-600">Purchase</li>
          <li className="p-4 border-b border-gray-600">Marketplace</li>
          <li className="p-4 border-b border-gray-600">Collections</li>
          <li className="p-4 border-b border-gray-600">Blog</li>
          <li className="p-4">FAQs</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
