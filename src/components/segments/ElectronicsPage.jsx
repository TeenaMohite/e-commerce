import React from "react";
import { useNavigate } from "react-router-dom";

function ElectronicsPage() {
  const navigate = useNavigate();

  const category = {
    title: "Latest Electronics",
    link: "/category/electronics",
    items: [
      { name: "Smartphone", image: "/images/smartphone.jpg", offer: "Min. 20% Off" },
      { name: "Laptop", image: "/images/laptop.jpg", offer: "Special Price" },
      { name: "Headphones", image: "/images/headphones.jpg", offer: "Up to 60% Off" },
      { name: "Smart Watch", image: "/images/smartwatch.jpg", offer: "Best Deals" },
      { name: "Tablet", image: "/images/tablet.jpg", offer: "Limited Offer" },
      { name: "Bluetooth Speaker", image: "/images/speaker.jpg", offer: "Buy 1 Get 1" },
      { name: "Monitor", image: "/images/monitor.jpg", offer: "Best Price" },
      { name: "Gaming Console", image: "/images/console.jpg", offer: "Exclusive Deals" },
      { name: "Power Bank", image: "/images/powerbank.jpg", offer: "Hot Sale" },
      { name: "Wireless Mouse", image: "/images/mouse.jpg", offer: "Min. 30% Off" },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      {/* Category Card */}
      <div className="p-6 border rounded-lg shadow-lg bg-yellow-100">
        <div className="flex items-center justify-between mb-4">
          {/* Click on title to navigate */}
          <h2 
            className="text-2xl md:text-3xl font-bold text-blue-600 cursor-pointer hover:underline" 
            onClick={() => navigate(category.link)}
          >
            {category.title}
          </h2>

          {/* Click on arrow button to navigate */}
          <button 
            className="w-14 h-14 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 
                       hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl"
            onClick={() => navigate(category.link)}
          >
            ➝
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {category.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition"
              onClick={() => navigate(`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`)}
            >
              <div className="w-full h-44 md:h-52 overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="mt-3 text-lg font-medium">{item.name}</p>
              <p className="text-gray-500">{item.offer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElectronicsPage;
