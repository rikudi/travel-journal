import React from "react";

export default function Footer() 
{
    return (
        <div className="flex justify-between footer container mx-auto bg-red-500 shadow p-7">
            <p className="text-white  text-xs font-medium tracking-wide">Created with ReactJS & TailwindCSS</p>
            <p className="text-white  text-xs font-normal tracking-wider hover:text-red-100"><a href="https://www.linkedin.com/in/riku-kaartoaho-6916b0212/">@Riku</a></p>
        </div>
    )
}