"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';



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
    category: "Chicken Burgers",
    items: [
      {
        title: "Double Patty Crunch",
        description: "02 crispy chicken patties, iceberg, chipotle sauce",
        price: 750,
        image: "/menupic/doubleburger.png"
      },
      {
        title: "Dynamite Salsa",
        description: "Salsa chicken, cheese, jalapenos, mushrooms, dynamite sauce",
        price: 750,
        image: "/menupic/salsa.png"
      },
      {
        title: "Double Grill Burger",
        description: "02 grilled patties with cheese & veggies",
        price: 750,
        image: "/menupic/doublegrill.png"
      },
      {
        title: "Hungry Fire Bite",
        description: "Crispy chicken, sausages, iceberg, spicy sauce",
        price: 600,
        image: "/menupic/firebite.png"
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
        image: "/menupic/thickburger.png"
      },
      {
        title: "Mushroom N Swiss",
        description: "Beef patty, swiss cheese, mushroom sauce",
        price: 850,
        image: "/menupic/doubleburger.png"
      },
      {
        title: "Smash Beef with Bacon",
        description: "Smash patty with bacon",
        price: 650,
        image: "/menupic/baconburger.png"
      },
      {
        title: "Kids Beef",
        description: "100g beef, single cheese",
        price: 600,
        image: "/menupic/kidsbeef.png"
      }
    ]
  },


  {
    category: "Fried Chicken",
    items: [
      {
        title: "Pathaka Chicken",
        description: "02 pcs real spicy chicken, fries, dinner roll, buffalo sauce",
        price: 750,
        image: "/menupic/pathakachicken.png"
      },
      {
        title: "Fried Chicken",
        description: "02 pcs crispy fried chicken, fries, dinner roll, garlic mayo",
        price: 700,
        image: "/menupic/friedchicken.png"
      },
      {
        title: "Pathaka Chicken",
        description: "02 pcs real spicy chicken, fries, dinner roll, buffalo sauce",
        price: 750,
        image: "/menupic/pathakachicken.png"
      },
      {
        title: "Fried Chicken",
        description: "02 pcs crispy fried chicken, fries, dinner roll, garlic mayo",
        price: 700,
        image: "/menupic/friedchicken.png"
      }
    ]
  },

  {
    category: "Wings",
    items: [
      {
        title: "Crispy Wings",
        description: "Crispy coated wings",
        price: 550,
        image: "/menupic/crispywings.png"
      },
      {
        title: "Hot & Sour",
        description: "Spicy tangy wings",
        price: 500,
        image: "/menupic/wings.png"
      },
      {
        title: "BBQ Wings",
        description: "BBQ flavored wings",
        price: 500,
        image: "/menupic/wings.png"
      },
      {
        title: "Crispy Wings",
        description: "Crispy coated wings",
        price: 950,
        image: "/menupic/crispywings.png"
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
        image: "/menupic/fries.png"
      },
      {
        title: "Cheesy Chunks",
        description: "Melted cheese, Italian sauce, jalapenos, green leaves",
        price: 600,
        image: "/menupic/fizzafries.png"
      },
      {
        title: "Chicken Chunks",
        description: "Chicken chunks with buffalo & BBQ sauce",
        price: 550,
        image: "/menupic/fries.png"
      },
      {
        title: "Pepperoni Fries",
        description: "Chicken pepperoni, mushrooms, oyster sauce",
        price: 450,
        image: "/menupic/fizzafries.png"
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
        image: "/menupic/cheeze.png"
      },
      {
        title: "Jaw Breaker",
        description: "4 patties, onion rings, cheese, sauces",
        price: 1750,
        image: "/menupic/jawbreaker.png"
      },
      {
        title: "Triple Barrel",
        description: "3 smash patties, pepperoni, cheese, spicy sauce",
        price: 1450,
        image: "/menupic/trbreaker.png"
      },
      {
        title: "Mushroom Legend",
        description: "3 patties, cheddar, mushroom sauce",
        price: 1350,
        image: "/menupic/mashroom.png"
      }
    ]
  },

  {
    category: "Add Ons",
    items: [
      { title: "Beef Patty", description: "Extra beef patty", price: 350, image: "/menupic/beefburger.png" },
      { title: "Chicken Patty", description: "Extra chicken patty", price: 250, image: "/menupic/chickenburger.png" },
      { title: "Meal (Fries + Drink)", description: "Combo add-on", price: 190, image: "/menupic/mealdrink.png" },
      { title: "Mozzarella Cheese", description: "Extra cheese", price: 150, image: "/menupic/beefburger.png" }
    ]
  },

  {
    category: "Pretzels",
    items: [
      {
        title: "Volcano Pretzel",
        description: "Loaded beef, chicken, cheese, sauces",
        price: 3300,
        image: "/menupic/pretzels.png"
      },
    ]
  },

  {
    category: "Beverages",
    items: [
      { title: "Water", description: "Soft drink", price: 100, image: "/menupic/water.png" },
      { title: "Marinda", description: "Soft drink", price: 50, image: "/menupic/marinda.png" },
      { title: "Coke", description: "Mineral water", price: 80, image: "/menupic/cola.png" },
      { title: "Pepsi", description: "Soft drink", price: 100, image: "/menupic/pepsi.png" }
    ]
  }

];


