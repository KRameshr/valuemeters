import { quickAmounts } from "../../data/expenseData";

function QuickAmounts({ selected, onSelect }) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
        Quick Select Amount
      </label>
      <div className="grid grid-cols-3 gap-2">
        {quickAmounts.map((amt) => (
          <button
            key={amt}
            type="button"
            onClick={() => onSelect(amt.toString())}
            className={`py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              selected === amt.toString()
                ? "bg-red-600 text-white border border-red-500"
                : "bg-[#111726] text-slate-400 border border-white/10 hover:border-red-500/30 hover:text-red-400"
            }`}
          >
            ₹{amt.toLocaleString("en-IN")}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickAmounts;
