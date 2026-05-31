import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { DollarSign, TrendingUp, Activity } from "lucide-react";
import bgImage from "../../assets/bg-image.png";
import AuthForm from "../../components/landing/AuthForm";
import StatsBar from "../../components/landing/StatsBar";
import FeaturesSection from "../../components/landing/FeaturesSection";
import HowItWorks from "../../components/landing/HowItWorks";
import CtaSection from "../../components/landing/CtaSection";
import Footer from "../../components/landing/Footer";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const payloadEmail = email.trim();
    const payloadPassword = password;
    const payloadName = name.trim();

    if (isSignup) {
      try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, {
          name: payloadName,
          email: payloadEmail,
          password: payloadPassword,
        });
        setMessage(response.data || "REGISTRATION SUCCESSFUL!");
        setName("");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          setIsSignup(false);
          setMessage("");
        }, 2500);
      } catch {
        setError("REGISTRATION FAILED! EMAIL MAY ALREADY EXIST.");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
          email: payloadEmail,
          password: payloadPassword,
        });
        login(response.data);
        navigate("/dashboard");
      } catch {
        setError("INVALID CREDENTIALS. CORE VALIDATION FAILED.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleToggleMode = () => {
    setIsSignup(!isSignup);
    setError("");
    setMessage("");
  };

  const handleGetStarted = () => {
    setIsSignup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="w-full min-h-screen text-slate-100 font-sans overflow-x-hidden relative"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Mobile */}
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
      <div className="relative z-10 flex lg:hidden items-center justify-center gap-4 px-6 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <span className="text-base font-black tracking-tighter text-white block">
              VALUE<span className="text-indigo-400">METERS</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.3em] text-slate-500 uppercase block -mt-0.5">
              Quantum Value
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#0b0f19] border border-white/5 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
            LIVE
          </span>
        </div>
      </div>

      <div className="relative z-10 flex lg:hidden flex-col items-center text-center px-6 pt-8 pb-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-white leading-tight mb-3">
          {isSignup ? "Deploy Node." : "Move Smarter."}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            {isSignup ? "Claim Your Grid." : "Connect Faster."}
          </span>
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
          ValueMeters integrates directly into sovereign decentralized ledger
          arrays. Manage high-velocity transfers with zero latency.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-2 w-full max-w-xs">
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                Yield
              </p>
              <p className="text-sm font-black text-white">+14.2%</p>
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Activity className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                Network
              </p>
              <p className="text-sm font-black text-white">0.02ms</p>
            </div>
          </div>
        </div>
      </div>

      {/* destop */}
      <div className="relative z-10 w-full lg:min-h-screen lg:grid lg:grid-cols-12">
        <div className="hidden lg:flex lg:col-span-6 relative flex-col justify-between p-16 overflow-hidden border-r border-white/5">
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center opacity-[0.6] scale-105"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020617]" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center backdrop-blur-md">
              <DollarSign className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tighter text-white block">
                VALUE<span className="text-indigo-400">METERS</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-slate-500 uppercase block -mt-1">
                Quantum VALUE
              </span>
            </div>
          </div>
          <div className="relative z-10 max-w-xl space-y-6 my-auto">
            <h2 className="text-5xl font-extrabold tracking-tight text-white leading-tight">
              {isSignup ? "Deploy Node." : "Move Smarter."} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                {isSignup ? "Claim Your Grid." : "Connect Faster."}
              </span>
            </h2>
            <p className="text-slate-400 font-normal text-base leading-relaxed">
              ValueMeters integrates directly into sovereign decentralized
              ledger arrays. Manage high-velocity transfers, audit real-time
              interest matrices, and track asset exposure with zero latency.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Node Yield
                  </p>
                  <p className="text-base font-bold text-white">+14.2% APY</p>
                </div>
              </div>
              <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Network State
                  </p>
                  <p className="text-base font-bold text-white">0.02ms Trace</p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
            AUTHENTICATED ACCESS SECURES YOUR TRAJECTORY ON THE NETWORK.
          </p>
        </div>

        <AuthForm
          isSignup={isSignup}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          loading={loading}
          error={error}
          message={message}
          onSubmit={handleSubmit}
          onToggleMode={handleToggleMode}
        />
      </div>

      <StatsBar />
      <FeaturesSection />
      <HowItWorks />
      <CtaSection onGetStarted={handleGetStarted} />
      <Footer />
    </div>
  );
}

export default Login;
