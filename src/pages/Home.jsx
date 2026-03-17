import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardFooter } from '../components/ui/Card';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import heroImg from '../assets/hero-spices.png';

export function Home() {
    const { addToCart } = useCart();
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="Aromatic Spices"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold font-serif mb-6"
                    >
                        The Essence of India <br /> in Every Spoon
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-stone-200 mb-8"
                    >
                        Premium, hand-picked spices delivered straight to your kitchen.
                        Experience the authentic taste of Ujjwala Mashala.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/shop">
                            <Button size="lg" className="bg-saffron-500 hover:bg-saffron-400 text-stone-900 font-bold text-lg px-8 py-6 rounded-full">
                                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-stone-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 mb-4">Our Best Sellers</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">
                            Discover the spices that our customers love the most. Pure, potent, and perfect for your daily cooking.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="h-64 overflow-hidden bg-stone-100 relative group">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-stone-900 flex items-center shadow-sm">
                                            <Star className="h-3 w-3 text-saffron-500 mr-1 fill-saffron-500" /> 4.9
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="text-sm text-saffron-600 font-medium mb-2">{product.category}</div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2">{product.name}</h3>
                                        <p className="text-stone-500 text-sm line-clamp-2 mb-4">{product.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold text-stone-900">₹{product.price}</span>
                                            <span className="text-sm text-stone-400">{product.weight}</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0">
                                        <Button
                                            className="w-full bg-stone-900 text-white hover:bg-stone-800"
                                            onClick={() => addToCart(product)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/shop">
                            <Button variant="outline" size="lg" className="border-stone-300 text-stone-600 hover:bg-stone-100">
                                View All Products
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="p-6"
                        >
                            <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-6 text-saffron-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">100% Pure & Natural</h3>
                            <p className="text-stone-600">No additives, no preservatives. Just pure spices ground to perfection.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-6"
                        >
                            <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-6 text-saffron-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sourced from Origin</h3>
                            <p className="text-stone-600">We source our spices directly from the best farms across India.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="p-6"
                        >
                            <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-6 text-saffron-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                            <p className="text-stone-600">Fresh spices delivered to your doorstep within 2-3 business days.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
