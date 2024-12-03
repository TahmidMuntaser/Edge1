import React from 'react';
import { Card } from './Card';

export function PopularDestinations({children}) {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold text-center pt-8">Popular Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 p-6 md:p-10">
                {children}
                
            </div>
        </div>
    );
}