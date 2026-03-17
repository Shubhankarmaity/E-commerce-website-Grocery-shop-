import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, CreditCard, Truck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export function Checkout() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        try {
            const orderData = {
                customer: {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    // userId: user?.id // If we had user context here
                },
                items: cartItems.map(item => ({
                    productId: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                })),
                total: cartTotal,
                status: 'Pending',
                paymentMethod: paymentMethod === 'cod' ? 'COD' : 'Card',
                shippingAddress: {
                    street: formData.address,
                    city: formData.city,
                    state: '', // Add state field if needed
                    zip: formData.zip
                }
            };

            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Failed to place order');
            }

            setOrderPlaced(true);
            clearCart();
        } catch (error) {
            console.error('Order placement failed:', error);
            alert('Failed to place order. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold font-serif text-stone-900 mb-4">Order Placed!</h2>
                    <p className="text-stone-600 mb-8">
                        Thank you for your order. We have received your request and will process it shortly.
                    </p>
                    <Button
                        className="w-full bg-stone-900 text-white hover:bg-stone-800"
                        onClick={() => navigate('/')}
                    >
                        Return to Home
                    </Button>
                </motion.div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-stone-50 min-h-screen py-12"
        >
            <div className="container-custom">
                <Button
                    variant="ghost"
                    className="mb-8 pl-0 hover:bg-transparent hover:text-saffron-600"
                    onClick={() => navigate('/cart')}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
                </Button>

                <h1 className="text-3xl font-bold font-serif text-stone-900 mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Shipping Details Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                            <h2 className="text-xl font-bold text-stone-900 mb-6">Shipping Details</h2>
                            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-stone-700">First Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-stone-700">Last Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-700">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-700">Street Address</label>
                                    <input
                                        required
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-stone-700">City</label>
                                        <input
                                            required
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-stone-700">Zip Code</label>
                                        <input
                                            required
                                            type="text"
                                            name="zip"
                                            value={formData.zip}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-stone-700">Phone</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary & Payment */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold text-stone-900 mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-16 w-16 bg-stone-100 rounded-md overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-stone-900 line-clamp-1">{item.name}</h4>
                                            <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                                            <p className="text-sm font-medium text-saffron-600">₹{item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-stone-200 pt-4 mb-6">
                                <div className="flex justify-between font-bold text-lg text-stone-900">
                                    <span>Total</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-stone-900 mb-4">Payment Method</h3>
                            <div className="space-y-3 mb-8">
                                <label
                                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'cod'
                                        ? 'border-saffron-500 bg-saffron-50'
                                        : 'border-stone-200 hover:border-stone-300'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={() => setPaymentMethod('cod')}
                                        className="w-4 h-4 text-saffron-600 focus:ring-saffron-500"
                                    />
                                    <div className="ml-3 flex items-center">
                                        <Truck className="h-5 w-5 text-stone-600 mr-2" />
                                        <span className="font-medium text-stone-900">Cash on Delivery</span>
                                    </div>
                                </label>

                                <label
                                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'online'
                                        ? 'border-saffron-500 bg-saffron-50'
                                        : 'border-stone-200 hover:border-stone-300'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="online"
                                        checked={paymentMethod === 'online'}
                                        onChange={() => setPaymentMethod('online')}
                                        className="w-4 h-4 text-saffron-600 focus:ring-saffron-500"
                                    />
                                    <div className="ml-3 flex items-center">
                                        <CreditCard className="h-5 w-5 text-stone-600 mr-2" />
                                        <span className="font-medium text-stone-900">Online Payment</span>
                                    </div>
                                </label>
                            </div>

                            {paymentMethod === 'online' && (
                                <div className="mb-6 p-4 bg-stone-50 rounded-lg border border-stone-200">
                                    <p className="text-sm text-stone-500 mb-2">Card Number</p>
                                    <div className="bg-white border border-stone-300 rounded px-3 py-2 mb-2 text-stone-400">
                                        XXXX XXXX XXXX 1234
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <p className="text-sm text-stone-500 mb-1">Expiry</p>
                                            <div className="bg-white border border-stone-300 rounded px-3 py-2 text-stone-400">
                                                MM/YY
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-stone-500 mb-1">CVC</p>
                                            <div className="bg-white border border-stone-300 rounded px-3 py-2 text-stone-400">
                                                123
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <Button
                                type="submit"
                                form="checkout-form"
                                className="w-full bg-stone-900 text-white hover:bg-stone-800 py-6 text-lg"
                                disabled={isProcessing}
                            >
                                {isProcessing ? 'Processing...' : `Pay ₹${cartTotal}`}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
