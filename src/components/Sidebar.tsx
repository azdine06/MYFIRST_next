import React from "react";

export default function Sidebar() {
  return (
    <div>
      {/* Toggle Button */}
      <div className="text-center my-4">
        <button
          className="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-lg px-6 py-3 shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
          type="button"
          data-drawer-target="creative-sidebar"
          data-drawer-show="creative-sidebar"
          aria-controls="creative-sidebar"
        >
          Open Sidebar
        </button>
      </div>

      {/* Sidebar */}
      <div
        id="creative-sidebar"
        className="fixed top-0 left-0 z-50 w-80 h-screen p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white transform -translate-x-full transition-transform duration-500 ease-in-out"
        tabIndex={-1}
        aria-labelledby="creative-sidebar-label"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h5
            id="creative-sidebar-label"
            className="text-2xl font-bold tracking-wide"
          >
            My Sidebar
          </h5>
          <button
            type="button"
            data-drawer-hide="creative-sidebar"
            aria-controls="creative-sidebar"
            className="text-white hover:text-red-500 rounded-lg text-lg p-2 transition-all duration-300"
          >
            ✖
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-4 mb-10">
          <img
            src="https://via.placeholder.com/50"
            alt="User Profile"
            className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-lg"
          />
          <div>
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-sm text-gray-400">Creative Designer</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-purple-600 hover:shadow-lg transition-all duration-300"
            >
              <svg
                className="w-6 h-6 text-blue-400 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V3m12 8h-4m0 0l3-3m-3 3l3 3"
                />
              </svg>
              <span className="text-lg font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-purple-600 hover:shadow-lg transition-all duration-300"
            >
              <svg
                className="w-6 h-6 text-blue-400 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 18.364A9 9 0 1118.364 5.121M15 9h.01M9 15h.01"
                />
              </svg>
              <span className="text-lg font-medium">Analytics</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-purple-600 hover:shadow-lg transition-all duration-300"
            >
              <svg
                className="w-6 h-6 text-blue-400 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 10c1.38 0 2.5 1.12 2.5 2.5S20.38 15 19 15H5c-1.38 0-2.5-1.12-2.5-2.5S3.62 10 5 10m7 0V3m0 18v-6"
                />
              </svg>
              <span className="text-lg font-medium">Reports</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-purple-600 hover:shadow-lg transition-all duration-300"
            >
              <svg
                className="w-6 h-6 text-blue-400 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20l9-7-9-7-9 7 9 7z"
                />
              </svg>
              <span className="text-lg font-medium">Projects</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
