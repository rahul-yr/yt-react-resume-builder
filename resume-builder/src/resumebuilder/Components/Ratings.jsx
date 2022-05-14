import React from "react";

function Ratings({ rating }) {
  if (rating === 2) {
    return (
      <div className=" w-full h-[0.5em] mx-1 bg-gray-200 rounded dark:bg-gray-700">
        <div className={`h-[0.5em] bg-yellow-400 rounded w-[40%]`}></div>
      </div>
    );
  } else if (rating === 3) {
    return (
      <div className=" w-full h-[0.5em] mx-1 bg-gray-200 rounded dark:bg-gray-700">
        <div className={`h-[0.5em] bg-yellow-400 rounded w-[60%]`}></div>
      </div>
    );
  } else if (rating === 4) {
    return (
      <div className=" w-full h-[0.5em] mx-1 bg-gray-200 rounded dark:bg-gray-700">
        <div className={`h-[0.5em] bg-yellow-400 rounded w-[80%]`}></div>
      </div>
    );
  } else if (rating === 5) {
    return (
      <div className=" w-full h-[0.5em] mx-1 bg-gray-200 rounded dark:bg-gray-700">
        <div className={`h-[0.5em] bg-yellow-400 rounded w-[100%]`}></div>
      </div>
    );
  } else {
    return (
      <div className=" w-full h-[0.5em] mx-1 bg-gray-200 rounded dark:bg-gray-700">
        <div className={`h-[0.5em] bg-yellow-400 rounded w-[20%]`}></div>
      </div>
    );
  }
}

export default Ratings;
