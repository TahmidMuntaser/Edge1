import React from 'react';

export function PopularDestinations() {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold text-center pt-8">Popular Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 p-6 md:p-10">
             
                <div className="relative h-[400px] md:h-[500px] w-full shadow-lg rounded-3xl hover:scale-105 transition-transform duration-700">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-t-3xl"
                        style={{
                            backgroundImage: "url('/beachPhoto2.jpg')", 
                            height: '65%',
                        }}
                    ></div>
                    <div
                        className="absolute bottom-0 w-full bg-white flex flex-col text-black p-4 shadow-lg rounded-3xl"
                        style={{ height: '35%' }}
                    >
                        <h2 className="text-xl md:text-2xl font-bold">Tropical Beaches</h2>
                        <p className="text-lg">Relax on white sands and enjoy crystal-clear waters.</p>
                    </div>
                </div>

                
                <div className="relative h-[400px] md:h-[500px] w-full shadow-lg rounded-3xl hover:scale-105 transition-transform duration-700">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-t-3xl"
                        style={{
                            backgroundImage: "url('/beachPhoto2.jpg')", 
                            height: '65%',
                        }}
                    ></div>
                    <div
                        className="absolute bottom-0 w-full bg-white flex flex-col text-black p-4 shadow-lg rounded-3xl"
                        style={{ height: '35%' }}
                    >
                        <h2 className="text-xl md:text-2xl font-bold">Tropical Beaches</h2>
                        <p className="text-lg">Relax on white sands and enjoy crystal-clear waters.</p>
                    </div>
                </div>

                <div className="relative h-[400px] md:h-[500px] w-full shadow-lg rounded-3xl hover:scale-105 transition-transform duration-700">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-t-3xl"
                        style={{
                            backgroundImage: "url('/mountain2.jpg')", 
                            height: '65%',
                        }}
                    ></div>
                    <div
                        className="absolute bottom-0 w-full bg-white flex flex-col text-black p-4 shadow-lg rounded-3xl"
                        style={{ height: '35%' }}
                    >
                        <h2 className="text-xl md:text-2xl font-bold">Mountains</h2>
                        <p className="text-lg">Explore and create adventure.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
