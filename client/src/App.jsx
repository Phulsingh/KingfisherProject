import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/User/Login";
import Categories from "./Components/Categories/Categories";
import Register from "./Components/User/Register";
import ContaxtProvider from "./Components/Contaxt/ContaxtProvider";
import Payment from "./Components/Payment/Payment";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Repeat from "./Components/Cart/Repeat";


const App = () => {
  return (
    <ContaxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/repeatOrder" element={<Repeat/>}/>
        </Routes>
      </BrowserRouter>
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
    </ContaxtProvider>
  );
};

export default App;
