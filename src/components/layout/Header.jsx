import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

export function Header() {
    const { cartCount } = useCart();
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
            <div className="container-custom flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-saffron-600 font-serif">Ujjwala Mashala</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-stone-600 hover:text-saffron-600 font-medium transition-colors">
                        Home
                    </Link>
                    <Link to="/shop" className="text-stone-600 hover:text-saffron-600 font-medium transition-colors">
                        Shop
                    </Link>
                    <Link to="/about" className="text-stone-600 hover:text-saffron-600 font-medium transition-colors">
                        About Us
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center gap-2">
                            <Link to={user.role === 'admin' ? '/admin' : '/dashboard'}>
                                <Button variant="ghost" size="sm" className="hidden md:flex">
                                    {user.name.split(' ')[0]}
                                </Button>
                            </Link>
                            <Button variant="ghost" size="icon" onClick={logout} title="Logout">
                                <User className="h-5 w-5 text-saffron-600" />
                            </Button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <Button variant="ghost" size="icon">
                                <User className="h-5 w-5" />
                            </Button>
                        </Link>
                    )}
                    <Link to="/cart">
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-chili-500 text-[10px] font-bold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-stone-200 bg-white p-4">
                    <nav className="flex flex-col space-y-4">
                        <Link
                            to="/"
                            className="text-stone-600 hover:text-saffron-600 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/shop"
                            className="text-stone-600 hover:text-saffron-600 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Shop
                        </Link>
                        <Link
                            to="/about"
                            className="text-stone-600 hover:text-saffron-600 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
