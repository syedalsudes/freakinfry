"use client";

import React, { useState } from 'react';
import { ShoppingCart, Star, Plus, Minus, Flame, Zap, Droplets } from 'lucide-react';



interface Product {
  title: string;
  description: string;
  price: number | null;
  image: string;
}

interface ProductCardProps {
  item: Product;
}
export const menuData = [
    {
        category: "Fried Chicken",
        items: [
            {
                title: "Pathaka Chicken",
                description: "02 pcs real spicy chicken, fries, dinner roll, buffalo sauce",
                price: 750,
                image: "/burger.png"
            },
            {
                title: "Fried Chicken",
                description: "02 pcs crispy fried chicken, fries, dinner roll, garlic mayo",
                price: 700,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Fries",
        items: [
            {
                title: "Mexican Beef Fries",
                description: "Spicy beef mince, mozzarella cheese, sauteed veggies",
                price: 850,
                image: "/burger.png"
            },
            {
                title: "Cheesy Chunks",
                description: "Melted cheese, Italian sauce, jalapenos, green leaves",
                price: 600,
                image: "/burger.png"
            },
            {
                title: "Chicken Chunks",
                description: "Chicken chunks with buffalo & BBQ sauce",
                price: 550,
                image: "/burger.png"
            },
            {
                title: "Pepperoni Fries",
                description: "Chicken pepperoni, mushrooms, oyster sauce",
                price: 450,
                image: "/burger.png"
            },
            {
                title: "Plain / Masala Fries",
                description: "Classic fries",
                price: 350,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Wings",
        items: [
            {
                title: "Crispy Wings (5 pcs)",
                description: "Crispy coated wings",
                price: 550,
                image: "/burger.png"
            },
            {
                title: "Crispy Wings (10 pcs)",
                description: "Crispy coated wings",
                price: 950,
                image: "/burger.png"
            },
            {
                title: "Hot & Sour (5 pcs)",
                description: "Spicy tangy wings",
                price: 500,
                image: "/burger.png"
            },
            {
                title: "Hot & Sour (10 pcs)",
                description: "Spicy tangy wings",
                price: 900,
                image: "/burger.png"
            },
            {
                title: "BBQ Wings (5 pcs)",
                description: "BBQ flavored wings",
                price: 500,
                image: "/burger.png"
            },
            {
                title: "BBQ Wings (10 pcs)",
                description: "BBQ flavored wings",
                price: 900,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Add Ons",
        items: [
            { title: "Beef Patty", description: "Extra beef patty", price: 350, image: "/burger.png" },
            { title: "Chicken Patty", description: "Extra chicken patty", price: 250, image: "/burger.png" },
            { title: "Meal (Fries + Drink)", description: "Combo add-on", price: 190, image: "/burger.png" },
            { title: "Mozzarella Cheese", description: "Extra cheese", price: 150, image: "/burger.png" },
            { title: "Sideline Meat", description: "Extra meat", price: 100, image: "/burger.png" },
            { title: "Cheese Slice", description: "Cheese slice", price: 50, image: "/burger.png" },
            { title: "Dip Sauce", description: "Extra dip", price: 50, image: "/burger.png" },
            { title: "Dinner Roll", description: "Bread roll", price: 40, image: "/burger.png" }
        ]
    },
    {
        category: "Beverages",
        items: [
            { title: "Drink (Regular)", description: "Soft drink", price: 100, image: "/burger.png" },
            { title: "Drink (Small)", description: "Soft drink", price: 50, image: "/burger.png" },
            { title: "Water", description: "Mineral water", price: null, image: "/burger.png" }
        ]
    },
    {
        category: "Chicken Burgers",
        items: [
            {
                title: "Double Patty Crunch",
                description: "02 crispy chicken patties, iceberg, chipotle sauce",
                price: 750,
                image: "/burger.png"
            },
            {
                title: "Dynamite Salsa",
                description: "Salsa chicken, cheese, jalapenos, mushrooms, dynamite sauce",
                price: 750,
                image: "/burger.png"
            },
            {
                title: "Double Grill Burger",
                description: "02 grilled patties with cheese & veggies",
                price: 750,
                image: "/burger.png"
            },
            {
                title: "Hungry Fire Bite",
                description: "Crispy chicken, sausages, iceberg, spicy sauce",
                price: 600,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Premium Beef Burgers",
        items: [
            {
                title: "American Fromage",
                description: "400g beef, cheese, lettuce, sauce",
                price: 1800,
                image: "/burger.png"
            },
            {
                title: "Jaw Breaker",
                description: "4 patties, onion rings, cheese, sauces",
                price: 1750,
                image: "/burger.png"
            },
            {
                title: "Triple Barrel",
                description: "3 smash patties, pepperoni, cheese, spicy sauce",
                price: 1450,
                image: "/burger.png"
            },
            {
                title: "Mushroom Legend",
                description: "3 patties, cheddar, mushroom sauce",
                price: 1350,
                image: "/burger.png"
            },
            {
                title: "Flamin Doritos",
                description: "Beef patty, nachos, jalapenos, sauce",
                price: 1100,
                image: "/burger.png"
            },
            {
                title: "Greasy Fluff",
                description: "Smash patties, cheese, onions, sauce",
                price: 1050,
                image: "/burger.png"
            },
            {
                title: "Old School Bacon",
                description: "Beef, bacon, cheese, jalapenos",
                price: 1030,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Beef Burgers",
        items: [
            {
                title: "Thick Beef",
                description: "150g beef, cheese, pepperoni, sauce",
                price: 850,
                image: "/burger.png"
            },
            {
                title: "Mushroom N Swiss",
                description: "Beef patty, swiss cheese, mushroom sauce",
                price: 850,
                image: "/burger.png"
            },
            {
                title: "Smash Beef with Bacon",
                description: "Smash patty with bacon",
                price: 650,
                image: "/burger.png"
            },
            {
                title: "Kids Beef",
                description: "100g beef, single cheese",
                price: 600,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Sandwiches & Panini",
        items: [
            {
                title: "Julian with Jalapeno",
                description: "Beef scramble, jalapeno, veggies, sauces",
                price: 750,
                image: "/burger.png"
            },
            {
                title: "Chapata Sandwich",
                description: "Beef patty, cheese, spicy mince sauce",
                price: 750,
                image: "/burger.png"
            },
            {
                title: "Messy Buff",
                description: "Beef mince, cheese, BBQ sauce",
                price: 600,
                image: "/burger.png"
            },
            {
                title: "Pepperoni Wonder",
                description: "Chicken, pepperoni, iceberg, sauce",
                price: 500,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Special Items",
        items: [
            {
                title: "Crispy Cheese Thread",
                description: "Dynamite chicken, mozzarella, jalapeno",
                price: 1850,
                image: "/burger.png"
            },
            {
                title: "Top Lion Beef",
                description: "250g steak, bacon, cheese, sauce",
                price: 1750,
                image: "/burger.png"
            },
            {
                title: "Tatter Cut Loaf",
                description: "Steak chicken, veggies, sauces",
                price: 1700,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Quesadilla",
        items: [
            {
                title: "Premium Tortilla",
                description: "Beef mince, cheese, veggies, sauce",
                price: 1300,
                image: "/burger.png"
            },
            {
                title: "Grilled Chicken Quesadilla",
                description: "Chicken, mozzarella, pepperoni, sauce",
                price: 1000,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Wraps",
        items: [
            {
                title: "Prime Cut Beef Wrap",
                description: "Beef patty, cheese, nachos, sauce",
                price: 750,
                image: "/burger.png"
            },
            {
                title: "Wrapster",
                description: "Crispy chicken, cheese, fries, sauce",
                price: 700,
                image: "/burger.png"
            },
            {
                title: "Double Grilled with Bacon",
                description: "Chicken, beef bacon, fries, sauces",
                price: 680,
                image: "/burger.png"
            },
            {
                title: "Turkey Toast",
                description: "Chicken + turkey combo, fries",
                price: 650,
                image: "/burger.png"
            },
            {
                title: "Premium Wrap",
                description: "Chicken, sausages, fries, sauces",
                price: 600,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Lava Sandwich",
        items: [
            {
                title: "Lava Sandwich Beef",
                description: "Beef mince, cheese, mushrooms, BBQ sauce",
                price: 1250,
                image: "/burger.png"
            },
            {
                title: "Lava Sandwich Chicken",
                description: "Chicken, cheese, jalapenos, sausages",
                price: 1100,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Pizzarito",
        items: [
            {
                title: "Pizzarito Beef",
                description: "Beef, tortilla, cheese, pepperoni",
                price: 1450,
                image: "/burger.png"
            },
            {
                title: "Pizzarito Chicken",
                description: "Chicken, tortilla, mushroom sauce",
                price: 1300,
                image: "/burger.png"
            }
        ]
    },
    {
        category: "Pretzels",
        items: [
            {
                title: "Volcano Pretzel (20 inch)",
                description: "Loaded beef, chicken, cheese, sauces",
                price: 3300,
                image: "/burger.png"
            }
        ]
    }
];



const ProductCard = ({ item }: ProductCardProps) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="bg-[#111111] border border-white/10 rounded-[32px] overflow-hidden flex flex-col h-full group hover:border-brand-yellow/50 transition-all duration-300">
            {/* 1. Image Upper */}
            <div className="relative aspect-square w-full bg-[#1a1a1a] p-6 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-yellow text-black font-black px-3 py-1 rounded-full text-sm">
                    Rs. {item.price}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                {/* 2. Title & Description */}
                <div className="mb-4">
                    <h3 className="text-brand-white text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-brand-yellow transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-brand-grey text-sm leading-relaxed line-clamp-2">
                        {item.description}
                    </p>
                </div>

                <div className="mt-auto space-y-4">
                    {/* 3. Quantity Selector */}
                    <div className="flex items-center justify-between bg-black/40 p-2 rounded-2xl border border-white/5">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-brand-yellow hover:text-black transition-all"
                        >
                            <Minus size={16} />
                        </button>
                        <span className="text-white font-bold text-lg">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-brand-yellow hover:text-black transition-all"
                        >
                            <Plus size={16} />
                        </button>
                    </div>

                    {/* 4. Add to Cart Button */}
                    <button className="w-full bg-brand-yellow hover:bg-white text-black font-black uppercase py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
                        <ShoppingCart size={18} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function FreakMenu() {
    return (
        <div className="bg-brand-black min-h-screen pb-20 font-sans selection:bg-brand-yellow selection:text-black">
            <div className="container mx-auto px-4 max-w-7xl space-y-20 pt-10">

                {menuData.map((section, idx) => (
                    <div key={idx} className="space-y-8">

                        {/* Chunky Playful Category Banner */}
                        <div className="relative w-full bg-[#FBA108] rounded-[40px] px-10 py-12 flex flex-col items-center justify-center overflow-hidden mb-12">


                            <div className="text-center z-10">

                                <h2 className="text-6xl md:text-8xl font-[1000] uppercase tracking-tighter text-black leading-none">
                                    {section.category}
                                </h2>
                            </div>


                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {section.items.map((item, i) => (
                                <ProductCard key={i} item={item} />
                            ))}
                        </div>

                    </div>
                ))}

            </div>

            {/* Floating Cart - Fixed Styling */}
            <div className="fixed bottom-8 right-8 z-50">
                <button className="bg-brand-yellow text-black p-5 rounded-[24px] shadow-[0_20px_50px_rgba(251,161,8,0.3)] hover:-translate-y-2 transition-all duration-300 group">
                    <div className="relative">
                        <ShoppingCart size={32} strokeWidth={2.5} />
                        <span className="absolute -top-6 -right-6 bg-white text-black text-xs font-black w-7 h-7 flex items-center justify-center rounded-full border-4 border-brand-black">
                            0
                        </span>
                    </div>
                </button>
            </div>

            <style jsx global>{`
        body {
          background-color: #000000;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #FBA108;
          border-radius: 10px;
        }
      `}</style>
        </div>
    );
}