"use client";

import { useState, useEffect } from "react";
import Modal from "@/components/ui/modal";
import { courses } from "@/lib/courses-data";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Batch {
    courseName: string;
    date: string;
    time: string;
    status: string;
    link: string;
}

export default function UpcomingBatchesModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [batches, setBatches] = useState<Batch[]>([]);

    useEffect(() => {
        // Open modal on mount
        const timer = setTimeout(() => setIsOpen(true), 1000); // Slight delay for better UX

        // Aggregate batches
        const allBatches: Batch[] = [];
        courses.forEach((course) => {
            const hero = course.attributes.hero;
            if (hero && hero.batches && hero.batches.length > 0) {
                hero.batches.forEach((batch) => {
                    if (batch.status !== "Closed" && batch.startDate) {
                        allBatches.push({
                            courseName: course.attributes.title,
                            date: batch.startDate,
                            time: batch.time,
                            status: batch.status,
                            link: `/courses/${course.attributes.slug}`
                        });
                    }
                });
            }
        });

        // Sort logic could go here, for now just taking the first few
        setBatches(allBatches);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => setIsOpen(false);

    return (
        <Modal isOpen={isOpen} onClose={handleClose} className="max-w-4xl p-0">
            <div className="relative bg-background flex flex-col max-h-[90vh]">
                {/* Header - stays fixed at top */}
                <div className="p-6 border-b border-border flex items-center justify-between bg-card flex-shrink-0">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                        Upcoming Live Batches
                    </h2>
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                    >
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                {/* Content - scrollable */}
                <div className="overflow-y-auto overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary text-primary-foreground">
                                <th className="p-4 font-semibold text-sm uppercase tracking-wider">Course</th>
                                <th className="p-4 font-semibold text-sm uppercase tracking-wider">Date & Time</th>
                                <th className="p-4 font-semibold text-sm uppercase tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {batches.map((batch, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-muted/30 transition-colors"
                                >
                                    <td className="p-4 font-medium text-foreground">{batch.courseName}</td>
                                    <td className="p-4 text-muted-foreground">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-medium text-foreground">{batch.date}</span>
                                            <span className="text-sm">{batch.time}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <Link href={batch.link} onClick={handleClose}>
                                            <Button size="sm" className="font-semibold shadow-sm hover:shadow-md transition-all bg-blue-600 hover:bg-blue-700 text-white">
                                                Enroll <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {batches.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="p-8 text-center text-muted-foreground">
                                        No upcoming batches scheduled at the moment.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </Modal>
    );
}
