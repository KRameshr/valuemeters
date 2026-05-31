import {
  User,
  FileText,
  Loader2,
  Send,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function TransferForm({
  toAccount,
  setToAccount,
  amount,
  setAmount,
  description,
  setDescription,
  loading,
  message,
  error,
  onSubmit,
}) {
  return (
    <div className="bg-[#0b0f19] border border-white/5 shadow-2xl p-8 sm:p-10 rounded-[2rem]">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-black tracking-tight text-white uppercase">
          Dispatch{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Capital
          </span>
        </h1>
        <p className="text-slate-500 font-semibold text-[10px] tracking-wider uppercase mt-1">
          Authorize real-time cross-account settlement
        </p>
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
        <div className="space-y-2">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
            To Account Number
          </label>
          <div className="flex items-center bg-[#111726] border border-white/10 rounded-full px-5 py-3.5 focus-within:border-indigo-500/50 transition-all group">
            <User className="text-slate-500 group-focus-within:text-indigo-400 w-4 h-4 mr-3" />
            <input
              type="text"
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-slate-100 text-sm placeholder:text-slate-700 font-medium"
              placeholder="Enter target account number"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Amount (₹)
          </label>
          <div className="flex items-center bg-[#111726] border border-white/10 rounded-full px-5 py-3.5 focus-within:border-indigo-500/50 transition-all group">
            <span className="text-slate-500 font-bold text-sm mr-3 pl-0.5 group-focus-within:text-indigo-400">
              ₹
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-slate-100 text-sm placeholder:text-slate-700 font-medium"
              placeholder="0.00"
              min="1"
              step="any"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Description{" "}
            <span className="text-slate-600 lowercase font-normal">
              (optional)
            </span>
          </label>
          <div className="flex items-center bg-[#111726] border border-white/10 rounded-full px-5 py-3.5 focus-within:border-indigo-500/50 transition-all group">
            <FileText className="text-slate-500 group-focus-within:text-indigo-400 w-4 h-4 mr-3" />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-slate-100 text-sm placeholder:text-slate-700 font-medium"
              placeholder="Enter reference message string"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-full py-4 px-6 font-extrabold text-xs uppercase tracking-widest transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 mt-6 disabled:opacity-50 cursor-pointer shadow-lg shadow-indigo-950/50"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin text-white" />
          ) : (
            <>
              <span>Execute Settlement</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default TransferForm;
