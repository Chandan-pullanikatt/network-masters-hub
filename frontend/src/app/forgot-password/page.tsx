import Link from 'next/link';

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen bg-[#F5F7FA] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-outfit">
                        Forgot Password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Please contact the administrator to reset your password.
                    </p>
                </div>
                <div className="mt-8 text-center">
                    <Link
                        href="/login"
                        className="font-medium text-[#1E3A8A] hover:text-[#2563EB] transition-colors"
                    >
                        ← Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
