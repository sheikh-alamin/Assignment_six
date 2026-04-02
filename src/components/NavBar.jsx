import React from "react";
// import { useState } from 'react'
const Navbar = () => {
// const [baskets, setBaskets] = useState ([]);
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="flex justify-between items-center py-2 max-w-11/12 mx-auto">
        <div className="logo">
          <span className="skeleton skeleton-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-[40px]">DigiTools</span>
        </div>
        <div className="md:hidden">
          <button className="text-2xl">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="menubar hidden md:flex">
          <ul className="flex gap-4 cursor-pointer">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="functions flex items-center gap-4 cursor-pointer">
          <i className="fa-solid fa-cart-shopping relative"></i>
          <p>Login</p>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
