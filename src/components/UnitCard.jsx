import React from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

// Import all images from the assets folder
import R101 from "../assets/unit plans/Type B TWO BEDROOM TYPICAL FLAT-101.png";
import R102 from "../assets/unit plans/Type A TWO BEDROOM TYPICAL FLAT-102.png";
import R103 from "../assets/unit plans/Type A STUDIO TYPICAL FLAT-103.png";
import R104 from "../assets/unit plans/TypeB STUDIO TYPICAL FLAT-104.png";
import R105 from "../assets/unit plans/TYPICAL FLAT-105 Type C STUDIO.png";
import R106 from "../assets/unit plans/TYPICAL FLAT-106 Type B ONE BEDROOM.png";
import R107 from "../assets/unit plans/Type A ONE BEDROOM TYPICAL FLAT-107.png";


import R201_801 from "../assets/unit plans/TYPICAL FLAT-201 TO 801 Type B TWO BEDROOM.png";
import R202_802 from "../assets/unit plans/Type A TWO BEDROOM TYPICAL FLAT-202 TO 802.png";
import R203_803 from "../assets/unit plans/Type A STUDIO TYPICAL FLAT-203 TO 803.png";
import R204_804 from "../assets/unit plans/TypeB STUDIO TYPICAL FLAT-204 TO 804.png";
import R205_805 from "../assets/unit plans/TYPICAL FLAT-205 TO 805 Type C STUDIO.png";
import R206_806 from "../assets/unit plans/TYPICAL FLAT-206 TO 806 Type B ONE BEDROOM.png";
import R207_807 from "../assets/unit plans/Type A ONE BEDROOM TYPICAL FLAT-207 TO 807.png";

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

  const getImage = (image) => {

    if (image === "Type B TWO BEDROOM TYPICAL FLAT-101.png") {
      return R101;
    }
    if (image === "Type A TWO BEDROOM TYPICAL FLAT-102.png") {
      return R102;
    }
    if (image === "Type A STUDIO TYPICAL FLAT-103.png") {
      return R103;
    }
    if (image === "TypeB STUDIO TYPICAL FLAT-104.png") {
      return R104;
    }
    if (image === "TYPICAL FLAT-105 Type C STUDIO.png") {
      return R105;
    }
    if (image === "TYPICAL FLAT-106 Type B ONE BEDROOM.png") {
      return R106;
    }
    if (image === "Type A ONE BEDROOM TYPICAL FLAT-107.png") {
      return R107;
    }
    if (image === "TYPICAL FLAT-201 TO 801 Type B TWO BEDROOM.png") {
      return R201_801;
    }
    if (image === "TYPICAL FLAT-202 TO 802 Type B TWO BEDROOM.png") {
      return R202_802;
    }
    if (image === "Type A STUDIO TYPICAL FLAT-203 TO 803.png") {
      return R203_803;
    }
    if (image === "TypeB STUDIO TYPICAL FLAT-204 TO 804.png") {
      return R204_804;
    }
    if (image === "TYPICAL FLAT-205 TO 805 Type C STUDIO.png") {
      return R205_805;
    }
    if (image === "TYPICAL FLAT-206 TO 806 Type B ONE BEDROOM.png") {
      return R206_806;
    }
    if (image === "Type A ONE BEDROOM TYPICAL FLAT-207 TO 807.png") {
      return R207_807;
    }
    return null; 
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white relative max-w-sm transition-all duration-300">
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
          src={getImage(unit.image)}
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
