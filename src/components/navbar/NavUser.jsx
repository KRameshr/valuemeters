import { User, LogOut, Menu } from "lucide-react";

function NavUser({ operatorName, onLogout, onMenuOpen }) {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <div className="hidden sm:flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full py-1.5 px-3">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <User className="w-3 h-3 text-slate-400" />
        <span className="text-[10px] font-black tracking-widest uppercase text-slate-200 max-w-[80px] truncate">
          {operatorName}
        </span>
      </div>

      <button
        onClick={onLogout}
        title="Logout"
        className="hidden sm:flex w-8 h-8 rounded-lg border border-white/[0.07] bg-white/[0.03] hover:bg-red-500/10 hover:border-red-500/30 text-slate-400 hover:text-red-400 items-center justify-center transition-all duration-300 group cursor-pointer"
      >
        <LogOut className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
      </button>

      <button
        onClick={onMenuOpen}
        className="flex lg:hidden w-8 h-8 rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-300 items-center justify-center transition-all hover:bg-white/[0.07]"
      >
        <Menu className="w-4 h-4" />
      </button>
    </div>
  );
}

export default NavUser;
