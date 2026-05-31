import { Link } from "react-router-dom";
import { Wallet } from "lucide-react";
import { categoryConfig } from "../../data/categoryConfig";

function RecentExpenses({ expenses }) {
  const recentExpenses = expenses.slice(-5).reverse();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-black tracking-[0.2em] text-slate-500 uppercase">
          Recent Expenses
        </h4>
        <Link
          to="/expenses"
          className="text-[10px] font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-wider no-underline"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-3">
        {recentExpenses.length === 0 ? (
          <div className="bg-[#0b0f19] border border-white/5 p-8 rounded-2xl text-center">
            <Wallet className="w-8 h-8 text-slate-700 mx-auto mb-3" />
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              No expenses yet
            </p>
            <Link
              to="/add-expense"
              className="text-indigo-400 text-xs font-bold mt-1 block hover:text-indigo-300 no-underline"
            >
              Add your first expense →
            </Link>
          </div>
        ) : (
          recentExpenses.map((exp) => {
            const cat = categoryConfig[exp.category] || categoryConfig.OTHERS;
            const Icon = cat.icon;
            return (
              <div
                key={exp.id}
                className="bg-[#0b0f19] border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:border-white/10 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2.5 rounded-xl border ${cat.bg} ${cat.border} ${cat.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-white uppercase tracking-wider">
                      {cat.label}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-500 mt-0.5">
                      {exp.description || "No description"}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-red-400">
                    -₹
                    {Number(exp.amount).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <p className="text-[9px] font-bold text-slate-600 uppercase mt-0.5">
                    {new Date(exp.date).toLocaleDateString("en-IN")}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default RecentExpenses;
