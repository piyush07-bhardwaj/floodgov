// LandingPage.jsx
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaFistRaised } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const villages = [
  { name: "Wazir Bhullar", tehsil: "Baba Bakala Sahib" },
  { name: "Shero Baggah", tehsil: "Baba Bakala Sahib" },
  { name: "Shero Nigah", tehsil: "Baba Bakala Sahib" },
  { name: "Budda theh", tehsil: "Baba Bakala Sahib" },
  { name: "Kot Mehtab", tehsil: "Baba Bakala Sahib" },
];

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const LandingPage = () => {

    const [villagesData , setVillageData] = useState([])
    useEffect(()=>{
      fetch('/data/amritsar_villages.json').then(res=>res.json()).then(data=>{
        setVillageData(data)
      }) 
    },[])
   
  return (
    <div className="min-h-screen bg-gray-900/95 text-gray-800 p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 md:px-12 bg-white rounded-xl shadow-md mb-8 border border-gray-200">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7d/WORLD_NGO_DAY_logo.png"
            alt="Portal Logo"
            className="h-10 w-[9rem] mr-2"
          />
        </div>
        <span className="font-bold text-xl text-gray-900">
          ARITSAR OFFICIAL PORTAL
        </span>
        <nav>
          <ul className="flex space-x-6 md:space-x-10">
            <li>
              <a
                href="/info"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/info"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Helplines
              </a>
            </li>
            <li>
              <a
                href="/info"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                NGOs
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto">
        {/* {flood relief} */}
        <motion.section
          className="relative text-center border border-gray-200 rounded-3xl shadow-md mb-12 px-6 py-12 overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {/* Background image with translucency */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://www.smilefoundationindia.org/donation/donate-for-education/images/banner2.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3, // adjust transparency
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              AMRITSAR FLOOD RELIEF
            </h1>
            <p className="text-md md:text-lg font-medium text-white mb-8">
              <span className="text-white">
                Saanjha Uprala — A Joint Initiative by District Administration,
                Amritsar and Organisations
              </span>
            </p>
            <p className="max-w-3xl text-white mx-auto text-lg md:text-xl font-light leading-relaxed mb-10">
              Heavy monsoon rains caused localized flooding in riverine belts.
              This portal provides verified updates, response metrics, and
              secure channels for NGOs to collaborate with district authorities.
            </p>
            <a
              href="#how-to-help"
              className="inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-gray-700 transition"
            >
              SEE WHAT YOU CAN DO →
            </a>
          </div>
        </motion.section>

        {/* Flood Situation Gallery */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-md mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Flood Situation Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border-2 border border-gray-300"
              >
                <img
                  className="h-[200px] w-full object-cover rounded-lg"
                  src="/floods/flood1.jpg"
                  alt=""
                />
              </div>
            ))}
          </div>
        </motion.div>
        {/* Overview + Key Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Heavy and sustained rainfall, along with overflows from the Ravi
              River and Sakki Nallah, caused significant flooding across the
              border districts of Amritsar. The disaster impacted{" "}
              <strong>196 villages</strong>, affecting over{" "}
              <strong>136,000 people</strong>. The report confirms{" "}
              <strong>8 human lives were lost</strong> and multiple breaches in
              the river and nallah embankments.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Government Actions
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Power & Water:</span> PSPCL
                restored electricity to all 75 affected villages.
              </li>
              <li>
                <span className="font-semibold">Medical Relief:</span> Camps set
                up, medicines distributed, fogging done.
              </li>
              <li>
                <span className="font-semibold">Animal Husbandry:</span>{" "}
                Veterinary teams treated livestock, fodder supplied.
              </li>
              <li>
                <span className="font-semibold">Shelter & Relief:</span> Centers
                opened, ration kits & blankets distributed.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Helplines + How to Help */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              id="helplines"
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Flood Control Helplines
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <FaPhoneAlt className="text-purple-600 mr-3" /> District Control
                Room: 0183-2229125
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-purple-600 mr-3" /> Ajnala Tehsil:
                01858-245510
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-purple-600 mr-3" /> NDRF HQ:
                011-24363260
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-purple-600 mr-3" /> All-India
                Helpline: 112
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              id="how-to-help"
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              How You Can Help
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                NGOs can register their support (health, shelter, logistics).
              </li>
              <li>Coordinate all activities via District Control Room.</li>
            </ul>
          </motion.div>
        </div>

        {/* Villages Table */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-md mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Affected Villages — Amritsar
          </h2>

          {/* Map with District Dots */}
          <div className="flex justify-center mb-8 border border-gray-200 rounded-lg">
            <div className="relative w-[600px]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Punjab_district_map.png/800px-Punjab_district_map.png"
                alt="Punjab District Map"
                className="w-full rounded-lg "
              />
            </div>
          </div>

          {/* Villages Table */}
          <div className="flex gap-2">
            <input
              placeholder="Search villages"
              className="w-[70%] p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              placeholder="Search villages"
              className="w-[30%] p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold">
                <tr>
                  <th className="p-4">SNO</th>
                  <th className="p-4">Village</th>
                  <th className="p-4">Tehsil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {villages.map((village, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="p-4 font-medium text-gray-800">
                      {index + 1}
                    </td>
                    <td className="p-4 font-semibold text-purple-700 underline hover:no-underline cursor-pointer">
                      {village.name}
                    </td>
                    <td className="p-4 text-gray-600">{village.tehsil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer
        id="ngo"
        className="flex flex-col md:flex-row justify-between items-center py-8 px-8 bg-white rounded-2xl shadow-md mt-8"
      >
        <div className="flex-1 mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            For Interested NGOs
          </h3>
          <p className="text-gray-700">
            Register support for water, sanitation, shelter, health & logistics.
            Coordinate with the District Control Room.
          </p>
        </div>
        <a
          href="/login"
          className=" bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-700 transition flex items-center"
        >
          <FaFistRaised className="mr-2" /> Sign In / Register
        </a>
      </footer>
    </div>
  );
};

export default LandingPage
