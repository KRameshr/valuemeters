import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

function TransactionItem({ t, index }) {
  const isCredit = t.type === "CREDIT";

  return (
    <div
      key={t.id || index}
      className="bg-[#0b0f19] border border-white/5 p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-4 hover:border-white/10 transition-all duration-200"
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-2.5 rounded-xl border ${
            isCredit
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              : "bg-red-500/10 border-red-500/20 text-red-400"
          }`}
        >
          {isCredit ? (
            <ArrowDownLeft className="w-4 h-4" />
          ) : (
            <ArrowUpRight className="w-4 h-4" />
          )}
        </div>
        <div>
          <p className="text-xs font-extrabold text-white uppercase tracking-wider">
            {t.description || `${t.type} PROCESS TRANSACTION`}
          </p>
          <p className="text-[10px] font-semibold text-slate-500 mt-0.5">
            {t.date ? new Date(t.date).toLocaleString() : "Date encrypted"}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p
          className={`text-sm font-black tracking-tight ${
            isCredit ? "text-emerald-400" : "text-slate-200"
          }`}
        >
          {isCredit ? "+" : "-"} ₹
          {Number(t.amount).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}
        </p>
        <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mt-0.5">
          STATUS: SETTLED
        </p>
      </div>
    </div>
  );
}

export default TransactionItem;
