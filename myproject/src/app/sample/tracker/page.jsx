"use client";

import React from 'react';
import { TypingTracker } from "../component/tracker";

export default function Home() {
    return (
        <div className="p-6 md:p-10">
            <TypingTracker />
        </div>
    );
}