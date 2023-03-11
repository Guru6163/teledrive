import React from 'react';
import FileCard from '../components/FileCard';

function MyFiles() {
  const files = [
    { fileName: 'GTA Vice City', fileSize: '20GB' },
    { fileName: 'The Sims 4', fileSize: '10GB' },
    { fileName: 'Photoshop CC 2022', fileSize: '2GB' },
    { fileName: 'Microsoft Office 365', fileSize: '5GB' },
  ];

  return (
    <div className="m-2 p-2 flex flex-wrap">
      {files.map((file, index) => (
        <FileCard key={index} className="m-3 p-3" fileName={file.fileName} fileSize={file.fileSize} />
      ))}
    </div>
  );
}

export default MyFiles;
