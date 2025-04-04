import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Find matching user
    const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
    
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("loggedInUserId", user.id); // 👈 Add this line
      alert("Login successful!");
      navigate("/"); 
        window.location.reload(); 
      }
    };

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Logo & Title */}
      <div className="flex items-center py-10 space-x-1">
        <img src="/letter-f.png" className="h-[80px] w-[80px]" alt="Favicon" />
        <h1 className="text-6xl italic font-bold text-slate-300">ShopEasy.com</h1>
      </div>

      <div className="w-full max-w-3xl min-h-screen bg-white rounded-lg shadow-lg">
        {/* Top Banner */}
        <div>
          <img src="/images/SuperSale.png" alt="Offer Banner" className="" />
        </div>

        {/* Login Form */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-600">Login or Signup</h2>

          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleLogin} className="mt-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />

            <label className="block mt-4 text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />

            <p className="mt-4 text-sm text-gray-600">
              By continuing, I agree to the{" "}
              <span className="font-bold text-red-500 cursor-pointer">Terms of Use & Privacy Policy</span>.
            </p>

            <button type="submit" className="w-full py-3 mt-6 text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-600">
              CONTINUE
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Don't have an account?{" "}
            <Link to="/signin" className="text-blue-500 font-semibold">
              Sign Up
            </Link>
          </p>

          <p className="mt-4 text-xl text-center text-gray-700">
            Have trouble logging in?{" "}
            <span className="text-2xl font-bold text-red-500 cursor-pointer">Get help</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
