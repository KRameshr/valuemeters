import { TrendingDown } from "lucide-react";
import { categoryConfig } from "../../data/categoryConfig";

function ExpenseSummaryCards({ expenses, totalSpent }) {
  const getCategoryTotal = (category) =>
    expenses
      .filter((e) => e.category === category)
      .reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="col-span-2 sm:col-span-1 bg-[#0b0f19] border border-white/5 p-4 rounded-2xl">
        <div className="flex items-center gap-2 mb-2">
          <TrendingDown className="w-4 h-4 text-red-400" />
          <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
            Total Spent
          </p>
        </div>
        <p className="text-lg font-black text-red-400">
          ₹{totalSpent.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-[9px] text-slate-600 mt-0.5">
          {expenses.length} transactions
        </p>
      </div>

      {["FOOD", "TRANSPORT", "HEALTH"].map((cat) => {
        const config = categoryConfig[cat];
        const Icon = config.icon;
        const total = getCategoryTotal(cat);
        return (
          <div
            key={cat}
            className="bg-[#0b0f19] border border-white/5 p-4 rounded-2xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`w-4 h-4 ${config.color}`} />
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                {config.label}
              </p>
            </div>
            <p className={`text-lg font-black ${config.color}`}>
              ₹{total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ExpenseSummaryCards;
