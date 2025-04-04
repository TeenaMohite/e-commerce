import React from "react";
import { useNavigate } from "react-router-dom";

function LaundryPage() {
  const navigate = useNavigate();
  const category = {
    title: "Laundry Essentials",
    link: "/category/laundry",
    items: [
      { name: "Detergents", image: "/images/detergent.jpg", offer: "Up to 40% Off" },
      { name: "Fabric Softeners", image: "/images/softener.jpg", offer: "Min. 30% Off" },
      { name: "Laundry Bags", image: "/images/laundrybag.jpg", offer: "Best Sellers" },
      { name: "Drying Racks", image: "/images/dryingrack.jpg", offer: "Special Offer" },
      { name: "Ironing Boards", image: "/images/ironingboard.jpg", offer: "Buy 1 Get 1" },
      { name: "Stain Removers", image: "/images/stainremover.jpg", offer: "50% Off" },
      { name: "Washing Machine Cleaner", image: "/images/washcleaner.jpg", offer: "Best Price" },
      { name: "Clothesline", image: "/images/clothesline.jpg", offer: "Hot Deal" },
      { name: "Lint Remover", image: "/images/lintremover.jpg", offer: "Limited Time Offer" },
      { name: "Laundry Baskets", image: "/images/laundrybasket.jpg", offer: "Top Rated" },
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
            onClick={() => navigate(category.link)} // ✅ Fixed navigation
          >
            {category.title}
          </h2>

          {/* Click on arrow button to navigate */}
          <button 
            className="w-14 h-14 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 
                       hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl"
            onClick={() => navigate(category.link)} // ✅ Fixed navigation
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

export default LaundryPage;
