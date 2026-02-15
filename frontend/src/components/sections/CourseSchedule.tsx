"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

const CourseSchedule = () => {
    const [activeMonth, setActiveMonth] = useState('January 2026');

    const months = [
        'January 2026', 'February 2026', 'March 2026', 'April 2026', 'May 2026', 'June 2026'
    ];

    const batches = [
        {
            id: 1,
            type: 'Regular',
            days: 'Mon - Fri',
            startDate: '05 January 2026',
            time: '07:00 AM - 09:00 AM',
            mode: 'Online'
        },
        {
            id: 2,
            type: 'Regular',
            days: 'Mon - Fri',
            startDate: '06 January 2026',
            time: '08:00 PM - 10:00 PM',
            mode: 'Online'
        },
        {
            id: 3,
            type: 'Weekend',
            days: 'Sat, Sun',
            startDate: '17 January 2026',
            time: '10:00 AM - 01:00 PM',
            mode: 'Online'
        },
        {
            id: 4,
            type: 'Regular (Intensive)',
            days: 'Mon - Fri',
            startDate: '19 January 2026',
            time: '03:00 PM - 05:00 PM',
            mode: 'Online'
        }
    ];

    return (
        <section id="schedule" className="py-12 w-full max-w-[1248px] mx-auto px-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Course Schedule</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Choose a batch that fits your professional routine. All sessions include live interaction and hands-on lab practice.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Month Tabs */}
                <div className="flex border-b border-slate-100 overflow-x-auto scrollbar-hide">
                    {months.map((month) => (
                        <button
                            key={month}
                            onClick={() => setActiveMonth(month)}
                            className={`px-8 py-4 text-sm font-medium whitespace-nowrap transition-colors relative ${activeMonth === month
                                    ? 'text-[#00BFA6]' // Green color for active
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {month}
                            {activeMonth === month && (
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00BFA6]"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Batch List */}
                <div className="flex flex-col">
                    {batches.map((batch, index) => (
                        <div
                            key={batch.id}
                            className={`flex flex-col md:flex-row items-center justify-between p-6 gap-4 md:gap-0 ${index % 2 === 0 ? 'bg-[#FAFBFC]' : 'bg-white'
                                } border-b border-slate-50 last:border-none`}
                        >
                            {/* Batch Type & Days */}
                            <div className="w-full md:w-1/4">
                                <h4 className="font-bold text-slate-800">{batch.type}</h4>
                                <span className="text-xs text-slate-500 font-medium">{batch.days}</span>
                            </div>

                            {/* Start Date */}
                            <div className="w-full md:w-1/4">
                                <span className="font-bold text-slate-700 block md:hidden mb-1 text-xs uppercase tracking-wide">Start Date</span>
                                <span className="font-semibold text-slate-700">{batch.startDate}</span>
                            </div>

                            {/* Time Slot */}
                            <div className="w-full md:w-1/4 flex items-center gap-2">
                                <Clock className="w-4 h-4 text-slate-400" />
                                <span className="font-semibold text-slate-700 text-sm">{batch.time}</span>
                            </div>

                            {/* Mode & Action */}
                            <div className="w-full md:w-1/4 flex items-center justify-between md:justify-end gap-8">
                                <div className="text-sm font-medium text-slate-500">
                                    Mode - <span className="text-[#00BFA6] font-bold">{batch.mode}</span>
                                </div>
                                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-full h-9 px-6 text-xs font-bold border-2">
                                    Book Demo
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseSchedule;
