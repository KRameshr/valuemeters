import { categoryConfig } from "../../data/categoryConfig";

function ExpenseItem({ exp, index }) {
  const cat = categoryConfig[exp.category] || categoryConfig.OTHERS;
  const Icon = cat.icon;

  return (
    <div className="bg-[#0b0f19] border border-white/5 p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-4 hover:border-white/10 transition-all duration-200">
      <div className="flex items-center gap-4">
        <div
          className={`p-2.5 rounded-xl border ${cat.bg} ${cat.border} ${cat.color} flex-shrink-0`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-xs font-extrabold text-white uppercase tracking-wider">
              {cat.label}
            </p>
            <span
              className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${cat.bg} ${cat.color} uppercase tracking-wider`}
            >
              {exp.category}
            </span>
          </div>
          <p className="text-[10px] font-semibold text-slate-500 mt-0.5">
            {exp.description || "No description"}
          </p>
          <p className="text-[9px] font-bold text-slate-600 mt-0.5 uppercase tracking-wider">
            {exp.date
              ? new Date(exp.date).toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "Date unknown"}
          </p>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-sm font-black text-red-400">
          -₹
          {Number(exp.amount).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}
        </p>
        <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mt-0.5">
          SETTLED
        </p>
      </div>
    </div>
  );
}

export default ExpenseItem;
