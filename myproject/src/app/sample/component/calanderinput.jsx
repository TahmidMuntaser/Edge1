import React, { useState } from 'react';

export function CalanderInput({ label }){

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return(
        <div className="mb-4">
        <input
            placeholder={label}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-1/2 p-2 border border-gray-300 rounded"
        />
        {isFocused && <div className='w-72 mt-4 h-12 border border-slate-600' ></div>}

    </div>
    )

}