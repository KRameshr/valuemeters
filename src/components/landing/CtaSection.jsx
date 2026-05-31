import { ArrowUpRight } from "lucide-react";

function CtaSection({ onGetStarted }) {
  return (
    <div className="relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-400 mb-4">
          JOIN THE NETWORK
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
          READY TO DEPLOY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            YOUR NODE?
          </span>
        </h2>
        <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed mb-10">
          Join 2.4 million operators already running on the ValueMeters quantum
          financial grid.
        </p>
        <button
          onClick={onGetStarted}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-lg shadow-indigo-950/50"
        >
          <span>Initialize Node</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default CtaSection;
