import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(MyContaxt);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token"); 
    navigate("/");
  };

  return (
    <div className="relative md:hidden top-0 left-0">
      {/* Menu Icon at the Top Left */}
      <button
        className="text-3xl  fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdOutlineMenu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white text-black p-6 transition-transform duration-500  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-4">
          <li
            onClick={() => {
              navigate("/");
            }}
            className=" cursor-pointer"
          >
            Home
          </li>
          <li className=" cursor-pointer">About</li>
          <li className=" cursor-pointer">Services</li>
          <li
            onClick={handleLogout}
            className="cursor-pointer bg-green-600 rounded w-[50%] text-white text-sm  font-bold  text-center p-1"
          >
            {currentUser ? "Logout" : "Login"}{" "}
          </li>
        </ul>
      </div>

      {/* Optional Overlay to close menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SidebarMenu;
