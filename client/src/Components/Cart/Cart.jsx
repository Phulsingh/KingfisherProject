import React from "react";
import Navbar from "../Home/Navbar";
import ScrollingText from "../Home/ScrollingText";
import FooterMobil from "../Footer/FooterMobil";
import MyContaxt from "../Contaxt/MyContaxt";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(MyContaxt);
  const navigate = useNavigate();

  const totalMRP = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const couponDiscount = 40;
  const shipping = 40;

  const saving = 50;
  const TotalINR = totalMRP - saving;

  return (
    <>
      <ScrollingText />
      <div className="hidden md:flex">
        <Navbar />
      </div>

      <div className="p-4 md:p-10">
        <div className=" hidden md:flex flex-col md:flex-row justify-center gap-6">
          {/* Left - Product List */}
          {cart.length > 0 && (
            <div className="w-full md:w-[60%] bg-white rounded-lg shadow-md p-4">
              {cart.map((product, id) => (
                <div
                  key={id}
                  className="flex items-start w-full border-b pb-4 mb-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 cursor-pointer object-cover rounded mr-4"
                  />
                  <div className="flex-grow w-1xl w-[30%]">
                    <h2 className="font-semibold text-lg">{product.name}</h2>
                    <p className="text-sm text-gray-600">Sold By:</p>
                    <p className="text-sm">Quantity - {product.pieces}</p>
                  </div>
                  <div className="text-start justify-center items-center w-[20%]">
                    <div className="text-sm text-gray-700">Price</div>
                    <div className="text-md font-semibold">
                      {product.price}{" "}
                      <span className="line-through text-gray-500">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                    <div className="text-green-600 text-sm">
                      You Save : {product.discount}
                    </div>
                  </div>
                  <div className="flex w-[10%] hover:bg-green-600 bg-green-700 justify-center rounded-2 items-center   mx-6">
                    <span
                      onClick={() => {
                        decreaseQuantity(product._id);
                      }}
                      className=" font-bold cursor-pointer text-white px-2 py-1 rounded-l"
                    >
                      -
                    </span>
                    <span className="px-4 font-semibold text-white">
                      {product.quantity}
                    </span>
                    <span
                      onClick={() => {
                        increaseQuantity(product._id);
                      }}
                      className=" cursor-pointer flex items-center justify-center text-white px-2 py-1 rounded-r"
                    >
                      +
                    </span>
                  </div>
                  <div className="text-right w-[10%] flex justify-start items-center font-semibold text-lg text-gray-800">
                    ₹{product.totalPrice}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Right - Cart Summary */}
          {cart.length > 0 ? (
            <div className="w-full md:w-[35%] md:max-h-100 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-700">
                Cart Total
              </h2>
              <div className="space-y-2 text-gray-700 text-sm">
                <div className="flex justify-between">
                  <span>Total MRP</span>
                  <span className="font-semibold">₹{totalMRP}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sub-Total</span>
                  <span className="font-semibold">₹{subTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Coupon Discount</span>
                  <span className="text-red-500">(-) {couponDiscount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span>Saving</span>
                  <span className="text-green-600">- ₹{saving}</span>
                </div>
              </div>

              <div className="mt-4 border-t pt-4 flex justify-between items-center text-xl font-bold text-green-700">
                <span>Total (INR)</span>
                <span>₹{TotalINR}</span>
              </div>

              <button
                onClick={() => {
                  navigate("/payment");
                }}
                className="w-full hover:bg-orange-500 bg-green-600 cursor-pointer text-white py-2 mt-4 rounded-lg font-semibold"
              >
                Process To Checkout
              </button>

              <button
                onClick={() => {
                  navigate("/");
                }}
                className="w-full mt-3 py-2  cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center gap-2"
              >
                <span className="text-lg">←</span> Return To Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <img
                className="h-90"
                src="https://kingkisanghar.com/assets/images/inner-page/emptycart.png"
              />
              <p className=" w-full flex justify-center  items-center text-3xl font-bold text-green-600">
                Your Cart is Empty
              </p>
            </div>
          )}
        </div>

        {/*Mobile view*/}
        <div className="flex  md:hidden p-0 m-0 w-full">
          <div className="flex sticky top-0 z-50 p-0 m-0 w-full flex-col justify-center items-start">
            <div className="sticky top-0 z-10 bg-white w-[100%] flex p-4 justify-start items-center shadow">
              <FaAngleLeft
                onClick={() => {
                  navigate("/");
                }}
                size={20}
                className="mr-2 cursor-pointer"
              />
              <p className="text-xl font-bold">Your cart</p>
              {cart.length > 0 && (
                <p className="text-sm font-semibold ml-3 rounded-2xl px-2 bg-green-200">
                  You saved 20%
                </p>
              )}
            </div>
            <div className="w-full flex justify-start flex-col mb-15 items-center">
              {cart.map((product, id) => (
                <div
                  className="w-full bg-gray-300  rounded px-1 mt-2 h-22 flex justify-start items-center"
                  key={id}
                >
                  <div className="w-[65%] h-full justify-start items-center flex space-y-1">
                    <img
                      className="h-14 w-14 rounded-xl"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="flex w-full flex-col px-2">
                      <p className="text-sm w-full font-bold">{product.name}</p>
                      <span className="text-xs font-bold text-gray-600 ">
                        {product.pieces}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-full items-center  justify-start w-[35%]">
                    <div className="w-[50%] cursor-pointer bg-green-200 px-4 font-semibold rounded flex justify-center items-center space-x-3">
                      <span
                        onClick={() => {
                          decreaseQuantity(product._id);
                        }}
                      >
                        -
                      </span>
                      <span>{product.quantity}</span>
                      <span
                        onClick={() => {
                          increaseQuantity(product._id);
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div className="flex justify-center w-[50%] items-start pl-3 flex-col font-semibold">
                      <span className="text-black">₹{product.totalPrice}</span>
                      <span className="text-xs line-through text-gray-500">
                        ₹{product.originalPrice}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {cart.length > 0 ? (
                <div className="flex w-full flex-col    justify-start mt-3 items-start p-2">
                  <div className="space-y-2  w-full flex justify-between flex-col text-gray-700 text-sm">
                    <div className="flex justify-between">
                      <span>Total MRP</span>
                      <span className="font-semibold">₹{totalMRP}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sub-Total</span>
                      <span className="font-semibold">₹{subTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coupon Discount</span>
                      <span className="text-red-500">(-) {couponDiscount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>₹{shipping}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saving</span>
                      <span className="text-green-600">- ₹{saving}</span>
                    </div>
                  </div>

                  <div className="mt-4 w-full border-t pt-4 flex justify-between items-center text-xl font-bold text-green-700">
                    <span>Total (INR)</span>
                    <span>₹{TotalINR}</span>
                  </div>

                  <div className="flex flex-col space-y-3.5 w-full justify-center items-center mt-3">
                    <button
                      onClick={() => {
                        navigate("/payment");
                      }}
                      className="flex w-[70%]  justify-center items-center p-3 rounded font-semibold text-white bg-green-400"
                    >
                      Proceed to Checkout
                    </button>
                    <button
                      onClick={() => {
                        navigate("/");
                      }}
                      className="flex w-[70%] space-x-  justify-around items-center p-3 rounded font-semibold text-black bg-gray-200"
                    >
                      <FaArrowLeft /> Return to shopping
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-80 justify-center items-center">
                  <img
                    className="h-50"
                    src="https://kingkisanghar.com/assets/images/inner-page/emptycart.png"
                  />
                  <p className=" w-full flex justify-center  items-center text-3xl font-bold text-green-600">
                    Your Cart is Empty
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterMobil />
    </>
  );
};

export default Cart;
