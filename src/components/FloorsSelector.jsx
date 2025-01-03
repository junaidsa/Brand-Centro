// FloorSelector.js
import React, { useState } from "react";
import floorData from "../components/floors_data.json";

const FloorSelector = () => {
  const [selectedFloor, setSelectedFloor] = useState(floorData[0].floor);

  const handleFloorSelect = (floor) => {
    setSelectedFloor(floor);
  };

  const handleArrowClick = (direction) => {
    const currentIndex = floorData.findIndex((floor) => floor.floor === selectedFloor);
    if (direction === "up" && currentIndex > 0) {
      setSelectedFloor(floorData[currentIndex - 1].floor);
    } else if (direction === "down" && currentIndex < floorData.length - 1) {
      setSelectedFloor(floorData[currentIndex + 1].floor);
    }
  };

  return (
    <div className="flex gap-6 max-w-6xl h-[90vh] items-center justify-center m-auto">
      <div className="flex-1 h-full p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-center mb-10 text-gray-600">
          Floor {selectedFloor} Plan
        </h2>
        <div className="flex justify-center items-center">
          <img
            src={`floorplan.jpg`}
            alt={`Floor ${selectedFloor} Plan`}
            className="w-[35%] h-[35%] rounded"
          />
        </div>
      </div>

      {/* Scrollable Floor Selector with Arrows */}
      <div className="flex flex-col items-center w-20 overflow-hidden rounded-lg">
        <button
          className="text-gray-600 hover:text-gray-900 py-2"
          onClick={() => handleArrowClick("up")}
        >
          ▲
        </button>
        <div className="overflow-y-auto h-full w-full">
          {floorData.map((floor) => (
            <div
              key={floor.floor}
              className={`py-2 text-center cursor-pointer transition-all duration-200 ${
                selectedFloor === floor.floor
                  ? "bg-gray-900 text-white font-bold"
                  : "bg-white hover:bg-gray-200"
              }`}
              onClick={() => handleFloorSelect(floor.floor)}
            >
              {floor.floor}
            </div>
          ))}
        </div>
        {/* Down Arrow */}
        <button
          className="text-gray-600 hover:text-gray-900 py-2"
          onClick={() => handleArrowClick("down")}
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default FloorSelector;
