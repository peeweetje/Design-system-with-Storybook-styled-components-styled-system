import React from 'react';

const HomePage = () => {
    return (
        <div className='p-4 space-y-4'>
            <h1 className='text-2xl font-bold mb-4'>
                Welcome to the Documentation
            </h1>
            <p>
                This is the main content area. The sidebar should be visible on the
                left and push this content.
            </p>
            <p className='text-grey-60'>
                Select a component from the sidebar to view its documentation and examples.
            </p>
        </div>
    );
};

export default HomePage;
