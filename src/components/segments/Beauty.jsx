import React from "react";
import { useNavigate } from "react-router-dom";

function BeautyPage() {
  const navigate = useNavigate();

  const category = {
    title: "Beauty Products",
    link: "/category/beauty",
    items: [
      { name: "Skincare", image: "/images/skincare.jpg", offer: "Up to 40% Off" },
      { name: "Makeup", image: "/images/makeup.jpg", offer: "Buy 1 Get 1" },
      { name: "Haircare", image: "/images/haircare.jpg", offer: "Min. 30% Off" },
      { name: "Perfumes", image: "/images/perfumes.jpg", offer: "Exclusive Deals" },
      { name: "Face Wash", image: "/images/facewash.jpg", offer: "Limited Offer" },
      { name: "Lipsticks", image: "/images/lipsticks.jpg", offer: "Special Price" },
      { name: "Nail Polish", image: "/images/nail.jpg", offer: "Trending Now" },
      { name: "Body Lotion", image: "/images/bodylotion.jpg", offer: "Best Deals" },
      { name: "Hair Oil", image: "/images/hairoil.jpg", offer: "Hot Sale" },
      { name: "Foundation", image: "/images/foundation.jpg", offer: "Best Price" },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <div className="p-6 border rounded-lg shadow-lg bg-pink-100">
        <div className="flex items-center justify-between mb-4">
          <h2 
            className="text-2xl md:text-3xl font-bold text-pink-600 cursor-pointer hover:underline" 
            onClick={() => navigate(category.link)}
          >
            {category.title}
          </h2>
          <button 
            className="w-14 h-14 text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-700 
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

export default BeautyPage;
