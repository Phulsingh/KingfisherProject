import React from "react";
import FooterMobil from "../Footer/FooterMobil";
import Navbar from "../Home/Navbar";
import ExploreCategory from "../Home/ExploreCategory";

const Categories = () => {
  return (
    <>
      <Navbar />
      <div className="mb-20">
        <ExploreCategory />
      </div>
      <FooterMobil />
    </>
  );
};

export default Categories;
