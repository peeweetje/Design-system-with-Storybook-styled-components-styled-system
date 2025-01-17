import { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className='flex min-h-screen'>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main
        className={`flex-1 p-4 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}
      >
        <h1 className='text-2xl font-bold mb-4'>
          Welcome to the Documentation
        </h1>
        <p>
          This is the main content area. The sidebar should be visible on the
          left and push this content.
        </p>
      </main>
    </div>
  );
};

export default App;