const ProductCard = ({ item }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-[#111111] border border-white/10 rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col h-full group hover:border-brand-yellow/50 transition-all duration-300">

      <div className="relative h-[180px] sm:h-[220px] md:aspect-square w-full bg-[#1a1a1a] p-4 md:p-6 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-brand-yellow text-black font-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
          Rs. {item.price}
        </div>
      </div>

      <div className="p-4 md:p-6 flex flex-col flex-1">
        <div className="mb-3 md:mb-4">
          <h3 className="text-brand-white text-lg md:text-xl font-bold uppercase tracking-tight mb-1 md:mb-2 group-hover:text-brand-yellow transition-colors line-clamp-1">
            {item.title}
          </h3>
          <p className="text-brand-grey text-xs md:text-sm leading-relaxed line-clamp-2 min-h-[32px] md:min-h-[40px]">
            {item.description}
          </p>
        </div>

        <div className="mt-auto space-y-3 md:space-y-4">
          <div className="flex items-center justify-between bg-black/40 p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-white/5">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg md:rounded-xl bg-white/5 text-white hover:bg-brand-yellow hover:text-black transition-all"
            >
              <Minus size={14} />
            </button>
            <span className="text-white font-bold text-base md:text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg md:rounded-xl bg-white/5 text-white hover:bg-brand-yellow hover:text-black transition-all"
            >
              <Plus size={14} />
            </button>
          </div>

          <button className="w-full bg-brand-yellow hover:bg-white text-black font-black uppercase py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default function FreakMenu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-brand-black min-h-screen pb-20 font-sans selection:bg-brand-yellow selection:text-black overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-7xl pt-10">

        {menuData.map((section, idx) => (
          <div
            key={idx}
            id={section.category.replace(/\s+/g, '-').toLowerCase()}
            className="mb-16 scroll-mt-32"
          >
            <div className="relative w-full h-[120px] md:h-[180px] rounded-[24px] flex flex-col items-center justify-center overflow-hidden mb-8 group">
              <Image
                src="/cat.png"
                alt={section.category}
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
              <div className="text-center z-10 relative px-4 w-full">
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-[1000] uppercase text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-tighter text-center leading-[0.9] md:leading-none text-balance">
                  {section.category}
                </h2>
              </div>
            </div>

            <div className="
              flex overflow-x-auto snap-x snap-mandatory gap-4 no-scrollbar pb-10
              -mx-4 px-4 
              md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-0 md:mx-0 md:gap-6
            ">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 md:snap-align-none"
                >
                  <motion.div
                    initial={isMobile ? { scale: 0.9, opacity: 0.6 } : { scale: 1, opacity: 1 }}
                    whileInView={isMobile ? { scale: 1, opacity: 1 } : {}}
                    viewport={isMobile ? { once: false, amount: 0.6 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-[85vw] sm:w-[400px] md:w-full h-full"
                  >
                    <ProductCard item={item} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}