"use client";

import React, { useState } from 'react';
import { ProductList } from "./component/ProductList";
import { Card2 } from "./component/Card2";

export default function Home() {
    const [cards, setCards] = useState([]);

    const addCard = () => {
        setCards([...cards, cards.length + 1]);
    };

    return (
        <>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={addCard}
            >
                Add Card
            </button>
            <ProductList>
                {cards.map((number, index) => (
                    <Card2 key={index} number={number} />
                ))}
            </ProductList>
        </>
    );
}