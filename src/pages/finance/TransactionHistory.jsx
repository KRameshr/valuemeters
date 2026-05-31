import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import bgImage from "../../assets/bg-image.png";
import { History, Loader2, AlertTriangle, RefreshCw } from "lucide-react";

import TransactionItem from "../../components/transaction/TransactionItem";
import TransactionEmptyState from "../../components/transaction/TransactionEmptyState";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
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
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      setError("");
      const userId = user?.userId;

      const accountResponse = await axios.get(
        `${API_BASE_URL}/account/user/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const accountId = accountResponse.data.id;

      const response = await axios.get(
        `${API_BASE_URL}/transaction/history/${accountId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setTransactions(response.data);
    } catch {
      setError("Failed to load transaction history!");
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

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white uppercase flex items-center gap-3">
                <History className="w-5 h-5 text-indigo-400" />
                Transaction{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Audit Trail
                </span>
              </h1>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.15em] mt-1">
                Track your History
              </p>
            </div>
            <button
              onClick={fetchHistory}
              className="p-2.5 bg-[#0b0f19] hover:bg-[#111726] border border-white/5 hover:border-white/10 rounded-xl transition-all text-slate-400 hover:text-white cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <Loader2 className="w-7 h-7 text-indigo-500 animate-spin" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Parsing ledger blocks...
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
            <div className="space-y-3">
              {transactions.length === 0 ? (
                <TransactionEmptyState />
              ) : (
                transactions.map((t, index) => (
                  <TransactionItem key={t.id || index} t={t} index={index} />
                ))
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default TransactionHistory;
