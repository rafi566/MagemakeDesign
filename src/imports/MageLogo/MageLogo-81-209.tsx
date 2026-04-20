import svgPaths from "./svg-n8clnf2f3q";

function JiraCore() {
  return (
    <div className="absolute inset-[0_7.06%_0_7.23%]" data-name="jira_core">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438.857 512">
        <g id="jira_core">
          <path clipRule="evenodd" d={svgPaths.p337fce00} fill="url(#paint0_linear_81_218)" fillRule="evenodd" id="vector" />
          <path clipRule="evenodd" d={svgPaths.p95e1c30} fill="url(#paint1_linear_81_218)" fillRule="evenodd" id="vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_81_218" x1="331.904" x2="441.57" y1="212.914" y2="230.976">
            <stop offset="0.17" stopColor="#0052CC" />
            <stop offset="1" stopColor="#2684FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_81_218" x1="75.454" x2="353.878" y1="68.5022" y2="238.918">
            <stop offset="0.17" stopColor="#0052CC" />
            <stop offset="1" stopColor="#2684FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function JiraCoreType({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[158.84px] overflow-clip size-[512px] top-0"} data-name="Jira Core/Type3">
      <JiraCore />
    </div>
  );
}

function JiraCore1() {
  return (
    <div className="absolute inset-[0_7.06%_0_5.02%]" data-name="jira_core">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 450.18 512">
        <g id="jira_core">
          <path clipRule="evenodd" d={svgPaths.p2c208ef0} fill="url(#paint0_linear_81_214)" fillRule="evenodd" id="vector" />
          <path clipRule="evenodd" d={svgPaths.p26ec5500} fill="url(#paint1_linear_81_214)" fillRule="evenodd" id="vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_81_214" x1="343.215" x2="452.881" y1="212.914" y2="230.976">
            <stop offset="0.17" stopColor="#0052CC" />
            <stop offset="1" stopColor="#2684FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_81_214" x1="77.401" x2="358.87" y1="68.4474" y2="245.313">
            <stop offset="0.17" stopColor="#0052CC" />
            <stop offset="1" stopColor="#2684FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function JiraCoreType1() {
  return (
    <div className="overflow-clip relative size-[512px]" data-name="Jira Core/Type3">
      <JiraCore1 />
    </div>
  );
}

export default function MageLogo() {
  return (
    <div className="relative size-full" data-name="Mage Logo">
      <JiraCoreType />
      <div className="absolute flex items-center justify-center left-0 size-[512px] top-[0.16px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <JiraCoreType1 />
        </div>
      </div>
    </div>
  );
}