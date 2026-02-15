"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
    const { cart, removeFromCart, total } = useCart();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    if (cart.length === 0) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 px-4 text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                <h2 className="text-2xl font-bold text-foreground">Your cart is empty</h2>
                <p className="text-muted-foreground">Looks like you haven't added any courses yet.</p>
                <Link href="/courses/ccna-200-301">
                    <Button>Browse Courses</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-16 md:px-12 max-w-7xl">
            <h1 className="mb-8 text-3xl font-bold text-foreground">Shopping Cart</h1>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Cart Items List */}
                <div className="lg:col-span-2">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-4"
                    >
                        {cart.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariant}
                                className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="flex flex-col space-y-1">
                                    <h3 className="font-semibold text-foreground">{item.attributes.title}</h3>
                                    <p className="text-sm text-muted-foreground">Video Course</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <p className="font-bold text-primary">₹{item.attributes.price}</p>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-muted-foreground hover:text-destructive"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm sticky top-24">
                        <h2 className="mb-4 text-xl font-bold text-foreground">Order Summary</h2>
                        <div className="space-y-2 border-b border-border pb-4">
                            <div className="flex justify-between text-muted-foreground">
                                <span>Subtotal</span>
                                <span>₹{total}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Tax</span>
                                <span>₹0</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between text-lg font-bold text-foreground">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>
                        <div className="mt-6">
                            <Link href="/checkout">
                                <Button className="w-full bg-[#003366] hover:bg-[#002244] text-white">
                                    Proceed to Checkout
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
