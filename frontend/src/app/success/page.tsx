"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock } from 'lucide-react';

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-10 h-10 text-green-600" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Payment Submitted!</h1>
                    <p className="text-slate-600">
                        Thank you for your order. We have received your payment details and screenshot.
                    </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 text-left">
                    <p className="font-semibold mb-1">Next Steps:</p>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>Our team will verify your payment (approx. 2-4 hours).</li>
                        <li>You will receive an email confirmation once approved.</li>
                        <li>Your course access will be activated immediately after verification.</li>
                    </ul>
                </div>

                <div className="pt-4">
                    <Link href="/">
                        <Button className="w-full">Return to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
