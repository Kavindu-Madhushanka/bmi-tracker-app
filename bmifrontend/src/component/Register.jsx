import React, { useState } from "react";
import Applogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Girl from "../assets/gymgirl.jpg";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Register = () => {
  const [showPassword, setPassword] = useState(false);
  const [isMenuOpen, setMenuStatus] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle register submit
  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5125/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed!");
      }

      const data = await response.json();
      alert("Registration successful!");
      // TODO: redirect to login or calculator page
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <div className="relative min-h-screen font-sans bg-gray-200">
      {/*Navigation Bar*/}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 mx-auto bg-white border max-w-7xl">
        <div className="flex items-center gap-4 ">
          <img src={Applogo} className="w-12 h-12" />
          <span className="text-xl font-bold tracking-tight">BMI Tracker</span>
        </div>

        <div className="items-center hidden gap-8 md:flex">
          <Link to="/" className="transition-colors hover:text-green-500">
            Home
          </Link>
          <Link to="/about" className="transition-colors hover:text-green-500">
            About
          </Link>
          <Link
            to="/contact"
            className="transition-colors hover:text-green-500"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuStatus(!isMenuOpen)}
            className="text-gray-900 outline-none"
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute flex flex-col items-center px-6 py-4 space-y-4 bg-white border rounded-lg shadow-lg right-12 md:hidden animate-in slide-in-from-top top-12">
            <Link
              to="/"
              className="block transition-colors hover:text-green-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block transition-colors hover:text-green-500"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block transition-colors hover:text-green-500"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      <main className="flex items-center justify-center px-4 py-12">
        <div className="flex flex-col w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-3xl md:flex-row">
          {/*left side image*/}
          <div className="relative md:w-1/2 h-[400px] md:h-auto">
            <img
              src={Girl}
              className="absolute inset-0 object-cover w-full h-full"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/40">
              <div className="p-3 mb-4 border rounded-full bg-emerald-500/20 w-fit border-emerald-500/30">
                <FaMagnifyingGlassChart className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="mb-4 text-4xl font-bold">
                Your Health, Data-Driven.
              </h2>
              <p className="text-lg leading-relaxed text-gray-200">
                Join thousands of users tracking their progress and achieving
                their fitness goals with precision.
              </p>
            </div>
          </div>
          {/*right side form*/}
          <div className="p-8 md:w-1/2 lg:p-12">
            <div className="max-w-md mx-auto">
              <h1 className="mb-2 text-3xl font-bold text-gray-800">
                Create Account
              </h1>
              <p className="mb-8 text-gray-500">
                Enter your details below to start your journey.
              </p>

              <form className="space-y-5" onSubmit={handleRegister}>
                {/* username */}
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Kavee Madu"
                      className="w-full px-4 py-3 transition border border-gray-200 outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <FaUser className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="kavee@example.com"
                      className="w-full px-4 py-3 transition border border-gray-200 outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <MdEmail className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 characters"
                      className="w-full px-4 py-3 transition border border-gray-200 outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-emerald-500"
                    >
                      {showPassword ? (
                        <FaEye size={20} />
                      ) : (
                        <FaEyeSlash size={20} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Re-enter password"
                      className="w-full px-4 py-3 transition border border-gray-200 outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <FaEyeSlash className="absolute right-4 top-3.5 text-gray-300 w-5 h-5" />
                  </div>
                </div>

                <button
                  className="w-full bg-[#10f06f] text-gray-900 font-bold py-4 rounded-xl hover:bg-[#0ed963] transition shadow-lg shadow-emerald-200 mt-4"
                  type="submit"
                >
                  Register
                </button>
              </form>
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-bold text-gray-800 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
              <p className="mt-12 text-xs text-center text-gray-400">
                By registering, you agree to our{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
