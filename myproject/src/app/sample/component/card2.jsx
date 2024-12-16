import React from 'react';

export function Card2({ number }) {
    return (
        <div className="bg-white w-full p-4 shadow-lg rounded-md">
            <h1 className="text-xl font-bold">Card {number}</h1>
        </div>
    );
}