import React from "react";
import Restaurant from "../components/Restaurant";
import { FaPlus } from "react-icons/fa";


const restaurants = [
  {
    name: "Delicious Eats",
    image: "https://picsum.photos/300/300",
    rating: "4.5",
    category: "American",
  },
  {
    name: "Tasty Treats",
    image: "https://picsum.photos/300/300",
    rating: "4.0",
    category: "Italian",
  },
  {
    name: "Spicy Bites",
    image: "https://picsum.photos/300/300",
    rating: "4.2",
    category: "Mexican",
  },
  {
    name: "Savory Snacks",
    image: "https://picsum.photos/300/300",
    rating: "4.3",
    category: "Chinese",
  },
  {
    name: "Sweet Delights",
    image: "https://picsum.photos/300/300",
    rating: "4.8",
    category: "Dessert",
  },
  {
    name: "Tasty Thai",
    image: "https://picsum.photos/300/300",
    rating: "4.6",
    category: "Thai",
  },
];

function Restaurants() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Discover Restaurants</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center">
          <FaPlus className="mr-2" /> Add New Restaurant
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurants.map((restaurant, index) => (
          <Restaurant key={index} {...restaurant} />
        ))}
      </div>
    </div>
  );

}

export default Restaurants;
