import {
  Lock,
  Mail,
  User,
  Zap,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";

function AuthForm({
  isSignup,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  loading,
  error,
  message,
  onSubmit,
  onToggleMode,
}) {
  return (
    <div className="col-span-1 lg:col-span-6 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 relative pb-12 lg:py-12">
      <div className="w-full max-w-md space-y-6 relative z-10">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-[#111827]/60 border border-white/10 px-4 py-1 rounded-full shadow-md">
            <span className="inline-block w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-[9px] font-extrabold tracking-[0.2em] uppercase text-slate-400">
              {isSignup ? "INITIALIZE MATRIX LAYER" : "IDENTITY VERIFICATION"}
            </span>
          </div>
        </div>

        <div className="bg-[#0b0f19]/90 backdrop-blur-xl border border-white/5 shadow-2xl p-8 sm:p-10 rounded-[2rem]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1.5">
              {isSignup ? "Create" : "Welcome"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {isSignup ? "Node" : "Back"}
              </span>
            </h1>
            <p className="text-slate-500 font-semibold text-[10px] tracking-wider uppercase">
              {isSignup
                ? "Deploy a new network node identifier"
                : "Synchronize your session to continue."}
            </p>
          </div>

          {message && (
            <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3 text-emerald-400">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <p className="text-xs font-bold uppercase tracking-wider">
                {message}
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3 text-red-400">
              <Zap className="w-4 h-4 flex-shrink-0" />
              <p className="text-xs font-bold uppercase tracking-wide">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            {isSignup && (
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Full Name
                </label>
                <div className="flex items-center bg-[#111726] border border-white/10 rounded-full px-5 py-3.5 focus-within:border-indigo-500/50 transition-all group">
                  <User className="text-slate-500 group-focus-within:text-indigo-400 w-4 h-4 mr-3" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-slate-100 text-sm placeholder:text-slate-700 font-medium"
                    placeholder="Enter full name"
                    required={isSignup}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Email
              </label>
              <div className="flex items-center bg-[#111726] border border-white/10 rounded-full px-5 py-3.5 focus-within:border-indigo-500/50 transition-all group">
                <Mail className="text-slate-500 group-focus-within:text-indigo-400 w-4 h-4 mr-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-slate-100 text-sm placeholder:text-slate-700 font-medium"
                  placeholder="user@network.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Access Key
              </label>
              <div className="flex items-center bg-[#111726] border border-white/10 rounded-full px-5 py-3.5 focus-within:border-indigo-500/50 transition-all group">
                <Lock className="text-slate-500 group-focus-within:text-indigo-400 w-4 h-4 mr-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-slate-100 text-sm placeholder:text-slate-700 font-medium tracking-wide"
                  placeholder="••••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-500 hover:text-slate-300 transition-colors focus:outline-none ml-2"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-full py-4 px-6 font-extrabold text-xs uppercase tracking-widest transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 mt-6 disabled:opacity-50 cursor-pointer shadow-lg shadow-indigo-950/50"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin text-white" />
              ) : (
                <>
                  <span>
                    {isSignup ? "Initialize Registration" : "Authorize Entry"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="relative flex py-4 items-center my-2">
            <div className="flex-grow border-t border-white/5" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              {isSignup
                ? "Already registered on the grid?"
                : "NEW TO THE NETWORK?"}
            </p>
            <button
              type="button"
              onClick={onToggleMode}
              className="text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none cursor-pointer"
            >
              {isSignup ? "Access Existing Identity" : "Create Account Node"}
            </button>
          </div>
        </div>

        <p className="text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 pb-4">
          AUTHENTICATED ACCESS SECURES YOUR TRAJECTORY ON THE NETWORK.
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
