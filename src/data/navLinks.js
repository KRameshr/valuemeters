import {
  LayoutDashboard,
  PlusCircle,
  MinusCircle,
  ArrowLeftRight,
  History,
  Target,
} from "lucide-react";

export const navLinks = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/add-money", label: "Add Money", icon: PlusCircle },
  { path: "/add-expense", label: "Expense", icon: MinusCircle },
  { path: "/transfer", label: "Transfer", icon: ArrowLeftRight },
  { path: "/history", label: "History", icon: History },
];

export const mobileNavLinks = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/add-money", label: "Add Money", icon: PlusCircle },
  { path: "/add-expense", label: "Add Expense", icon: MinusCircle },
  { path: "/transfer", label: "Transfer", icon: ArrowLeftRight },
  { path: "/history", label: "History", icon: History },
  { path: "/budget", label: "Budget Settings", icon: Target },
  { path: "/expenses", label: "All Expenses", icon: MinusCircle },
];
