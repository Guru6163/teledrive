import React, { useState } from "react";
import  { FaHome, FaCog, FaUtensils, FaUsers, FaBox, FaTruck, FaQuestionCircle, FaSignOutAlt}from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const navLinks = [
    { id: 1, label: "Dashboard", to: "/dashboard", icon: <FaHome /> },
    { id: 2, label: "Restaurants", to: "/restaurants", icon: <FaUtensils /> },
    { id: 3, label: "Customers", to: "/customers", icon: <FaUsers /> },
    { id: 4, label: "Orders", to: "/orders", icon: <FaBox /> },
    { id: 6, label: "Delivery Partners", to: "/deliveryPartners", icon: <FaTruck /> },
    { id: 7, label: "Support", to: "/support", icon: <FaQuestionCircle /> },
    { id: 5, label: "Settings", to: "/settings", icon: <FaCog /> },
  ];
  
  return (
    <div className="flex flex-col bg-gray-800 w-64 h-screen">
      <div className="h-20 flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl font-bold tracking-widest">
          Food-X
        </h1>
        <h1 className="text-gray-200 text-sm">-- The Best Option --</h1>
      </div>
      <ul className="flex-grow">
        {navLinks.map(({ id, label, to, icon }) => (
          <Link
            key={id}
            to={to}
            onClick={() => handleClick(label)}
            className={`pl-8 py-2 hover:text-black hover:bg-white flex items-center cursor-pointer ${
              selectedOption === label ? "bg-white text-black" : "text-gray-300"
            }`}
          >
            {icon && <span className="mr-4">{icon}</span>}
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </ul>
      <Link to="login" className="h-20 flex items-center justify-center">
        <button className="bg-red-500 text-white rounded-lg py-2 px-6 hover:bg-red-600 flex items-center">
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
