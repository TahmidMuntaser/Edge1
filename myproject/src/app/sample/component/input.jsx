import React from 'react';

export function Input({ label, value, onChange }) {
    return (
        <div className="mb-4">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={label}
                className="w-1/2 p-2 border border-gray-300 rounded hover:border-gray-950 focus:outline-none focus:border-red-900"
            />
        </div>
    );
}