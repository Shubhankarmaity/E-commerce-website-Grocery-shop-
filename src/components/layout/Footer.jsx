import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-12">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-saffron-500 font-serif">Ujjwala Mashala</h3>
                    <p className="text-sm text-stone-400">
                        Bringing the authentic taste of Indian spices to your kitchen. Pure, fresh, and aromatic.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-saffron-400 transition-colors">Home</a></li>
                        <li><a href="/shop" className="hover:text-saffron-400 transition-colors">Shop</a></li>
                        <li><a href="/about" className="hover:text-saffron-400 transition-colors">About Us</a></li>
                        <li><a href="/contact" className="hover:text-saffron-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>123 Spice Market, Delhi</li>
                        <li>support@ujjwala.com</li>
                        <li>+91 98765 43210</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-saffron-400 transition-colors"><Facebook className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-saffron-400 transition-colors"><Instagram className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-saffron-400 transition-colors"><Twitter className="h-5 w-5" /></a>
                    </div>
                </div>
            </div>
            <div className="container-custom mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
                © {new Date().getFullYear()} Ujjwala Mashala Ghar. All rights reserved.
            </div>
        </footer>
    );
}
