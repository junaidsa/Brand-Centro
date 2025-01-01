import React from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

const UnitCard = ({ unit, wishListArray, setWishListArray, onRemove }) => {
  const isWishlisted = wishListArray.some(
    (item) => item.unitNo === unit.unitNo
  );

  const toggleWishlist = () => {
    if (isWishlisted) {
      onRemove(unit); // Trigger removal with animation
    } else {
      const updatedWishlist = [...wishListArray, unit];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishListArray(updatedWishlist);
    }
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white relative max-w-sm transition-all duration-300">
      {/* Heart and Eye Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-1">
        <button
          onClick={toggleWishlist}
          className={`p-2 rounded-full ${
            isWishlisted ? "bg-[#c89c4e] text-white" : "bg-yellow-50 text-gray-600 hover:bg-yellow-100"
          }`}
        >
          <AiOutlineHeart size={20} />
        </button>
        <button className="p-2 bg-yellow-50 rounded-full hover:bg-yellow-100">
          <AiOutlineEye className="text-gray-600" size={20} />
        </button>
      </div>

      {/* Image */}
      <div className="mb-4">
        <img
          src="floorplan.jpg" // Replace with actual image path
          alt={unit.type}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <span className="px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md">
          #{unit.unitNo}
        </span>
        <span className="px-2 py-1 text-xs font-medium text-white bg-cyan-800 rounded-md">
          {unit.type}
        </span>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-md ${
            unit.status === "interest"
              ? "bg-orange-800 text-white"
              : "text-white bg-teal-800"
          }`}
        >
          {unit.status.toUpperCase()}
        </span>
      </div>

      {/* Details */}
      <div className="text-sm space-y-2">
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">📐</span>
          {unit.totalAreaSqFt} sq.ft.
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">🏢</span>
          {unit.unitNo.charAt(0)} floor
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">🛏️</span>
          {unit.type.toLowerCase().includes("studio")
            ? "Studio"
            : `${unit.type.match(/\d+/)?.[0]} room${
                unit.type.match(/\d+/)?.[0] === "1" ? "" : "s"
              }`}
        </div>
      </div>
    </div>
  );
};

export default UnitCard;
