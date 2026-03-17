import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export function Cart() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-stone-50 py-20 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold font-serif text-stone-900 mb-4">Your Cart is Empty</h2>
                <p className="text-stone-600 mb-8">Looks like you haven't added any spices yet.</p>
                <Link to="/shop">
                    <Button size="lg" className="bg-saffron-500 hover:bg-saffron-400 text-stone-900">
                        Start Shopping
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-stone-50 min-h-screen py-12">
            <div className="container-custom">
                <h1 className="text-3xl font-bold font-serif text-stone-900 mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-6">
                                <div className="h-24 w-24 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-stone-900 mb-1">{item.name}</h3>
                                    <p className="text-sm text-stone-500 mb-2">{item.weight}</p>
                                    <div className="text-lg font-semibold text-saffron-600">₹{item.price}</div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 rounded-full border border-stone-200"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        <Minus className="h-3 w-3" />
                                    </Button>
                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 rounded-full border border-stone-200"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <Plus className="h-3 w-3" />
                                    </Button>
                                </div>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-stone-400 hover:text-chili-500"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <Trash2 className="h-5 w-5" />
                                </Button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold text-stone-900 mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-stone-600">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between text-stone-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="border-t border-stone-200 pt-4 flex justify-between font-bold text-lg text-stone-900">
                                    <span>Total</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                            </div>

                            <Link to="/checkout">
                                <Button className="w-full bg-stone-900 text-white hover:bg-stone-800 py-6 text-lg">
                                    Checkout <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>

                            <p className="text-xs text-center text-stone-400 mt-4">
                                Secure Checkout. 100% Money-back guarantee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
