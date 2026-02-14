import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center px-4">
            <CheckCircle className="w-20 h-20 text-green-500" />
            <h1 className="text-3xl font-bold text-slate-900">Payment Successful!</h1>
            <p className="text-slate-600 max-w-md">
                Thank you for your enrollment. A confirmation email has been sent to you with course access details.
            </p>
            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/courses">Browse More Courses</Link>
                </Button>
            </div>
        </div>
    );
}
