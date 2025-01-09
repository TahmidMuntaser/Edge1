import React, { useState } from 'react';

export function CalanderInput({ label }) {
    const [isFocused, setIsFocused] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1));
    const [selectedDay, setSelectedDay] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (event) => {
        if (event.relatedTarget && event.relatedTarget.className.includes('calendar-button')) {
            event.preventDefault();
            return;
        }
        setIsFocused(false);
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const startDay = currentDate.getDay();
    const monthName = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < startDay; i++) {
        calendarDays.push('');
    }
    for (let i = 1; i <= daysInMonth; i++) {
        calendarDays.push(i);
    }

    const selectedDayNumber = parseInt(selectedDay, 10);

    return (
        <div className="mb-4">
            <input
                type="number"
                value={selectedDay}
                onChange={handleDayChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={label}
                className="w-1/2 p-2 border border-gray-300 rounded"
                min="1"
                max={daysInMonth}
            />
            {isFocused && (
                <div className="w-3/4 mt-4 p-4 border border-slate-600 rounded bg-white">
                    <div className="flex justify-between items-center mb-2">
                        <button
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={handlePrevMonth}
                            className="calendar-button p-5 border border-gray-300 rounded"
                        >
                            &lt;
                        </button>
                        <div className="text-center font-bold">
                            {monthName} {year}
                        </div>
                        <button
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={handleNextMonth}
                            className="calendar-button p-5 border border-gray-300 rounded"
                        >
                            &gt;
                        </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                        {daysOfWeek.map((day) => (
                            <div key={day} className="font-bold">
                                {day}
                            </div>
                        ))}
                        {calendarDays.map((day, index) => (
                            <div
                                key={index}
                                className={`p-2 border border-gray-200 ${day === selectedDayNumber ? 'bg-blue-200' : ''}`}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}