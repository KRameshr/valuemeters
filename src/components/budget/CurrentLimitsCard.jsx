import { Sun, Calendar, CalendarDays } from "lucide-react";

function CurrentLimitsCard({ budget }) {
  const limits = [
    {
      label: "Daily",
      icon: Sun,
      color: "text-yellow-400",
      bg: "bg-yellow-500/5",
      border: "border-yellow-500/10",
      value: budget.dailyLimit,
    },
    {
      label: "Weekly",
      icon: Calendar,
      color: "text-indigo-400",
      bg: "bg-indigo-500/5",
      border: "border-indigo-500/10",
      value: budget.weeklyLimit,
    },
    {
      label: "Monthly",
      icon: CalendarDays,
      color: "text-purple-400",
      bg: "bg-purple-500/5",
      border: "border-purple-500/10",
      value: budget.monthlyLimit,
    },
  ];

  return (
    <div className="bg-[#0b0f19] border border-white/5 p-5 rounded-2xl">
      <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-4">
        Current Limits
      </p>
      <div className="grid grid-cols-3 gap-3">
        {limits.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`text-center p-3 ${item.bg} border ${item.border} rounded-xl`}
            >
              <Icon className={`w-4 h-4 ${item.color} mx-auto mb-1`} />
              <p className="text-[9px] font-bold text-slate-500 uppercase">
                {item.label}
              </p>
              <p className="text-sm font-black text-white">
                ₹{Number(item.value).toLocaleString("en-IN")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CurrentLimitsCard;
