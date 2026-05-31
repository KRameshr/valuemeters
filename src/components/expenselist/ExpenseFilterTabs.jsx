import { Filter } from "lucide-react";
import { categoryConfig } from "../../data/categoryConfig";

const filterOptions = [
  "ALL",
  "FOOD",
  "TRANSPORT",
  "HEALTH",
  "EDUCATION",
  "OTHERS",
];

function ExpenseFilterTabs({ selected, onSelect, expenses }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-3.5 h-3.5 text-slate-500" />
        <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
          Filter by Category
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((cat) => {
          const isAll = cat === "ALL";
          const config = !isAll ? categoryConfig[cat] : null;
          const Icon = config?.icon;
          const isSelected = selected === cat;

          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-indigo-600 text-white border border-indigo-500"
                  : "bg-[#0b0f19] text-slate-400 border border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {Icon && <Icon className="w-3 h-3" />}
              {isAll ? "All" : config?.label}
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded-full ${isSelected ? "bg-white/20" : "bg-white/5"}`}
              >
                {isAll
                  ? expenses.length
                  : expenses.filter((e) => e.category === cat).length}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseFilterTabs;
