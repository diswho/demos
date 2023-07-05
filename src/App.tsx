import React from 'react';
import './App.css';
import FileUploader from './components/FileUploader';

function App() {
  return (
    <div className="container" style={{ width: '600px' }}>
      <div>
        <h3>Test Upload File</h3>
      </div>
      <FileUploader />
    </div>
  );
}

export default App;
