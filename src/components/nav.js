import React from "react";
import {GiWorld} from "react-icons/gi"


export default function Navbar() 
{
    return (
        <nav className="container mx-auto bg-red-500 shadow p-7">
            <div className="container mx-auto flex justify-center alignt-center text-white text-3xl">
                <GiWorld />
                <h3 className="text-white  text-lg font-medium pl-1">my travel journal.</h3>
            </div>
        </nav>
    )
        
}