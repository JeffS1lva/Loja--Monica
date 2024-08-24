import React from "react";

export function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white  p-2 md:p-6 lg:p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
