import React from "react";
import Applogo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const Login=()=>{
    return(
        <div className="flex flex-col min-h-screen font-sans bg-gray-200">

            <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 bg-white ">
                <div className="flex items-center gap-4">
                    <img src={Applogo} className="w-12 h-12"/>
                    <span className="text-xl font-bold tracking-tight">BMI Tracker</span>
                </div>

                <div className="items-center gap-8 md:flex ">
                    <Link to='/help' className="hover:text-green-500 transition-color">Helps?</Link>
                    <Link to='/register' className="hover:text-green-500 transition-color">Register</Link>


                </div>
                
            </nav>

            <main className="flex items-center justify-center flex-1">
                <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
                    <h1 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h1>
                     <p className="mb-6 text-center text-gray-500">Enter your details to access your dashboard.</p>

                     <form>

                     <label className="text-sm font-bold text-gray-900">Email Address</label>
                     <div className="relative mt-1 mb-4">
                        <MdEmail size={24} className="absolute text-gray-400 left-3 top-2"/>
                        <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        

                     </div>

                     <label className="text-sm font-bold text-gray-900">Password</label>
                     <div className="relative mt-1 mb-4 ">
                        <RiLockPasswordFill size={24} className="absolute text-gray-400 left-3 top-2"/>
                        <input
                        type="password"
                        placeholder=". . . . . . . ."
                        className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />

                     </div>

                     <button className="w-full py-2 bg-[#10f06f] border rounded-lg shadow-xl  hover:bg-[#0ed963] font-bold "  > Login </button>

                     </form>

                      
                    <p className="pt-4 text-center text-gray-800">Don't have an account ? 
                        <Link to='/register' className="pl-2 text-green-500 hover:underline">Sign Up</Link>
                    </p>
                

                </div>

              

                
            </main>

        </div>

    )
}
export default Login