import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaLayerGroup, FaThLarge } from "react-icons/fa";

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState("3d");

  return (
    <div className="fixed top-10 right-12 shadow-md z-50">
      <div className="flex justify-center">
        {/* 3D View */}
        <Link
          to="/3d-view"
          className={`flex items-center px-4 py-2 rounded-l-md ${
            activeTab === "3d" ? "bg-gray-900 text-white" : "bg-white text-gray-900 hover:bg-gray-200"
          } transition`}
          onClick={() => setActiveTab("3d")}
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
          onClick={() => setActiveTab("2d")}
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
          onClick={() => setActiveTab("floors")}
        >
          <FaLayerGroup className="w-5 h-5 mr-2" />
          Floors
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
