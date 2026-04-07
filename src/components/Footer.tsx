"use client"

import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Flame, 
  Clock, 
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const Footer = () => {
  const socials = [
    { Icon: InstagramIcon, href: "#", label: "Instagram" },
    { Icon: FacebookIcon, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-8 overflow-hidden relative border-t border-white/5">
      {/* Background Watermark Text */}
      <div className="absolute top-0 right-0 text-[18rem] font-[1000] text-white/[0.02] select-none pointer-events-none translate-x-1/4 -translate-y-1/3 italic uppercase">
        Freak
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-4xl font-[1000] italic tracking-tighter uppercase text-[#FBA108] block leading-none">
                <Image src="/footerlogo.png" alt="Freak Menu" width={200} height={150} />
              </span>
              <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase mt-2 block font-bold">
                The Ultimate Burger Joint
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Karachi's boldest flavors, smashed to perfection and served with a side of madness since 2024. 
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl bg-white/5 text-[#FBA108] flex items-center justify-center hover:bg-[#FBA108] hover:text-black transition-all duration-300 group shadow-lg border border-white/5"
                >
                  <social.Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-black mb-8 text-white flex items-center gap-2 uppercase italic tracking-wider">
              <Flame size={18} className="text-[#FBA108]" /> Explore
            </h4>
            <ul className="space-y-4 text-white/60">
              {['Our Story', 'Freak Menu', 'Special Deals', 'Track Order', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#FBA108] transition-colors flex items-center gap-3 group text-sm">
                    <span className="h-0.5 w-0 bg-[#FBA108] group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Timing Column */}
          <div>
            <h4 className="text-lg font-black mb-8 text-white uppercase italic tracking-wider">Service Hours</h4>
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#FBA108] mb-1 font-bold">Weekdays</span>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-white/80 text-sm font-medium">Mon - Thu</span>
                    <span className="text-[#FBA108] font-mono text-sm">12:00 - 01:00</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#FBA108] mb-1 font-bold">Weekend Fever</span>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-white/80 text-sm font-medium">Fri - Sun</span>
                    <span className="text-[#FBA108] font-mono text-sm">12:00 - 03:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location/Contact Column */}
          <div>
            <h4 className="text-lg font-black mb-8 text-white uppercase italic tracking-wider">Visit Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#FBA108]/5 border border-[#FBA108]/20 flex items-center justify-center text-[#FBA108] group-hover:bg-[#FBA108] group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <p className="text-white/60 text-sm pt-1 group-hover:text-white transition-colors">
                  Main Gulshan-e-Iqbal, <br /> Block 13-C, Karachi, PK
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#FBA108]/5 border border-[#FBA108]/20 flex items-center justify-center text-[#FBA108] group-hover:bg-[#FBA108] group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <div>
                    <p className="text-white font-black text-sm group-hover:text-[#FBA108] transition-colors">+92 300 1234567</p>
                    <p className="text-[10px] text-[#FBA108] uppercase tracking-widest mt-1 font-bold">Freak Hotline</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-medium">
            © 2026 FreakMenu Karachi. No Burgers were harmed.
          </p>
          <div className="flex gap-8 text-[10px] text-white/40 uppercase tracking-widest font-bold">
            <Link href="#" className="hover:text-[#FBA108] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#FBA108] transition-colors">Terms of Use</Link>
          </div>
          <p className="text-[10px] text-[#FBA108]/60 font-[1000] italic tracking-widest uppercase">
            Designed by Retnavia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;