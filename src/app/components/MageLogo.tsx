import logoImage from "../../imports/image.png";

export function MageIcon({ size = 280 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Left half of M — MAGE orange */}
      <path
        d="M 88 440 L 88 96 L 256 288"
        stroke="url(#mage_grad_orange)"
        strokeWidth="84"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right half of M — MAGE blue */}
      <path
        d="M 256 288 L 424 96 L 424 440"
        stroke="url(#mage_grad_blue)"
        strokeWidth="84"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="mage_grad_orange"
          x1="256"
          y1="54"
          x2="88"
          y2="482"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F36F21" />
          <stop offset="1" stopColor="#F8A65C" />
        </linearGradient>
        <linearGradient
          id="mage_grad_blue"
          x1="424"
          y1="54"
          x2="256"
          y2="482"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E448C" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MageLogo({
  className = "",
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "compact" | "icon";
}) {
  if (variant === "icon") {
    return (
      <div className={`shrink-0 ${className}`}>
        <MageIcon size={36} />
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <MageIcon size={32} />
        <span className="text-[#1E448C] font-black text-[18px] font-['Arial',sans-serif] tracking-[-0.03em]">
          MAGE
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1.5 sm:gap-3 ${className}`}>
      <div className="shrink-0 w-[56px] h-[56px] sm:w-[84px] sm:h-[84px] overflow-hidden">
        <MageIcon size={84} />
      </div>
      <div className="flex flex-col justify-center leading-[0.85] tracking-[-0.05em] mt-1 z-10">
        <div className="flex items-baseline gap-2">
          <span className="text-[#1E448C] font-black text-[26px] sm:text-[40px] font-['Arial',sans-serif]">
            MAGE
          </span>
          <span className="text-[#F36F21] font-bold text-[24px] sm:text-[38px] font-['Arial',sans-serif]">
            Metadata
          </span>
        </div>
        <span className="text-[#F36F21] font-bold text-[24px] sm:text-[38px] font-['Arial',sans-serif]">
          Generation Engine
        </span>
      </div>
    </div>
  );
}