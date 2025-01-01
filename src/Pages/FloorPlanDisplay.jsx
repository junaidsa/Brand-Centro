import React, { useState } from "react";
// import { ZoomIn, ZoomOut } from "lucide-react";
import data from "../data/floors_data.json";

const FloorPlanDisplay = () => {
  //   const [scale, setScale] = useState(1);

  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "bg-blue-500";
      case "reserved":
        return "bg-neutral-500";
      case "sold":
        return "bg-red-600";
      case "interest":
        return "bg-orange-500";
      case "resale":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  //   const handleZoomIn = () => {
  //     setScale((prev) => Math.min(prev + 0.1, 2));
  //   };

  //   const handleZoomOut = () => {
  //     setScale((prev) => Math.max(prev - 0.1, 0.5));
  //   };

  //   const handleSliderChange = (event) => {
  //     setScale(parseFloat(event.target.value));
  //   };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 ">

      <div className="flex gap-4 mb-10 items-center justify-start text-gray-600">
        <div className="flex items-center justify-center gap-2">
          <div className="w-7 h-7 bg-blue-400 rounded"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-neutral-400 rounded"></div>
          <span>Reserved</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-red-600 rounded"></div>
          <span>Sold</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-orange-300 rounded"></div>
          <span>Interest</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-purple-400 rounded"></div>
          <span>Resale</span>
        </div>
      </div>

      <div className="rounded-lg">
        <div className=" origin-top-left h-[70vh]  duration-200 overflow-y-scroll ">
            <div className="h-full mt-5 mb-[8rem]">
          {[...data].reverse().map((floor) => (
            <div key={floor.floor} className="flex rounded-lg">
              <div className="w-12 flex items-center justify-center text-2xl bg-gray-100 border">
                {floor.floor}
              </div>
              <div className="flex flex-wrap p-2 gap-1 ml-10">
                {floor.units.map((unit) => (
                  <div
                    key={unit.unitNo}
                    className={`cursor-pointer text-white hover:shadow-[0_1px_7px_rgba(0,0,0,0.9)] hover:scale-[1.5] transition-all duration-200 rounded-lg ${getStatusColor(
                      unit.status
                    )} p-3 min-w-[40px] text-center`}
                  >
                    <div className="text-md font-bold">{unit.unitNo}</div>
                    {/* <div className="text-[10px] font-bold">{unit.type}</div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
            </div>
        </div>
      </div>
      {/* <div className="mb-8 flex justify-center items-center">
        <div className="flex gap-4 items-center">
          <button
            onClick={handleZoomOut}
            className="p-2 rounded hover:bg-gray-100"
          >
            <ZoomOut className="w-6 h-6" />
          </button>
          <input
            type="range"
            min="0.8"
            max="1.3"
            step="0.1"
            value={scale}
            onChange={handleSliderChange}
            className="w-32 mx-2"
          />
          <button
            onClick={handleZoomIn}
            className="p-2 rounded hover:bg-gray-100"
          >
            <ZoomIn className="w-6 h-6" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default FloorPlanDisplay;
