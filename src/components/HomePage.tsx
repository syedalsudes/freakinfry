"use client";


import { MapPin, Phone, ShoppingBag, Menu, ShoppingCart, ChevronRight, Zap } from 'lucide-react';
import Image from 'next/image';

export default function FreakInFryHome() {

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FBA108] selection:text-black">

      <nav className="relative z-[100] bg-black/80 backdrop-blur-xl px-4 py-4 md:px-10 flex justify-between items-center border-b border-white/10">
        <div className="hidden lg:flex items-center space-x-6">
          <div className="group cursor-pointer">
            <p className="text-[10px] font-bold text-[#A3A3A3] uppercase leading-none tracking-widest">Branch</p>
            <div className="flex items-center space-x-1 mt-1">
              <span className="text-sm font-bold text-white group-hover:text-[#FBA108] transition-colors">Select Outlet</span>
              <ChevronRight size={14} className="text-[#FBA108]" />
            </div>
          </div>
          <div className="h-8 w-[1px] bg-white/10"></div>
          <div className="flex items-center space-x-3 bg-[#FBA108] text-black px-5 py-2 rounded-full hover:scale-105 transition-transform cursor-pointer">
            <Phone size={14} fill="black" />
            <span className="text-xs font-black tracking-wider">03182448432</span>
          </div>
        </div>

        <div className="absolute z-[110] left-1/2 -translate-x-1/2 top-0 pt-2">
          <div className="bg-black text-white px-6 py-16 rounded-b-[2.5rem] shadow-[0_10px_40px_rgba(251,161,8,0.2)] flex flex-col items-center justify-center min-w-[140px] border-x border-b border-[#FBA108]/50">
            <span className="text-2xl font-[900] leading-none tracking-tighter text-center uppercase italic">
              FREAK<br /><span className="text-[#FBA108] not-italic">IN FRY</span>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-5">
          <button className="hidden sm:block text-[11px] font-black uppercase tracking-wider text-[#A3A3A3] hover:text-[#FBA108] transition-colors">
            Franchise
          </button>
          <div className="relative bg-[#1A1A1A] p-3 rounded-2xl cursor-pointer border border-white/5 hover:border-[#FBA108]/50 transition-all active:scale-90 group">
            <ShoppingCart size={22} className="text-[#FBA108] group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 bg-[#FBA108] text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
              0
            </span>
          </div>
        </div>
      </nav>

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

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FBA108]/5 blur-[120px] rounded-full pointer-events-none"></div>
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
    .transition-all {
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  `}</style>
    </div>
  );
}