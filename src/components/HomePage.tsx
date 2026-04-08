"use client";

import React, { useState } from 'react';
import { MapPin, Phone, ShoppingBag, Menu, ShoppingCart, ChevronRight, Zap, X, Trash2, Plus, Minus } from 'lucide-react';
import Image from 'next/image';

export default function FreakInFryHome() {
  const [selectedBranch, setSelectedBranch] = useState("Select Outlet");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const branches = ["Hussainabad", "Bahadarabad"];

  const cartItems = [
    { id: 1, name: "Zinger Burger", price: 550, qty: 1, img: "/menupic/chickenburger.png" },
    { id: 2, name: "Loaded Fries", price: 450, qty: 2, img: "/menupic/fries.png" },
    { id: 3, name: "Pathaka Chicken", price: 1200, qty: 1, img: "/menupic/pathakachicken.png" },
    { id: 4, name: "Soft Drink", price: 120, qty: 3, img: "/menupic/marinda.png" },
  ];

  return (
    <div className={`min-h-screen bg-black text-white font-sans selection:bg-[#FBA108] selection:text-black ${isCartOpen ? 'overflow-hidden' : ''}`}>
      
      {isCartOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          
          <div className="relative w-full max-w-[400px] bg-[#111111] h-full shadow-2xl border-l border-white/10 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1A1A1A]">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-[#FBA108]" size={24} />
                <h2 className="text-xl font-black uppercase tracking-tighter">Your Bucket</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="relative w-20 h-20 bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden flex-shrink-0">
                    <Image src={item.img} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm uppercase tracking-tight">{item.name}</h3>
                      <button className="text-white/30 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-[#FBA108] font-black mt-1">Rs. {item.price}</p>
                    
                    <div className="flex items-center gap-3 mt-2">
                       <div className="flex items-center bg-black border border-white/10 rounded-lg px-2 py-1">
                          <button className="text-[#FBA108] hover:scale-125 transition-transform"><Minus size={14} /></button>
                          <span className="mx-3 text-xs font-bold">{item.qty}</span>
                          <button className="text-[#FBA108] hover:scale-125 transition-transform"><Plus size={14} /></button>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Summary */}
            <div className="p-6 bg-[#1A1A1A] border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center text-gray-400 text-sm">
                <span>Subtotal</span>
                <span className="text-white font-bold">Rs. 2,320</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-black uppercase">Total</span>
                <span className="text-2xl font-black text-[#FBA108]">Rs. 2,320</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="py-4 rounded-xl border border-white/10 font-bold text-sm uppercase hover:bg-white/5 transition-all"
                >
                  See More
                </button>
                <button className="bg-[#FBA108] text-black py-4 rounded-xl font-[1000] text-sm uppercase hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[#FBA108]/20">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- EXISTING NAV --- */}
      <nav className="relative z-[100] bg-black/80 backdrop-blur-xl px-4 py-3 md:px-10 flex justify-between items-center border-b border-white/10">
        <div className="hidden lg:flex items-center space-x-8">
          <div
            className="relative group cursor-pointer py-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p className="text-[11px] font-extrabold text-[#A3A3A3] uppercase leading-none tracking-[0.15em] mb-1.5">
              Select Branch
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-base font-black text-white group-hover:text-[#FBA108] transition-colors">
                {selectedBranch}
              </span>
              <ChevronRight
                size={18}
                className={`text-[#FBA108] transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : ''}`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-[110%] left-0 w-64 bg-[#111111] border border-white/10 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-4 z-50">
                {branches.map((branch) => (
                  <div
                    key={branch}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBranch(branch);
                      setIsDropdownOpen(false);
                    }}
                    className="px-6 py-4 text-sm font-bold text-white hover:bg-[#FBA108] hover:text-black transition-all flex items-center justify-between group/item"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-[#FBA108] group-hover/item:text-black" />
                      {branch}
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#FBA108] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="h-10 w-[1px] bg-white/20"></div>

          <a
            href="tel:03182448432"
            className="flex items-center space-x-3 bg-[#FBA108] text-black px-7 py-3.5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#FBA108]/10 cursor-pointer"
          >
            <Phone size={18} fill="black" />
            <span className="text-sm font-[1000] tracking-tight">03182448432</span>
          </a>
        </div>

        <div className="absolute z-[110] left-1/2 -translate-x-1/2 top-0">
          <div className="bg-black px-6 py-7 rounded-b-[2.5rem] shadow-[0_10px_40px_rgba(251,161,8,0.2)] flex items-center justify-center min-w-[120px] border-x border-b border-[#FBA108]/50">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/logo.png"
                alt="Freak In Fry Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 md:space-x-8">
          <button className="hidden sm:block text-sm font-[1000] uppercase tracking-[0.15em] text-[#A3A3A3] hover:text-[#FBA108] transition-all hover:scale-105 active:scale-95">
            Franchise
          </button>

          {/* CART TRIGGER BUTTON */}
          <div 
            onClick={() => setIsCartOpen(true)}
            className="relative bg-[#1A1A1A] p-4 rounded-2xl cursor-pointer border border-white/10 hover:border-[#FBA108]/50 hover:bg-[#222222] transition-all active:scale-90 group shadow-2xl"
          >
            <ShoppingCart size={26} className="text-[#FBA108] group-hover:scale-110 transition-transform" />
            <span className="absolute -top-2 -right-2 bg-[#FBA108] text-black text-[11px] font-[1000] w-6 h-6 flex items-center justify-center rounded-full border-[3px] border-black shadow-lg">
              {cartItems.length}
            </span>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-0 mt-10 mb-16 mx-auto w-[95%] max-w-7xl">
        <div className="relative h-[450px] md:h-[600px] w-full rounded-[3rem] bg-[#0A0A0A] overflow-hidden border border-white/5 shadow-2xl group">
          <div className="absolute top-0 right-0 w-full md:w-[55%] h-full bg-[#FBA108] skew-x-[-12deg] translate-x-24 md:translate-x-20 opacity-100 transition-transform group-hover:translate-x-16 duration-700 overflow-visible">
            <div className="inset-0 skew-x-[12deg] relative h-full w-full flex items-center justify-center">
              <div className="relative h-[80%] w-[80%] md:h-[90%] md:w-[90%] transition-transform duration-700 group-hover:scale-110">
                <Image
                  src="/meal.png"
                  alt="Hero Deal Burger"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 z-20">
            <div className="bg-black text-[#FBA108] px-4 py-2 rounded-full w-fit flex items-center space-x-2 mb-6 animate-pulse border border-[#FBA108]/20 shadow-[0_0_15px_rgba(251,161,8,0.1)]">
              <Zap size={14} fill="currentColor" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Most Wanted Deal</span>
            </div>

            <h2 className="text-white text-5xl md:text-8xl font-[900] leading-[0.85] tracking-tighter uppercase pointer-events-none">
              CRUNCHY <br />
              <span className="text-[#FBA108] italic drop-shadow-lg">FREAKY</span>
              <span className="block md:inline ml-0 md:ml-4">BOX</span>
            </h2>

            <p className="text-[#A3A3A3] mt-8 max-w-[280px] md:max-w-md text-sm md:text-lg font-medium leading-relaxed">
              2 Zingers, 2 Fries, 2 Drinks & a whole lot of Freakiness packed in one box.
              <span className="text-[#FBA108] font-bold ml-1">Limited time offer!</span>
            </p>

            <button className="mt-10 bg-white text-black font-black uppercase py-4 px-10 rounded-2xl w-fit flex items-center space-x-3 hover:bg-[#FBA108] hover:scale-105 active:scale-95 transition-all group/btn shadow-xl shadow-black/20">
              <span>Order Now</span>
              <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" strokeWidth={3} />
            </button>
          </div>

          <div className="absolute bottom-[-40px] left-[-20px] select-none pointer-events-none opacity-[0.03] md:opacity-[0.05] z-0">
            <h1 className="text-white text-[12rem] md:text-[22rem] font-black italic uppercase leading-none">
              FREAK
            </h1>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        body {
          font-family: 'Inter', sans-serif;
          background-color: #000000;
        }
      `}</style>
    </div>
  );
}