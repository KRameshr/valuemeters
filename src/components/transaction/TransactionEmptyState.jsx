import { History } from "lucide-react";

function TransactionEmptyState() {
  return (
    <div className="text-center py-16 bg-[#0b0f19] border border-white/5 rounded-2xl">
      <History className="w-8 h-8 text-slate-700 mx-auto mb-3" />
      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
        No transaction events found on grid.
      </p>
    </div>
  );
}

export default TransactionEmptyState;
