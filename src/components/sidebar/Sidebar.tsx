// src/components/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-${isOpen ? '64' : '16'} bg-grey-80 text-white transform transition-transform
      `}
    >
      <button
        onClick={toggleSidebar}
        className='absolute top-0 right-4 p-4 text-white'
      >
        ☰
      </button>
      <ul className='mt-12'>
        <li className='px-3 py-1'>Button</li>
        <li className='px-3 py-1'>Header</li>
      </ul>
    </div>
  );
};

export default Sidebar;
