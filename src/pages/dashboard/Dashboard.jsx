import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import { Loader2, AlertTriangle, History } from "lucide-react";
import { getProgress } from "../../data/categoryConfig";
import bgImage from "../../assets/bg-image.png";

import BalanceCard from "./BalanceCard";
import MonthlyCard from "./MonthlyCard";
import QuickActions from "./QuickActions";
import BudgetProgress from "./BudgetProgress";
import RecentExpenses from "./RecentExpenses";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Dashboard() {
  const [account, setAccount] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(null);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError("");
      const userId = user?.userId;

      const accountRes = await axios.get(
        `${API_BASE_URL}/account/user/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setAccount(accountRes.data);
      const accountId = accountRes.data.id;

      try {
        const expenseRes = await axios.get(
          `${API_BASE_URL}/expense/list/${accountId}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        setExpenses(expenseRes.data);
      } catch {
        setExpenses([]);
      }

      try {
        const summaryRes = await axios.get(
          `${API_BASE_URL}/expense/summary/${accountId}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        setSummary(summaryRes.data);
      } catch {
        setSummary(null);
      }

      try {
        const budgetRes = await axios.get(
          `${API_BASE_URL}/budget/get/${accountId}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        setBudget(budgetRes.data);
      } catch {
        setBudget(null);
      }
    } catch {
      setError("Failed to load account!");
    } finally {
      setLoading(false);
    }
  };

  const monthlySpent = summary?.monthlySpent || 0;
  const monthlyLimit = budget?.monthlyLimit || 0;
  const monthlyProgress = getProgress(monthlySpent, monthlyLimit);

  return (
    <div
      className="w-full min-h-screen text-slate-100 font-sans antialiased selection:bg-indigo-500/30 relative"
      style={{ backgroundColor: "#020617" }}
    >
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#020617]/95 via-[#020617]/85 to-[#030712]/90" />

      <div className="relative z-10">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-6">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white uppercase">
                Finance{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Dashboard
                </span>
              </h1>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.15em] mt-1">
                Track • Budget • Grow
              </p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-center bg-[#0b0f19] border border-white/5 px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
                SECURE STREAM ACTIVE
              </span>
            </div>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Loading your finances...
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl flex items-center gap-4 text-red-400 max-w-2xl">
              <AlertTriangle className="w-5 h-5" />
              <p className="text-xs font-black uppercase tracking-wider">
                {error}
              </p>
            </div>
          )}

          {!loading && account && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <BalanceCard account={account} />
                <MonthlyCard
                  account={account}
                  expenses={expenses}
                  monthlySpent={monthlySpent}
                  monthlyLimit={monthlyLimit}
                  monthlyProgress={monthlyProgress}
                />
              </div>

              <QuickActions />

              {budget && summary && (
                <BudgetProgress budget={budget} summary={summary} />
              )}

              <RecentExpenses expenses={expenses} />

              <div className="pt-2 pb-6">
                <Link
                  to="/history"
                  className="w-full bg-[#0b0f19] hover:bg-[#111726] border border-white/5 hover:border-white/10 text-slate-400 hover:text-white text-center py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-200 no-underline flex items-center justify-center gap-2"
                >
                  <History className="w-4 h-4" />
                  View Full Transaction History
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
