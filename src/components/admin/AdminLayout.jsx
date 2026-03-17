import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Package, Users, Settings, LogOut } from 'lucide-react';

export function AdminLayout() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'bg-stone-800 text-white' : 'text-stone-400 hover:bg-stone-800 hover:text-white';
    };

    return (
        <div className="flex min-h-screen bg-stone-100">
            {/* Sidebar */}
            <aside className="w-64 bg-stone-900 text-stone-300 flex flex-col">
                <div className="p-6 border-b border-stone-800">
                    <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link to="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin')}`}>
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </Link>

                    <Link to="/admin/orders" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/orders')}`}>
                        <ShoppingBag size={20} />
                        <span>Orders</span>
                    </Link>

                    <Link to="/admin/products" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/products')}`}>
                        <Package size={20} />
                        <span>Products</span>
                    </Link>

                    <Link to="/admin/users" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/users')}`}>
                        <Users size={20} />
                        <span>Users</span>
                    </Link>

                    <Link to="/admin/settings" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/settings')}`}>
                        <Settings size={20} />
                        <span>Settings</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-stone-800">
                    <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-stone-800 transition-colors">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-stone-800">
                        {location.pathname === '/admin' && 'Dashboard'}
                        {location.pathname === '/admin/orders' && 'Order Management'}
                        {location.pathname === '/admin/products' && 'Product Management'}
                        {location.pathname === '/admin/users' && 'User Management'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-stone-500">Admin User</span>
                        <div className="w-8 h-8 bg-stone-200 rounded-full"></div>
                    </div>
                </header>
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
