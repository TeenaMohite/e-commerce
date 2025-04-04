import React from "react";
import { useNavigate } from "react-router-dom";

function HomeDecorPage() {
  const navigate = useNavigate();

  const category = {
    title: "Home Decor",
    link: "/category/home-decor",
    items: [
      { name: "Furniture", image: "/images/furniture.jpg", offer: "Up to 50% Off" },
      { name: "Wall Art", image: "/images/wallart.jpg", offer: "Buy 1 Get 1" },
      { name: "Lighting", image: "/images/lighting.jpg", offer: "Min. 20% Off" },
      { name: "Curtains", image: "/images/curtains.jpg", offer: "Best Deals" },
      { name: "Carpets", image: "/images/carpets.jpg", offer: "Exclusive Offers" },
      { name: "Cushions", image: "/images/cushions.jpg", offer: "Limited Offer" },
      { name: "Lamps", image: "/images/lamps.jpg", offer: "Trending Now" },
      { name: "Mirrors", image: "/images/mirrors.jpg", offer: "Hot Sale" },
      { name: "Shelves", image: "/images/shelves.jpg", offer: "Special Price" },
      { name: "Vases", image: "/images/vases.jpg", offer: "Best Price" },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <div className="p-6 border rounded-lg shadow-lg bg-green-100">
        <div className="flex items-center justify-between mb-4">
          <h2 
            className="text-2xl md:text-3xl font-bold text-green-600 cursor-pointer hover:underline" 
            onClick={() => navigate(category.link)}
          >
            {category.title}
          </h2>
          <button 
            className="w-14 h-14 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-700 
                       hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl"
            onClick={() => navigate(category.link)}
          >
            ➝
          </button>
        </div>
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

export default HomeDecorPage;
