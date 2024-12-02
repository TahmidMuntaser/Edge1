
import React from 'react';

export function Background() {
    return (
        <div className="h-[500px] md:h-[650px] bg-cover bg-center text-5xl mt-16">
            <div className="bg-black h-full w-full bg-opacity-60 flex flex-col justify-center items-center">
                <h1 className="text-white text-5xl md:text-7xl tracking-wide pb-5 font-bold text-center">Discover Your Next Adventure</h1>
                <p className="text-white text-xl md:text-3xl tracking-wider text-center">Plan your dream vacation with us</p>
                <button className="mt-10 px-6 md:px-10 py-3 md:py-5 bg-white text-blue-600 text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300 rounded-full">Explore Now</button>
            </div>
        </div>
    );
}


