import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
         <Outlet/>
        </main>
      </div>
    </div>

  );
};

export default DefaultLayout;
