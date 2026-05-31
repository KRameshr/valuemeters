import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import bgImage from "../../assets/bg-image.png";
import {
  ArrowLeft,
  Loader2,
  AlertTriangle,
  RefreshCw,
  Wallet,
} from "lucide-react";

import ExpenseSummaryCards from "../../components/expenselist/ExpenseSummaryCards";
import ExpenseFilterTabs from "../../components/expenselist/ExpenseFilterTabs";
import ExpenseItem from "../../components/expenselist/ExpenseItem";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [totalSpent, setTotalSpent] = useState(0);
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
    fetchExpenses();
  }, []);

  useEffect(() => {
    if (selectedCategory === "ALL") {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(
        expenses.filter((e) => e.category === selectedCategory),
      );
    }
  }, [selectedCategory, expenses]);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      setError("");
      const userId = user?.userId;

      const accountRes = await axios.get(
        `${API_BASE_URL}/account/user/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const accountId = accountRes.data.id;

      const expenseRes = await axios.get(
        `${API_BASE_URL}/expense/list/${accountId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      const sorted = expenseRes.data.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );
      setExpenses(sorted);
      setTotalSpent(sorted.reduce((sum, exp) => sum + Number(exp.amount), 0));
    } catch {
      setError("Failed to load expenses!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen text-slate-100 font-sans antialiased relative"
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

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <div className="flex items-center gap-4">
              <Link
                to="/dashboard"
                className="p-2 rounded-xl bg-[#0b0f19] border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all no-underline"
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white uppercase">
                  All{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    Expenses
                  </span>
                </h1>
                <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.15em] mt-0.5">
                  Complete spending history
                </p>
              </div>
            </div>
            <button
              onClick={fetchExpenses}
              className="p-2.5 bg-[#0b0f19] hover:bg-[#111726] border border-white/5 hover:border-white/10 rounded-xl transition-all text-slate-400 hover:text-white cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <Loader2 className="w-7 h-7 text-indigo-500 animate-spin" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Loading expenses...
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl flex items-center gap-4 text-red-400">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <p className="text-xs font-bold uppercase tracking-wide">
                {error}
              </p>
            </div>
          )}

          {!loading && !error && (
            <>
              <ExpenseSummaryCards
                expenses={expenses}
                totalSpent={totalSpent}
              />

              <ExpenseFilterTabs
                selected={selectedCategory}
                onSelect={setSelectedCategory}
                expenses={expenses}
              />

              <div className="space-y-3">
                {filteredExpenses.length === 0 ? (
                  <div className="bg-[#0b0f19] border border-white/5 p-12 rounded-2xl text-center">
                    <Wallet className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      No expenses found
                    </p>
                    <Link
                      to="/add-expense"
                      className="text-indigo-400 text-xs font-bold mt-2 block hover:text-indigo-300 no-underline"
                    >
                      Add your first expense →
                    </Link>
                  </div>
                ) : (
                  filteredExpenses.map((exp, index) => (
                    <ExpenseItem
                      key={exp.id || index}
                      exp={exp}
                      index={index}
                    />
                  ))
                )}
              </div>

              {filteredExpenses.length > 0 && (
                <div className="bg-[#0b0f19]/60 border border-white/5 p-4 rounded-2xl flex items-center justify-between">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Showing {filteredExpenses.length} of {expenses.length}{" "}
                    expenses
                  </p>
                  <p className="text-xs font-black text-red-400">
                    Total: -₹
                    {filteredExpenses
                      .reduce((sum, e) => sum + Number(e.amount), 0)
                      .toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default ExpenseList;
