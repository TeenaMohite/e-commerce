import React from "react";
import { useNavigate } from "react-router-dom";

function KidsPage() {
  const navigate = useNavigate();

  const category = {
    title: "Kids Toys",
    link: "/category/kids-toys",
    items: [
      { name: "Soft Toys", image: "/images/soft-toys.jpg", offer: "Up to 50% Off" },
      { name: "Remote Cars", image: "/images/remote-cars.jpg", offer: "Limited Stock" },
      { name: "Dolls", image: "/images/dolls.jpg", offer: "Special Discount" },
      { name: "Building Blocks", image: "/images/blocks.jpg", offer: "Best Seller" },
      { name: "Puzzle Games", image: "/images/puzzles.jpg", offer: "Brain Boosters" },
      { name: "Action Figures", image: "/images/action-figures.jpg", offer: "Trending Now" },
      { name: "Board Games", image: "/images/board-games.jpg", offer: "Exclusive Deals" },
      { name: "Musical Toys", image: "/images/musical-toys.jpg", offer: "Hot Sale" },
      { name: "Educational Toys", image: "/images/educational-toys.jpg", offer: "Learn & Play" },
      { name: "Outdoor Toys", image: "/images/outdoor-toys.jpg", offer: "Adventure Fun" },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <div className="p-6 border rounded-lg shadow-lg bg-yellow-100">
        <div className="flex items-center justify-between mb-4">
          <h2 
            className="text-2xl md:text-3xl font-bold text-yellow-600 cursor-pointer hover:underline" 
            onClick={() => navigate(category.link)}
          >
            {category.title}
          </h2>
          <button 
            className="w-14 h-14 text-white bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-700 
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

export default KidsPage;
