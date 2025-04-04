import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const offers = [
  { image: "/images/men.jpg", title: "Men's Wear", price: "From ₹499", route: "/category/clothing" },
  { image: "/images/women.jpg", title: "Women's Wear", price: "Min. 50% Off", route: "/category/clothing" },
  { image: "/images/kids.jpg", title: "Kids' Wear", price: "Under ₹399", route: "/category/clothing" },
  { image: "/images/accessories.jpg", title: "Fashion Accessories", price: "Up to 70% Off", route: "/category/clothing" },
  { image: "/images/skincare.jpg", title: "Skincare Essentials", price: "Starting at ₹199", route: "/category/beauty" },
  { image: "/images/makeup.jpg", title: "Makeup & Beauty", price: "Min. 40% Off", route: "/category/beauty" },
];

export default function TopOffersCarousel() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Scroll Functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div
      style={{ backgroundImage: `url(/images/FridaySale.jpg)` }}
      className="w-full bg-cover bg-center bg-no-repeat py-8 px-4"
    >
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">🔥 Top Offers</h2>

        {/* Scrollable Container with Buttons */}
        <div className="relative flex items-center">
          {/* Left Scroll Button */}
          <button
            className="absolute left-0 z-10 p-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-900 hidden sm:block"
            onClick={scrollLeft}
          >
            ❮
          </button>

          {/* Scrollable Items */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide px-2 md:px-0 py-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {offers.map((offer, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] p-3 text-center bg-white/90 border border-gray-200 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => navigate(offer.route)}
              >
                <div className="w-full h-32 sm:h-36 overflow-hidden rounded-md">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-sm sm:text-md font-medium text-gray-900">{offer.title}</p>
                <p className="text-xs sm:text-sm font-bold text-[#6A2EBE]">{offer.price}</p>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="absolute right-0 z-10 p-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-900 hidden sm:block"
            onClick={scrollRight}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
