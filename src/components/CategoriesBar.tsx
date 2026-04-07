"use client"

import { useState, useRef, useEffect } from "react";
import { menuData } from './MenuItems';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoriesBar() {
    const [activeTab, setActiveTab] = useState('deals');
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener("scroll", checkScroll);
            checkScroll();
        }
        return () => currentRef?.removeEventListener("scroll", checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            const target = direction === 'left' 
                ? scrollRef.current.scrollLeft - scrollAmount 
                : scrollRef.current.scrollLeft + scrollAmount;
            
            scrollRef.current.scrollTo({ left: target, behavior: 'smooth' });
        }
    };

    return (
        <div className="sticky top-0 z-[90] bg-black/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
            <div className="container mx-auto max-w-7xl relative px-2 py-2">
                
                {showLeftArrow && (
                    <div className="absolute left-0 top-0 bottom-0 z-30 flex items-center pr-12 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none">
                        <button 
                            onClick={() => scroll('left')}
                            className="pointer-events-auto bg-[#1A1A1A] border border-white/10 p-2 rounded-full text-white hover:bg-[#FBA108] hover:text-black transition-all shadow-lg ml-2"
                        >
                            <ChevronLeft size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                )}

                <div 
                    ref={scrollRef}
                    className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth px-2 py-1"
                >
                    {menuData.map((cat, index) => {
                        const isActive = activeTab === cat.category;
                        const image = cat.items?.[0]?.image || "/burger.png";
                        
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveTab(cat.category)}
                                className={`
                                    flex-shrink-0 flex flex-col items-center justify-center
                                    w-[100px] h-[95px] md:w-[120px] md:h-[110px] p-3 rounded-2xl
                                    transition-all duration-200 border outline-none relative
                                    ${isActive
                                        ? 'bg-[#FBA108] border-[#FBA108] shadow-[0_8px_20px_rgba(251,161,8,0.2)]'
                                        : 'bg-[#121212] border-white/5 hover:border-white/20'
                                    }
                                `}
                            >
                                <div className={`
                                    w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mb-2
                                    ${isActive ? 'bg-black/10' : 'bg-white/5'}
                                `}>
                                    <img
                                        src={image}
                                        alt={cat.category}
                                        className={`w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 
                                        ${isActive ? 'scale-110' : 'opacity-70'}`}
                                    />
                                </div>

                                <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center leading-none ${
                                    isActive ? 'text-black' : 'text-[#A3A3A3]'
                                }`}>
                                    {cat.category}
                                </span>

                                {isActive && (
                                    <div className="absolute bottom-1.5 w-4 h-0.5 rounded-full bg-black/40"></div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {showRightArrow && (
                    <div className="absolute right-0 top-0 bottom-0 z-30 flex items-center pl-12 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none">
                        <button 
                            onClick={() => scroll('right')}
                            className="pointer-events-auto bg-[#1A1A1A] border border-white/10 p-2 rounded-full text-white hover:bg-[#FBA108] hover:text-black transition-all shadow-lg mr-2"
                        >
                            <ChevronRight size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                )}
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}