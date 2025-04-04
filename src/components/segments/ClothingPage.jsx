import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";  // Import Link

function ClothingPage() {
  const navigate = useNavigate();

  const category = {
    title: "Clothing",
    link: "/category/clothing",
    items: [
      { name: "Men", image: "/images/men.jpg", offer: "Min. 40% Off" },
      { name: "Women", image: "/images/women.jpg", offer: "Exclusive Deals" },
      { name: "Kids", image: "/images/kids.jpg", offer: "Best Price" },
      { name: "T-Shirts", image: "/images/tshirts.jpg", offer: "Special Discount" },
      { name: "Jeans", image: "/images/jeans.jpg", offer: "Limited Offer" },
      { name: "Dresses", image: "/images/dresses.jpg", offer: "Trending Now" },
      { name: "Shoes", image: "/images/shoes.jpg", offer: "Best Deals" },
      { name: "Jackets", image: "/images/jackets.jpg", offer: "Hot Sale" },
      { name: "Sweaters", image: "/images/sweaters.jpg", offer: "Min. 50% Off" },
      { name: "Accessories", image: "/images/accessories.jpg", offer: "Buy 1 Get 1" },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <div className="p-6 border rounded-lg shadow-lg bg-blue-100">
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate(category.link)}
          >
            {category.title}
          </h2>
        </div>

        {/* ✅ Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {category.items.map((item, index) => (
            <Link
              key={index}
              to={`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`} // Navigate to product details
            >
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-red-600 font-semibold">{item.offer}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClothingPage;
