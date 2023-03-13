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
    <section class="bg-white dark:bg-gray-900 min-h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-4 lg:mb-4">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Partnered Restaurants</h2>
        <p class="font-light text-gray-500 lg:mb-4 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New Restaurant</button>

      </div>
         <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-4">
        {restaurants.map((ele)=><Restaurant name={ele.name} image={ele.image} rating={ele.rating} category={ele.category} />)}
      </div>
    </div>
  </section>
  

  );

}

export default Restaurants;
