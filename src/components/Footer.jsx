import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-blue py-10">
      {/* Contact Section */}
      <section className="max-w-6xl mx-auto text-center bg-blue-200 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold">Ready to get started?</h3>
        <h3 className="text-lg text-gray-900">Talk to us today</h3>
        <div className="mt-4">
          <NavLink to="/about">
            <button className="px-6 py-2 text-white font-bold bg-blue-500 rounded-lg hover:bg-blue-600 transition-all">
              Get Started
            </button>
          </NavLink>
        </div>
      </section>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold">Fly</h3>
          <p className="mt-2 text-gray-700">Your Brand is Brand! 🚀💡</p>
          <div className="mt-5">
            <h3 className="text-lg font-bold">Call Us</h3>
            <p className="text-gray-700 mt-1">+91 1234567890</p>
          </div>
        </div>

        {/* More Section */}
        <div>
          <h3 className="text-lg font-bold">More</h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="hover:text-blue-300 cursor-pointer">Plans CheckOut</li>
            <li className="hover:text-blue-300 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-300 cursor-pointer">Download App</li>
          </ul>
          {/* QR Code */}
          <div className="mt-5">
            <img
              src="/images/qr.jpg"
              alt="QR Code"
              className="max-w-24 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-bold">Subscribe for Updates</h3>
          <form className="mt-2 flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg text-blue outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            >
              Subscribe
            </button>
          </form>
          {/* Social Media */}
          <div className="mt-5">
            <h3 className="text-lg font-bold">Stay Connected</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook className="text-3xl hover:text-blue-500 transition" />
              </a>
              <a href="https://twitter.com" target="_blank">
                <FaTwitter className="text-3xl hover:text-blue-400 transition" />
              </a>
              <a href="https://web.whatsapp.com" target="_blank">
                <FaWhatsapp className="text-3xl hover:text-green-500 transition" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="text-3xl hover:text-blue-500 transition" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <FaInstagram className="text-3xl hover:text-pink-500 transition" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <FaYoutube className="text-3xl hover:text-red-500 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="hover:text-blue-300 cursor-pointer">About Us</li>
            <li className="hover:text-blue-300 cursor-pointer">Our Team</li>
            <li className="hover:text-blue-300 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-blue-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-300 cursor-pointer">
              Refund & Cancellation
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-700">
        <p>&copy; {new Date().getFullYear()}  All Rights Reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
