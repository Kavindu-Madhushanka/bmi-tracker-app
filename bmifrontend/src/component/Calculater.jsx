import React from "react";
import Applogo from "../assets/logo.png"
import { CiCalculator1 } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { LuSquareActivity } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";


const Calculater=()=>{
    const classifications=[
         { range: 'Below 18.5', category: 'Underweight', color: 'text-blue-500' },
         { range: '18.5 - 24.9', category: 'Normal Weight', color: 'text-green-500', bg: 'bg-green-50' },
         { range: '25.0 - 29.9', category: 'Overweight', color: 'text-orange-500' },
         { range: '30.0 and Above', category: 'Obesity', color: 'text-red-500' },
    ];
    return(
        <div className="flex min-h-screen font-sans bg-gray-200">
            <aside className="fixed top-0 left-0 z-50 flex flex-col justify-between w-64 h-screen p-6 bg-white border-r">
                <div>
                    <div className="flex items-center gap-2">
                        <div>
                        <img src={Applogo} className="w-12 h-12"/>
                        </div>
                        <div>
                            <span className="text-xl font-bold tracking-tight">BMI Tracker</span>
                            <p className="text-gray-500">Manage your health</p>
                        </div>

                    </div>

                    <nav className="pt-8 gap-y-4">
                        <button className="flex w-full p-3 rounded-lg border-1 hover:bg-green-400 hover:shadow-xl"><CiCalculator1 size={24} className=""/><p className="pl-2">Calculate BMI</p></button>
                         <button className="flex w-full p-3 rounded-lg border-1 hover:bg-green-400 hover:shadow-xl">< GoHistory size={23} className=""/><p className="pl-2">Your History</p></button>
                         <button className="flex w-full p-3 rounded-lg border-1 hover:bg-green-400 hover:shadow-xl"><  CiSettings size={24} className=""/><p className="pl-2">Setting</p></button>



                    </nav>
                </div>
                <div className="pt-6 border-top">
                    <button className="flex items-center gap-3 mb-6 text-gray-500 transition hover:text-red-500"><IoLogOutOutline size={24}/>Logout</button>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-400 rounded-full"><FaUserLarge  size={24} className="text-gray-600"/></div>
                        <div>
                             <div>
                            <span className="text-xl font-bold tracking-tight">User Name</span>
                            <p className="text-gray-500">alex@example.com</p>
                        </div>
                        </div>
                        

                    </div>

                </div>

            </aside>

            <main className="flex-1 p-10 ml-64">
                <header className="mb-8">
                     <h2 className="text-3xl font-bold text-gray-800">Calculate your BMI</h2>
                     <p className="mt-2 text-gray-500">Enter your height and weight below to get your Body Mass Index result.</p>

                </header>
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-7 space-y-8">
                        {/*input form */}
                        <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl">
                             <h3 className="mb-6 text-lg font-bold">Your Details</h3>
                             <form>
                             <div className="grid grid-cols-2 gap-6">
                                
                                <div>
                                    <label className="block mb-2 text-sm text-gray-500">Height (cm)</label>
                                    <input 
                                      type="number" placeholder="e.g. 175" 
                                      className="w-full p-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                                      />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-500">Weight (kg)</label>
                                    <input 
                                     type="number" placeholder="e.g. 70" 
                                     className="w-full p-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                                     />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-500">Age</label>
                                    <input 
                                     type="number" placeholder="e.g. 25" 
                                     className="w-full p-3 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
                                     />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-500">Gender</label>
                                    <select className="w-full p-3 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-400">
                                    <option>Male</option>
                                    <option>Female</option>
                                    </select>
                                </div>

                             </div>

                             <button className="flex items-center justify-center w-full gap-2 py-4 mt-8 font-bold text-white transition bg-green-400 shadow-lg hover:bg-green-500 rounded-xl shadow-green-100">
                               <CiCalculator1 size={20} /> Calculate BMI</button>
                               </form>
                               

                        </div>
                        {/* Classifications Table */}
                    <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl">
                        <h3 className="mb-4 text-lg font-bold">BMI Classifications</h3>
                        <div className="overflow-hidden">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-left text-gray-400 border-b border-gray-50">
                                    <th className="pb-4 font-medium tracking-wider uppercase">BMI Range</th>
                                    <th className="pb-4 font-medium tracking-wider uppercase">Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classifications.map((item,index)=>(
                                        <tr key={index} className={`${item.bg || ''} transition-colors`}>
                                            <td className="py-4 text-gray-600">{item.range}</td>
                                            <td className={`py-4 font-semibold ${item.color}`}>{item.category}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    </div>

                    <div className="col-span-5 space-y-6">
                        <div className="bg-[#0a110a] text-white p-8 rounded-[40px] relative overflow-hidden">
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-2 rounded-lg bg-green-900/50">
                                <LuSquareActivity size={24} className="text-green-400"/>
                                </div>
                                <span className="text-[10px] bg-green-900 text-green-400 px-3 py-1 rounded-full font-bold">LATEST RESULT</span>
                                </div>

                                 <p className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">Your Body Mass Index</p>
                                  <h4 className="mb-4 font-bold text-7xl">24.5</h4>
                                  <p className="flex items-center gap-2 mb-8 text-xl font-bold text-green-400">Normal Weight
                                    <span className=""><FaCheck size={24}/></span>
                                  </p>

                                  <div className="pt-6 mb-8 border-t border-gray-800">
                                    <p className="text-sm leading-relaxed text-gray-400">
                                        Great job! Your BMI is within the healthy range of 18.5 to 24.9. Maintain your balanced diet and regular exercise.
                                    </p>

                                  </div>

                                  <div className="flex gap-4">
                                    <button className="flex-1 py-3 text-sm font-medium transition bg-gray-800 hover:bg-gray-700 rounded-xl">Save Result</button>
                                    <button className="flex-1 py-3 text-sm font-medium transition bg-gray-800 hover:bg-gray-700 rounded-xl">Share</button>

                                  </div>


                        </div>
                    </div>

                    
                    

                </div>

            </main>

        </div>
    )
}

export default Calculater