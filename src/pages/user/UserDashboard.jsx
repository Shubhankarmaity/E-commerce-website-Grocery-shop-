import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

export function UserDashboard() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchOrders();
        }
    }, [user]);

    const fetchOrders = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/user/${user.email}`);
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Delivered': return <CheckCircle className="text-green-500" size={20} />;
            case 'Cancelled': return <XCircle className="text-red-500" size={20} />;
            default: return <Clock className="text-yellow-500" size={20} />;
        }
    };

    if (loading) {
        return <div className="min-h-screen pt-24 pb-12 flex justify-center"><div className="text-stone-500">Loading dashboard...</div></div>;
    }

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center text-2xl font-bold text-saffron-700">
                            {user?.name?.charAt(0) || 'U'}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-stone-900">{user?.name}</h1>
                            <p className="text-stone-500">{user?.email}</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                    <Package className="text-saffron-600" />
                    Order History
                </h2>

                <div className="space-y-4">
                    {orders.length === 0 ? (
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center text-stone-500">
                            You haven't placed any orders yet.
                        </div>
                    ) : (
                        orders.map((order) => (
                            <div key={order._id} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 pb-4 border-b border-stone-100">
                                    <div>
                                        <span className="text-sm text-stone-500">Order #{order._id.slice(-6)}</span>
                                        <div className="text-sm text-stone-400">{new Date(order.createdAt).toLocaleDateString()}</div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                        {getStatusIcon(order.status)}
                                        <span className="font-medium text-stone-700">{order.status}</span>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-4">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="flex justify-between text-sm">
                                            <span className="text-stone-600">{item.quantity}x {item.name}</span>
                                            <span className="font-medium text-stone-900">₹{item.price * item.quantity}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-stone-500 text-sm">Total Amount</span>
                                    <span className="text-lg font-bold text-stone-900">₹{order.total}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
