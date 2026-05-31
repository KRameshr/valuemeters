import { TrendingDown } from "lucide-react";
import { budgetTips } from "../../data/budgetData";

function BudgetTipsCard() {
  return (
    <div className="bg-[#0b0f19]/60 border border-white/5 p-5 rounded-2xl space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <TrendingDown className="w-4 h-4 text-indigo-400" />
        <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
          Budget Tips
        </p>
      </div>
      <div className="space-y-2">
        {budgetTips.map((tip, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
            <p className="text-[10px] text-slate-500 font-medium">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetTipsCard;
