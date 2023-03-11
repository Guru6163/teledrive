import React from 'react';
import { FaHome, FaFolder, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-800 w-64 h-screen">
      <div className="h-20 flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl font-bold tracking-widest">TeleDrive</h1>
        <h1 className='text-gray-200 text-sm'>Unlimited Free Storage</h1>
      </div>
      <ul className="flex-grow">
        <Link to="/" className="pl-8 py-2 text-gray-300 hover:text-black hover:bg-white flex items-center cursor-pointer">
          <FaHome className="mr-4" />
          <span className="font-medium">Home</span>
        </Link>
        <Link to="/folder" className="pl-8 py-2 text-gray-300 hover:text-black hover:bg-white flex items-center cursor-pointer">
          <FaFolder className="mr-4" />
          <span className="font-medium">Folders</span>
        </Link>
        <Link to="/settings" className="pl-8 py-2 text-gray-300 hover:text-black hover:bg-white flex items-center cursor-pointer">
          <FaCog className="mr-4" />
          <span className="font-medium">Settings</span>
        </Link>
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
