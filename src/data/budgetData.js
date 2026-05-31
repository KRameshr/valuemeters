import { Sun, Calendar, CalendarDays } from "lucide-react";

export const budgetTips = [
  "Daily limit helps control impulse spending",
  "Weekly limit gives flexible day-to-day spending",
  "Monthly limit tracks overall financial health",
  "Set limits lower than your actual income",
];

export const getBudgetPeriods = (
  dailyLimit,
  setDailyLimit,
  weeklyLimit,
  setWeeklyLimit,
  monthlyLimit,
  setMonthlyLimit,
  existingBudget,
) => [
  {
    label: "Daily Limit",
    sublabel: "Per day spending limit",
    icon: Sun,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    focusBorder: "focus-within:border-yellow-500/50",
    value: dailyLimit,
    setter: setDailyLimit,
    placeholder: "e.g. 500",
    existing: existingBudget?.dailyLimit,
  },
  {
    label: "Weekly Limit",
    sublabel: "Per week spending limit",
    icon: Calendar,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    focusBorder: "focus-within:border-indigo-500/50",
    value: weeklyLimit,
    setter: setWeeklyLimit,
    placeholder: "e.g. 2000",
    existing: existingBudget?.weeklyLimit,
  },
  {
    label: "Monthly Limit",
    sublabel: "Per month spending limit",
    icon: CalendarDays,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    focusBorder: "focus-within:border-purple-500/50",
    value: monthlyLimit,
    setter: setMonthlyLimit,
    placeholder: "e.g. 10000",
    existing: existingBudget?.monthlyLimit,
  },
];
