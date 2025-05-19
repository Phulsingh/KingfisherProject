import React from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";

const FooterMobil = () => {
  const navigate = useNavigate();
  const { lengthOfCart } = useContext(MyContaxt);

  return (
    <footer className="w-full flex justify-around px-2 fixed bottom-0 left-0 bg-yellow-50 items-center md:hidden h-16 z-50 shadow-md">
      {/* Home */}
      <div
        onClick={() => navigate("/")}
        className="flex flex-col justify-center items-center text-gray-800 hover:text-black"
      >
        <img
          className="h-6 mb-1"
          src="https://kingkisanghar.com/assets/images/kisanlogo20.png"
          alt="Home"
        />
        <span className="text-[11px]">Home</span>
      </div>

      {/* Category */}
      <div
        onClick={() => navigate("/categories")}
        className="flex flex-col justify-center items-center text-gray-800 hover:text-black"
      >
        <TbCategoryPlus size={22} className="mb-1" />
        <span className="text-[11px]">Category</span>
      </div>

      {/* Order Again */}
      <div
        onClick={() => {
          navigate("/repeatOrder");
        }}
        className="flex flex-col justify-center items-center text-gray-800 hover:text-black"
      >
        <FaArrowsRotate size={20} className="mb-1" />
        <span className="text-[11px]">Repeat</span>
      </div>

      {/* Cart */}
      <div
        onClick={() => navigate("/cart")}
        className="relative flex flex-col justify-center items-center text-gray-800 hover:text-black"
      >
        {lengthOfCart > 0 && (
          <span className="absolute -top-1 right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            {lengthOfCart}
          </span>
        )}
        <IoCartOutline size={22} className="mb-1" />
        <span className="text-[11px]">Cart</span>
      </div>

      {/* Account */}
      <div
        onClick={() => navigate("/login")}
        className="flex flex-col justify-center items-center text-gray-800 hover:text-black"
      >
        <MdOutlineAccountCircle size={22} className="mb-1" />
        <span className="text-[11px]">Account</span>
      </div>
    </footer>
  );
};

export default FooterMobil;
