import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  }

  async function fetchImage(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== '') {
      fetchImage(url);
    }
  }, [url]);

  if (loading) {
    return <div className="text-4xl text-center">Loading data, please wait!!</div>;
  }

  if (error) {
    return <div className="text-4xl text-center text-red-600">Error loading data. Please try again!!</div>;
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative flex justify-center items-center w-[600px] h-[450px]">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute w-8 h-8 drop-shadow-sm left-4 cursor-pointer text-white"
        />
        {
          image && image.length > 0 &&
          image.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={currentSlide === index ? `rounded-lg shadow-sm w-full h-full object-cover` : `hidden`}
            />
          ))
        }
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute w-8 h-8 drop-shadow-sm right-4 cursor-pointer text-white"
        />

        {/* Dots */}
        <span className="flex absolute bottom-4">
          {
            image && image.length > 0 &&
            image.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={currentSlide === index
                  ? `bg-white h-[15px] w-[15px] rounded-full border-none mx-1 cursor-pointer`
                  : `h-[15px] w-[15px] rounded-full border-none mx-1 cursor-pointer bg-gray-700`}
              ></button>
            ))
          }
        </span>
      </div>
    </div>
  );
}
