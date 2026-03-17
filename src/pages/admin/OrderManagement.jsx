import React, { useState, useEffect } from 'react';
import { Search, Filter, Eye, MoreVertical } from 'lucide-react';
import { io } from 'socket.io-client';

export function OrderManagement() {
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch initial orders
        fetchOrders();

        // Setup Socket.io connection
        const socket = io('http://localhost:5000');

        // Listen for new orders
        socket.on('newOrder', (newOrder) => {
            setOrders(prevOrders => [newOrder, ...prevOrders]);
        });

        // Listen for order updates
        socket.on('orderUpdated', (updatedOrder) => {
            setOrders(prevOrders =>
                prevOrders.map(order =>
                    order._id === updatedOrder._id ? updatedOrder : order
                )
            );
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/orders');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.customer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order._id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Processing': return 'bg-blue-100 text-blue-800';
            case 'Shipped': return 'bg-purple-100 text-purple-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-stone-500">Loading orders...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-stone-200">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search orders or customers..."
                        className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-4">
                    <select
                        className="px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-50">
                        <Filter size={20} />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-stone-50 border-b border-stone-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-stone-600">Order ID</th>
                                <th className="px-6 py-4 font-semibold text-stone-600">Customer</th>
                                <th className="px-6 py-4 font-semibold text-stone-600">Items Ordered</th>
                                <th className="px-6 py-4 font-semibold text-stone-600">Date</th>
                                <th className="px-6 py-4 font-semibold text-stone-600">Total</th>
                                <th className="px-6 py-4 font-semibold text-stone-600">Status</th>
                                <th className="px-6 py-4 font-semibold text-stone-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200">
                            {filteredOrders.map((order) => (
                                <tr key={order._id} className="hover:bg-stone-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-stone-900">#{order._id.slice(-6)}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">
                                                {order.customer?.name?.charAt(0) || 'U'}
                                            </div>
                                            <div>
                                                <div className="font-medium text-stone-900">{order.customer?.name || 'Unknown'}</div>
                                                <div className="text-sm text-stone-500">{order.customer?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="max-w-xs">
                                            <div className="text-sm text-stone-900 line-clamp-2">
                                                {order.items.map(item => item.name).join(', ')}
                                            </div>
                                            <div className="text-xs text-stone-500 mt-1">
                                                {order.items.length} items
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-stone-600">{new Date(order.createdAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 font-medium text-stone-900">₹{order.total}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-stone-100 rounded-lg text-stone-600" title="View Details">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-stone-100 rounded-lg text-stone-600">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredOrders.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="px-6 py-8 text-center text-stone-500">
                                        No orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
