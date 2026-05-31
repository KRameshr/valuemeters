import { categories } from "../../data/expenseData";

function CategorySelector({ selected, onSelect }) {
  return (
    <div className="space-y-3">
      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
        Select Category
      </label>
      <div className="grid grid-cols-5 gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selected === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelect(cat.id)}
              className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? `${cat.activeBg} border-transparent text-white`
                  : `bg-[#111726] ${cat.border} ${cat.color} hover:border-white/20`
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[9px] font-black uppercase tracking-wider">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategorySelector;
