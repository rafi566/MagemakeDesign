import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Eye,
  EyeOff,
  Loader2,
  Database,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { MageLogo, MageIcon } from "../components/MageLogo";

export function LoginPage() {
  const navigate = useNavigate();
  const [personalNumber, setPersonalNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!personalNumber.trim() || !password.trim()) {
      setError("Personal Number dan Password wajib diisi.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1200);
  };

  return (
    <div className="min-h-screen lg:h-screen w-full flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Panel - Gradient hero (matches dashboard style) */}
      <div className="relative hidden lg:flex lg:w-[52%] bg-gradient-to-br from-blue-700 to-indigo-800 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full bg-indigo-400/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[220px] h-[220px] rounded-full bg-sky-400/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between w-full px-14 xl:px-20 py-14">
          {/* Top: Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
              <MageIcon size={32} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white text-[18px] tracking-tight">MAGE</span>
              <span className="text-blue-200 text-[12px]">Metadata Automated Generation Engine</span>
            </div>
          </div>

          {/* Middle: Hero copy */}
          <div className="max-w-[500px]">
            <h1 className="text-white text-[40px] xl:text-[44px] leading-[1.1] tracking-tight">
              Automate your metadata, accelerate your decisions.
            </h1>
            <p className="text-blue-100 text-[15px] leading-relaxed mt-5 max-w-[460px]">
              Kelola metadata assets, ingestion tickets, dan coverage dashboard dalam satu portal terpadu MAGE.
            </p>
          </div>

          {/* Bottom: Footer */}
          <div className="flex items-center justify-between text-[12px] text-blue-200/80">
            <span>&copy; 2026 MAGE. All Rights Reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="relative flex-1 flex items-center justify-center px-6 sm:px-10 py-12 bg-gray-50">
        {/* Mobile brand header */}
        <div className="lg:hidden absolute top-6 left-6 right-6 flex justify-center">
          <MageLogo variant="compact" />
        </div>

        <div
          className="w-full max-w-[440px] bg-white rounded-2xl border border-gray-200 p-9"
          style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)" }}
        >
          <div className="mb-8">
            <p className="text-[13px] text-gray-500 uppercase tracking-wider">Welcome back</p>
            <h2 className="text-[28px] text-gray-900 tracking-tight mt-1">Sign in to MAGE</h2>
            <p className="text-[14px] text-gray-500 mt-2 leading-relaxed">
              Masukkan Personal Number dan Password Anda untuk mengakses dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Personal Number */}
            <div>
              <label className="block text-[12px] text-gray-600 tracking-wide mb-1.5">
                Personal Number
              </label>
              <input
                type="text"
                value={personalNumber}
                onChange={(e) => setPersonalNumber(e.target.value)}
                placeholder="e.g. 8123456"
                className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[12px] text-gray-600 tracking-wide">Password</label>
                <button
                  type="button"
                  className="text-[12px] text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-11 px-4 pr-11 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2.5 cursor-pointer group w-max">
              <div className="relative w-4 h-4 rounded border border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors peer-checked:bg-blue-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="absolute opacity-0 w-full h-full cursor-pointer"
                />
                {rememberMe && <div className="w-2.5 h-2.5 bg-blue-600 rounded-sm" />}
              </div>
              <span className="text-[13px] text-gray-600">Ingat saya selama 30 hari</span>
            </label>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-[13px] text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-[14px] tracking-wide hover:from-blue-700 hover:to-indigo-800 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>


        </div>
      </div>
    </div>
  );
}

interface FeatureChipProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function FeatureChip({ icon: Icon, label, value }: FeatureChipProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5">
      <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center mb-2">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <p className="text-white text-[18px] tracking-tight">{value}</p>
      <p className="text-blue-200 text-[11px] tracking-wide mt-0.5">{label}</p>
    </div>
  );
}