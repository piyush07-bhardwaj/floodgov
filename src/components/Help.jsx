import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUniversity,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const HelpForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "John Doe",
    phone: "9876543210",
    email: "john@example.com",
    address: "123, Sample Street",
    pincode: "143001",
    district: "Amritsar",
    village: "Ghonewala",
    ngo: "",
    donationItems: "",
    paymentMethod: "",
    cardNumber: "",
  });

  const ngoList = [
    { name: "SEEDS India", address: "Sector 8, Amritsar", phone: "9876543211" },
    { name: "Khalsa Aid", address: "Block A, Amritsar", phone: "9876543212" },
    { name: "Red Cross", address: "Street 23, Amritsar", phone: "9876543213" },
    {
      name: "Smile Foundation",
      address: "Sector 15, Amritsar",
      phone: "9876543214",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donation request submitted successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#181C26] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Help / Donate Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <FaUniversity className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA] w-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA] w-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500 text-xl" />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA] w-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA] w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Pincode"
              value={form.pincode}
              onChange={(e) => setForm({ ...form, pincode: e.target.value })}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA]"
            />
            <input
              type="text"
              placeholder="District"
              value={form.district}
              onChange={(e) => setForm({ ...form, district: e.target.value })}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA]"
            />
          </div>

          {/* NGO Selection */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Select NGO
            </label>
            <select
              value={form.ngo}
              onChange={(e) => setForm({ ...form, ngo: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA]"
              required
            >
              <option value="">Select NGO</option>
              {ngoList.map((ngo, idx) => (
                <option key={idx} value={ngo.name}>
                  {ngo.name} - {ngo.address}
                </option>
              ))}
            </select>
          </div>

          {/* Donation Items */}
          <div>
            <label className="font-semibold text-gray-700 mb-2 block">
              Donation Items
            </label>
            <textarea
              placeholder="What items do you want to donate?"
              value={form.donationItems}
              onChange={(e) =>
                setForm({ ...form, donationItems: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA] h-32"
              required
            ></textarea>
          </div>

          {/* Dummy Payment Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={form.paymentMethod}
              onChange={(e) =>
                setForm({ ...form, paymentMethod: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA]"
              required
            >
              <option value="">Payment Method</option>
              <option value="card">Credit / Debit Card</option>
              <option value="upi">UPI</option>
              <option value="cod">Cash on Delivery</option>
            </select>
            <input
              type="text"
              placeholder="Card Number / UPI ID"
              value={form.cardNumber}
              onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#667EEA]"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-700 transition">
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpForm;
