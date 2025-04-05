import React, { useState, useEffect, useRef } from "react";
import { Package, Gift, Search, User, Heart, ShoppingCart, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
      setWishlistCount(storedUser.wishlist.length || 0);
      setCartCount(storedUser.cart.length || 0);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
    window.location.reload(); 
  };

  return (
    <div  className="bg-blue-200 relative flex items-center w-full px-6 md:px-25 h-30">
      <Link to="/" className="flex items-center">
        <img src="/letter-f.png" className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] mr-2" alt="Favicon" />
        <h1 className="font-extrabold text-purple-500 text-3xl md:text-6xl italic  hover:text-white">Shop Easy</h1>
      </Link>

      <div className="ml-auto flex items-center space-x-4 md:space-x-8">
        <div className="hidden md:flex items-center w-[250px] md:w-[400px] px-4 py-2 bg-gray-100 border rounded-lg">
          <Search className="text-gray-500" size={20} />
          <input type="text" placeholder="Search" className="w-full pl-3 text-gray-700 bg-transparent outline-none" />
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 text-white">

          {/* Profile Dropdown */}
          <div className="relative flex flex-col items-center cursor-pointer" ref={dropdownRef}>
            <button className="flex items-center space-x-2" onClick={() => setIsOpen(!isOpen)}>
              <User size={28} className="text-black "/>
              <span className="text-sm md:text-base font-semibold text-black flex items-center">
                {user ? user.firstName : "Login"} <ChevronDown className="ml-1" size={18} />
              </span>
            </button>

            {isOpen && (
              <div
                className="absolute right-0 md:right-auto md:left-0 z-50 w-35 md:w-46 mt-2 text-gray-700 bg-gray-400 border rounded-md shadow-lg top-12"
                style={{ minWidth: "200px", maxWidth: "150px" }}
              >
                {user ? (
                  <>
                    <div className="px-4 py-2 border-b">
                      <span className="text-sm font-semibold">Hello, {user.firstName}</span>
                    </div>
                    <ul className="py-2">
                      <MenuItem icon={<User size={18} />} text="My Profile" onClick={() => navigate("/profile")} />
                      <MenuItem icon={<Heart size={18} />} text="Wishlist" onClick={() => navigate("/wishlist")} />
                      <MenuItem icon={<ShoppingCart size={18} />} text="Cart" onClick={() => navigate("/cart")} />
                      <MenuItem icon={<Package size={18} />} text="Orders" onClick={() => navigate("/orders")} />
                      <MenuItem icon={<Gift size={18} />} text="Gift Cards" onClick={() => navigate("/giftcards")} />
                      <MenuItem icon={<User size={18} />} text="Logout" onClick={handleLogout} />
                    </ul>
                  </>
                ) : (
                  <MenuItem icon={<User size={18} />} text="Login" onClick={() => navigate("/login")} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
          {/* Wishlist */}
          <div className="relative cursor-pointer" onClick={() => navigate("/wishlist")}>
            <Heart size={28} />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 px-2 text-xs font-bold text-white bg-red-500 rounded-full">
                {wishlistCount}
              </span>
            )}
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
            <ShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 px-2 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
  );
};

function MenuItem({ icon, text, onClick }) {
  return <li className="flex items-start px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={onClick}>{icon}<span className="ml-3">{text}</span></li>;
}

export default Navbar;
