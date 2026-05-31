import { categories } from "../../data/expenseData";

function CategorySummary() {
  return (
    <div className="bg-[#0b0f19]/60 border border-white/5 p-5 rounded-2xl">
      <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-3">
        Categories
      </p>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${cat.bg} ${cat.border} ${cat.color}`}
            >
              <Icon className="w-3 h-3" />
              <span className="text-[9px] font-bold uppercase tracking-wider">
                {cat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategorySummary;
