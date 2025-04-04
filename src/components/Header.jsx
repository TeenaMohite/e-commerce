import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Na from "./Na";
import Offer2 from "./Offer2";
import SlideShow from "./SlideShow";
import PromoBanner from "./Promo";
import AutomaticPopUp from "./AutomaticPopUp";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "👗 Fashion & Beauty",
    items: [
      { 
        id: 1, 
        name: "Clothing", 
        description: "Trendy and stylish clothing", 
        link: "/category/clothing",
        products: [
          { name: "Men's Wear", image: "/images/men.jpg" },
          { name: "Women's Wear", image:"/images/women.jpg" },
          { name: "Kids' Wear", image: "/images/kids.jpg" },
          { name: "Accessories", image: "/images/accessories.jpg" },
        ] 
      },
      { 
        id: 2, 
        name: "Beauty Products", 
        description: "Skincare, makeup & more", 
        link: "/category/beauty",
        products: [
          { name: "Skincare", image: "/images/skincare.jpg" },
          { name: "Makeup", image: "/images/makeup.jpg" },
          { name: "Haircare", image: "/images/haircare.jpg" },
          { name: "Fragrances", image: "/images/perfumes.jpg" },
        ]
      },
    ]
  },
  {
    title: "🏡 Home & Lifestyle",
    items: [
      { 
        id: 3, 
        name: "Home Decor", 
        description: "Elegant home decor essentials", 
        link: "/category/home-decor",
        products: [
          { name: "Wall Art", image: "/images/wallart.jpg" },
          { name: "Lighting", image: "/images/lighting.jpg" },
          { name: "Furniture", image: "/images/furniture.jpg" },
          { name: "Vases", image: "/images/vases.jpg" },
        ]
      },
      { 
        id: 4, 
        name: "Laundry", 
        description: "Professional laundry services", 
        link: "/category/laundry",
        products: [
          { name: "Detergent", image: "/images/detergent.jpg" },
          { name: "Fabric Softener", image: "/images/softener.jpg" },
          { name: "Laundry Basket", image: "/images/laundrybasket.jpg" },
          { name: "Stain Remover", image: "/images/stainremover.jpg" },
        ] 
      },
      { 
        id: 5, 
        name: "Organic Products",  
        description: "Fresh organic produce and more", 
        link: "/category/organic",
        products: [
          { name: "Tomatoes", image: "/images/tomatoes.jpg" },
          { name: "Carrots", image: "/images/carrots.jpg" },
          { name: "Spinach", image: "/images/spinach.jpg" },
          { name: "Garlic", image: "/images/garlic.jpg" },
        ]
      },
      { 
        "id": 6, 
        "name": "Kids Toys",  
        "description": "Fun and engaging toys for kids", 
        "link": "/category/kids-toys",
        "products": [
          { "name": "Soft Toys", "image": "/images/soft-toys.jpg" },
          { "name": "Remote Cars", "image": "/images/remote-cars.jpg" },
          { "name": "Dolls", "image": "/images/dolls.jpg" },
          { "name": "Building Blocks", "image": "/images/blocks.jpg" },
          ]
      }
    ]
  },
  {
    title: "📱 Electronics & Essentials",
    items: [
      { 
        id: 7, 
        name: "Electronics", 
        description: "Latest gadgets & accessories", 
        link: "/category/electronics",
        products: [
          { name: "Smartphones", image: "/images/smartphone.jpg" },
          { name: "Laptops", image: "/images/laptop.jpg" },
          { name: "Headphones", image: "/images/headphones.jpg" },
          { name: "Smart Watches", image: "/images/smartwatch.jpg" },
        ]
      },
      { 
        id: 8, 
        name: "Plumbing", 
        description: "Expert plumbing solutions", 
        link: "/category/plumbing",
        products: [
          { name: "Water Pipes", image: "/images/pipes.jpg" },
          { name: "Faucets", image: "/images/faucet.jpg" },
          { name: " Wrench", image: "/images/wrench.jpg" },
          { name: "Drain Cleaners", image:"/images/draincleaner.jpg" },
        ]
      },
    ]
  }
];

const FacilitiesSection = ({ title, items = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-blue-100">
    <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">{title}</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 px-8 md:px-16">
      {(items || []).map((facility) => (
        <div
          key={facility.id}
          className="p-6 rounded-2xl shadow-xl text-center cursor-pointer hover:shadow-2xl 
                    transition-transform transform hover:scale-105 border border-gray-300 bg-white"
          onClick={() => navigate(facility.link)}
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-3">{facility.name}</h3>
          <p className="text-gray-600 mb-5">{facility.description}</p>

          {/* Responsive Grid for Products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {(facility.products || []).map((product, index) => (
              <div key={index} className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto max-h-40 sm:max-h-44 md:max-h-48 lg:max-h-56 object-cover rounded-lg shadow-lg border border-gray-300 
                            transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-sm font-medium text-gray-700 mt-2">{product.name}</p>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-500 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};



const ContactUs = () => {
  return (
    <div className="py-10 text-center bg-gray-300 contact-section">
      <h1 className="text-5xl font-bold text-slate-700">Contact Us</h1>
      <form className="p-10 mx-auto bg-white rounded-lg shadow-lg max-w-fit">
        <input type="text" name="name" placeholder="Your name" className="w-full p-3 mb-3 border rounded text-black" required />
        <input type="email" name="email" placeholder="Your email" className="w-full p-3 mb-3 border rounded" required />
        <input type="text" name="phone" placeholder="Your phone" className="w-full p-3 mb-3 border rounded" />
        <textarea name="message" placeholder="Your message" className="w-full h-32 p-3 mb-3 border rounded" required></textarea>
        <button type="submit" className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
};

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && <AutomaticPopUp imageUrl="/images/Sale.png" onClose={() => setShowPopup(false)} />}
      <Na />
      <SlideShow />

      {/* Promotional Banner at the Top */}
      <div className="p-6 bg-yellow-100 text-center text-xl font-semibold rounded-lg shadow-md">
        🎉 **Big Sale: Up to 50% OFF on Selected Categories!** 🎉
      </div>

      {/* Fashion & Beauty Section */}
      <FacilitiesSection title={categories[0].title} items={categories[0].items} />

      {/* Home & Lifestyle Section */}
      <FacilitiesSection title={categories[1].title} items={categories[1].items} />

      <Offer2 />
      {/* Electronics */}
      <FacilitiesSection title={categories[2].title} items={categories[2].items} />
     
      <PromoBanner />
      <ContactUs />
    </>
  );
}

export default Header;
