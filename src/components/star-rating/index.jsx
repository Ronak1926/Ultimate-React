import {FaStar} from 'react-icons/fa'
import React, { useState } from 'react';

export default function StarRating({noOfStar}){
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const handleClick = (currentIndex) => {
        setRating(currentIndex);
    }
    const handleMouseEnter = (currentIndex) => {
        setHover(currentIndex)
    }
    const handleMouseLeave = (currentIndex) => {
        setHover(rating);
    }
    return (
        <div className="h-screen w-full flex items-center justify-center pt-10 ">
            <div className='flex'>
            {
                [...Array(noOfStar)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar key={index} 
                        className={index <= (hover || rating)?"text-amber-400":"text-black"} 
                        onClick={() => handleClick(index)} 
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}