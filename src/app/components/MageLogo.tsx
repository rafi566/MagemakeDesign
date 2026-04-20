import logoSrc from "../../imports/image-1.png";

export function MageIcon({ size = 280 }: { size?: number }) {
  return (
    <img
      src={logoSrc}
      alt="MAGE Logo"
      style={{ width: size, height: size, objectFit: "contain", flexShrink: 0 }}
    />
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