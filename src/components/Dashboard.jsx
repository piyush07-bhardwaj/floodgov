import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaFistRaised,
  FaExclamationTriangle,
  FaCheckCircle,
  FaSearch,
  FaExclamationCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

import { AnimatePresence } from "framer-motion";

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "bg-red-500/80 border border-red-700 text-red-900 rounded-full";
    case "medium":
      return "bg-yellow-400/80 border border-yellow-600 text-yellow-900 rounded-full";
    case "low":
      return "bg-green-500/80 border border-green-700 text-green-900 rounded-full";
    default:
      return "bg-gray-400/80 border border-gray-600 text-gray-900 rounded-full";
  }
};

// Dummy data sources
const dummyNGOs = [
  "SEEDS India",
  "Khalsa Aid",
  "Red Cross",
  "Save the Children",
];
const dummyNeeds = [
  "Dry Rations",
  "Clean Water",
  "Baby Food",
  "Medical Camp",
  "Chlorine Tabs",
];
const dummyWorkDone = [
  "Medical camp",
  "Water tankers",
  "Food distribution",
  "Vaccination",
];
const priorities = ["High", "Medium", "Low"];

const Dashboard = () => {
  const [villagesData, setVillagesData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTehsil, setSelectedTehsil] = useState("All");
  const [selectedPriority, setSelectedPriority] = useState("All");

  useEffect(() => {
    fetch("/data/amritsar_villages.json")
      .then((res) => res.json())
      .then((data) => {
        const dynamicData = [];
        Object.keys(data).forEach((district) => {
          data[district].forEach((village) => {
            dynamicData.push({
              village,
              tehsil: district,
              ngo: dummyNGOs[Math.floor(Math.random() * dummyNGOs.length)],
              needs: dummyNeeds[Math.floor(Math.random() * dummyNeeds.length)],
              workDone:
                dummyWorkDone[Math.floor(Math.random() * dummyWorkDone.length)],
              contact: "Jagdeep Singh (A.E.O)",
              phone: "9877297553",
              updated: "2025-09-14",
              priority:
                priorities[Math.floor(Math.random() * priorities.length)],
            });
          });
        });
        setVillagesData(dynamicData);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Filtered data based on search and dropdowns
  const filteredVillages = villagesData.filter((v) => {
    const matchesSearch = v.village
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTehsil =
      selectedTehsil === "All" || v.tehsil === selectedTehsil;
    const matchesPriority =
      selectedPriority === "All" || v.priority === selectedPriority;
    return matchesSearch && matchesTehsil && matchesPriority;
  });

  // Get unique tehsils for dropdown
  const tehsils = ["All", ...new Set(villagesData.map((v) => v.tehsil))];

  return (
    <div className="min-h-screen bg-[#181C26] text-white p-4 md:p-8 font-sans">
      <header className="flex justify-between items-center py-4 px-6 md:px-12 bg-[#242A36] rounded-xl shadow-md mb-8">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7d/WORLD_NGO_DAY_logo.png"
            alt="Amritsar Official Portal Logo"
            className="h-10 w-[9rem] mr-5"
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-white">
              Amritsar Flood Relief
            </span>
            <p className="hidden md:block text-gray-400 text-sm">
              A Joint Initiative by District Administration, Amritsar and
              Organisations
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition duration-300"
          >
            See what you can do
          </a>
          <button className="p-3 bg-white text-[#181C26] rounded-full">
            <FaFistRaised />
          </button>
        </div>
      </header>

      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 p-4 space-y-4 bg-[#242A36] rounded-r-xl shadow-md z-10 hidden md:block">
        {/* Dashboard */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-[#667EEA] rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors">
            <FaUsers className="text-white text-xl" />
          </div>
          <p className="text-xs text-center text-gray-400">All villages</p>
        </div>

        {/* School Status */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
            <FaUsers className="text-white text-xl" />
          </div>
          <p className="text-xs text-center text-gray-400">School status</p>
        </div>

        {/* Veterinary Support */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
            <FaUsers className="text-white text-xl" />
          </div>
          <p className="text-xs text-center text-gray-400">
            Veterinary support
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-gray-800"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <FaUsers className="text-4xl text-[#667EEA] mb-2" />
            <h3 className="text-4xl font-bold">{villagesData.length}</h3>
            <p className="text-sm text-gray-500 uppercase font-semibold mt-1">
              Villages
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-gray-800"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <FaFistRaised className="text-4xl text-[#667EEA] mb-2" />
            <h3 className="text-4xl font-bold">{dummyNGOs.length}</h3>
            <p className="text-sm text-gray-500 uppercase font-semibold mt-1">
              NGOs Active
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-gray-800"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <FaExclamationTriangle className="text-4xl text-yellow-500 mb-2" />
            <h3 className="text-4xl font-bold">
              {villagesData.filter((v) => v.priority === "High").length}
            </h3>
            <p className="text-sm text-gray-500 uppercase font-semibold mt-1">
              High Priority
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-gray-800"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <FaCheckCircle className="text-4xl text-green-500 mb-2" />
            <h3 className="text-4xl font-bold">
              {villagesData.filter((v) => v.priority === "Low").length}
            </h3>
            <p className="text-sm text-gray-500 uppercase font-semibold mt-1">
              Low Priority
            </p>
          </motion.div>
        </div>

        {/* Filters */}

        <div className="bg-white p-6 rounded-xl shadow-md mb-8 text-gray-900">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0 md:space-x-4">
            {/* // Search by village etc */}
            <div className="flex-grow w-full md:w-auto relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by village"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667EEA]"
              />
            </div>

            <div className="flex space-x-4 w-full md:w-auto">
              <select
                value={selectedTehsil}
                onChange={(e) => setSelectedTehsil(e.target.value)}
                className="flex-1 md:flex-none p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667EEA]"
              >
                {tehsils.map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="flex-1 md:flex-none p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667EEA]"
              >
                <option>All</option>
                {priorities.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </select>
              <select className="flex-1 md:flex-none p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667EEA]">
                <option>Sort: Last Updated</option>
              </select>
            </div>
          </div>

          {/* Village Cards */}
          <div className="space-y-4 max-h-[70vh] overflow-y-scroll">
            <AnimatePresence>
              {filteredVillages.map((item, index) => (
                <motion.div
                  key={item.village + index}
                  className="bg-white p-5 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-gray-800 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Priority Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full  font-bold ${getPriorityColor(
                      item.priority
                    )}`}
                  >
                    {item.priority}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold uppercase text-gray-500">
                        Village
                      </span>
                      <span className="text-lg font-bold text-[#667EEA]">
                        {item.village}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold uppercase text-gray-500">
                        Needs
                      </span>
                      <span className="text-md font-medium text-gray-700">
                        {item.needs}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold uppercase text-gray-500">
                        NGO(s)
                      </span>
                      <span className="text-md font-medium text-gray-700">
                        {item.ngo}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold uppercase text-gray-500">
                        Work Done
                      </span>
                      <span className="text-md font-medium text-gray-700">
                        {item.workDone}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold uppercase text-gray-500">
                        Contact
                      </span>
                      <span className="text-md font-medium text-gray-700">
                        {item.contact}
                      </span>
                      {item.phone && (
                        <a
                          href={`tel:${item.phone}`}
                          className="text-sm text-[#667EEA] underline"
                        >
                          {item.phone}
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className="text-sm font-semibold uppercase text-gray-500">
                        Updated
                      </span>
                      <span className="text-md font-medium text-gray-700">
                        {item.updated}
                      </span>
                      <a
                        href="/help"
                        className="inline-block mt-1 text-white bg-gray-800  py-1 rounded-sm font-semibold text-sm text-center w-[5rem] transition"
                      >
                        Help
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
