import React from "react";

const ProductList: React.FC = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      {/* Dropdown Menu */}
      <div className="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full p-2 transition-all duration-200"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Profile Section */}
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>

        {/* Buttons */}
        <div className="flex mt-4 space-x-3">
          <a
            href="#"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 transition-all duration-300"
          >
            Add Friend
          </a>
          <a
            href="#"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-500 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 transition-all duration-300"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
