import { useState } from "react";
import { Link } from "react-router-dom";

export default function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const categories = [
    { name: "Clothing", link: "/category/clothing", subcategories: ["Men", "Women", "Kids"] },
    { name: "Home Decor", link: "/category/home-decor", subcategories: ["Furniture", "Wall Art", "Lighting"] },
    { name: "Beauty Products", link: "/category/beauty", subcategories: ["Skincare", "Makeup", "Haircare"] },
    { name: "Laundry", link: "/category/laundry", subcategories: ["Detergents", "Fabric Softeners", "Stain Removers"] },
    { name: "Electronics", link: "/category/electronics", subcategories: ["Chargers", "Headphones", "Power Banks"] },
    { name: "Veges", link: "/category/organic", subcategories: ["Tomatoes", "Carrots", "Spinach"] },
    { name: "Plumbing", link: "/category/plumbing", subcategories: ["Pipes", "Faucets", "Plungers"] },
  ];
  
  return (
    <nav className="bg-yellow-100 shadow-md p-4 md:p-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg md:text-2xl font-extrabold text-black">
          {categories.map((category, index) => (
            <li key={index} className="relative group">
              <Link to={category.link} className="hover:text-purple transition-all block px-3 py-2">
                {category.name}
              </Link>
              <div className="absolute left-0 mt-2 w-48 md:w-56 bg-[#181717] border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <ul className="p-2 md:p-3">
                  {category.subcategories.map((sub, subIndex) => (
                    <li key={subIndex} className="px-3 py-2 text-black font-semibold hover:bg-[#FBFDFF] cursor-pointer text-sm md:text-base">
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
