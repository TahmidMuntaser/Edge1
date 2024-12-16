import React from 'react';

export function ProductList({ children }) {
    return (
        <div id="product" className="w-full h-screen bg-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 p-6 md:p-10 px-20 md:px-40">
                {children}
            </div>
        </div>
    );
}