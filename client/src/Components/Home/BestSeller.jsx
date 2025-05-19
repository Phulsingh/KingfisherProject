import React, { useEffect, useState } from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../API/Api.js"

const BestSeller = () => {
  const { addToCart, filteredProducts, searchText } = useContext(MyContaxt);
  const [bestSeller, setBestSeller]= useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await API.get("/products");
        const data = res.data;
        setBestSeller(data.filter(d => d.category === "Best-Seller"))
      }catch(error){
        console.log(error);
        toast.error("Best seller not found")
      }
    }
    fetchData();
  },[])

  const productsToShow = searchText.trim() !== "" ? filteredProducts : bestSeller;


  // const products = [
  //   {
  //     id: 16,
  //     name: "Dove intense Repair Shampoo",
  //     price: 128,
  //     originalPrice: 130,
  //     pieces: "180 ml",
  //     quantity: 1,
  //     discount: "2%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856971/Grocery/DesktopImage/ygt8gkg2ntwrkbz3ecrr.webp",
  //   },
  //   {
  //     id: 17,
  //     name: "Himalaya Anti hairfal shampoo",
  //     price: 125,
  //     originalPrice: 150,
  //     pieces: "200 ml",
  //     quantity: 1,
  //     discount: "2%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856904/Grocery/DesktopImage/spts91ruoego82nynz2g.webp",
  //   },
  //   {
  //     id: 18,
  //     name: "TRE Semme Hair Fall Defense",
  //     price: 73,
  //     originalPrice: 90,
  //     pieces: "85 ml",
  //     quantity: 1,
  //     discount: "0%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856653/Grocery/DesktopImage/zrepmjz4waniiwokacjq.webp",
  //   },
  //   {
  //     id: 19,
  //     name: "Coconut Water",
  //     price: 10,
  //     originalPrice: 15,
  //     pieces: "1 pc",
  //     quantity: 1,
  //     discount: "33%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856561/Grocery/DesktopImage/hl8pkwpntj3uyq8heipi.webp",
  //   },
  //   {
  //     id: 20,
  //     name: "Coconut Water",
  //     price: 60,
  //     originalPrice: 90,
  //     pieces: "1 pc",
  //     quantity: 1,
  //     discount: "33%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856269/Grocery/DesktopImage/gw5g7bbtslavkr1tolpj.webp",
  //   },
  //   {
  //     id: 21,
  //     name: "Coconut Water",
  //     price: 60,
  //     originalPrice: 90,
  //     pieces: "1 pc",
  //     quantity: 1,
  //     discount: "33%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856082/Grocery/DesktopImage/laemc1zuntvyqifiaymi.webp",
  //   },
  // ];

  return (
    <>
      {productsToShow.length > 0 && (
        <div className="w-full h-full px-3 md:px-10 mt-3 md:mt-5">
          <p className="text-xl md:text-2xl font-bold">Best Seller</p>
          {/* Wrapper div for responsive layout */}
          <div className="py-3">
            {/* Mobile (horizontal scroll) */}
            <div className="flex gap-4 overflow-x-auto sm:hidden px-2">
              {productsToShow.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[25%] flex-shrink-0 border border-gray-200 rounded-lg shadow-sm p-4 text-center relative transform transition-transform duration-300 hover:scale-105"
                >
                  {/* Discount Label */}
                  <div className="absolute font-bold top-0 left-0 w-32 bg-green-800 text-white text-sm rounded-br-xl px-2 py-1">
                    {product.discount}% off
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-contain mx-auto mb-2"
                  />
                  <h2 className="font-semibold text-base text-left truncate">
                    {product.name}
                  </h2>
                  <div className="text-black flex space-x-3 justify-start items-center font-bold text-sm">
                    <span>₹{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-600">{product.pieces}</p>
                    <button
                      onClick={() => {
                        addToCart(product);
                        toast.success(`${product.name}, added to cart`);
                      }}
                      className="bg-green-100 cursor-pointer flex justify-center items-center text-green-600 rounded-full px-8 text-2xl font-bold hover:bg-green-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop (grid layout) */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 cursor-pointer">
              {productsToShow.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg shadow-sm p-4 text-center relative transform transition-transform duration-300 hover:scale-105"
                >
                  {/* Discount Label */}
                  <div className="absolute font-bold top-0 left-0 w-32 bg-green-800 text-white text-sm rounded-br-xl md:rounded-tr-xl px-2 py-1">
                    {product.discount}% off
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-contain mx-auto mb-2"
                  />
                  <h2 className="font-semibold text-base text-left truncate">
                    {product.name}
                  </h2>
                  <div className="text-black flex space-x-3 justify-start items-center font-bold text-sm">
                    <span>₹{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-600">{product.pieces}</p>
                    <button
                      onClick={() => {
                        addToCart(product);
                        toast.success(`${product.name}, added to cart`);
                      }}
                      className="bg-green-100 flex justify-center items-center text-green-600 rounded-full px-8 text-2xl font-bold hover:bg-green-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BestSeller;
