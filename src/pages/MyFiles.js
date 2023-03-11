import React from 'react';
import FileCard from '../components/FileCard';
import FileUploadButton from '../components/FileUploadButton';

function MyFiles() {
  const files = [
    { fileName: 'GTA Vice City', fileSize: '20GB' },
    { fileName: 'The Sims 4', fileSize: '10GB' },
    { fileName: 'Photoshop CC 2022', fileSize: '2GB' },
    { fileName: 'Microsoft Office 365', fileSize: '5GB' },
    { fileName: 'Microsoft Office 365', fileSize: '5GB' },
    { fileName: 'Microsoft Office 365', fileSize: '5GB' },
    { fileName: 'Microsoft Office 365', fileSize: '5GB' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Files</h1>
        <FileUploadButton />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {files.map((file, index) => (
          <FileCard key={index} className="p-3" fileName={file.fileName} fileSize={file.fileSize} />
        ))}
      </div>
    </div>
  );
}

export default MyFiles;
