import {
  ShoppingBag,
  Car,
  Heart,
  BookOpen,
  MoreHorizontal,
} from "lucide-react";

export const categoryConfig = {
  FOOD: {
    icon: ShoppingBag,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    label: "Food",
  },
  TRANSPORT: {
    icon: Car,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    label: "Transport",
  },
  HEALTH: {
    icon: Heart,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    label: "Health",
  },
  EDUCATION: {
    icon: BookOpen,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    label: "Education",
  },
  OTHERS: {
    icon: MoreHorizontal,
    color: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    label: "Others",
  },
};

export const getProgress = (spent, limit) => {
  if (!limit || limit === 0) return 0;
  return Math.min((spent / limit) * 100, 100);
};

export const getProgressColor = (pct) => {
  if (pct >= 90) return "bg-red-500";
  if (pct >= 70) return "bg-orange-500";
  return "bg-emerald-500";
};
