import { features } from "../../data/loginData";

function FeaturesSection() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-indigo-400 mb-4">
          PLATFORM CORE
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
          WHY VALUE<span className="text-indigo-400">METERS</span>?
        </h2>
        <p className="text-slate-400 text-base max-w-lg leading-relaxed">
          Connecting your finances with verified quantum-grade security and
          real-time intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="group bg-[#0b0f19]/60 border border-white/5 hover:border-white/10 p-7 rounded-2xl transition-all duration-300 hover:bg-[#0b0f19]/90 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider mb-3">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${f.color.replace("text-", "bg-")} animate-pulse`}
                />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
                  SECURE SYNC
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturesSection;
