"use client";
import React, { useState } from 'react';
import { MapPin, Phone, ShoppingBag, Menu, ShoppingCart, ChevronRight, Zap } from 'lucide-react';
import { menuData } from './MenuItems';

export default function FreakInFryHome() {
  const [activeTab, setActiveTab] = useState('deals');

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-[#FBA108] selection:text-black">
      

      <nav className="sticky top-0 z-[60] bg-white/90 backdrop-blur-md px-4 py-4 md:px-10 flex justify-between items-center border-b border-gray-100">
        
        {/* Left: Contact & Branch */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="group cursor-pointer">
            <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Branch</p>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-bold text-black group-hover:text-[#FBA108] transition-colors">Select Outlet</span>
              <ChevronRight size={14} className="text-[#FBA108]" />
            </div>
          </div>
          <div className="h-8 w-[1px] bg-gray-200"></div>
          <div className="flex items-center space-x-3 bg-black text-white px-4 py-2 rounded-full hover:scale-105 transition-transform cursor-pointer">
            <Phone size={14} className="text-[#FBA108]" />
            <span className="text-xs font-black tracking-wider">021 111 222 333</span>
          </div>
        </div>

        {/* Center: Logo (Floating Effect) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 pt-2">
          <div className="bg-black text-white px-6 py-8 rounded-b-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center min-w-[130px] border-x-2 border-b-2 border-[#FBA108]">
            <span className="text-2xl font-[900] leading-none tracking-tighter text-center uppercase italic">
              FREAK<br /><span className="text-[#FBA108] not-italic">IN FRY</span>
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <button className="hidden sm:block text-[11px] font-black uppercase tracking-wider hover:text-[#FBA108] transition-colors">
            Franchise
          </button>
          
          <div className="relative bg-[#FBA108] p-3 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-orange-200 transition-all active:scale-90">
            <ShoppingCart size={22} className="text-black" />
            <span className="absolute -top-1 -right-1 bg-black text-[#FBA108] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              0
            </span>
          </div>
          
          <button className="p-2 bg-gray-100 rounded-xl hover:bg-black hover:text-white transition-all">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- HERO BANNER SECTION --- */}
      <section className="relative mt-24 mb-10 mx-auto w-[95%] max-w-7xl">
        <div className="relative h-[350px] md:h-[500px] w-full rounded-[2.5rem] bg-black overflow-hidden shadow-2xl group">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FBA108] skew-x-[-12deg] translate-x-20 opacity-90 transition-transform group-hover:translate-x-16 duration-700"></div>
          
          {/* Content Over the Banner */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10">
            <div className="bg-white text-black px-4 py-1 rounded-full w-fit flex items-center space-x-2 mb-4 animate-bounce">
              <Zap size={14} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-widest">Most Wanted Deal</span>
            </div>
            
            <h2 className="text-white text-5xl md:text-7xl font-[900] leading-tight tracking-tighter">
              CRUNCHY <br /> <span className="text-[#FBA108]">FREAKY</span> BOX
            </h2>
            
            <p className="text-gray-400 mt-4 max-w-xs text-sm md:text-base font-medium">
              2 Zingers, 2 Fries, 2 Drinks & a whole lot of Freakiness.
            </p>

            <button className="mt-8 bg-white text-black font-black uppercase py-4 px-8 rounded-2xl w-fit flex items-center space-x-3 hover:bg-[#FBA108] transition-all group/btn">
              <span>Order Now</span>
              <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Background Text Overlay */}
          <div className="absolute bottom-[-20px] right-[-20px] select-none pointer-events-none">
             <h1 className="text-white/5 text-[15rem] font-black italic">FRY</h1>
          </div>
        </div>
      </section>

      {/* --- CATEGORY SELECTOR --- */}
      {/* --- CATEGORY SELECTOR (REFINED STICKY) --- */}
<div className="sticky top-[80px] md:top-[90px] z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
  <div className="container mx-auto max-w-7xl">
    {/* Heading for Menu Section (Optional, but adds weight) */}
    <div className="px-6 pt-4 hidden md:block">
       <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Explore Our Menu</h3>
    </div>

    <div className="flex items-center overflow-x-auto no-scrollbar px-4 py-6 md:py-8 space-x-8">
      {menuData.map((cat, index) => {
        const isActive = activeTab === cat.category;
        const image = cat.items?.[0]?.image || "/burger.png";

        return (
          <button
            key={index}
            onClick={() => setActiveTab(cat.category)}
            className="flex-shrink-0 flex flex-col items-center group relative outline-none"
          >
            {/* Icon Container */}
            <div className={`
              relative w-20 h-20 md:w-28 md:h-28 rounded-[2rem] flex items-center justify-center transition-all duration-500 ease-out
              ${isActive 
                ? 'bg-[#FBA108] shadow-[0_20px_40px_rgba(251,161,8,0.35)] -translate-y-3 scale-105' 
                : 'bg-gray-50 border border-gray-100 hover:bg-white hover:border-orange-200 hover:-translate-y-1'}
            `}>
              
              {/* Image with subtle shadow */}
              <img
                src={image}
                alt={cat.category}
                className={`w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-md transition-transform duration-500 
                ${isActive ? 'scale-110 rotate-[8deg]' : 'group-hover:scale-110 group-hover:-rotate-3'}`}
              />

              {/* Selection Ring (Only for Active) */}
              {isActive && (
                <div className="absolute inset-0 rounded-[2rem] border-2 border-black/5 animate-pulse"></div>
              )}
            </div>

            {/* Category Label */}
            <div className="mt-4 flex flex-col items-center">
              <span className={`text-[10px] md:text-[12px] font-black uppercase tracking-widest transition-all duration-300 ${
                isActive ? 'text-black scale-110' : 'text-gray-400'
              }`}>
                {cat.category}
              </span>
              
              {/* Indicator Dot/Line */}
              <div className={`h-1.5 rounded-full bg-black transition-all duration-500 mt-1.5 ${
                isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'
              }`}></div>
            </div>
          </button>
        );
      })}
    </div>
  </div>
</div>

      {/* --- STYLES --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}