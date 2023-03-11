import React from "react";
import FileCard from "../components/FileCard";
import { FaCheck } from "react-icons/fa";

function Home() {
  return (
    <div className="h-full flex">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600  p-6 text-white">
        <h1 className="text-4xl font-bold mb-6">
          Introducing TeleDrive
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
          The ultimate solution for unlimited cloud storage. TeleDrive leverages
          the power of Telegram Cloud Service to provide you with a seamless and
          secure cloud storage experience like never before.
        </p>
        <ul className="text-lg mb-8 leading-relaxed list-disc pl-8">
          <li className="mb-2 flex items-center">
            <FaCheck className="mr-2" />
            Store and access all your important files, documents, photos, and videos in one centralized location.
          </li>
          <li className="mb-2 flex items-center">
            <FaCheck className="mr-2" />
            Enjoy unlimited storage space without worrying about running out of storage on your device.
          </li>
          <li className="mb-2 flex items-center">
            <FaCheck className="mr-2" />
            Your files are encrypted and stored on Telegram's secure servers, ensuring the highest levels of security for your data.
          </li>
        </ul>
        <button className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">
          Go to My Files
        </button>
      </div>
    </div>
  );
}

export default Home;
