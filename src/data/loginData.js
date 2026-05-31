import {
  ShieldCheck,
  Cpu,
  BarChart3,
  Globe,
  Clock,
  Layers,
} from "lucide-react";

export const features = [
  {
    icon: ShieldCheck,
    title: "SECURE VAULT",
    desc: "Military-grade encryption protects every transaction on the network.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Cpu,
    title: "QUANTUM CORE",
    desc: "Neural matching algorithms process transfers with zero latency overhead.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: BarChart3,
    title: "LIVE ANALYTICS",
    desc: "Real-time dashboards track your asset exposure and budget health.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Globe,
    title: "GLOBAL MESH",
    desc: "Sovereign decentralized ledger arrays span 190+ financial nodes.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: Clock,
    title: "REAL-TIME SYNC",
    desc: "Instant transaction sync with live balance updates across all accounts.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    icon: Layers,
    title: "SMART BUDGET",
    desc: "Set daily, weekly and monthly limits to control your spending matrix.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

export const stats = [
  { label: "Active Nodes", value: "2.4M+", color: "text-indigo-400" },
  { label: "Transactions/sec", value: "98K", color: "text-emerald-400" },
  { label: "Network Uptime", value: "99.99%", color: "text-purple-400" },
  { label: "Avg Latency", value: "0.02ms", color: "text-yellow-400" },
];

export const howItWorks = [
  {
    step: "01",
    title: "CREATE NODE",
    desc: "Register your operator identity on the ValueMeters quantum grid in under 60 seconds.",
    color: "text-indigo-400",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/5",
  },
  {
    step: "02",
    title: "FUND ACCOUNT",
    desc: "Deposit funds into your sovereign vault. Set budgets and spending limits instantly.",
    color: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
  },
  {
    step: "03",
    title: "TRACK & TRANSFER",
    desc: "Monitor transactions, transfer between accounts, and view real-time analytics.",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
  },
];
