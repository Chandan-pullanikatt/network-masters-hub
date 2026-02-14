"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

const CheckoutPage = () => {
    const { cart, total } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // 1. Create Order
        try {
            const res = await fetch('/api/create-order', {
                method: 'POST',
                body: JSON.stringify({ amount: total, currency: 'INR' }),
            });
            const order = await res.json();

            if (!order.id) {
                alert('Order creation failed');
                setLoading(false);
                return;
            }

            // 2. Open Razorpay
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "Network Masters Hub",
                description: "Course Enrollment",
                order_id: order.id,
                handler: async function (response: any) {
                    // 3. Verify Payment
                    const verifyRes = await fetch('/api/verify-payment', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            courses: cart.map(c => c.id),
                            user: formData
                        }),
                    });

                    if (verifyRes.ok) {
                        router.push('/success');
                    } else {
                        router.push('/failed');
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: {
                    color: "#2563EB",
                },
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error(error);
            alert('Payment failed to initialize');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-xl font-bold mb-4">Billing Details</h3>
                    <form onSubmit={handlePayment} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Full Name</label>
                            <input name="name" required onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <input name="email" type="email" required onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone</label>
                            <input name="phone" type="tel" required onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="+91..." />
                        </div>

                        <Button type="submit" className="w-full mt-6" disabled={loading}>
                            {loading ? 'Processing...' : `Pay ₹${total}`}
                        </Button>
                    </form>
                    {/* Load Razorpay Script */}
                    <Script
                        id="razorpay-checkout-js"
                        src="https://checkout.razorpay.com/v1/checkout.js"
                    />
                </div>

                <div className="bg-slate-50 p-6 rounded-xl h-fit">
                    <h3 className="text-lg font-bold mb-4">Order Review</h3>
                    <div className="space-y-3">
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between text-sm">
                                <span>{item.attributes.title}</span>
                                <span>₹{item.attributes.price}</span>
                            </div>
                        ))}
                        <div className="border-t pt-3 flex justify-between font-bold">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
