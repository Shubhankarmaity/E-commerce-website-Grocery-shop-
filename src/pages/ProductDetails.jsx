import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Truck, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">Product Not Found</h2>
                    <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="container-custom">
                <Button
                    variant="ghost"
                    className="mb-8 pl-0 hover:bg-transparent hover:text-saffron-600"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="bg-stone-50 rounded-2xl overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                        <div className="text-sm text-saffron-600 font-bold uppercase tracking-wider mb-2">{product.category}</div>
                        <h1 className="text-4xl font-bold font-serif text-stone-900 mb-4">{product.name}</h1>

                        <div className="flex items-center mb-6">
                            <div className="flex text-saffron-500">
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                            </div>
                            <span className="ml-2 text-stone-500 text-sm">(120 reviews)</span>
                        </div>

                        <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="flex items-end mb-8">
                            <span className="text-4xl font-bold text-stone-900">₹{product.price}</span>
                            <span className="ml-2 text-stone-500 mb-1">/ {product.weight}</span>
                        </div>

                        <div className="flex space-x-4 mb-8">
                            <Button
                                size="lg"
                                className="flex-1 bg-saffron-500 hover:bg-saffron-400 text-stone-900 font-bold"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 border-t border-stone-200 pt-8">
                            <div className="flex items-start space-x-3">
                                <Truck className="h-6 w-6 text-stone-400" />
                                <div>
                                    <h4 className="font-semibold text-stone-900">Free Delivery</h4>
                                    <p className="text-xs text-stone-500">On orders above ₹500</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <ShieldCheck className="h-6 w-6 text-stone-400" />
                                <div>
                                    <h4 className="font-semibold text-stone-900">Quality Guarantee</h4>
                                    <p className="text-xs text-stone-500">100% Authentic Spices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
