import {
  ShoppingBag,
  Car,
  Heart,
  BookOpen,
  MoreHorizontal,
} from "lucide-react";

export const categories = [
  {
    id: "FOOD",
    label: "Food",
    icon: ShoppingBag,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    activeBg: "bg-orange-500",
    placeholder: "Lunch at restaurant",
  },
  {
    id: "TRANSPORT",
    label: "Transport",
    icon: Car,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    activeBg: "bg-blue-500",
    placeholder: "Uber ride",
  },
  {
    id: "HEALTH",
    label: "Health",
    icon: Heart,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    activeBg: "bg-red-500",
    placeholder: "Medicine",
  },
  {
    id: "EDUCATION",
    label: "Education",
    icon: BookOpen,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    activeBg: "bg-purple-500",
    placeholder: "Course fee",
  },
  {
    id: "OTHERS",
    label: "Others",
    icon: MoreHorizontal,
    color: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    activeBg: "bg-slate-500",
    placeholder: "Other expense",
  },
];

export const quickAmounts = [100, 200, 500, 1000, 2000, 5000];
