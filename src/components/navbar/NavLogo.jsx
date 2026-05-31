import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";

function NavLogo() {
  return (
    <Link
      to="/dashboard"
      className="flex items-center gap-2.5 group no-underline flex-shrink-0"
    >
      <div className="w-8 h-8 rounded-lg bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center group-hover:bg-indigo-600/25 transition-all duration-300">
        <DollarSign className="w-4 h-4 text-indigo-400" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-black tracking-tight text-white uppercase">
          VALUE<span className="text-indigo-400">METERS</span>
        </span>
        <span className="text-[7px] font-semibold tracking-[0.25em] text-slate-500 uppercase mt-[2px]">
          Quantum VALUE
        </span>
      </div>
    </Link>
  );
}

export default NavLogo;
