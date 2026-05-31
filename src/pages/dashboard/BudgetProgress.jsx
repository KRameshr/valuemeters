import { Link } from "react-router-dom";
import { getProgress, getProgressColor } from "../../data/categoryConfig";

function BudgetProgress({ budget, summary }) {
  const periods = [
    {
      label: "Daily",
      dot: "bg-emerald-400",
      spent: summary.dailySpent,
      limit: budget.dailyLimit,
    },
    {
      label: "Weekly",
      dot: "bg-indigo-400",
      spent: summary.weeklySpent,
      limit: budget.weeklyLimit,
    },
    {
      label: "Monthly",
      dot: "bg-purple-400",
      spent: summary.monthlySpent,
      limit: budget.monthlyLimit,
    },
  ];

  const hasAnyLimit =
    budget.dailyLimit > 0 || budget.weeklyLimit > 0 || budget.monthlyLimit > 0;

  return (
    <div>
      <h4 className="text-xs font-black tracking-[0.2em] text-slate-500 uppercase mb-4">
        Budget Progress
      </h4>
      <div className="bg-[#0b0f19] border border-white/5 p-6 rounded-2xl space-y-5">
        {!hasAnyLimit ? (
          <div className="text-center py-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              No budget limits set yet
            </p>
            <Link
              to="/budget"
              className="text-indigo-400 text-xs font-bold mt-1 block hover:text-indigo-300 no-underline"
            >
              Set Budget Limits →
            </Link>
          </div>
        ) : (
          periods.map((period) => {
            if (!period.limit || period.limit <= 0) return null;
            const pct = getProgress(period.spent, period.limit);
            return (
              <div key={period.label}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${period.dot}`} />
                    <span className="text-xs font-black text-white uppercase tracking-wider">
                      {period.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400">
                      ₹{Number(period.spent).toLocaleString("en-IN")}
                    </span>
                    <span className="text-slate-600">/</span>
                    <span className="text-xs font-bold text-slate-300">
                      ₹{Number(period.limit).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5">
                  <div
                    className={`${getProgressColor(pct)} h-2.5 rounded-full transition-all duration-700`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default BudgetProgress;
