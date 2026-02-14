import Link from "next/link";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export default function FailedPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center px-4">
            <XCircle className="w-20 h-20 text-red-500" />
            <h1 className="text-3xl font-bold text-slate-900">Payment Failed</h1>
            <p className="text-slate-600 max-w-md">
                Something went wrong with your transaction. Please try again or contact support if the issue persists.
            </p>
            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/checkout">Try Again</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/contact">Contact Support</Link>
                </Button>
            </div>
        </div>
    );
}
