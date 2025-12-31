import React from "react";
import Applogo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Login=()=>{
    return (
        <div className="relative min-h-screen font-sans bg-gray-200">

            <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 mx-auto bg-white max-w-7xl">
                <div className="flex items-center gap-4">
                <img src={Applogo} className="w-12 h-12"/>
                <span className="text-xl font-bold tracking-tight">BMI Tracker</span>
                </div>
                <div>
                    <Link to='/help' className="transition-colors hover:text-green-500">Help?</Link>
                </div>

            </nav>

            <div  className="flex items-center w-full max-w-md p-8 text-gray-900 bg-white border-gray-100 rounded-3xl">
                <h2 className="mb-2 text-3xl font-bold text-center text-gray-800">Welcome Back</h2>

            </div>
            
        </div>
    )
}

export default Login