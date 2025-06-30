import React, { useState,useEffect } from 'react';

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");
    
    const handleCreateRandomHexColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }

    const handleCreateRandomRgbColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        console.log(rgbColor);

        setColor(rgbColor);
    }
    useEffect (() => {
        if (typeOfColor === "rgb") {
            handleCreateRandomRgbColor();
        }
        else{
            handleCreateRandomHexColor();
        }
    }, [typeOfColor])
    return (
        <div className="h-screen w-full p-7" style={{backgroundColor: color}}>
            <div className='flex justify-center'>
                <button className='text-black mx-3 text-nowrap bg-white px-5 py-3 border-2'onClick={() => setTypeOfColor("hex")}>Create HEX color</button>

                <button className='text-black mx-3 text-nowrap bg-white px-5 py-3 border-2'onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>

                <button className='text-black mx-3 text-nowrap bg-white px-5 py-3 border-2' onClick={typeOfColor==="hex"?handleCreateRandomHexColor:handleCreateRandomRgbColor}>Generate Random color</button>
           </div>
            <div className='flex flex-col justify-center items-center text-white text-6xl gap-6 h-full'>
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                
                <h1>{color}</h1>
            </div>

            
        </div>
    )
}