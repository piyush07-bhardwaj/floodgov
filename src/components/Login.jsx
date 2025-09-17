import React, { useState } from "react";
import { FaFistRaised } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone) return alert("Enter phone number");
    setStep(2); // Move to OTP step
  };

  
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP. Try 1234!");
    }
  };
  const handleLogin = ()=>{
    if(email==="" || password==="") return alert("Enter all fields")
    else{
      alert("Logged in successfully");
      navigate("/dashboard");
    }
  }
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center bg-gray-50 p-4">
      <div className="mb-8">
        <a
          href="/"
          className=" bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-700 transition flex items-center"
        >
          <FaFistRaised className="mr-2" /> Back to homepage
        </a>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Government Portal Login
        </h2>
        <p className="text-center text-xs mb-2">
          Sign in to access the NGO dashboard.
        </p>

        {/* {normal login} */}
        <form
          action=""
          className="border flex flex-col gap-3 border-gray-200 rounded-lg p-3 mb-6"
        >
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <div className="">
              <button
                type="submit"
                onClick={handleLogin}
                className=" w-full  bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-700 transition  text-center"
              >
                Login
              </button>
            </div>
          
        </form>

        {/* {opt login} */}
        <p className="mb-2 text-center text-xs mt-2 border-t border-gray-200">
          Login using phone number
        </p>
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button className=" w-full  bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-700 transition  text-center">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP (1234)"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className=" w-full  bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-700 transition  text-center">
              Send OTP
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-gray-500">
          Don't have an account?{" "}
          <span
            className="text-gray-700  font-semibold cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
