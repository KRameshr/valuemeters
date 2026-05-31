import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import bgImage from "../../assets/bg-image.png";
import { ArrowLeft, Loader2 } from "lucide-react";

import CurrentLimitsCard from "../../components/budget/CurrentLimitsCard";
import BudgetForm from "../../components/budget/BudgetForm";
import BudgetTipsCard from "../../components/budget/BudgetTipsCard";
import { getBudgetPeriods } from "../../data/budgetData";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function BudgetSettings() {
  const [dailyLimit, setDailyLimit] = useState("");
  const [weeklyLimit, setWeeklyLimit] = useState("");
  const [monthlyLimit, setMonthlyLimit] = useState("");
  const [account, setAccount] = useState(null);
  const [existingBudget, setExistingBudget] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setFetchingData(true);
      const userId = user?.userId;

      const accountRes = await axios.get(
        `${API_BASE_URL}/account/user/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setAccount(accountRes.data);

      try {
        const budgetRes = await axios.get(
          `${API_BASE_URL}/budget/get/${accountRes.data.id}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        setExistingBudget(budgetRes.data);
      } catch {
        // No budget yet
      }
    } catch {
      setError("Failed to load data!");
    } finally {
      setFetchingData(false);
    }
  };

  const handleSaveBudget = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const newDaily = dailyLimit ? parseFloat(dailyLimit) : 0;
    const newWeekly = weeklyLimit ? parseFloat(weeklyLimit) : 0;
    const newMonthly = monthlyLimit ? parseFloat(monthlyLimit) : 0;

    try {
      const response = await axios.post(
        `${API_BASE_URL}/budget/set/${account.id}`,
        {
          dailyLimit: newDaily,
          weeklyLimit: newWeekly,
          monthlyLimit: newMonthly,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setMessage(response.data);
      setDailyLimit("");
      setWeeklyLimit("");
      setMonthlyLimit("");
      setExistingBudget({
        dailyLimit: newDaily,
        weeklyLimit: newWeekly,
        monthlyLimit: newMonthly,
      });
    } catch {
      setError("Failed to save budget limits!");
    } finally {
      setLoading(false);
    }
  };

  const budgetPeriods = getBudgetPeriods(
    dailyLimit,
    setDailyLimit,
    weeklyLimit,
    setWeeklyLimit,
    monthlyLimit,
    setMonthlyLimit,
    existingBudget,
  );

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

        <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-6">
          <div className="flex items-center gap-4 border-b border-white/5 pb-6">
            <Link
              to="/dashboard"
              className="p-2 rounded-xl bg-[#0b0f19] border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all no-underline"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white uppercase">
                Budget{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Settings
                </span>
              </h1>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.15em] mt-0.5">
                Set your spending limits
              </p>
            </div>
          </div>

          {fetchingData && (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="w-6 h-6 text-indigo-500 animate-spin" />
            </div>
          )}

          {!fetchingData && (
            <>
              {existingBudget && <CurrentLimitsCard budget={existingBudget} />}

              <BudgetForm
                periods={budgetPeriods}
                loading={loading}
                message={message}
                error={error}
                onSubmit={handleSaveBudget}
                existingBudget={existingBudget}
              />

              <BudgetTipsCard />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default BudgetSettings;
