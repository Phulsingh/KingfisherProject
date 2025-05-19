import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";


const Navbar = () => {
  const navigate = useNavigate();
  const { lengthOfCart } = useContext(MyContaxt);
  const {searchText, setSearchText} = useContext(MyContaxt);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);    
  };


  
  return (
    <div className="w-full sticky top-0 z-50 bg-white md:bg-[#00B86B] shadow-md px-4 md:px-8 py-3 md:py-6 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="hidden md:flex items-center md:w-[15%]">
        <img
          className="h-14"
          src="https://kingkisanghar.com/assets/images/kisanlogo20.png"
          alt="logo"
        />
      </div>

      {/* Delivery Message */}
      <div className="text-center text-sm font-semibold text-black md:text-white md:w-[25%] my-2 md:my-0">
        <p>We are not delivering in your address</p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 md:bg-green-300 rounded-xl w-full md:w-[35%] px-2 py-1">
        <input
          onChange={handleSearchChange}
          value={searchText}
          className="flex-grow bg-transparent border-none outline-none px-2 text-sm md:text-white placeholder:text-gray-500 md:placeholder:text-white"
          type="text"
          placeholder="I am searching for"
        />
        <div className="cursor-pointer text-[#00B86B] md:text-white">
          <CiSearch size={24} />
        </div>
      </div>

      {/* Icons (Desktop Only) */}
      <div className="hidden md:flex space-x-6 items-center md:w-[20%] justify-end mt-2 md:mt-0">
        {/* Cart Icon with Badge */}
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <IoCartOutline size={25} className="text-white" />
          {lengthOfCart > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {lengthOfCart}
            </span>
          )}
        </div>

        {/* User Icon */}
        <FaRegUserCircle
          size={25}
          className="text-white cursor-pointer"
          onClick={() => navigate("/login")}
        />

        {/* Shopping Bag Icon */}
        <FiShoppingBag size={25} className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
