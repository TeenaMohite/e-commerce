import React from "react";
import { useNavigate } from "react-router-dom";

function OrganicPage() {
  const navigate = useNavigate();

  const category = {
    title: "Organic Veggies & Spices",
    link: "/category/organic",
    items: [
      { name: "Fresh Carrots", image: "/images/carrots.jpg", offer: "Organic & Fresh" },
      { name: "Green Peppers", image: "/images/peppers.jpg", offer: "Limited Stock" },
      { name: "Ginger", image: "/images/ginger.jpg", offer: "Best Seller" },
      { name: "Turmeric Powder", image: "/images/turmeric.jpg", offer: "Min. 20% Off" },
      { name: "Garlic", image: "/images/garlic.jpg", offer: "Freshly Picked" },
      { name: "Coriander Powder", image: "/images/coriander.jpg", offer: "Hot Deal" },
      { name: "Chili Powder", image: "/images/chili.jpg", offer: "Limited Offer" },
      { name: "Organic Tomatoes", image: "/images/tomatoes.jpg", offer: "Top Quality" },
      { name: "Organic Spinach", image: "/images/spinach.jpg", offer: "Healthy Choice" },
      { name: "Cinnamon Sticks", image: "/images/cinnamon.jpg", offer: "Pure & Natural" },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      {/* Category Card */}
      <div className="p-6 border rounded-lg shadow-lg bg-yellow-100">
        <div className="flex items-center justify-between mb-4">
          {/* Click on title to navigate */}
          <h2 
            className="text-2xl md:text-3xl font-bold text-green-700 cursor-pointer hover:underline" 
            onClick={() => navigate(category.link)}
          >
            {category.title}
          </h2>

          {/* Click on arrow button to navigate */}
          <button 
            className="w-14 h-14 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-700 
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

export default OrganicPage;
