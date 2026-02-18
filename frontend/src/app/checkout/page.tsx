"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ManualPaymentForm from "@/components/ManualPaymentForm";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function CheckoutPage() {
    const { cart, total, clearCart } = useCart();
    const { user } = useAuth();
    const router = useRouter();

    const [formData, setFormData] = useState({
        customerName: "",
        email: "",
        phone: "",
    });

    const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileError, setFileError] = useState("");

    // Auto-fill form if user is logged in
    useEffect(() => {
        if (user) {
            setFormData({
                customerName: user.username,
                email: user.email,
                phone: "", // User object might not have phone
            });
        }
    }, [user]);

    // Redirect if cart is empty
    useEffect(() => {
        if (cart.length === 0) {
            router.push("/courses");
        }
    }, [cart, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (file: File | null) => {
        setPaymentScreenshot(file);
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setFileError("File size exceeds 5MB");
            } else {
                setFileError("");
            }
        } else {
            setFileError("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (cart.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        if (!paymentScreenshot) {
            toast.error("Please upload payment screenshot");
            setFileError("Please upload payment screenshot");
            return;
        }

        if (fileError) return;

        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("customerName", formData.customerName);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("phone", formData.phone);
            formDataToSend.append("totalAmount", total.toString());

            // Send course IDs
            const courseIds = cart.map(item => item.id);
            formDataToSend.append("courses", JSON.stringify(courseIds));

            // Append file
            formDataToSend.append("paymentScreenshot", paymentScreenshot);

            const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
            const res = await fetch(`${BASE_URL}/api/orders/manual-payment`, {
                method: "POST",
                body: formDataToSend,
            });


            const responseText = await res.text();
            let errorData;
            try {
                errorData = JSON.parse(responseText);
            } catch (e) {
                console.error("Non-JSON response:", responseText);
                throw new Error(`Server Error (${res.status}): ${responseText}`);
            }

            if (!res.ok) {
                throw new Error(errorData.error?.message || "Payment submission failed");
            }

            toast.success("Order submitted successfully!");
            clearCart();
            router.push("/payment-submitted");

        } catch (error: any) {
            console.error("Payment Error:", error);
            toast.error(error.message || "Failed to submit order. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-6 py-16 md:px-12 max-w-4xl">
            <h1 className="mb-8 text-3xl font-bold text-foreground">Checkout</h1>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2 space-y-8">
                    {/* User Details Form */}
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                        <h2 className="mb-4 text-xl font-bold text-foreground">Contact Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="customerName" className="block text-sm font-medium mb-1 text-foreground">
                                    Full Name
                                </label>
                                <Input
                                    id="customerName"
                                    name="customerName"
                                    required
                                    value={formData.customerName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="bg-background/50"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="bg-background/50"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-1 text-foreground">
                                    Phone
                                </label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    className="bg-background/50"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <ManualPaymentForm onFileChange={handleFileChange} fileError={fileError} />

                    <Button
                        onClick={(e) => handleSubmit(e as any)}
                        disabled={isSubmitting}
                        className="w-full bg-[#003366] hover:bg-[#002244] text-white py-6 text-lg"
                    >
                        {isSubmitting ? "Submitting Order..." : `Pay ₹${total} & Place Order`}
                    </Button>
                </div>

                {/* Order Summary Sidebar */}
                <div className="md:col-span-1">
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm sticky top-24">
                        <h2 className="mb-4 text-lg font-bold text-foreground">Your Order</h2>
                        <div className="space-y-4 mb-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-muted-foreground truncate w-2/3">{item.attributes.title}</span>
                                    <span className="font-medium text-foreground">₹{item.attributes.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-border pt-4 flex justify-between font-bold text-lg text-foreground">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
