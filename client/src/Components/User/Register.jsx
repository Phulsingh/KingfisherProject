import API from "../../API/Api.js"
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";

const Register = () => {
  const navigate = useNavigate();
  //const {users, setUsers} = useContext(MyContaxt)


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


const submitHandler = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.password || !formData.number) {
    toast.error("All fields are required");
    return;
  }

  if (formData.password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return;
  }

  if (formData.number.length !== 10) {
    toast.error("Number must be exactly 10 digits");
    return;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
    toast.error("Password must have at least one special character");
    return;
  }

  if (!/[A-Z]/.test(formData.password)) {
    toast.error("Password must contain at least one capital letter");
    return;
  }
  API.post("/auth/register", formData)
    .then(() => {
      toast.success("Registration Successful");
      setFormData({ name: "", email: "", password: "", number: "" });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    })
    .catch((err) => {
      console.log(err.response?.data); // For debugging
    
      if (err.response && err.response.data.message) {
        const errorMessage = err.response.data.message;
    
        if (errorMessage.includes("User Already Exist")) {
          toast.error("User already registered. Please login.");
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error("Something went wrong");
      }
    });
};


  return (
    <>
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
            <p className="flex md:hidden items-center justify-center text-sm font-bold pb-2">
              Taja Khana, har ghar ki zaroorat
            </p>
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChanges}
                  placeholder="Enter Your Name"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChanges}
                  placeholder="Enter Your Email"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChanges}
                  placeholder="Enter Your Password"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="text"
                  name="number"
                  onChange={handleChanges}
                  value={formData.number}
                  placeholder="Enter Your Number"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md">
                Continue
              </button>
            </form>

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Register;
