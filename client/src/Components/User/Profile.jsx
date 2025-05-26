import React from "react";
import Navbar from "../Home/Navbar";
import ScrollingText from "../Home/ScrollingText";

const Profile = () => {
  return (
    <>
      <div className="hidden md:flex flex-col">
        <ScrollingText />
        <Navbar />
      </div>
    </>
  );
};

export default Profile;
