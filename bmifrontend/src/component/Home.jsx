import React, { useState } from "react";
import Applogo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Homeimage from "../assets/Living-a-healthy.jpg"
import FeatureItem from "./FeatureItem";
import { FaHistory } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import {FaUserDoctor } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";



const Home=()=>{
    const [menuOpen,setMenu]=useState(false);
    return(
        <div className="min-h-screen font-sans text-gray-900 bg-white">

        {/*Navigation Bar*/}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 mx-auto bg-white border max-w-7xl">
            <div className="flex items-center gap-2">
                <img src={Applogo} className="w-12 h-12"/>
                <span className="text-xl font-bold tracking-tight">BMI Tracker</span>
            </div>

            <div className="items-center hidden gap-8 text-sm font-medium md:flex">
              <Link to="/" className="transition-colors hover:text-green-500">Home</Link>
              <Link to="/login" className="transition-colors hover:text-green-500">Login</Link> 
              <Link to="/register"><button className="px-6 py-2 font-bold transition-transform duration-300 bg-[#00FF7F] rounded-lg hover:scale-110">Register</button></Link>   
               
            </div>

            <div className="flex items-center md:hidden">
                <button onClick={setMenu(!menuOpen)} className="text-gray-900 outline-none">
                    {menuOpen ? <IoClose size={24}/>:<IoMdMenu size={24}/>}
                </button>

            </div>
            </nav>

            {/*Main section */}
            <header className="grid items-center gap-10 px-6 py-16 mx-auto max-w-7xl md:py-24 md:grid-cols-2 bg-slate-100">
                <div className="order-2 md:order-1">
                    <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
                      Track Your BMI<br />
                      <span className="text-[#00FF7F]">
                        <Typewriter
                        words={['Easily', 'Quickly', 'Daily', 'Smartly']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500} />

            


                    </span>
                    </h1>
                    <p className="max-w-md text-lg leading-relaxed text-gray-500">Take control of your health journey. Calculate your Body Mass Index instantly 
                         and track your progress over time with our simple, secure dashboard.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <button className="bg-[#00FF7F]  px-5 py-2 rounded-lg font-bold text-md shadow-lg shadow-green-300 hover:scale-105 transition-all">Get Started</button>
                        <button className="px-5 py-2 font-bold transition-all border-2 rounded-lg text-md hover:scale-105">Login </button>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <img src={Homeimage} className="rounded-[2rem] shadow-2xl w-full h-[400px] object-cover"/>
                </div>
               

            </header>

            <section className="py-20">
                <div className="px-6 mx-auto text-center max-w-7xl">
                    <h2 className="mb-4 text-3xl font-extrabold">Why Track BMI?</h2>
                    <p className="mb-16 font-medium text-gray-500 ">Stay on top of your health goals with these powerful features designed for you.</p>

                </div>

                <div className="grid gap-10 px-8 md:grid-cols-3">
                    <FeatureItem
                    icon={<CiCalculator1 size={40}/>}
                    title="Quick Calculation"
                    description="Get instant result with our easy-to-use
                    calculator.No complex forms.just simple inputs"
                    />
                      <FeatureItem
                    icon={<FaHistory size={35}/>}
                    title="History Tracking"
                    description="Visualize your progress over weeks and
                    months with intuitive chart and history logs"
                    />
                      <FeatureItem
                    icon={<FaUserDoctor size={40}/>}
                    title="Health Tips"
                    description="Receive personalized advice and actionable
                    insights based on your specific heaith metrics"
                    />

                    

                </div>

            </section>

            <footer>
                <div className="mx-auto text-center border bg-slate-100 max-w-7xl ">
                    <p className="pt-6 text-gray-400 font-sx">2025,BMI Tracker App.All rights reserved</p>
                    <p className="pb-6 text-gray-400 text-sx">Created By L.K,Madhushankha</p>
                </div>
            </footer>



            
            </div>

            
    )
}
export default Home