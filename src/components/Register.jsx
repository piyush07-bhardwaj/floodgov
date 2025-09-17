import React, { useState } from "react";
import { FaFistRaised } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy: accept any input and redirect
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8">
        <a
          href="/login"
          className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-700 transition flex items-center"
        >
          <FaFistRaised className="mr-2" /> Back to Login
        </a>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Register
        </h2>
        <p className="text-center text-xs mb-4">
          Create an account to access the NGO dashboard.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            required
          />
          <button className="w-full py-3 bg-gray-800 text-white rounded-lg font-semibold shadow hover:bg-gray-700 transition">
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <span
            className="text-gray-700 font-semibold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
