import React from 'react';
import { Card } from './Card';

export function PopularDestinations() {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold text-center pt-8">Popular Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 p-6 md:p-10">
                
                <Card
                    image="/beachPhoto2.jpg"
                    title="Tropical Beaches"
                    description="Relax on white sands and enjoy crystal-clear waters."
                />
                 <Card
                    image="/beachPhoto2.jpg"
                    title="Tropical Beaches"
                    description="Relax on white sands and enjoy crystal-clear waters."
                />

                <Card
                    image="/mountain2.jpg"
                    title="Mountain"
                    description="Explore and create adventure."
                />
                
            </div>
        </div>
    );
}