// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  const handleModalClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-black/50  ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-md shadow-lg">
          <div className="mb-3">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="block text-gray-700 font-bold mb-2">
              Which Type Test?
            </label>
            <input
              type="text"
              id="test"
              className="w-full border rounded px-3 py-2"
              placeholder="eg. Fever"
            />
            </div>
          <div className="mb-3">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your message"
              rows="2"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-theme1 text-white px-4 py-2 rounded-sm hover:bg-theme1h"
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
