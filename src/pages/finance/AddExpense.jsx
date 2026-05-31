import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import bgImage from "../../assets/bg-image.png";
import {
  MinusCircle,
  ArrowLeft,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Wallet,
} from "lucide-react";

import CategorySelector from "../../components/expense/CategorySelector";
import QuickAmounts from "../../components/expense/QuickAmounts";
import CategorySummary from "../../components/expense/CategorySummary";
import { categories } from "../../data/expenseData";
import Footer from "../../components/landing/Footer";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AddExpense() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("FOOD");
  const [account, setAccount] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingAccount, setFetchingAccount] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    try {
      const userId = user?.userId;
      const response = await axios.get(
        `${API_BASE_URL}/account/user/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setAccount(response.data);
    } catch {
      setError("Failed to load account!");
    } finally {
      setFetchingAccount(false);
    }
  };

  const handleAddExpense = async (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount!");
      return;
    }
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/expense/add/${account.id}`,
        {
          amount: parseFloat(amount),
          category: selectedCategory,
          description: description || selectedCategory,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setMessage(response.data);
      setAmount("");
      setDescription("");
      setSelectedCategory("FOOD");
      fetchAccount();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to add expense! Check your balance.",
      );
    } finally {
      setLoading(false);
    }
  };

  const selectedCat = categories.find((c) => c.id === selectedCategory);

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
                Add{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Expense
                </span>
              </h1>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.15em] mt-0.5">
                Track your spending
              </p>
            </div>
          </div>

          {!fetchingAccount && account && (
            <div className="bg-[#0b0f19] border border-white/5 p-5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <Wallet className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Available Balance
                  </p>
                  <p className="text-xl font-black text-white">
                    ₹
                    {Number(account.balance).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
              <p className="text-[9px] font-mono text-slate-500">
                {account.accountNumber}
              </p>
            </div>
          )}

          <div className="bg-[#0b0f19]/90 backdrop-blur-xl border border-white/5 shadow-2xl p-8 rounded-[2rem]">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full">
                <MinusCircle className="w-3.5 h-3.5 text-red-400" />
                <span className="text-[9px] font-extrabold tracking-[0.2em] uppercase text-red-400">
                  TRACK EXPENSE
                </span>
              </div>
            </div>

            {message && (
              <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <p className="text-xs font-bold uppercase tracking-wide">
                  {message}
                </p>
              </div>
            )}
            {error && (
              <div className="mb-6 bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3 text-red-400">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <p className="text-xs font-bold uppercase tracking-wide">
                  {error}
                </p>
              </div>
            )}

            <form onSubmit={handleAddExpense} className="space-y-6">
              <CategorySelector
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />

              <QuickAmounts selected={amount} onSelect={setAmount} />

              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Custom Amount (₹)
                </label>
                <div className="flex items-center bg-[#111726] border border-white/10 rounded-full px-5 py-3.5 focus-within:border-red-500/50 transition-all group">
                  <span className="text-slate-500 font-bold text-sm mr-3 group-focus-within:text-red-400">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-slate-100 text-sm placeholder:text-slate-700 font-medium"
                    placeholder="Enter amount"
                    min="1"
                    step="any"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Description{" "}
                  <span className="text-slate-600 lowercase font-normal">
                    (optional)
                  </span>
                </label>
                <div className="flex items-center bg-[#111726] border border-white/10 rounded-full px-5 py-3.5 focus-within:border-red-500/50 transition-all group">
                  <FileText className="text-slate-500 group-focus-within:text-red-400 w-4 h-4 mr-3" />
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-slate-100 text-sm placeholder:text-slate-700 font-medium"
                    placeholder={`e.g. ${selectedCat?.placeholder || "expense description"}`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !amount}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-full py-4 px-6 font-extrabold text-xs uppercase tracking-widest transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-lg shadow-red-950/50"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                ) : (
                  <>
                    {selectedCat && <selectedCat.icon className="w-4 h-4" />}
                    <span>
                      Add {selectedCat?.label} Expense
                      {amount
                        ? ` ₹${Number(amount).toLocaleString("en-IN")}`
                        : ""}
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>

          <CategorySummary />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AddExpense;
