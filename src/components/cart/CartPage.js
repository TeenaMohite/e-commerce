import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    calculateTotalItems(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalItems(updatedCart);
  };

  const calculateTotalItems = (cart) => {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.name !== product.name);
    updateCart(updatedCart);
  };

  const changeQuantity = (product, delta) => {
    const updatedCart = cart.map((item) =>
      item.name === product.name
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    updateCart(updatedCart);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      <p className="text-gray-700">Total Items: {totalItems}</p>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="border p-4 my-2 flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.category} - {item.name}</p>
                <p>{item.price || item.offer}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => changeQuantity(item, -1)}
                    className="px-2 bg-gray-200"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2 font-bold text-blue-600">{item.quantity}</span>
                  <button onClick={() => changeQuantity(item, 1)} className="px-2 bg-gray-200">
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item)} className="text-red-500">Remove</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go Back
      </button>
    </div>
  );
};



const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item.name !== product.name);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item, index) => (
            <li key={index} className="border p-4 my-2 flex justify-between">
              <span>{item.category} - {item.name} - {item.price || item.offer}</span>
              <button onClick={() => removeFromWishlist(item)} className="text-red-500">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go Back</button>
    </div>
  );
};

export { CartPage, WishlistPage };
