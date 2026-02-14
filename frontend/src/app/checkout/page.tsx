"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Upload, ShieldCheck, Loader2 } from 'lucide-react';

export default function CheckoutPage() {
    const { cart, totalAmount, clearCart } = useCart();
    const router = useRouter();

    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        phone: ''
    });
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    if (cart.length === 0) {
        return (
            <div className="container py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <Button onClick={() => router.push('/courses')}>Browse Courses</Button>
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            // Validate file size (5MB)
            if (e.target.files[0].size > 5 * 1024 * 1024) {
                setError('File size must be less than 5MB');
                return;
            }
            setFile(e.target.files[0]);
            setError('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        if (!file) {
            setError('Please upload the payment screenshot.');
            setIsSubmitting(false);
            return;
        }

        try {
            const submitData = new FormData();

            const orderData = {
                ...formData,
                totalAmount: totalAmount,
                courses: cart.map(c => c.id),
                // paymentStatus and paymentMethod are protected in backend
            };

            submitData.append('data', JSON.stringify(orderData));
            submitData.append('files.paymentScreenshot', file);

            const res = await fetch('/api/manual-payment', {
                method: 'POST',
                body: submitData,
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error?.message || 'Failed to submit payment');
            }

            clearCart();
            router.push('/success');

        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container py-12 px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Secure Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Customer Details */}
                <div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-green-600" />
                            Billing Details
                        </h2>
                        <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    name="customerName"
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={formData.customerName}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+91 9999999999"
                                />
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right: Payment */}
                <div>
                    <div className="bg-slate-50 p-6 rounded-xl border space-y-6">
                        <h2 className="text-xl font-semibold">Payment Summary</h2>

                        {/* Order Items */}
                        <div className="space-y-2 text-sm text-slate-600 border-b pb-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between">
                                    <span>{item.attributes.title}</span>
                                    <span>₹{item.attributes.price}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center text-lg font-bold text-slate-900 pb-4 border-b">
                            <span>Total Amount</span>
                            <span>₹{totalAmount}</span>
                        </div>

                        {/* QR Section */}
                        <div className="bg-white p-6 rounded-lg text-center border-2 border-dashed border-blue-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Scan & Pay</h3>
                            <p className="text-sm text-slate-500 mb-4">Use any UPI App (GPay, PhonePe, Paytm)</p>

                            <div className="relative w-48 h-48 mx-auto mb-4 border p-2 rounded">
                                <Image src="/upi-qr.svg" alt="UPI QR Code" fill className="object-contain" />
                            </div>

                            <p className="font-mono text-sm bg-slate-100 py-2 px-4 rounded inline-block">
                                UPI ID: 7840018889@upi
                            </p>
                        </div>

                        {/* Upload Section */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-slate-700">
                                Upload Payment Screenshot <span className="text-red-500">*</span>
                            </label>

                            <div className="flex items-center gap-4">
                                <label className="flex-1 cursor-pointer">
                                    <div className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-slate-300 rounded-md bg-white hover:bg-slate-50 transition-colors text-slate-600 text-sm">
                                        <Upload className="w-4 h-4" />
                                        {file ? file.name : "Choose Image (JPG/PNG)"}
                                    </div>
                                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                </label>
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>

                        <Button
                            form="checkout-form"
                            type="submit"
                            className="w-full h-12 text-lg bg-green-600 hover:bg-green-700"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processsing...
                                </>
                            ) : (
                                "Submit Payment Verification"
                            )}
                        </Button>

                        <p className="text-xs text-center text-slate-500">
                            We will verify your payment within 24 hours and activate your course access.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
