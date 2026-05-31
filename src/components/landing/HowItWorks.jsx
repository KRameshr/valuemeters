import { howItWorks } from "../../data/loginData";

function HowItWorks() {
  return (
    <div className="relative z-10 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-purple-400 mb-4">
            NETWORK PROTOCOL
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
            HOW IT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              WORKS
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, i) => (
            <div
              key={i}
              className={`${step.bg} border ${step.border} p-8 rounded-2xl relative overflow-hidden`}
            >
              <span
                className={`text-7xl font-black ${step.color} opacity-10 absolute -top-2 -right-2 select-none`}
              >
                {step.step}
              </span>
              <span
                className={`text-[10px] font-black tracking-[0.25em] uppercase ${step.color} block mb-4`}
              >
                STEP {step.step}
              </span>
              <h3 className="text-xl font-black text-white uppercase mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
