import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

function NavLinks() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] rounded-full px-1.5 py-1.5">
        {navLinks.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-200 no-underline ${
              isActive(path)
                ? "bg-indigo-600 text-white shadow-[0_2px_16px_rgba(99,102,241,0.35)]"
                : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            <Icon className="w-3 h-3" />
            {label}
          </Link>
        ))}
      </div>

      {/* Tablet */}
      <div className="hidden md:flex lg:hidden items-center gap-1 bg-white/[0.03] border border-white/[0.05] rounded-full px-1.5 py-1.5">
        {navLinks.slice(0, 3).map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-200 no-underline ${
              isActive(path)
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            <Icon className="w-3 h-3" />
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}

export default NavLinks;
