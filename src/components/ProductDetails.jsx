import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Sample Product Data
const category = {
  products: [
  //  Electronics
  { name: "Smartphone", image: "/images/smartphone.jpg", price: "$499" },
  { name: "Laptop", image: "/images/laptop.jpg", price: "$899" },
  { name: "Headphones", image: "/images/headphones.jpg", price: "$99" },
  { name: "Smart Watch", image: "/images/smartwatch.jpg", price: "$199" },
  { name: "Tablet", image: "/images/tablet.jpg", price: "$299" },
  { name: "Bluetooth Speaker", image: "/images/speaker.jpg", price: "$49" },
  { name: "Monitor", image: "/images/monitor.jpg", price: "$399" },
  { name: "Gaming Console", image: "/images/console.jpg", price: "$499" },
  { name: "Power Bank", image: "/images/powerbank.jpg", price: "$29" },
  { name: "Wireless Mouse", image: "/images/mouse.jpg", price: "$19" },

  //  Laundry
  { name: "Detergents", image: "/images/detergent.jpg", price: "$15", offer: "Up to 40% Off" },
  { name: "Fabric Softeners", image: "/images/softener.jpg", price: "$12", offer: "Min. 30% Off" },
  { name: "Laundry Bags", image: "/images/laundrybag.jpg", price: "$25", offer: "Best Sellers" },
  { name: "Drying Racks", image: "/images/dryingrack.jpg", price: "$35", offer: "Special Offer" },
  { name: "Ironing Boards", image: "/images/ironingboard.jpg", price: "$45", offer: "Buy 1 Get 1" },
  { name: "Stain Removers", image: "/images/stainremover.jpg", price: "$10", offer: "50% Off" },
  { name: "Washing Machine Cleaner", image: "/images/washcleaner.jpg", price: "$8", offer: "Best Price" },
  { name: "Clothesline", image: "/images/clothesline.jpg", price: "$12", offer: "Hot Deal" },
  { name: "Lint Remover", image: "/images/lintremover.jpg", price: "$9", offer: "Limited Time Offer" },
  { name: "Laundry Baskets", image: "/images/laundrybasket.jpg", price: "$20", offer: "Top Rated" },

  //  Organic
  { name: "Fresh Carrots", image: "/images/carrots.jpg", price: "$5", offer: "Organic & Fresh" },
  { name: "Green Peppers", image: "/images/peppers.jpg", price: "$6", offer: "Limited Stock" },
  { name: "Ginger", image: "/images/ginger.jpg", price: "$4", offer: "Best Seller" },
  { name: "Turmeric Powder", image: "/images/turmeric.jpg", price: "$7", offer: "Min. 20% Off" },
  { name: "Garlic", image: "/images/garlic.jpg", price: "$5", offer: "Freshly Picked" },
  { name: "Coriander Powder", image: "/images/coriander.jpg", price: "$6", offer: "Hot Deal" },
  { name: "Chili Powder", image: "/images/chili.jpg", price: "$5", offer: "Limited Offer" },
  { name: "Organic Tomatoes", image: "/images/tomatoes.jpg", price: "$4", offer: "Top Quality" },
  { name: "Organic Spinach", image: "/images/spinach.jpg", price: "$3", offer: "Healthy Choice" },
  { name: "Cinnamon Sticks", image: "/images/cinnamon.jpg", price: "$8", offer: "Pure & Natural" },

  //  Plumbing
  { name: "Water Pipes", image: "/images/pipes.jpg", price: "$30", offer: "Hot Sale" },
  { name: "Faucets", image: "/images/faucet.jpg", price: "$50", offer: "Up to 50% Off" },
  { name: "Shower Heads", image: "/images/showerhead.jpg", price: "$40", offer: "Best Price" },
  { name: "Toilet Seats", image: "/images/toilet.jpg", price: "$60", offer: "Limited Time Offer" },
  { name: "Drain Cleaners", image: "/images/draincleaner.jpg", price: "$20", offer: "Min. 40% Off" },
  { name: "Pipe Wrenches", image: "/images/wrench.jpg", price: "$35", offer: "Best Deals" },
  { name: "Plumbing Tape", image: "/images/plumbingtape.jpg", price: "$10", offer: "Top Rated" },
  { name: "Geysers", image: "/images/geyser.jpg", price: "$150", offer: "Exclusive Offer" },
  { name: "Sinks", image: "/images/sink.jpg", price: "$100", offer: "Flat 30% Off" },
  { name: "Bathroom Mirrors", image: "/images/mirror.jpg", price: "$75", offer: "Special Price" },

  //  Clothing 
  { name: "Men", image: "/images/men.jpg", price: "$30", offer: "Min. 40% Off" },
  { name: "Women", image: "/images/women.jpg", price: "$35", offer: "Exclusive Deals" },
  { name: "Kids", image: "/images/kids.jpg", price: "$25", offer: "Best Price" },
  { name: "T-Shirts", image: "/images/tshirts.jpg", price: "$15", offer: "Special Discount" },
  { name: "Jeans", image: "/images/jeans.jpg", price: "$40", offer: "Limited Offer" },
  { name: "Dresses", image: "/images/dresses.jpg", price: "$50", offer: "Trending Now" },
  { name: "Shoes", image: "/images/shoes.jpg", price: "$60", offer: "Best Deals" },
  { name: "Jackets", image: "/images/jackets.jpg", price: "$70", offer: "Hot Sale" },
  { name: "Sweaters", image: "/images/sweaters.jpg", price: "$45", offer: "Min. 50% Off" },
  { name: "Accessories", image: "/images/accessories.jpg", price: "$20", offer: "Buy 1 Get 1" },

  //  Beauty 
  { name: "Skincare", image: "/images/skincare.jpg", price: "$25", offer: "Up to 40% Off" },
  { name: "Makeup", image: "/images/makeup.jpg", price: "$30", offer: "Buy 1 Get 1" },
  { name: "Haircare", image: "/images/haircare.jpg", price: "$20", offer: "Min. 30% Off" },
  { name: "Perfumes", image: "/images/perfume.jpg", price: "$50", offer: "Exclusive Deals" },
  { name: "Face Wash", image: "/images/facewash.jpg", price: "$15", offer: "Limited Offer" },
  { name: "Lipsticks", image: "/images/lipstick.jpg", price: "$10", offer: "Special Price" },
  { name: "Nail Polish", image: "/images/nailpolish.jpg", price: "$8", offer: "Trending Now" },
  { name: "Body Lotion", image: "/images/bodylotion.jpg", price: "$18", offer: "Best Deals" },
  { name: "Hair Oil", image: "/images/hairoil.jpg", price: "$12", offer: "Hot Sale" },
  { name: "Foundation", image: "/images/foundation.jpg", price: "$35", offer: "Best Price" },

  //  Home Decor 
  { name: "Furniture", image: "/images/furniture.jpg", price: "$500", offer: "Up to 50% Off" },
{ name: "Wall Art", image: "/images/wallart.jpg", price: "$60", offer: "Buy 1 Get 1" },
{ name: "Lighting", image: "/images/lighting.jpg", price: "$100", offer: "Min. 20% Off" },
{ name: "Curtains", image: "/images/curtains.jpg", price: "$45", offer: "Best Deals" },
{ name: "Carpets", image: "/images/carpets.jpg", price: "$120", offer: "Exclusive Offers" },
{ name: "Vases", image: "/images/vases.jpg", price: "$35", offer: "Limited Time Offer" },
{ name: "Cushions", image: "/images/cushions.jpg", price: "$25", offer: "Flat 30% Off" },
{ name: "Clocks", image: "/images/clocks.jpg", price: "$40", offer: "Trending Now" },
{ name: "Photo Frames", image: "/images/frames.jpg", price: "$20", offer: "Special Discount" },
{ name: "Mirrors", image: "/images/mirrors.jpg", price: "$80", offer: "Best Sellers" },

// Kids Toys
{ name: "Soft Toys", image: "/images/soft-toys.jpg", price: "$20", offer: "Up to 50% Off" },
{ name: "Remote Cars", image: "/images/remote-cars.jpg", price: "$35", offer: "Limited Stock" },
{ name: "Dolls", image: "/images/dolls.jpg", price: "$25", offer: "Special Discount" },
{ name: "Building Blocks", image: "/images/blocks.jpg", price: "$30", offer: "Best Seller" },
{ name: "Puzzle Games", image: "/images/puzzles.jpg", price: "$18", offer: "Brain Boosters" },
{ name: "Action Figures", image: "/images/action-figures.jpg", price: "$28", offer: "Trending Now" },
{ name: "Board Games", image: "/images/board-games.jpg", price: "$40", offer: "Exclusive Deals" },
{ name: "Musical Toys", image: "/images/musical-toys.jpg", price: "$22", offer: "Hot Sale" },
{ name: "Educational Toys", image: "/images/educational-toys.jpg", price: "$30", offer: "Learn & Play" },
{ name: "Outdoor Toys", image: "/images/outdoor-toys.jpg", price: "$50", offer: "Adventure Fun" },

],
};

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by matching URL parameter
  const product = category.products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === id
  );

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load Cart & Wishlist from localStorage on mount
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  // Save Cart & Wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add to Cart
  const addToCart = () => {
    if (!product) return;
    setCart((prev) => [...prev, product]);
  };

  // Toggle Wishlist
  const toggleWishlist = () => {
    if (!product) return;
    setWishlist((prev) =>
      prev.some((item) => item.name === product.name)
        ? prev.filter((item) => item.name !== product.name)
        : [...prev, product]
    );
  };

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-500">Product Not Found!</h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg">
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
          {/* Wishlist Button */}
          <button
            className={`absolute top-2 right-2 text-2xl ${
              wishlist.some((item) => item.name === product.name) ? "text-red-500" : "text-gray-400"
            }`}
            onClick={toggleWishlist}
          >
            ❤️
          </button>
        </div>

        <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
        <p className="text-xl text-gray-700 mt-2">{product.price}</p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <button className="px-6 py-2 bg-green-500 text-white rounded" onClick={addToCart}>
            Add to Cart
          </button>
          <button
            className={`px-6 py-2 rounded ${
              wishlist.some((item) => item.name === product.name) ? "bg-red-500 text-white" : "bg-gray-300 text-black"
            }`}
            onClick={toggleWishlist}
          >
            {wishlist.some((item) => item.name === product.name) ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;