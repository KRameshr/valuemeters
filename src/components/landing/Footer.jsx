import { DollarSign } from "lucide-react";

function Footer() {
  return (
    <div className="relative z-10 border-t border-white/5 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
            <DollarSign className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <span className="text-sm font-black tracking-tighter text-white">
            VALUE<span className="text-indigo-400">METERS</span>
          </span>
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
          © {new Date().getFullYear()} VALUEMETERS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
            NETWORK ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
