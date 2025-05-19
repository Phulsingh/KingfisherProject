import React, { useEffect, useState } from "react";
import API from "../../API/Api.js"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyContaxt from "../Contaxt/MyContaxt.jsx";
import { useContext } from "react";
const ExploreCategory = () => {
  const {filteredProducts, searchText} = useContext(MyContaxt)
  const [ExploreData , setExploreData] = useState([]);


  useEffect(()=>{
    const fetchData = async()=>{
       try{
        const res = await API.get("/products");
        const data = res.data;
        setExploreData(data.filter(d => d.category === "Explor-category"))

       }catch(error){
        console.log(error);
        toast.error("Explore Cateogry not found");
       }
    }

    fetchData()
  },[ExploreData.length])

  const productsToShow = searchText.trim() !== "" ? filteredProducts : ExploreData;


  // const categories = [
  //   {
  //     label: "Fresh vegetables",
  //     img: "https://res.cloudinary.com/dexterous-technology/image/upload/v1725001165/download_14_hiimwg.jpg",
  //   },
  //   {
  //     label: "Pharma and hygiene",
  //     img: "https://res.cloudinary.com/dexterous-technology/image/upload/v1726646607/e0f2pz2vo13nkv2ceznl_n6je9k.webp",
  //   },
  //   {
  //     label: "Baby care",
  //     img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724843364/Category/DesktopImage/slh0gu0dndzrxcft2msz.jpg",
  //   },
  //   {
  //     label: "Fresh fruits",
  //     img: "https://res.cloudinary.com/dexterous-technology/image/upload/v1725001175/download_15_e1m5qv.jpg",
  //   },
  //   {
  //     label: "Dry fruits, oils and masalas",
  //     img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724840519/Category/DesktopImage/sfdfxmx17dsyqw8rcbex.jpg",
  //   },
  //   {
  //     label: "Bakery",
  //     img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724843579/Category/DesktopImage/qt8l2dkiapqfjtnndis0.jpg",
  //   },
  //   {
  //     label: "Dairy and bread",
  //     img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724840843/Category/DesktopImage/qxj2tujhygcm8xxkrkm4.jpg",
  //   },
  //   {
  //     label: "Mutton",
  //     img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724840365/Category/DesktopImage/xouwezmog68gcbancqyv.jpg",
  //   },
  //   {
  //     label: "Instant food",
  //     img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724841078/Category/DesktopImage/gttvwwosjiwrrkypaejg.jpg",
  //   },
  //   {
  //     label: "Eggs",
  //     img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724840620/Category/DesktopImage/ygo6callwjeehferviik.webp",
  //   },
  //   {
  //     label: "Chocolates & desserts",
  //     img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724841483/Category/DesktopImage/nbgcnlfghtzmpdwxekyg.jpg",
  //   },
  //   {
  //     label: "Ready to cook",
  //     img: "https://res.cloudinary.com/daoms6kea/image/upload/v1685441584/Category/DesktopImage/fftbb81p5tqsjpk6p7rf.png",
  //   },
  //   {
  //     label: "Cold cuts",
  //     img: "https://res.cloudinary.com/daoms6kea/image/upload/v1685441697/Category/DesktopImage/ugjebkyb8ubwuuoi37sx.png",
  //   },
  //   {
  //     label: "Spreads",
  //     img: "https://res.cloudinary.com/daoms6kea/image/upload/v1685441666/Category/DesktopImage/rflrpzmccpfkc8k0rkc9.png",
  //   },
  //   {
  //     label: "Prawns",
  //     img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724840463/Category/DesktopImage/kjxrgqxx5tcuysf8abwd.webp",
  //   },
  // ];

  return (
    <>
      {productsToShow.length > 0 && (
        <div className="w-full h-full px-3 md:px-10 mt-3 md:mt-5">
          <p className="text-xl md:text-2xl font-bold">Explore Categories</p>
          <div className="grid grid-cols-4 mt-2 sm:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-5">
            {productsToShow.map((cat, index) => (
              <div
                key={index}
                className="bg-blue-100 shadow-md cursor-pointer rounded-lg p-1 flex flex-col items-center justify-start hover:shadow-lg transition duration-300 transform hover:scale-105"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="md:w-[100%] mix-blend-multiply md:h-24 object-contain"
                />
                <p className="md:text-sm text-xs font-semibold text-center">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreCategory;
