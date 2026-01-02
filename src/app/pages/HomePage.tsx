import React from 'react';

const HomePage = () => {
    return (
        <div className='p-4 space-y-4'>
            <div className="space-y-4">
                <h1 className='text-3xl font-bold mb-4'>
                    Design System Documentation
                </h1>
                
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">About This Design System</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This is a comprehensive design system built with React, Vite, and Tailwind CSS. 
                        It provides a collection of reusable UI components, design tokens, and documentation 
                        to ensure consistency across our products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🏗️ Components</h3>
                        <p className="text-gray-600 mb-4">
                            Explore our library of accessible, customizable UI components built with 
                            Radix UI primitives and styled with Tailwind CSS.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Buttons with multiple variants and sizes</li>
                            <li>• Form inputs and controls</li>
                            <li>• Navigation components</li>
                            <li>• Layout utilities</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🎨 Design Tokens</h3>
                        <p className="text-gray-600 mb-4">
                            Consistent design tokens including colors, typography, spacing, and more 
                            to maintain visual harmony across all interfaces.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Color palettes and themes</li>
                            <li>• Typography scales</li>
                            <li>• Spacing and sizing</li>
                            <li>• Responsive breakpoints</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 How to Use</h3>
                    <p className="text-gray-600 mb-4">
                        This documentation serves as both a reference guide and a playground for our design system. 
                        Use the sidebar to navigate to specific components or design tokens.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-gray-50 p-4 rounded">
                            <span className="font-medium text-gray-900">Components</span>
                            <p className="text-gray-600 mt-1">Interactive examples and API documentation</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                            <span className="font-medium text-gray-900">Colors</span>
                            <p className="text-gray-600 mt-1">Color palettes and usage guidelines</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                            <span className="font-medium text-gray-900">Typography</span>
                            <p className="text-gray-600 mt-1">Font families, sizes, and spacing</p>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-sm border-t pt-4">
                    Built with React • Vite • Tailwind CSS • Radix UI
                </div>
            </div>
        </div>
    );
};

export default HomePage;
