import React from "react";
import { useLocation } from "react-router-dom";
import compass from "../assets/compass.jpg";

const ApartmentDetails = () => {
  const { state } = useLocation();
  const { unit, image } = state;

  if (!unit) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="max-w-8xl mx-auto p-4 md:py-20 md:px-5">
      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Compass Section */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="p-2 border rounded-lg shadow flex items-center justify-center">
            <div className="relative w-28 h-28">
              <img
                src={compass}
                alt="Compass"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Unit Plan Image and Details */}
        <div className="md:col-span-6">
          {/* Unit Plan Image */}
          <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[30rem]">
              <img
                src={image}
                alt={`Unit ${unit.unitNo}`}
                className="absolute inset-0 w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Layout and Facade Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="px-6 py-2 border border-gray-300 rounded-md font-medium hover:bg-gray-100">
              Layouts
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-md font-medium hover:bg-gray-100">
              Facade
            </button>
          </div>
        </div>

        {/* Apartment Information */}
        <div className="md:col-span-4 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">{unit.type}</h2>
          <p className="text-gray-500 mb-4">
            Floor {unit.unitNo.charAt(0)} | Unit #{unit.unitNo} |{" "}
            {unit.totalAreaSqFt} sq.ft
          </p>
          <button className="bg-black text-white w-full py-2 rounded-md font-medium mb-6">
            Get in touch
          </button>

          {/* Additional Details */}
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-orange-500 rounded-full inline-block mr-2"></span>
              <span>Interest</span>
            </div>
            <p className="flex items-center">
              <span className="w-4 h-4 mr-2">🏙️</span>
              <span className="flex-1">
                Window view: Al Barsha/Dubai Miracle Garden/Dubai Autodrome/Motor
                City
              </span>
            </p>
            <p className="flex items-center">
              <span className="w-4 h-4 mr-2">🛏️</span>
              {unit.type.toLowerCase().includes("studio")
                ? "Studio"
                : `${unit.type.match(/\d+/)?.[0]} bedroom(s)`}
            </p>
            <p className="flex items-center">
              <span className="w-4 h-4 mr-2">📏</span>
              Total area: {unit.totalAreaSqFt} sq.ft
            </p>
            <p className="flex items-center">
              <span className="w-4 h-4 mr-2">📐</span>
              Living area: {unit.suiteAreaSqFt} sq.ft
            </p>
            <p className="flex items-center">
              <span className="w-4 h-4 mr-2">🌴</span>
              Balcony area: {unit.balconyAreaSqFt} sq.ft
            </p>
            <p className="flex items-center">
              <span className="w-4 h-4 mr-2">💰</span>
              Price: {unit.sellingPriceAED}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;