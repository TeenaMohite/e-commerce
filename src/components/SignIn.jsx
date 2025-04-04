import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    wishlist: [],
    cart: [],
    orders: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if email already exists
    if (users.some((user) => user.email === formData.email)) {
      alert("Email already registered! Please log in.");
      return;
    }
  
    const newUser = {
      ...formData,
      id: Date.now(), // Unique ID based on timestamp
    };
  
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Registration successful! Please log in.");
    navigate("/login");
  };
  

  return (
    <div className="flex items-center justify-center w-full py-10 text-left bg-gray-100">
      <div className="flex items-stretch w-full max-w-6xl bg-white rounded-lg shadow-lg min-h-[500px]">
        <img src='./images/sign-up2.jpg' alt="Sign-up user" className="object-cover mx-auto h-30 w-50" />

        <div className="flex flex-col justify-center w-full p-8 md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">Create New Account</h1>
          <p className="mb-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-500">Log in here</Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="firstName" placeholder="First Name" className="w-full p-2 border rounded" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" className="w-full p-2 border rounded" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" className="w-full p-2 border rounded" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" onChange={handleChange} required />

            <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <Link to="#" className="text-blue-500">Terms and Conditions</Link> and{" "}
            <Link to="#" className="text-blue-500">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
