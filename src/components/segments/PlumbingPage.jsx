import React from "react";
import { useNavigate } from "react-router-dom";

function PlumbingPage() {
  const navigate = useNavigate();

  const category = {
    title: "Plumbing Essentials",
    link: "/category/plumbing",
    items: [
      { name: "Water Pipes", image: "/images/pipes.jpg", offer: "Hot Sale" },
      { name: "Faucets", image: "/images/faucet.jpg", offer: "Up to 50% Off" },
      { name: "Shower Heads", image: "/images/showerhead.jpg", offer: "Best Price" },
      { name: "Toilet Seats", image: "/images/toilet.jpg", offer: "Limited Time Offer" },
      { name: "Drain Cleaners", image: "/images/draincleaner.jpg", offer: "Min. 40% Off" },
      { name: "Pipe Wrenches", image: "/images/wrench.jpg", offer: "Best Deals" },
      { name: "Plumbing Tape", image: "/images/plumbingtape.jpg", offer: "Top Rated" },
      { name: "Geysers", image: "/images/geyser.jpg", offer: "Exclusive Offer" },
      { name: "Sinks", image: "/images/sink.jpg", offer: "Flat 30% Off" },
      { name: "Bathroom Mirrors", image: "/images/mirror.jpg", offer: "Special Price" },
    ],
  };


  return (
    <div className="container mx-auto p-6">
      {/* Category Card */}
      <div className="p-6 border rounded-lg shadow-lg bg-yellow-100">
        <div className="flex items-center justify-between mb-4">
          {/* Clicking title navigates to full category (ALL PRODUCTS) */}
          <h2 
            className="text-2xl md:text-3xl font-bold text-purple-500 cursor-pointer hover:underline" 
            
          >
            Pulumbing Essentials
          </h2>
        </div>

        {/* Products Grid (all items) */}
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

export default PlumbingPage;
