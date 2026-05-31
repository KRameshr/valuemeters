import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import bgImage from "../../assets/bg-image.png";
import { ArrowRightLeft } from "lucide-react";

import TransferForm from "../../components/transfer/TransferForm";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Transfer() {
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleTransfer = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const userId = user?.userId;

      const accountResponse = await axios.get(
        `${API_BASE_URL}/account/user/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const accountId = accountResponse.data.id;

      const response = await axios.post(
        `${API_BASE_URL}/transaction/transfer/${accountId}`,
        {
          toAccountNumber: toAccount.trim(),
          amount: parseFloat(amount),
          description: description.trim(),
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setMessage(response.data || "ASSET ROUTING COMPLETED SUCCESSFULLY.");
      setToAccount("");
      setAmount("");
      setDescription("");
    } catch {
      setError(
        "TRANSFER FAILED! CHECK ROUTING ACCOUNT NUMBER AND BALANCE MATRIX.",
      );
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

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-6 relative">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-[#111827]/60 border border-white/10 px-4 py-1 rounded-full shadow-md">
                <ArrowRightLeft className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-[9px] font-extrabold tracking-[0.2em] uppercase text-slate-400">
                  SECURE TRANSACTION MATRIX
                </span>
              </div>
            </div>

            <TransferForm
              toAccount={toAccount}
              setToAccount={setToAccount}
              amount={amount}
              setAmount={setAmount}
              description={description}
              setDescription={setDescription}
              loading={loading}
              message={message}
              error={error}
              onSubmit={handleTransfer}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Transfer;
