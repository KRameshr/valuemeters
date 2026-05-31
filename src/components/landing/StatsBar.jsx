import { stats } from "../../data/loginData";

function StatsBar() {
  return (
    <div className="relative z-10 border-t border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className={`text-2xl md:text-3xl font-black ${s.color}`}>
              {s.value}
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
