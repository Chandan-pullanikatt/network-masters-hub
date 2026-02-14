import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const CartPage = () => {
    const { cart, removeFromCart, total } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
                <p className="text-slate-600">Browse our courses and start learning today!</p>
                <Button asChild>
                    <Link href="/courses">Browse Courses</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container py-20 px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-12 bg-gray-200 rounded overflow-hidden relative">
                                    {/* Image placeholder */}
                                    <div className="absolute inset-0 bg-slate-300"></div>
                                </div>
                                <div>
                                    <h3 className="font-semibold">{item.attributes.title}</h3>
                                    <p className="text-sm text-slate-500">{item.attributes.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="font-bold">${item.attributes.price}</span>
                                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                                    <Trash2 className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-slate-50 p-6 rounded-xl border space-y-4">
                        <h3 className="text-lg font-bold">Order Summary</h3>
                        <div className="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>
                        <div className="flex justify-between text-sm text-green-600">
                            <span>Discount</span>
                            <span>-$0.00</span>
                        </div>
                        <div className="border-t pt-4 flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                        <Button className="w-full" size="lg" asChild>
                            <Link href="/checkout">Proceed to Checkout</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
