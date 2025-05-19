import React, { useEffect, useState } from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../API/Api.js"


const OrganicVeg = () => {
  const { addToCart, filteredProducts, searchText  } = useContext(MyContaxt);
  const [vegetables , setVegtables] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await API.get("/products");
        const vegtables = res.data;
        setVegtables(vegtables.filter(veg => veg.category === "Vegetable"));
      }catch(error){
        toast.error(" Vegetables not not found", error);
      }
    }

    fetchData();
  },[])

  const productsToShow = searchText.trim() !== "" ? filteredProducts : vegetables;

  // const products = [
  //   {
  //     id: 4,
  //     name: "Red Capsicum Organics",
  //     price: 54,
  //     originalPrice: 100,
  //     pieces: "200 gm",
  //     quantity:1,
  //     discount: "28%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855027/Grocery/DesktopImage/nfvgpvyeatfeuj22j4j6.webp",
  //   },
  //   {
  //     id: 5,
  //     name: "Fresh Machroom Organic",
  //     price: 48,
  //     originalPrice: 50,
  //     pieces: "200 gm",
  //     quantity:1,
  //     discount: "40%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855004/Grocery/DesktopImage/vowcdrtxwx02eg5syg7m.webp",
  //   },
  //   {
  //     id: 6,
  //     name: "ORGANIC Letter-green salad",
  //     price: 60,
  //     originalPrice: 90,
  //     pieces: "200 gm",
  //     quantity:1,
  //     discount: "42%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855054/Grocery/DesktopImage/eewcjrwxsickzt7p81ab.webp ",
  //   },
  //   {
  //     id: 7,
  //     name: "Lemon Basin Organic",
  //     price: 18,
  //     originalPrice: 90,
  //     pieces: "1 pc",
  //     quantity:1,
  //     discount: "33%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855109/Grocery/DesktopImage/gpjvbtcnxcr4rseka1wa.webp",
  //   },
  //   {
  //     id: 8,
  //     name: "Red lettuce [Lollo Rosso]",
  //     price: 99,
  //     originalPrice: 180,
  //     pieces: "1 pc",
  //     quantity:1,
  //     discount: "45%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855070/Grocery/DesktopImage/voywwg9z31pp5idrymnl.webp",
  //   },
  //   {
  //     id: 9,
  //     name: "Brocolic Organic",
  //     price: 61,
  //     originalPrice: 100,
  //     pieces: "200 gm",
  //     quantity:1,
  //     discount: "33%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855041/Grocery/DesktopImage/tat66vjjipzskarrhk2f.webp",
  //   },
  // ];

  return (
    <>
      {productsToShow.length > 0 && (
        <div className="w-full h-full px-3 md:px-10 mt-3 md:mt-5">
          <p className="text-xl md:text-2xl font-bold">Organic Vegetable</p>
          {/* Wrapper div for responsive layout */}
          <div className="py-3">
            {/* Mobile (horizontal scroll) */}
            <div className="flex gap-4 overflow-x-auto sm:hidden px-2">
              {productsToShow.map((product, id) => (
                <div
                  key={id}
                  className="min-w-[25%] flex-shrink-0 border border-gray-200 rounded-lg shadow-sm p-4 text-center relative transform transition-transform duration-300 hover:scale-105"
                >
                  {/* Discount Label */}
                  <div className="absolute top-0 left-0 w-32 bg-green-800 text-white text-sm rounded-br-xl px-2 py-1">
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
                      }}
                      className="bg-green-100 flex justify-center items-center text-green-600 rounded-full px-8 text-2xl font-bold hover:bg-green-200"
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

export default OrganicVeg;
