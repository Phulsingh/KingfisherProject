import React, { useEffect, useState } from "react";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../API/Api.js";

const OragnicFruits = () => {
  const { addToCart , filteredProducts, searchText } = useContext(MyContaxt);
  const [Fruits, setFruits] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/products");
        const fruits = res.data;
        setFruits(fruits.filter((fruit) => fruit.category === "Fruit"));
      } catch (error) {
        console.log(error);
        toast.error("Fruits not found");
      }
    };
    fetchData();
  }, [Fruits.length]);

  const productsToShow = searchText.trim() !== "" ? filteredProducts: Fruits;

  // const products = [
  //   {
  //     id: 10,
  //     name: "Organic Banana dwrfa",
  //     price: 50,
  //     originalPrice: 60,
  //     pieces: "6 pc",
  //     quantity: 1,
  //     discount: "17%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858776/Grocery/DesktopImage/zq7n7q5musigt3xjhafd.webp",
  //   },
  //   {
  //     id: 11,
  //     name: "Organic Kiwi",
  //     price: 60,
  //     originalPrice: 90,
  //     pieces: "5 pc",
  //     quantity: 1,
  //     discount: "33%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858797/Grocery/DesktopImage/kfa1gavnlyiuhvsu7he4.webp",
  //   },
  //   {
  //     id: 12,
  //     name: "Organic Tender coconut",
  //     price: 52,
  //     originalPrice: 60,
  //     pieces: "500 gm",
  //     quantity: 1,
  //     discount: "33%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858720/Grocery/DesktopImage/i9qqfxvti2sw45rm15em.webp",
  //   },
  //   {
  //     id: 13,
  //     name: "Oragnic grapes green",
  //     price: 160,
  //     originalPrice: 210,
  //     pieces: "1 kg",
  //     quantity: 1,
  //     discount: "33%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858783/Grocery/DesktopImage/e8pgtpjfkpp3nuku5iom.webp",
  //   },
  //   {
  //     id: 14,
  //     name: "Organic Pomergrnate",
  //     price: 60,
  //     originalPrice: 90,
  //     pieces: "2 pc",
  //     quantity: 1,
  //     discount: "33%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858726/Grocery/DesktopImage/elll9pkc7vmikdmln33n.webp",
  //   },
  //   {
  //     id: 15,
  //     name: "Organic Apple",
  //     price: 300,
  //     originalPrice: 400,
  //     pieces: "1 kg",
  //     quantity: 1,
  //     discount: "0%",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858744/Grocery/DesktopImage/p3t9w5htyfvdtu86iwv8.webp",
  //   },
  // ];

  return (
    <>
      {productsToShow.length > 0 && (
        <div className="w-full h-full px-3 md:px-10 mt-3 md:mt-5">
          <p className="text-xl md:text-2xl font-bold">Oragnic Fruits</p>
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
                  <div className="absolute font-bold  top-0 left-0 w-32 bg-green-800 text-white text-sm rounded-br-xl px-2 py-1">
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

export default OragnicFruits;
