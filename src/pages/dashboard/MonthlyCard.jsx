import { TrendingUp } from "lucide-react";
import { getProgressColor } from "../../data/categoryConfig";

function MonthlyCard({
  account,
  expenses,
  monthlySpent,
  monthlyLimit,
  monthlyProgress,
}) {
  return (
    // right side card with monthly summary and progress bar
    <div className="lg:col-span-5 flex flex-col gap-4">
      <div className="bg-[#0b0f19]/80 border border-white/5 p-6 rounded-2xl flex-1">
        <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-4">
          This Month
        </p>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Spent
            </span>
            <span className="text-sm font-black text-red-400">
              -₹
              {Number(monthlySpent).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Remaining
            </span>
            <span className="text-sm font-black text-emerald-400">
              ₹
              {Number(account.balance).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
          {monthlyLimit > 0 && (
            <div className="pt-2">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  Budget Used
                </span>
                <span className="text-[10px] font-bold text-slate-400">
                  {monthlyProgress.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <div
                  className={`${getProgressColor(monthlyProgress)} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${monthlyProgress}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[9px] text-slate-600">
                  ₹{Number(monthlySpent).toLocaleString("en-IN")}
                </span>
                <span className="text-[9px] text-slate-600">
                  ₹{Number(monthlyLimit).toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#0b0f19]/60 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Total Expenses
          </p>
          <p className="text-base font-black text-white">
            {expenses.length} Transactions
          </p>
        </div>
      </div>
    </div>
  );
}

export default MonthlyCard;
