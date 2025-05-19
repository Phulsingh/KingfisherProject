import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../API/Api.js"
import MyContaxt from "../Contaxt/MyContaxt.jsx";
import { useContext } from "react";

const DryFruitsOilMasala = () => {
  const {filteredProducts, searchText} = useContext(MyContaxt)

  const [oilProducts, setOilProdcuts] = useState([]);


  useEffect(()=>{
    const fetchProducts = async ()=>{
      try{
        const res = await API.get("/products");
        const subProduct = res.data;
        setOilProdcuts(subProduct.filter(sub => sub.category === "Oil-Masala"));
      }catch(error){
        console.log(error);
        toast.error("Product not found")
      }
    }
    fetchProducts();
  },[oilProducts.length]) // ✅ empty array, no infinite loop
  
  const productsToShow = searchText.trim() !== "" ? filteredProducts :oilProducts;

  // const products = [
  //   {
  //     id: 1,
  //     name: "Dry Fruits and nuts",
  //     image:
  //       "https://res.cloudinary.com/dexterous-technology/image/upload/v1726213001/hhjpw7ouxftdtno6j9pe_zimxe0_qxv28n.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Pickles and Chutney",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724940093/Subategory/DesktopImage/sycrdjagqvekcjyl6x6y.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Flavoured Nutss",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1725607495/Subategory/DesktopImage/ab3bajswn5yimnniksg2.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Dates & Seeds",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1725607830/Subategory/DesktopImage/ltifbuafne8hwzdbgzql.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Organic and Healthy",
  //     image:
  //       "https://res.cloudinary.com/dpplqvnx6/image/upload/v1725608206/Subategory/DesktopImage/xhexvtc0ug8vhpzm8jti.jpg",
  //   },
  // ];

  
  return (
    <>
      {productsToShow .length > 0 && (
        <div className="w-full h-full px-1 mb-13  md:px-10 mt-6   md:mt-15">
          <p className="text-xl ml-2 md:text-2xl font-bold">
            Dry Fruits, Oil and Masala
          </p>
          {/* Wrapper div for responsive layout */}
          <div className="py-3">
            {/* Mobile (horizontal scroll) */}
            <div className="gap-2  p-2 md:p-0 grid grid-cols-3  overflow-x-auto sm:hidden px-2">
              {productsToShow .map((product) => (
                <div
                key={product.id}
                className="group border  w-full items-center  font-semibold hover:font-bold border-gray-200 hover:text-green-400 bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm text-center relative transform transition-transform duration-300 hover:scale-105 overflow-hidden"
              >
                <h2 className="text-xs   py-2  text-center truncate">{product.name}</h2>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full p-1 md:mt-3 h-32 py-1 object-contain mx-auto mb-2"
                />
              </div>
              ))}
            </div>

            {/* Desktop (grid layout) */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 cursor-pointer">
              {productsToShow.map((product) => (
                <div
                key={product.id}
                className="group border w-full items-center flex justify-center flex-col font-semibold hover:font-bold border-gray-200 hover:text-green-400 bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm p-4 text-center relative transform transition-transform duration-300 hover:scale-105 overflow-hidden"
              >
                <h2 className="text-base text-center truncate">{product.name}</h2>
              
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full md:mt-3 h-32 py-1 object-contain mx-auto mb-2"
                />
              
                {/* Sliding button */}
                <div
                  className="absolute  bottom-[-3rem] group-hover:bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 w-[60%] bg-green-600 rounded-sm flex justify-center items-center p-2"
                >
                  <button className="text-sm cursor-pointer text-white font-bold">Shop Now</button>
                  <MdOutlineKeyboardArrowRight className="text-white" size={24} />
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

export default DryFruitsOilMasala;
