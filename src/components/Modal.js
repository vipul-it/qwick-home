// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  const handleModalClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-black/50  ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-md shadow-lg">
          <div className="flex justify-end gap-4">
            <button
              className="hover:bg-theme1light text-black/50 border border-black/20 font-poppins py-1 px-3  rounded-lg "
              onClick={handleModalClose}
            >
              X
            </button>
          </div>
          <h1 className="lg:text-2xl text-xl font-semibold my-4 -mt-8">
            Book an Appointment
          </h1>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded px-3 py-1.5 border focus:border-gray-500 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded px-3 py-1.5 focus:border-gray-500 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border rounded px-3 py-1.5 focus:border-gray-500 outline-none"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="text"
              className="block text-gray-700 font-semibold mb-2"
            >
              Select Health Issue:
            </label>
            <div className="relative inline-block w-64">
              <select
                id="healthIssue"
                name="healthIssue"
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="fever">Fever</option>
                <option value="bloodTest">Blood Test</option>
                <option value="bloodTest">Full Body Test</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                {/* Dropdown arrow icon  */}
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              className="w-full border rounded px-3 py-1.5 focus:border-gray-500 outline-none"
              placeholder="Enter your message"
              rows="2"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-theme1 text-white px-4 py-2 rounded-sm hover:bg-theme1h"
              onClick={handleModalClose}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
