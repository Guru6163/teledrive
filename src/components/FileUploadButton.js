import React, { useState } from 'react';

function FileUploadButton() {
  const [fileName, setFileName] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    // Handle file upload logic here
  };

  return (
    <div className="relative inline-flex">
      <label htmlFor="file-upload" className="flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        {fileName ? fileName : 'Choose a file'}
      </label>
      <input id="file-upload" className="sr-only" type="file" onChange={handleFileInputChange} />
    </div>
  );
}

export default FileUploadButton;
