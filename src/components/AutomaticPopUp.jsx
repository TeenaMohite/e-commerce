import React from "react";

const AutomaticPopUp = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-4 bg-transparent ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute px-16 py-10 text-4xl text-gray-100 top-2 right-5 hover:text-black"
        >
          ✕
        </button>

        {/* Popup Image */}
        <img src={imageUrl} alt="Popup" className="h-auto max-w-4xl rounded-md" />
      </div>
    </div>
  );
};

export default AutomaticPopUp;
