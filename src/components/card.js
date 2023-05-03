import React from "react";
import {ImLocation} from "react-icons/im"
import { Divider } from "@mui/material";


export default function Card(props) 
{
    return (
        <>
        <div className="flex justify-center card mt-10 mb-14">
            <img className="object-cover h-96 w-96 rounded" 
            src={props.imageUrl}
             alt="Glasgow cathedral"/>

             <div className="flex flex-col align-center p-1 pl-8">
                <div className="flex pt-10 items-center">
                    <ImLocation className="text-red-500 text-lg" />
                    <p className="pr-6 pl-1 tracking-widest uppercase">{props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank" className="text-slate-500 hover:text-slate-800 underline underline-offset-2 decoration-1">View on Google maps</a>
                </div>
                <h2 className="text-4xl font-bold pb-16">{props.title}</h2>
                <h4 className="text-lg font-bold pb-2">{props.startDate} - {props.endDate}</h4>
                <p className="break-normal max-w-md">{props.description}</p>
             </div>
        </div>
        <div className="flex justify-center pb">
            <Divider sx={{width: 4/6, bgcolor: '#F5F5F5' }}/>
        </div>
        </>
    )
    
}