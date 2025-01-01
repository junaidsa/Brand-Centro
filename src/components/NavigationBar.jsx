import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegEye, FaLayerGroup, FaThLarge } from "react-icons/fa";

const NavigationBar = () => {
  const location = useLocation();  // Get current URL location

  // Determine the active tab based on the current URL path
  const getActiveTab = () => {
    if (location.pathname.includes("3d-view")) return "3d";
    if (location.pathname.includes("2d-view")) return "2d";
    if (location.pathname.includes("floors")) return "floors";
    return "3d";  // Default tab if none of the above match
  };

  const activeTab = getActiveTab(); // Set active tab based on URL

  return (
    <div className="fixed top-10 right-12 shadow-md z-50">
      <div className="flex justify-center">
        {/* 3D View */}
        <Link
          to="/3d-view"
          className={`flex items-center px-4 py-2 rounded-l-md ${
            activeTab === "3d" ? "bg-gray-900 text-white" : "bg-white text-gray-900 hover:bg-gray-200"
          } transition`}
        >
          <FaRegEye className="w-5 h-5 mr-2" />
          3D View
        </Link>

        {/* 2D View */}
        <Link
          to="/2d-view"
          className={`flex items-center px-4 py-2 ${
            activeTab === "2d" ? "bg-gray-900 text-white" : "bg-white text-gray-900 hover:bg-gray-200"
          } transition`}
        >
          <FaThLarge className="w-5 h-5 mr-2" />
          2D View
        </Link>

        {/* Floors */}
        <Link
          to="/floors"
          className={`flex items-center px-4 py-2 rounded-r-md ${
            activeTab === "floors" ? "bg-gray-900 text-white" : "bg-white text-gray-900 hover:bg-gray-200"
          } transition`}
        >
          <FaLayerGroup className="w-5 h-5 mr-2" />
          Floors
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
