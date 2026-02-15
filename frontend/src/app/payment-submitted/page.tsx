"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PaymentSubmittedPage() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md text-center space-y-6"
            >
                <div className="flex justify-center">
                    <CheckCircle className="h-24 w-24 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-foreground">Payment Submitted!</h1>
                <p className="text-muted-foreground">
                    Thank you for your order. We have received your payment details and screenshot.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg text-sm text-left border border-border">
                    <p className="font-semibold mb-2">What happens next?</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Our team will verify your payment (usually within 24 hours).</li>
                        <li>You will receive a confirmation email once approved.</li>
                        <li>Course access will be activated immediately after verification.</li>
                    </ul>
                </div>
                <div className="pt-4">
                    <Link href="/">
                        <Button className="w-full bg-[#003366] hover:bg-[#002244] text-white">
                            Return to Home
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
