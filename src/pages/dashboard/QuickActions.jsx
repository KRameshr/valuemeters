import { Link } from "react-router-dom";
import { PlusCircle, MinusCircle, ArrowRightLeft, Target } from "lucide-react";

const actions = [
  {
    to: "/add-money",
    label: "Add Money",
    sub: "Deposit funds",
    icon: PlusCircle,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hover: "hover:border-emerald-500/30",
    hoverBg: "group-hover:bg-emerald-600",
  },
  {
    to: "/add-expense",
    label: "Add Expense",
    sub: "Track spending",
    icon: MinusCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    hover: "hover:border-red-500/30",
    hoverBg: "group-hover:bg-red-600",
  },
  {
    to: "/transfer",
    label: "Transfer",
    sub: "Send money",
    icon: ArrowRightLeft,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    hover: "hover:border-indigo-500/30",
    hoverBg: "group-hover:bg-indigo-600",
  },
  {
    to: "/budget",
    label: "Set Budget",
    sub: "Set limits",
    icon: Target,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    hover: "hover:border-purple-500/30",
    hoverBg: "group-hover:bg-purple-600",
  },
];

function QuickActions() {
  return (
    <div>
      <h4 className="text-xs font-black tracking-[0.2em] text-slate-500 uppercase mb-4">
        Quick Actions
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.to}
              to={action.to}
              className={`bg-[#0b0f19] border border-white/5 p-5 rounded-2xl flex flex-col items-center gap-3 group ${action.hover} transition-all duration-300 no-underline`}
            >
              <div
                className={`p-3 rounded-xl ${action.bg} border ${action.border} ${action.color} ${action.hoverBg} group-hover:text-white transition-all duration-300`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-center">
                <p className="text-xs font-extrabold text-white uppercase tracking-wider">
                  {action.label}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  {action.sub}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
