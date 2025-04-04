import React from "react";
import { FaRocket, FaHandshake, FaUsers, FaShoppingCart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64 flex items-center justify-center text-white font-bold text-center"
        style={{ backgroundImage: "url('/images/about-banner.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl md:text-5xl">Welcome to Our Store!</h1>
          <p className="text-lg md:text-xl mt-2">Where quality meets affordability. Discover amazing deals today!</p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-4xl mx-auto my-10 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">
          Our goal is to provide top-quality products at unbeatable prices, making shopping convenient and enjoyable for everyone.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16 my-12">
        {[
          { icon: <FaRocket />, title: "Fast Delivery", description: "Get your products delivered quickly and hassle-free." },
          { icon: <FaHandshake />, title: "Trusted Sellers", description: "We partner with reliable sellers to bring you the best." },
          { icon: <FaUsers />, title: "Customer Support", description: "We are here 24/7 to assist you with any queries." },
          { icon: <FaShoppingCart />, title: "Huge Collection", description: "Find everything from fashion to electronics in one place." },
        ].map((feature, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="text-4xl text-indigo-600 mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Meet Our Team Section */}
      <div className="max-w-6xl mx-auto my-12 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[
            { name: "John Doe", role: "Founder & CEO", image: "/images/team1.jpg" },
            { name: "Jane Smith", role: "Head of Marketing", image: "/images/team2.jpg" },
            { name: "Michael Lee", role: "Lead Developer", image: "/images/team3.jpg" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-36 h-36 rounded-full mx-auto border-4 border-indigo-600 shadow-md" />
              <h4 className="text-lg font-semibold mt-3">{member.name}</h4>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-indigo-600 text-white text-center py-10">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-2 text-lg">If you have any questions or feedback, feel free to contact us!</p>
        <a href="/contact" className="mt-4 inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold text-lg hover:bg-gray-200 transition">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
