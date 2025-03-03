import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import floors_Data from "./components/floors_data.json";
import UnitCard from "./components/UnitCard";
import Filters from "./components/Filter";
import { CiHeart } from "react-icons/ci";
import Wishlist from "./Pages/Wishlist";
import NavigationBar from "./components/NavigationBar";
import { motion } from "framer-motion";
import loader from "./assets/Brand Centro Floor Plan.gif";
import image from "/Brand Centro 1.jpg";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdHeart,
} from "react-icons/io";
import { CiSliderHorizontal } from "react-icons/ci";
import FloorPlanDisplay from "./Pages/FloorPlanDisplay";
import ModelView from "./Pages/ModelView";
import Floors from "./Pages/Floors";
import ApartmentDetails from "./Pages/AppartmentDetails";

const AppContent = ({
  wishListArray,
  setWishListArray,
  filteredUnits,
  filters,
  updateFilters,
  handleCloseSidebar,
  isSideBarOpen,
}) => {
  const location = useLocation();
  const [scale, setScale] = useState(1);
  useEffect(() => {
    if (wishListArray.length >= 0) {
      setScale(1.3); 
      setTimeout(() => setScale(1), 200); 
    }
  }, [wishListArray]);
  return (
    <div className="flex h-screen bub">
      <NavigationBar />
      <button
        className="fixed left-10 top-1/2 -translate-y-1/2 bg-white
        hover:bg-gray-50 border border-gray-200 text-gray-700 w-10 h-40 opacity-75
        rounded-md flex flex-col items-center justify-between py-4 shadow-sm"
        onClick={handleCloseSidebar}
      >
        <IoIosArrowForward />
        <span className="[writing-mode:vertical-lr] text-sm tracking-wide font-medium">
          Show Filters
        </span>
        <CiSliderHorizontal size={15} className="rotate-90 font-bold" />
      </button>

      <aside
        className={`${
          isSideBarOpen ? "w-[450px]" : "w-0 opacity-0 pointer-events-none"
        } bg-white transition-all duration-900 border-r flex flex-col fixed h-full`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <img src="logo1.png" alt="BrandCentro" className="w-24 h-auto" />
          <Link
      to="/wishlist"
      className="p-1 relative w-10 h-10 rounded-lg text-[#c89c4e] cursor-pointer bg-gray-100 flex items-center justify-center"
    >
      <motion.div
        animate={{ scale }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
      >
        {wishListArray.length === 0 ? (
          <CiHeart size={35} />
        ) : (
          <IoMdHeart size={35} className="text-[#c89c4e]" />
        )}
      </motion.div>
      {wishListArray.length > 0 && (
        <p className="absolute text-[13px] mb-1 font-bold transition-all duration-500 text-white">
          {wishListArray.length}
        </p>
      )}
    </Link>
        </div>
        <div className={`flex-1 overflow-y-auto p-[10px] custom-scrollbar`}>
          <Filters
            filters={filters}
            updateFilters={updateFilters}
            floors_Data={floors_Data}
          />
          <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Results</h3>

            <h3 className="text-lg font-bold mb-4"></h3>
            {location.pathname === "/2d-view" ? (
              <img src={image} alt="2D View" />
            ) : filteredUnits.length > 0 ? (
              filteredUnits.map((floor) => (
                <div key={floor.floor} className="mb-6">
                  <h4 className="text-md font-semibold mb-2">
                    Floor {floor.floor}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {floor.units.map((unit) => (
                      <UnitCard
                        key={unit.unitNo}
                        unit={unit}
                        wishListArray={wishListArray}
                        setWishListArray={setWishListArray}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No units available for the selected filters.</p>
            )}
          </div>
        </div>

        <button
          onClick={handleCloseSidebar}
          className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-gray-200 text-[#c7a878] w-[20px] h-20 rounded-r-full flex items-center justify-center shadow-md hover:bg-[#c7a878] hover:text-white transition-all"
        >
          {isSideBarOpen ? (
            <IoIosArrowBack size={20} />
          ) : (
            <IoIosArrowForward size={20} />
          )}
        </button>
      </aside>

      <main
        className={`flex-1 ${
          isSideBarOpen ? "ml-[450px]" : ""
        } overflow-y-auto`}
      >
        <div className="p-4">
          <Routes>
            <Route
              path="/"
              element={
                <img
                  src="Brand Centro 1.jpg"
                  alt="Static View"
                  className="max-w-full max-h-full rounded shadow-lg"
                />
              }
            />
            <Route
              path="/3d-view"
              element={<ModelView/>}
            />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishListArray={wishListArray}
                  setWishListArray={setWishListArray}
                />
              }
            />
            <Route path="/2d-view" element={<FloorPlanDisplay />} />
            <Route
              path="/floors"
              element={<Floors/>}
            />
          <Route path="/apartment-details" element={<ApartmentDetails />} />

          </Routes>
        </div>
      </main>
    </div>
  );
};

const App = () => {
  const [wishListArray, setWishListArray] = useState([]);
  const [Loading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    bedrooms: "",
    floor: "",
    status: "",
    areaRange: [0, 3000],
    priceRange: [0, 3000000],
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const updateFilters = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleCloseSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const filteredUnits = floors_Data
    .map((floor) => ({
      ...floor,
      units: floor.units.filter((unit) => {
        const matchesBedrooms =
          filters.bedrooms === "" || unit.type === filters.bedrooms;
        const matchesFloor =
          filters.floor === "" || floor.floor.toString() === filters.floor;
        const matchesStatus =
          filters.status === "" ||
          unit.status.toLowerCase() === filters.status.toLowerCase();
        const matchesArea =
          unit.totalAreaSqFt >= filters.areaRange[0] &&
          unit.totalAreaSqFt <= filters.areaRange[1];
        const matchesPrice =
          parseFloat(unit.sellingPriceAED.replace(/[^0-9.-]+/g, "")) >=
            filters.priceRange[0] &&
          parseFloat(unit.sellingPriceAED.replace(/[^0-9.-]+/g, "")) <=
            filters.priceRange[1];

        return (
          matchesBedrooms &&
          matchesFloor &&
          matchesStatus &&
          matchesArea &&
          matchesPrice
        );
      }),
    }))
    .filter((floor) => floor.units.length > 0);
    if(Loading){
      return (
        <div className="flex justify-center items-center h-screen"> 
        <img src={loader} alt="" height={280} width={280}/>
        </div>
      )
     }
  return (
    <Router>
      <AppContent
        wishListArray={wishListArray}
        setWishListArray={setWishListArray}
        filters={filters}
        updateFilters={updateFilters}
        filteredUnits={filteredUnits}
        isSideBarOpen={isSideBarOpen}
        handleCloseSidebar={handleCloseSidebar}
      />
    </Router>
  );
};

export default App;
