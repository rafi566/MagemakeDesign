import svgPaths from "./svg-943er78e6u";

function Group6() {
  return (
    <div className="absolute contents leading-[normal] left-[289px] not-italic top-[-28px]">
      <p className="absolute font-['Arial:Black',sans-serif] left-[289px] text-[#1e448c] text-[144px] top-[-28px] tracking-[-17.28px] whitespace-nowrap">BRI</p>
      <p className="absolute font-['Arial:Bold',sans-serif] left-[535px] text-[#f36f21] text-[140px] top-px tracking-[-14px] w-[304px]">New</p>
      <p className="absolute font-['Arial:Bold',sans-serif] left-[289px] text-[#f36f21] text-[140px] top-[119px] tracking-[-14px] w-[919px]">Delivery System</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[91px] relative w-[148px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 91">
        <g id="Group 1644">
          <path d={svgPaths.pa14b380} fill="var(--fill-0, #1E448C)" id="Rectangle 486" />
          <path d={svgPaths.p19338500} fill="var(--fill-0, #1E448C)" id="Rectangle 493" />
          <path d={svgPaths.p3e66b100} fill="var(--fill-0, #1E448C)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[126px] left-[16px] top-[77px] w-[210px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 126">
        <g id="Group 1645">
          <path d={svgPaths.p28f27400} fill="var(--fill-0, #1E448C)" id="Rectangle 486" />
          <path d={svgPaths.p9b75700} fill="var(--fill-0, #1E448C)" id="Rectangle 494" />
          <path d={svgPaths.p19972900} fill="var(--fill-0, #F36F21)" id="Rectangle 495" />
          <path d={svgPaths.p26eea200} fill="var(--fill-0, #F36F21)" id="Rectangle 496" />
          <path d={svgPaths.p1a5ca980} fill="var(--fill-0, #F36F21)" id="Rectangle 497" />
          <path d={svgPaths.p3b2eff0} fill="var(--fill-0, #1E448C)" id="Rectangle 493" />
          <path d={svgPaths.p38daa100} fill="var(--fill-0, #1E448C)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[16px] top-[77px]">
      <div className="absolute bg-[#1e448c] h-[21px] left-[70px] rounded-bl-[30px] rounded-tl-[30px] top-[77px] w-[81px]" />
      <div className="absolute bg-[#1e448c] h-[21px] left-[62px] rounded-bl-[30px] rounded-tl-[30px] top-[147px] w-[81px]" />
      <div className="absolute bg-[#1e448c] h-[21px] left-[42px] rounded-bl-[30px] rounded-tl-[30px] top-[119px] w-[66px]" />
      <div className="absolute flex h-[91px] items-center justify-center left-[116px] top-[112px] w-[148px]">
        <div className="flex-none rotate-180">
          <Group />
        </div>
      </div>
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[16px] top-[77px]">
      <Group2 />
      <div className="absolute flex h-[34.563px] items-center justify-center left-[135px] top-[108.56px] w-[32.079px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-120">
          <div className="bg-[#1e448c] h-[21px] rounded-[30px] w-[27.786px]" />
        </div>
      </div>
      <div className="absolute flex h-[35.742px] items-center justify-center left-[112px] top-[170.74px] w-[32.76px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-120">
          <div className="bg-[#1e448c] h-[21px] rounded-[30px] w-[29.147px]" />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white left-0 rounded-[30px] size-[280px] top-0" />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-[-28px]">
      <Group6 />
      <Group4 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-[-28px]">
      <Group5 />
    </div>
  );
}

export default function LogoNds() {
  return (
    <div className="relative size-full" data-name="LOGO NDS">
      <Group7 />
    </div>
  );
}