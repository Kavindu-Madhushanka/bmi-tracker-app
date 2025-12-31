import React from "react";

const FeatureItem=({icon,title,description})=>{
    return(
        <div className="flex flex-col items-center bg-slate-100 border-2 border-[#00FF7F] rounded-2xl shadow-sm 
        hover:shadow-xl scale-105 transition-shadow duration-300">
            <div className=" text-[#00FF7F] pt-6">
            {icon}
            </div>
        
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="px-6 pb-6 leading-relaxed text-left text-gray-500">{description}</p>

            


        </div>
    )
}

export default FeatureItem