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
    <div className={`min-h-screen bg-black text-white font-sans selection:bg-[#FBA108] selection:text-black overflow-x-hidden ${isCartOpen ? 'overflow-hidden' : ''}`}>

      {isCartOpen && (
        <div className="fixed inset-0 z-[300] flex justify-end">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative w-full max-w-[400px] bg-[#111111] h-full shadow-2xl border-l border-white/10 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-5 border-b border-white/10 flex justify-between items-center bg-[#1A1A1A]">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-[#FBA108]" size={20} />
                <h2 className="text-lg font-black uppercase tracking-tighter">Your Bucket</h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-white/5 rounded-2xl border border-white/5">
                  <div className="relative w-16 h-16 bg-black rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={item.img} alt={item.name} fill className="object-contain p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-xs uppercase truncate">{item.name}</h3>
                      <button className="text-white/30 hover:text-red-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-[#FBA108] font-black text-sm mt-0.5">Rs. {item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center bg-black border border-white/10 rounded-lg px-2 py-1">
                        <button className="text-[#FBA108]"><Minus size={12} /></button>
                        <span className="mx-3 text-xs font-bold">{item.qty}</span>
                        <button className="text-[#FBA108]"><Plus size={12} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#1A1A1A] border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-black uppercase">Total</span>
                <span className="text-2xl font-black text-[#FBA108]">Rs. 2,320</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setIsCartOpen(false)} className="py-4 rounded-xl border border-white/10 font-bold text-[10px] uppercase">
                  Add More
                </button>
                <button className="bg-[#FBA108] text-black py-4 rounded-xl font-black text-[10px] uppercase shadow-lg shadow-[#FBA108]/20">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className="relative z-[100] bg-black/80 backdrop-blur-xl px-4 py-3 md:px-10 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center space-x-2 md:space-x-8">
          <div className="hidden lg:block relative">
            <div
              className="cursor-pointer group"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <p className="text-[10px] font-extrabold text-[#A3A3A3] uppercase tracking-widest mb-1 group-hover:text-[#FBA108] transition-colors">
                Select Branch
              </p>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-black text-white uppercase italic">{selectedBranch}</span>
                <ChevronRight
                  size={16}
                  className={`text-[#FBA108] transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : ''}`}
                />
              </div>
            </div>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />

                <div className="absolute top-full left-0 mt-3 w-56 bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2 space-y-1">
                    {branches.map((branch) => (
                      <button
                        key={branch}
                        onClick={() => {
                          setSelectedBranch(branch);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-tighter transition-all flex justify-between items-center group
                ${selectedBranch === branch
                            ? 'bg-[#FBA108] text-black'
                            : 'text-white hover:bg-white/5 hover:text-[#FBA108]'
                          }`}
                      >
                        {branch}
                        {selectedBranch === branch && <Zap size={12} fill="black" />}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <a className="flex items-center justify-center bg-[#FBA108] text-black p-3 md:px-6 md:py-3 rounded-xl md:rounded-2xl hover:scale-105 transition-all">
            <Phone size={18} fill="black" />
            <span className="hidden md:inline ml-2 text-sm font-black uppercase">03182448432</span>
          </a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <div className="bg-black px-4 py-4 md:px-6 md:py-7 rounded-b-[1.5rem] md:rounded-b-[2.5rem] border-x border-b border-[#FBA108]/30 shadow-lg">
            <div className="relative w-12 h-12 md:w-20 md:h-20">
              <Image src="/logo.png" alt="Logo" fill priority className="object-contain" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-6">
          <button className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-[#A3A3A3] hover:text-[#FBA108]">Franchise</button>
          <div onClick={() => setIsCartOpen(true)} className="relative bg-[#1A1A1A] p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer border border-white/10 group">
            <ShoppingCart size={22} className="text-[#FBA108]" />
            <span className="absolute -top-1 -right-1 bg-[#FBA108] text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
              {cartItems.length}
            </span>
          </div>
        </div>
      </nav>


      <section className="relative z-0 mt-4 md:mt-6 mb-16 mx-auto w-[96%] max-w-[1800px]">
        <div className="relative min-h-[600px] md:min-h-[80vh] 2xl:min-h-[85vh] w-full rounded-[2.5rem] md:rounded-[4rem] bg-[#0A0A0A] overflow-hidden border border-white/5 shadow-2xl flex flex-col md:flex-row">

          <div className="absolute top-0 right-0 w-full md:w-[55%] 2xl:w-[50%] h-[40%] md:h-full bg-[#FBA108] md:skew-x-[-12deg] md:translate-x-20 z-0" />
          <div className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 2xl:px-32 py-12 md:py-20">

            <div className="bg-black/50 backdrop-blur-md text-[#FBA108] px-4 py-2 rounded-full w-fit flex items-center space-x-2 mb-6 md:mb-10 border border-[#FBA108]/20">
              <Zap size={16} fill="currentColor" />
              <span className="text-xs md:text-sm 2xl:text-base font-black uppercase tracking-widest">Most Wanted Deal</span>
            </div>

            <h2 className="text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl 2xl:text-[10rem] font-[900] leading-[0.85] tracking-tighter uppercase italic">
              CRUNCHY <br />
              <span className="text-[#FBA108]">FREAKY</span> <br className="md:hidden" />
              <span className="md:ml-6">BOX</span>
            </h2>

            <p className="text-[#A3A3A3] mt-8 max-w-xs md:max-w-lg 2xl:max-w-2xl text-base md:text-xl 2xl:text-3xl font-medium leading-relaxed">
              2 Zingers, 2 Fries, 2 Drinks & a whole lot of Freakiness.
              <span className="text-[#FBA108] font-bold block mt-2">Limited time offer!</span>
            </p>

            <button className="mt-10 2xl:mt-16 bg-white text-black font-black uppercase py-5 2xl:py-8 px-10 md:px-14 2xl:px-20 rounded-2xl 2xl:rounded-[2.5rem] w-full md:w-fit flex items-center justify-center space-x-4 hover:bg-[#FBA108] transition-all group text-sm md:text-lg 2xl:text-2xl hover:scale-105">
              <span>Order Now</span>
              <ChevronRight className="group-hover:translate-x-2 transition-transform" size={24} strokeWidth={3} />
            </button>
          </div>

          <div className="relative w-full h-[350px] md:h-auto md:w-1/2 flex items-center justify-center p-8 md:p-12 2xl:p-24 z-10">
            <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] 2xl:min-h-[700px] transition-transform duration-700">
              <Image
                src="/banner.png"
                alt="Hero Deal"
                fill
                priority
                className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)] scale-110 2xl:scale-125"
              />
            </div>
          </div>

          <div className="absolute bottom-[-20px] left-[-20px] select-none pointer-events-none opacity-[0.04] z-0">
            <h1 className="text-white text-[20vw] 2xl:text-[25vw] font-black italic uppercase leading-none">
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
          background-color: #000;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}