"use client";

import React from 'react';
import { CalanderInput } from "../component/calanderinput";

export default function Home() {
    return (
        <div className="p-6 md:p-10">
            <CalanderInput label="write the date" />
        </div>
    );
}