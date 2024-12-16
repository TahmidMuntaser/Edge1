import React from 'react';
import { NavLink } from './NavLink';

export function Header({ children }) {
    return (
        <div className="h-16 bg-blue-500 w-full flex justify-between items-center p-4 fixed top-0 z-10">
            <div className="text-xl md:text-3xl text-white font-bold pl-2 md:pl-5">
                Travel Explorer
            </div>
            <nav className="flex space-x-3 md:space-x-5 pr-2 md:pr-3">
                {children}
            </nav>
        </div>
    );
}