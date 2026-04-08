"use client";
import React from 'react';
import { Search, ArrowRight, Zap, Percent } from 'lucide-react';

const DEALS_DATA = [
  {
    id: 1,
    title: "Zing \n Party Box",
    oldPrice: "3270",
    newPrice: "2190",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=600",
    tag: "BEST SELLER"
  },
  {
    id: 2,
    title: "Crisp n \n Crunch Duo",
    oldPrice: "1670",
    newPrice: "1250",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600",
    tag: "HOT DEAL"
  },
  {
    id: 3,
    title: "Juicy \n Lucy",
    oldPrice: "1290",
    newPrice: "1097",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600",
    tag: "LIMITED"
  },
  {
    id: 4,
    title: "Smookey \n Grill",
    oldPrice: "890",
    newPrice: "757",
    isFrom: true,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=600",
    tag: "NEW"
  }
];

export default function DealsSection() {
  return (
    <div className="w-full bg-brand-black py-10 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="relative mb-12 max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-4 md:left-6 flex items-center pointer-events-none">
            <Search className="text-brand-grey group-focus-within:text-brand-yellow transition-colors" size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search your craving..." 
            className="w-full bg-[#111] py-4 md:py-5 pl-12 md:pl-14 pr-14 md:pr-16 rounded-2xl border border-white/10 outline-none font-medium text-white placeholder:text-brand-grey focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all shadow-2xl text-sm md:text-base"
          />
          <button className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-brand-yellow p-2.5 md:p-3 rounded-xl hover:scale-105 active:scale-95 transition-all">
            <ArrowRight className="text-black w-4 h-4 md:w-5 md:h-5 stroke-[3px]" />
          </button>
        </div>

        <div className="relative mb-16 md:mb-20 bg-brand-yellow rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-black shadow-[4px_4px_0px_0px_#fff] md:shadow-[8px_8px_0px_0px_#fff]">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="bg-black text-brand-yellow p-3 md:p-4 rounded-2xl -rotate-6 animate-pulse shrink-0">
              <Percent size={30} className="md:w-10 md:h-10" strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-black text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
                Insane Flat Discount
              </h3>
              <p className="text-black/80 font-bold uppercase tracking-widest text-[10px] md:text-sm mt-1">
                Valid on all online orders today!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-black py-3 px-8 md:py-4 md:px-10 rounded-full">
            <span className="text-brand-yellow text-3xl md:text-5xl font-black italic">15%</span>
            <span className="text-white text-lg md:text-2xl font-black uppercase">Off</span>
          </div>
        </div>

        <div className="text-center mb-12 md:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none w-full">
            <span className="text-[18vw] md:text-[120px] font-black text-white uppercase italic select-none leading-none block">
              FREAKY
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic relative z-10 leading-none">
            POPULAR <span className="text-brand-yellow">ITEMS</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 relative z-10">
            <div className="h-1.5 w-8 md:w-12 bg-brand-yellow rounded-full"></div>
            <Zap className="text-brand-yellow fill-brand-yellow" size={20} />
            <div className="h-1.5 w-8 md:w-12 bg-brand-yellow rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {DEALS_DATA.map((deal) => (
            <div key={deal.id} className="relative group overflow-hidden rounded-[30px] md:rounded-[40px] aspect-[4/5] border border-white/5 shadow-2xl cursor-pointer">
              <img 
                src={deal.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={deal.title} 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute top-5 left-5 md:top-6 md:left-6">
                <span className="bg-brand-yellow text-black text-[9px] md:text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {deal.tag}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 transform group-hover:-translate-y-2 transition-transform">
                <h4 className="text-white font-black text-2xl md:text-3xl tracking-tighter uppercase whitespace-pre-line leading-[0.9] mb-4">
                  {deal.title}
                </h4>

                <div className="flex items-end justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-brand-grey text-xs md:text-sm font-bold line-through">
                      Rs. {deal.oldPrice}
                    </span>
                    <div className="flex items-center gap-1">
                      {deal.isFrom && <span className="text-brand-yellow text-[9px] md:text-[10px] font-black uppercase">From</span>}
                      <span className="text-brand-yellow text-xl md:text-2xl font-black leading-none">
                        Rs. {deal.newPrice}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300">
                    <PlusIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6 stroke-current stroke-[3]">
    <path d="M12 5V19M5 12H19" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);