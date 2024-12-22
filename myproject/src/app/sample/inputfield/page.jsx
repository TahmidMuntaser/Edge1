"use client";

import React, { useState } from 'react';
import { Input } from "../component/input";

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [lastname, setLastValue] = useState('');
    const [add1, setAdd1Value] = useState('');
    const [add2, setAdd2Value] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setLastValue(e.target.value);
    };

    const handleInputChange3 = (e) => {
        setAdd1Value(e.target.value);
    };


    const handleInputChange4 = (e) => {
        setAdd2Value(e.target.value);
    };




    return (
        <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold mb-4">Form</h1>
            <Input
                label="First Name"
                value={inputValue}
                onChange={handleInputChange}
            />

            <Input
                label="Last Name"
                value={lastname}
                onChange={handleInputChange2}
            />

            <Input
                label="Addrerss"
                value={add1}
                onChange={handleInputChange3}
            />

            <Input
                label="Addrerss"
                value={add2}
                onChange={handleInputChange4}
            />



            <button className="h-10 w-20 border border-gray-950 rounded mt-4">Submit</button>

           
        </div>
    );
}