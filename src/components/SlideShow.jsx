import React, { useState, useEffect, useRef } from 'react';
import slide1 from './1.jpeg'; // Update paths
import slide2 from './Offer.png';
import slide3 from './3.jpeg';

const slides = [
  {
    image: slide1,
    backgroundColor: 'bg-blue-400',
    content: (
      <div className="flex items-center w-full px-8 text-white h-96">
        {/* Centered Image Frame */}
        <div className="flex justify-center w-1/3">
          <div className="flex items-center justify-center p-2 w-96 h-96">
            <img src={slide2} alt="Mattress" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>

        {/* Text Content on Right */}
        <div className="flex flex-col items-start justify-center flex-grow ml-8">
          <h2 className="mb-2 text-5xl italic font-bold">Special Discounts</h2>
          <p className="mb-4 text-2xl">From March To Aprile</p>
          <p className="mb-4 text-2xl">Mens | Womens | Kids | And Many More</p>
          <p className="mb-4 text-2xl">Deals like never before!</p>
          <div className="flex items-center px-4 py-2 text-black bg-white rounded">
            <img src={slide1} alt="PNB" className="h-6 mr-2" />
            <span>10% Instant Discount on Credit Card Transactions</span>
          </div>
        </div>
      </div>
    ),
  },

  {
    image: slide2,
    backgroundColor: 'bg-gray-400',
    content: (
      <div className="flex items-center w-full px-8 text-white h-96">
        {/* Centered Image Frame */}
        <div className="flex justify-center w-1/3">
          <div className="flex items-center justify-center p-2 bg-gray-200 border-4 border-white rounded-lg w-60 h-60">
            <img src={slide1} alt="Mattress" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>

        {/* Text Content on Right */}
        <div className="flex flex-col items-start justify-center flex-grow ml-8">
          <h2 className="mb-2 text-3xl font-bold">Mattresses</h2>
          <p className="mb-4 text-xl">From ₹2,990</p>
          <p className="mb-4 text-sm">Sleepycat, Kurlon & more</p>
          <p className="mb-4 text-sm">Deals like never before!</p>
          <div className="flex items-center px-4 py-2 text-black bg-white rounded">
            <img src={slide1} alt="PNB" className="h-6 mr-2" />
            <span>10% Instant Discount on Credit Card Transactions</span>
          </div>
        </div>
      </div>
    ),
},

{
    image: slide3,
    backgroundColor: 'bg-yellow-400',
    content: (
      <div className="flex items-center w-full px-8 text-white h-96">
        {/* Centered Image Frame */}
        <div className="flex justify-center w-1/3">
          <div className="flex items-center justify-center p-2 bg-gray-200 border-4 border-white rounded-lg w-60 h-60">
            <img src={slide3} alt="Mattress" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>

        {/* Text Content on Right */}
        <div className="flex flex-col items-start justify-center flex-grow ml-8">
          <h2 className="mb-2 text-3xl font-bold">Mattresses</h2>
          <p className="mb-4 text-xl">From ₹2,990</p>
          <p className="mb-4 text-sm">Sleepycat, Kurlon & more</p>
          <p className="mb-4 text-sm">Deals like never before!</p>
          <div className="flex items-center px-4 py-2 text-black bg-white rounded">
            <img src={slide1} alt="PNB" className="h-6 mr-2" />
            <span>10% Instant Discount on Credit Card Transactions</span>
          </div>
        </div>
      </div>
    ),
},
];

export default function MattressSaleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto slide every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-96">
      <div
        ref={slideRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={`flex-shrink-0 w-full h-full flex items-center justify-center ${slide.backgroundColor}`}>
            {slide.content}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute p-2 text-white -translate-y-1/2 rounded-full left-4 top-1/2 bg-gray-800/50"
      >
        &#10094;
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute p-2 text-white -translate-y-1/2 rounded-full right-4 top-1/2 bg-gray-800/50"
      >
        &#10095;
      </button>
    </div>
  );
}
