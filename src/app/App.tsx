import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import ButtonPage from './pages/ButtonPage';
import HomePage from './pages/HomePage';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className='flex min-h-screen'>
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <main
        className={`flex-1 p-4 transition-all duration-300 ${isSidebarOpen ? 'ml-32' : 'ml-16'}`}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
