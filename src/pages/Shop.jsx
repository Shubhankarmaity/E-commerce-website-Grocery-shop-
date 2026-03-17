import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardFooter } from '../components/ui/Card';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

export function Shop() {
    const { addToCart } = useCart();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-stone-50 min-h-screen py-12"
        >
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-serif text-stone-900 mb-4">Our Spices</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Explore our collection of premium, hand-ground spices. From everyday essentials to exotic blends.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                        >
                            <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                                <Link to={`/product/${product.id}`}>
                                    <div className="h-56 overflow-hidden bg-stone-100 relative group cursor-pointer">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-stone-900 flex items-center shadow-sm">
                                            <Star className="h-3 w-3 text-saffron-500 mr-1 fill-saffron-500" /> 4.9
                                        </div>
                                    </div>
                                </Link>
                                <CardContent className="p-5">
                                    <div className="text-xs text-saffron-600 font-medium mb-1 uppercase tracking-wider">{product.category}</div>
                                    <Link to={`/product/${product.id}`}>
                                        <h3 className="text-lg font-bold text-stone-900 mb-2 hover:text-saffron-600 transition-colors">{product.name}</h3>
                                    </Link>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-xl font-bold text-stone-900">₹{product.price}</span>
                                        <span className="text-xs text-stone-400">{product.weight}</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-5 pt-0">
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
                </motion.div>
            </div>
        </motion.div>
    );
}
