import React from "react";

const PromoBanner = () => {
  return (
    <div className="flex items-center justify-center px-6 py-20">
  {/* Container */}
  <div className="flex flex-col items-center justify-center w-full max-w-screen-lg p-6 bg-gray-100 rounded-lg shadow-md md:flex-row py-28">
    
    {/* Left Section */}
    <div className="flex-1 text-center md:text-left ">
    <h2 className="text-5xl font-bold text-gray-900">
            Lowest Prices <br />
            <span className="text-purple-600">Best Quality Shopping</span>
          </h2>
      {/* Grid Container */}
      <div className="max-w-2xl p-6 mx-auto text-center bg-gray-200 border border-gray-400 rounded-lg shadow-md ">
        <div className="grid grid-cols-1 divide-y divide-gray-400 md:grid-cols-3 md:divide-y-0 md:divide-x">
          <div className="flex items-center p-4 space-x-2 text-center">
            <span className="text-5xl">🚚</span>
            <p className="font-serif text-2xl text-slate-950">Free Delivery</p>
          </div>
          <div className="flex items-center p-4 space-x-2 text-center">
            <span className="text-5xl">💰</span>
            <p className="font-serif text-2xl text-slate-950">Cash on Delivery</p>
          </div>
          <div className="flex items-center p-4 space-x-2 text-center">
            <span className="text-5xl">🔄</span>
            <p className="font-serif text-2xl text-slate-950">Easy Returns</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="px-8 py-4 mt-6 text-3xl text-white transition bg-purple-600 rounded-md shadow-lg hover:bg-purple-800">
        📱 Download the Fly App
      </button>
    </div>

    {/* Right Section - Offer Box */}
    <div className="relative flex flex-col items-center justify-center p-6 mt-6 space-x-4 text-white bg-purple-900 rounded-lg shadow-lg md:mt-0">
      <h3 className="text-3xl font-bold">Get up to <span className="text-blue-400">25% off*</span></h3>
      <p className="mt-1 text-2xl">on first order</p>

      {/* Offer Highlights */}
      <div className="flex mt-4 space-x-4">
        <div className="flex flex-col items-center">
          <img src="./images/Bag.png" alt="Bag" className="w-40 rounded-lg" />
          <span className="px-2 py-1 mt-2 text-2xl bg-red-600 rounded-full">₹220</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="./images/EarBurds.png" alt="Earbuds" className="w-40 rounded-lg" />
          <span className="px-2 py-1 mt-2 text-2xl bg-red-600 rounded-full">₹318</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="./images/sneakers.png" alt="Shoes" className="rounded-lg w-60" />
          <span className="px-2 py-1 mt-2 text-2xl bg-red-600 rounded-full">₹390</span>
        </div>
      </div>

      <p className="mt-4 text-left">*T&C apply</p>
    </div>
  </div>
</div>

  );
};

export default PromoBanner;



