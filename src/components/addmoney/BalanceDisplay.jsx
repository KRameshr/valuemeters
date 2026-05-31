import { Wallet } from "lucide-react";

function BalanceDisplay({ account }) {
  return (
    <div className="bg-[#0b0f19] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-1">
            Current Balance
          </p>
          <h2 className="text-3xl font-black text-white">
            ₹
            {Number(account.balance).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </h2>
          <p className="text-[10px] font-mono text-slate-400 mt-1">
            {account.accountNumber}
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
          <Wallet className="w-6 h-6 text-emerald-400" />
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-white/5 rounded-full h-1.5">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 rounded-full transition-all duration-700"
            style={{
              width: `${Math.min((account.balance / 50000) * 100, 100)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BalanceDisplay;
