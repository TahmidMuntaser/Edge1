import React, { useState } from 'react';

export function TypingTracker() {
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Type something..."
            />
            <p className="mt-2">String size: {input.length}</p>
        </div>
    );
}