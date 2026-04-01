import React from "react";

const Steps = () => {
  return (
    <div className="py-20">
      <div className="max-w-11/12 mx-auto">
        <div className="text-center">
          <h1 className="text-[48px] font-bold">Get Started in 3 Steps</h1>
          <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="space-y-2 text-center border border-gray-300 shadow-md mt-10 rounded-2xl p-10 relative">
                <div class="absolute top-4 right-4 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">01</div>
                <img className="bg-gray-200 p-5 mx-auto rounded-full" src="../../assets/user.png" alt="" />
                <h5 className="text-[24px] font-bold">Create Account</h5>
                <p>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className="space-y-2 text-center border border-gray-300 shadow-md mt-10 rounded-2xl p-10 relative">
                <div class="absolute top-4 right-4 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">02</div>
                <img className="bg-gray-200 p-5 mx-auto rounded-full" src="../../assets/package.png" alt="" />
                <h5 className="text-[24px] font-bold">Choose Products</h5>
                <p>Browse our catalog and select the tools that fit your needs.</p>
            </div>
            <div className="space-y-2 text-center border border-gray-300 shadow-md mt-10 rounded-2xl p-10 relative">
                <div class="absolute top-4 right-4 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">03</div>
                <img className="bg-gray-200 p-5 mx-auto rounded-full" src="../../assets/rocket.png" alt="" />
                <h5 className="text-[24px] font-bold">Start Creating</h5>
                <p>Download and start using your premium tools immediately.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
