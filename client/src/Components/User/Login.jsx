import API from "../../API/Api.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarMenu from "./SidebarMenu";
import { setAuthToken } from "../../API/Api.js";


const Login = () => {
  const { setCurrentUser } = useContext(MyContaxt);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const navigate = useNavigate();

  const submitHanlder = async (e) => {
    e.preventDefault();
  
    try {
      const res = await API.post("/auth/login", formData);
  
      console.log(res);
      console.log(res.data);
      const { token } = res.data;
  
      setCurrentUser(token);
      localStorage.setItem("token", token);
  
      if (token) {
        setAuthToken(token);
      }
  
      setFormData({
        email: "",
        password: ""
      });
  
      // ✅ show success toast first
      toast.success("Login Success");
  
      // ✅ THEN wait before navigating
      setTimeout(() => {
        navigate("/");
      }, 2000);  // 2 seconds is enough, no need 5 seconds
  
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed!");
      alert("User does not exist");
    }
  };
  
  

  return (
    <>
      <SidebarMenu />
      <div className="flex  w-full justify-center">
        <div className=" hidden md:flex w-[50%] h-[100%]  justify-center items-center">
          <img
            className="h-[90%] mt-15"
            src="https://kingkisanghar.com/assets/images/inner-page/log-in.png"
          />
        </div>
        <div className="flex w-[98%] md:w-[40%] items-center  justify-center min-h-screen">
          <div className="bg-white shadow-md rounded-lg p-5 w-[420px] text-center">
            <h2 className="text-xl w-full font-bold text-green-700 mb-2">
              Welcome To KingKisanGhar
            </h2>
            <p className="text-gray-600  cursor-pointer md:flex justify-center font-bold mb-2">
              <span className="text-orange-600">Log in</span>&nbsp; or &nbsp;{" "}
              <span
                onClick={() => {
                  navigate("/register");
                }}
                className="text-orange-600"
              >
                Sign up
              </span>{" "}
            </p>
            <input
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              placeholder="Enter Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
              placeholder="Enter Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={submitHanlder}
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
            >
              Continue
            </button>
            <p className="text-sm text-gray-600 md:mt-4">
              By continuing, you agree to KingKisanGhar{" "}
              <span className="text-green-700 font-medium cursor-pointer hover:underline">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="text-green-700 font-medium cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
