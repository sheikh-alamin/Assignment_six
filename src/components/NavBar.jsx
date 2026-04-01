import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="flex justify-between items-center py-2 max-w-11/12 mx-auto">
        <div className="logo">
          <span className="skeleton skeleton-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-[40px]">DigiTools</span>
        </div>
        <div className="menubar">
          <ul className="flex gap-4 cursor-pointer">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="functions flex items-center gap-4 cursor-pointer">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Login</p>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
