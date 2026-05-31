import { Target, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

function BudgetForm({
  periods,
  loading,
  message,
  error,
  onSubmit,
  existingBudget,
}) {
  return (
    <div className="bg-[#0b0f19]/90 backdrop-blur-xl border border-white/5 shadow-2xl p-8 rounded-[2rem]">
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full">
          <Target className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[9px] font-extrabold tracking-[0.2em] uppercase text-purple-400">
            {existingBudget ? "UPDATE BUDGET LIMITS" : "SET BUDGET LIMITS"}
          </span>
        </div>
      </div>

      {message && (
        <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3 text-emerald-400">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <p className="text-xs font-bold uppercase tracking-wide">{message}</p>
        </div>
      )}
      {error && (
        <div className="mb-6 bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3 text-red-400">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <p className="text-xs font-bold uppercase tracking-wide">{error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5">
        {periods.map((period) => {
          const Icon = period.icon;
          return (
            <div key={period.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <Icon className={`w-3.5 h-3.5 ${period.color}`} />
                  {period.label}
                </label>
                {period.existing > 0 && (
                  <span
                    className={`text-[9px] font-bold ${period.color} uppercase tracking-wider`}
                  >
                    Current: ₹{Number(period.existing).toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              <div
                className={`flex items-center bg-[#111726] border border-white/10 rounded-full px-5 py-3.5 ${period.focusBorder} transition-all group`}
              >
                <div
                  className={`p-1.5 rounded-lg ${period.bg} border ${period.border} mr-3`}
                >
                  <Icon className={`w-3 h-3 ${period.color}`} />
                </div>
                <span className="text-slate-500 font-bold text-sm mr-2">₹</span>
                <input
                  type="number"
                  value={period.value}
                  onChange={(e) => period.setter(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-slate-100 text-sm placeholder:text-slate-700 font-medium"
                  placeholder={period.placeholder}
                  min="0"
                  step="any"
                />
              </div>
              <p className="text-[9px] text-slate-600 pl-2">
                {period.sublabel}
              </p>
            </div>
          );
        })}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-full py-4 px-6 font-extrabold text-xs uppercase tracking-widest transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 mt-6 disabled:opacity-50 cursor-pointer shadow-lg shadow-purple-950/50"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin text-white" />
          ) : (
            <>
              <Target className="w-4 h-4" />
              <span>
                {existingBudget ? "Update Budget Limits" : "Set Budget Limits"}
              </span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default BudgetForm;
