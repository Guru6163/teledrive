import React from 'react';
import { FiDownload } from 'react-icons/fi';

function FileCard({ fileName, fileSize }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-auto w-80">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="font-bold text-xl">{fileName}</div>
          <a href="/" download className="text-gray-500 hover:text-gray-600">
            <FiDownload className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-700 text-base">{fileSize}</p>
      </div>
    </div>
  );
}

export default FileCard;
