import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import svgPaths from "../../imports/Source1-1/svg-cbi1kmmaoo";
import { MageLogo } from "../components/MageLogo";

function MageArtwork() {
  return (
    <svg viewBox="0 0 600 600" fill="none" className="w-full h-full max-w-[600px] max-h-[600px]">
      {/* Background blobs */}
      <ellipse cx="300" cy="300" rx="260" ry="260" fill="#1e40af" opacity="0.3" />
      <path d="M140 180 C180 100, 380 80, 440 160 C500 240, 480 400, 400 460 C320 520, 160 500, 120 400 C80 300, 100 260, 140 180Z" fill="#f59e0b" opacity="0.85" />
      <path d="M320 340 C360 280, 520 300, 520 380 C520 460, 420 520, 360 500 C300 480, 280 400, 320 340Z" fill="#f59e0b" opacity="0.7" />

      {/* Person 1 - Data analyst pointing at chart */}
      <g transform="translate(200, 160)">
        {/* Body */}
        <path d="M60 120 C60 90, 100 90, 100 120 L110 200 L50 200 Z" fill="#1e3a5f" />
        {/* Head */}
        <circle cx="80" cy="80" r="28" fill="#d4a574" />
        {/* Hair */}
        <path d="M52 72 C52 50, 108 50, 108 72 C108 60, 52 60, 52 72Z" fill="#1a1a2e" />
        {/* Arm pointing */}
        <path d="M110 140 L170 110 L174 118 L114 148Z" fill="#d4a574" />
        {/* Shirt detail */}
        <path d="M70 130 L90 130 L90 160 L70 160Z" fill="#2563eb" opacity="0.3" />
      </g>

      {/* Floating dashboard card */}
      <g transform="translate(340, 120)">
        <rect x="0" y="0" width="120" height="80" rx="10" fill="white" opacity="0.95" />
        <rect x="12" y="14" width="40" height="6" rx="3" fill="#3b82f6" />
        <rect x="12" y="26" width="96" height="4" rx="2" fill="#e5e7eb" />
        <rect x="12" y="36" width="70" height="4" rx="2" fill="#e5e7eb" />
        {/* Mini bar chart */}
        <rect x="12" y="50" width="12" height="20" rx="2" fill="#3b82f6" opacity="0.6" />
        <rect x="28" y="44" width="12" height="26" rx="2" fill="#3b82f6" opacity="0.8" />
        <rect x="44" y="54" width="12" height="16" rx="2" fill="#3b82f6" opacity="0.5" />
        <rect x="60" y="40" width="12" height="30" rx="2" fill="#3b82f6" />
        <rect x="76" y="48" width="12" height="22" rx="2" fill="#3b82f6" opacity="0.7" />
      </g>

      {/* Person 2 - Working on laptop */}
      <g transform="translate(320, 350)">
        {/* Body */}
        <path d="M50 100 C50 70, 90 70, 90 100 L100 170 L40 170 Z" fill="#0ea5e9" />
        {/* Head */}
        <circle cx="70" cy="62" r="25" fill="#c4956a" />
        {/* Hair */}
        <path d="M45 55 C45 35, 95 35, 95 55 C95 42, 45 42, 45 55Z" fill="#2d1b0e" />
        {/* Laptop */}
        <rect x="30" y="140" width="80" height="50" rx="4" fill="#1e293b" />
        <rect x="35" y="145" width="70" height="38" rx="2" fill="#60a5fa" opacity="0.4" />
        <rect x="20" y="190" width="100" height="6" rx="3" fill="#334155" />
        {/* Screen content */}
        <rect x="40" y="150" width="30" height="3" rx="1" fill="white" opacity="0.7" />
        <rect x="40" y="157" width="55" height="2" rx="1" fill="white" opacity="0.4" />
        <rect x="40" y="163" width="45" height="2" rx="1" fill="white" opacity="0.4" />
        <rect x="40" y="169" width="50" height="2" rx="1" fill="white" opacity="0.4" />
      </g>

      {/* Floating metadata card */}
      <g transform="translate(100, 380)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="white" opacity="0.95" />
        <rect x="10" y="12" width="24" height="24" rx="6" fill="#dbeafe" />
        <text x="22" y="29" textAnchor="middle" fill="#3b82f6" fontSize="14">M</text>
        <rect x="42" y="14" width="46" height="4" rx="2" fill="#1e293b" opacity="0.7" />
        <rect x="42" y="24" width="32" height="3" rx="1.5" fill="#94a3b8" />
        <rect x="10" y="46" width="80" height="3" rx="1.5" fill="#e5e7eb" />
        <rect x="10" y="55" width="60" height="3" rx="1.5" fill="#e5e7eb" />
      </g>

      {/* Floating search/magnifier icon */}
      <g transform="translate(440, 260)">
        <rect x="0" y="0" width="56" height="56" rx="14" fill="white" opacity="0.95" />
        <circle cx="24" cy="24" r="10" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
        <line x1="31" y1="31" x2="40" y2="40" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Floating checklist icon */}
      <g transform="translate(480, 400)">
        <rect x="0" y="0" width="56" height="56" rx="14" fill="white" opacity="0.95" />
        <rect x="14" y="14" width="10" height="10" rx="2" stroke="#10b981" strokeWidth="2" fill="none" />
        <path d="M16 19 L19 22 L24 16" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="17" width="16" height="3" rx="1.5" fill="#94a3b8" />
        <rect x="14" y="30" width="10" height="10" rx="2" stroke="#3b82f6" strokeWidth="2" fill="none" />
        <rect x="28" y="33" width="16" height="3" rx="1.5" fill="#94a3b8" />
      </g>

      {/* Floating pie chart icon */}
      <g transform="translate(130, 120)">
        <rect x="0" y="0" width="52" height="52" rx="12" fill="white" opacity="0.95" />
        <path d="M26 12 L26 26 L38 26 A14 14 0 0 0 26 12Z" fill="#3b82f6" />
        <path d="M24 14 A14 14 0 1 0 38 28 L24 28Z" fill="#60a5fa" opacity="0.5" />
      </g>

      {/* Small decorative dots */}
      <circle cx="500" cy="150" r="4" fill="white" opacity="0.3" />
      <circle cx="520" cy="180" r="3" fill="white" opacity="0.2" />
      <circle cx="150" cy="320" r="3" fill="white" opacity="0.25" />
      <circle cx="170" cy="300" r="5" fill="white" opacity="0.15" />
    </svg>
  );
}

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
    <div className="min-h-screen lg:h-screen w-full flex flex-col lg:flex-row bg-gradient-to-br from-[#014A94] to-[#0064CB] font-['Ubuntu',sans-serif] overflow-hidden">
      {/* Left Panel */}
      <div className="relative w-full lg:w-[45%] lg:max-w-[850px] h-full z-10 shrink-0">
        
        {/* Background shapes for desktop */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {/* Dark Blue Shadow Curve */}
          <div className="absolute inset-[26.07%_-2%_0_0]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 799.633 740.273">
              <path d={svgPaths.p20bd9f00} fill="#084686" />
            </svg>
          </div>
          {/* White Card Curve */}
          <div className="absolute inset-[0_0_2.4%_0]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 805 976">
              <path d={svgPaths.p19f98fe0} fill="white" />
            </svg>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 py-12 lg:py-0 bg-white lg:bg-transparent lg:pb-[5%]">
          
          {/* Logo Custom for MAGE */}
          <MageLogo className="mb-14 lg:mb-16 -ml-2" />
          
          <div className="mb-12">
            <p className="text-[#434343] text-[16px] lg:text-[18px] font-medium leading-[28px] mb-1">
              Welcome to
            </p>
            <h1 className="text-[#202020] text-[32px] lg:text-[40px] font-bold tracking-tight leading-[1.1]">
              MAGE Dashboard
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-[500px] w-full">
            {/* Personal Number */}
            <div className="relative">
              <label className="block text-[#434343] text-[11px] tracking-[0.5px] font-semibold uppercase mb-1">
                Personal Number
              </label>
              <input
                type="text"
                value={personalNumber}
                onChange={(e) => setPersonalNumber(e.target.value)}
                placeholder="Enter Personal Number Here"
                className="w-full py-2 border-b border-[#C7C7C7] bg-transparent text-[#202020] text-[16px] placeholder:text-[#c7c7c7] focus:outline-none focus:border-[#F59723] transition-colors"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-[#434343] text-[11px] tracking-[0.5px] font-semibold uppercase mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password Here"
                  className="w-full py-2 border-b border-[#C7C7C7] bg-transparent text-[#202020] text-[16px] placeholder:text-[#c7c7c7] focus:outline-none focus:border-[#F59723] transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 bottom-2 text-[#c7c7c7] hover:text-[#F59723] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-3 cursor-pointer mt-2 group w-max">
              <div className="relative w-5 h-5 rounded-[4px] border border-[#084686] bg-white shadow-sm flex items-center justify-center group-hover:border-[#F59723] transition-colors">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="absolute opacity-0 w-full h-full cursor-pointer"
                />
                {rememberMe && (
                  <div className="w-3 h-3 bg-[#084686] rounded-[2px]" />
                )}
              </div>
              <span className="text-[#434343] text-[14px]">Remember me</span>
            </label>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50/80 border border-red-200 rounded-lg px-4 py-3 text-[13px] text-red-600 mt-2">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-[200px] h-[44px] rounded-[100px] bg-[#F59723] text-[#f9f9f9] text-[15px] font-medium uppercase tracking-[0.5px] hover:bg-[#D46226] transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#F59723]/20"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "LOG IN"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Right Panel - Custom Artwork */}
      <div className="hidden lg:flex relative flex-1 h-full items-center justify-center pointer-events-none p-10">
        <MageArtwork />
      </div>
    </div>
  );
}