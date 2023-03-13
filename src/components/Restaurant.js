import React from "react";

const Restaurant = ({ name, image, rating, category }) => {
  console.log(image)
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden w-64">
      <img className="w-full h-32 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400">{category}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12.585L16.417 16l-1.25-7.232L18.75 7.5l-7.834-1.017L10 0 8.084 6.483 0 7.5l6.333 4.268L5.583 20 10 15.733 14.417 20l2.25-8.232L20 7.5l-8.084-.983L10 0z" />
            </svg>
          </span>
          <span className="text-sm text-gray-600">{rating} stars</span>
        </div>
        <div className="">
        <button className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white text-sm font-medium rounded-lg py-2 px-4 m-2">Manage</button>
        <button className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white text-sm font-medium rounded-lg py-2 px-4 m-2">Turn Off</button>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
