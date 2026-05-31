import { CreditCard } from "lucide-react";

function BalanceCard({ account }) {
  return (

    // left side card with balance and account details
    <div className="lg:col-span-7 bg-[#0b0f19] border border-white/5 p-8 rounded-[2rem] relative overflow-hidden shadow-2xl group flex flex-col justify-between min-h-[240px]">
      <div className="absolute top-[-20%] right-[-10%] w-72 h-72 bg-indigo-600/[0.04] rounded-full blur-[80px] group-hover:bg-indigo-600/[0.07] transition-all duration-700 pointer-events-none" />

      <div className="flex justify-between items-start relative z-10">
        <div className="space-y-1">
          <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
            Account Holder
          </p>
          <h3 className="text-xl font-extrabold text-white tracking-tight">
            {account.user?.name}
          </h3>
          <p className="text-xs font-semibold text-slate-400">
            {account.user?.email}
          </p>
        </div>
        <div className="p-3 rounded-xl bg-indigo-500/5 border border-white/10">
          <CreditCard className="w-5 h-5 text-indigo-400" />
        </div>
      </div>

      <div className="pt-6 relative z-10">
        <p className="text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase mb-1">
          Total Balance
        </p>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
          ₹
          {Number(account.balance).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}
        </h2>
        <div className="mt-4">
          <div className="w-full bg-white/5 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${Math.min((account.balance / 10000) * 100, 100)}%`,
              }}
            />
          </div>
          <div className="flex items-center gap-2 mt-2 text-slate-500 font-bold text-[10px] tracking-widest uppercase">
            <span>LEDGER ID:</span>
            <span className="text-slate-300 font-mono text-xs">
              {account.accountNumber}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
