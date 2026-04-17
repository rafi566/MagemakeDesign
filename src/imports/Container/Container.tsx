import svgPaths from "./svg-3z8ic3cr50";

function TopNavigation() {
  return <div className="absolute bg-[#1e4fcc] h-[56px] left-0 top-0 w-[1918px]" data-name="TopNavigation" />;
}

function Heading() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[768px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[384.41px] not-italic text-[36px] text-center text-white top-0 whitespace-nowrap">{`Jobs & operations`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[56px] w-[720px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[360px] not-italic text-[14px] text-[rgba(255,255,255,0.85)] text-center top-0 w-[720px]">Trigger nightly workflow steps secara manual untuk verifikasi KATA, glossary sync, dan publish metadata ke EDC.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[104px] left-[575px] top-[32px] w-[768px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Manual jobs control</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Gunakan halaman ini untuk trigger job KATA ke EDC secara manual tanpa menunggu scheduler malam.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[38px] relative shrink-0 w-[578.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[15px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[10px] shrink-0 w-[99.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[62.5px] not-italic text-[#364153] text-[12px] text-center top-[10px] whitespace-nowrap">Refresh</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[71px] relative shrink-0 w-[1150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
        <Container6 />
        <Button />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#006045] text-[12px] tracking-[0.3px] uppercase">Enabled jobs</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#006045] text-[24px] top-0 whitespace-nowrap">0</p>
    </div>
  );
}

function SummaryCard() {
  return (
    <div className="absolute bg-[#ecfdf5] content-stretch flex flex-col gap-[8px] h-[82px] items-start left-0 pb-px pt-[17px] px-[17px] rounded-[16px] top-0 w-[263.5px]" data-name="SummaryCard">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#973c00] text-[12px] tracking-[0.3px] uppercase">Overdue jobs</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#973c00] text-[24px] top-0 whitespace-nowrap">0</p>
    </div>
  );
}

function SummaryCard1() {
  return (
    <div className="absolute bg-[#fffbeb] content-stretch flex flex-col gap-[8px] h-[82px] items-start left-[279.5px] pb-px pt-[17px] px-[17px] rounded-[16px] top-0 w-[263.5px]" data-name="SummaryCard">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[12px] tracking-[0.3px] uppercase">Running jobs</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1e2939] text-[24px] top-0 whitespace-nowrap">0</p>
    </div>
  );
}

function SummaryCard2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[82px] items-start left-[559px] pb-px pt-[17px] px-[17px] rounded-[16px] top-0 w-[263.5px]" data-name="SummaryCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#9f0712] text-[12px] tracking-[0.3px] uppercase">Recent failures</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#9f0712] text-[24px] top-0 whitespace-nowrap">0</p>
    </div>
  );
}

function SummaryCard3() {
  return (
    <div className="absolute bg-[#fef2f2] content-stretch flex flex-col gap-[8px] h-[82px] items-start left-[838.5px] pb-px pt-[17px] px-[17px] rounded-[16px] top-0 w-[263.5px]" data-name="SummaryCard">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Container">
      <SummaryCard />
      <SummaryCard1 />
      <SummaryCard2 />
      <SummaryCard3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_325)" id="Icon">
          <path d={svgPaths.p3227a460} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_325">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#eef4ff] left-0 rounded-[33554400px] size-[32px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-0 top-[44px] w-[168.094px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-0 whitespace-nowrap">KATA approval tracker</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[68px] relative shrink-0 w-[168.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
        <Heading2 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#ecfdf5] h-[24.5px] relative rounded-[33554400px] shrink-0 w-[75.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[10px] not-italic text-[#007a55] text-[11px] top-[4px] tracking-[0.275px] uppercase whitespace-nowrap">success</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[68px] items-start justify-between left-[20px] top-[20px] w-[314.656px]" data-name="Container">
      <Container13 />
      <Text />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[72px] left-[20px] top-[100px] w-[314.656px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[315px]">Cek workflow yang draft KATA-nya sudah selesai diapprove, lalu naikkan state ke tahap berikutnya.</p>
    </div>
  );
}

function DefinitionTerm() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.141px]" data-name="Definition Term">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Next run</p>
      </div>
    </div>
  );
}

function DefinitionDescription() {
  return (
    <div className="h-[16px] relative shrink-0 w-[101.344px]" data-name="Definition Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-right whitespace-nowrap">2 Apr 2026, 07.30</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <DefinitionTerm />
      <DefinitionDescription />
    </div>
  );
}

function DefinitionTerm1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[45.969px]" data-name="Definition Term">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Last run</p>
      </div>
    </div>
  );
}

function DefinitionDescription1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97.922px]" data-name="Definition Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-right whitespace-nowrap">1 Apr 2026, 17.06</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <DefinitionTerm1 />
      <DefinitionDescription1 />
    </div>
  );
}

function DefinitionTerm2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[45.406px]" data-name="Definition Term">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Enabled</p>
      </div>
    </div>
  );
}

function DefinitionDescription2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Definition Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-right whitespace-nowrap">No</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <DefinitionTerm2 />
      <DefinitionDescription2 />
    </div>
  );
}

function DefinitionList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[20px] top-[188px] w-[314.656px]" data-name="Definition List">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[100px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 2L13.3333 8L4 14V2Z" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#2563eb] h-[44px] left-[20px] rounded-[14px] top-[272px] w-[314.656px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[169.5px] not-italic text-[14px] text-center text-white top-[12px] whitespace-nowrap">Run manually</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[338px] left-0 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[356.656px]" data-name="Container">
      <Container12 />
      <Paragraph10 />
      <DefinitionList />
      <Button1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_325)" id="Icon">
          <path d={svgPaths.p3227a460} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_325">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#eef4ff] left-0 rounded-[33554400px] size-[32px] top-0" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-0 top-[44px] w-[162.234px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-0 whitespace-nowrap">Shared glossary sync</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[68px] relative shrink-0 w-[162.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <Heading3 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#ecfdf5] h-[24.5px] relative rounded-[33554400px] shrink-0 w-[75.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[10px] not-italic text-[#007a55] text-[11px] top-[4px] tracking-[0.275px] uppercase whitespace-nowrap">success</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex h-[68px] items-start justify-between left-[20px] top-[20px] w-[314.672px]" data-name="Container">
      <Container20 />
      <Text1 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[48px] left-[20px] top-[100px] w-[314.672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[315px]">Sinkronkan glossary KATA ke Informatica Analyst dan siapkan term supaya siap dipakai di EDC.</p>
    </div>
  );
}

function DefinitionTerm3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.141px]" data-name="Definition Term">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Next run</p>
      </div>
    </div>
  );
}

function DefinitionDescription3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[103.219px]" data-name="Definition Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-right whitespace-nowrap">2 Apr 2026, 08.00</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <DefinitionTerm3 />
      <DefinitionDescription3 />
    </div>
  );
}

function DefinitionTerm4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[45.969px]" data-name="Definition Term">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Last run</p>
      </div>
    </div>
  );
}

function DefinitionDescription4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97.922px]" data-name="Definition Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-right whitespace-nowrap">1 Apr 2026, 17.06</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <DefinitionTerm4 />
      <DefinitionDescription4 />
    </div>
  );
}

function DefinitionTerm5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[45.406px]" data-name="Definition Term">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Enabled</p>
      </div>
    </div>
  );
}

function DefinitionDescription5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Definition Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-right whitespace-nowrap">No</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <DefinitionTerm5 />
      <DefinitionDescription5 />
    </div>
  );
}

function DefinitionList1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[20px] top-[164px] w-[314.672px]" data-name="Definition List">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[100px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 2L13.3333 8L4 14V2Z" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#2563eb] h-[44px] left-[20px] rounded-[14px] top-[248px] w-[314.672px]" data-name="Button">
      <Icon4 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[169.5px] not-italic text-[14px] text-center text-white top-[12px] whitespace-nowrap">Run manually</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[338px] left-[372.66px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[356.672px]" data-name="Container">
      <Container19 />
      <Paragraph11 />
      <DefinitionList1 />
      <Button2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_325)" id="Icon">
          <path d={svgPaths.p3227a460} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_325">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#eef4ff] left-0 rounded-[33554400px] size-[32px] top-0" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[24px] left-0 top-[44px] w-[93.563px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-0 whitespace-nowrap">Push to EDC</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[68px] relative shrink-0 w-[93.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container28 />
        <Heading4 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#ecfdf5] h-[24.5px] relative rounded-[33554400px] shrink-0 w-[75.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[10px] not-italic text-[#007a55] text-[11px] top-[4px] tracking-[0.275px] uppercase whitespace-nowrap">success</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[68px] items-start justify-between left-[20px] top-[20px] w-[314.656px]" data-name="Container">
      <Container27 />
      <Text2 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[72px] left-[20px] top-[100px] w-[314.656px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[315px]">Publish metadata table dan column ke Data Catalog EDC untuk workflow yang sudah eligible.</p>
    </div>
  );
}

function DefinitionTerm6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.141px]" data-name="Definition Term">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Next run</p>
      </div>
    </div>
  );
}

function DefinitionDescription6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[103.297px]" data-name="Definition Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-right whitespace-nowrap">2 Apr 2026, 08.30</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <DefinitionTerm6 />
      <DefinitionDescription6 />
    </div>
  );
}

function DefinitionTerm7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[45.969px]" data-name="Definition Term">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Last run</p>
      </div>
    </div>
  );
}

function DefinitionDescription7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97.922px]" data-name="Definition Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-right whitespace-nowrap">1 Apr 2026, 17.06</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <DefinitionTerm7 />
      <DefinitionDescription7 />
    </div>
  );
}

function DefinitionTerm8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[45.406px]" data-name="Definition Term">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Enabled</p>
      </div>
    </div>
  );
}

function DefinitionDescription8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Definition Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-right whitespace-nowrap">No</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <DefinitionTerm8 />
      <DefinitionDescription8 />
    </div>
  );
}

function DefinitionList2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[20px] top-[188px] w-[314.656px]" data-name="Definition List">
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[100px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 2L13.3333 8L4 14V2Z" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#2563eb] h-[44px] left-[20px] rounded-[14px] top-[272px] w-[314.656px]" data-name="Button">
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[169.5px] not-italic text-[14px] text-center text-white top-[12px] whitespace-nowrap">Run manually</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[338px] left-[745.33px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[356.656px]" data-name="Container">
      <Container26 />
      <Paragraph12 />
      <DefinitionList2 />
      <Button3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[338px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container18 />
      <Container25 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-0 whitespace-nowrap">Running now</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#f0fdf4] h-[46px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[17px] not-italic text-[#008235] text-[14px] top-[13px] whitespace-nowrap">No jobs are running right now.</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[128px] items-start left-0 pb-px pt-[21px] px-[21px] rounded-[16px] top-0 w-[539px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Heading5 />
      <Container34 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-0 whitespace-nowrap">Recent failures</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f0fdf4] h-[46px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[17px] not-italic text-[#008235] text-[14px] top-[13px] whitespace-nowrap">No recent job failures.</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[563px] pb-px pt-[21px] px-[21px] rounded-[16px] top-0 w-[539px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Heading6 />
      <Container36 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container35 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-0 whitespace-nowrap">Operational notes</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_307)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8H11" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_307">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[24px] not-italic text-[#1e2939] text-[14px] top-0 whitespace-nowrap">Tracker first</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[12px] top-0 w-[312px]">Jalankan ini setelah approval di KATA selesai untuk menaikkan workflow ke tahap glossary sync.</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[114px] items-start left-0 pb-px pt-[13px] px-[17px] rounded-[14px] top-0 w-[345.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container40 />
      <Paragraph13 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[24px] not-italic text-[#1e2939] text-[14px] top-0 whitespace-nowrap">Sync glossary</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[12px] top-0 w-[312px]">Gunakan ini saat term KATA belum terlihat di Analyst atau EDC meski approval KATA sudah selesai.</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[114px] items-start left-[357.33px] pb-px pt-[13px] px-[17px] rounded-[14px] top-0 w-[345.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container42 />
      <Paragraph14 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_328)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_328">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon9 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[24px] not-italic text-[#1e2939] text-[14px] top-0 whitespace-nowrap">Push to EDC</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[12px] top-0 w-[312px]">Gunakan ini untuk memaksa publish metadata ke EDC saat workflow sudah eligible dan table EDC sudah tersedia.</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[114px] items-start left-[714.66px] pb-px pt-[13px] px-[17px] rounded-[14px] top-0 w-[345.344px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container44 />
      <Paragraph15 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[114px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container41 />
      <Container43 />
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-white h-[196px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Heading7 />
        <Container38 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[816px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
      <Container32 />
      <Container37 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[864_0_0] min-h-px min-w-px relative w-[1150px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[937px] relative rounded-[14px] shrink-0 w-[1152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container5 />
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[969px] items-start justify-center left-0 overflow-clip px-[383px] top-[168px] w-[1918px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function JobsContent() {
  return (
    <div className="absolute h-[1137px] left-0 overflow-clip top-0 w-[1918px]" data-name="JobsContent" style={{ backgroundImage: "linear-gradient(rgb(30, 79, 204) 0%, rgb(21, 57, 168) 19.349%, rgb(249, 250, 251) 19.349%, rgb(249, 250, 251) 100%)" }}>
      <Container2 />
      <Container3 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a1b39] text-[15px] top-0 whitespace-nowrap">Rafi</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#83899f] text-[14px] whitespace-nowrap">PN 00337721</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[40px] items-start left-[52px] top-0 w-[87.938px]" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(179,179,179,0.5)] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">R</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[33554400px] size-[36px] top-[2px]" data-name="Text">
      <Text4 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Text3 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[72px] items-start left-[18px] pb-px pt-[16px] px-[16px] rounded-[16px] top-[30px] w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e6e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container47 />
    </div>
  );
}

function SectionLabel() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="SectionLabel">
      <div className="content-stretch flex items-start px-[16px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#83899f] text-[14px]">Pages</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p17c65ff0} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1aa35900} id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b6cafc0} id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fc7e680} id="Vector_4" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[110.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0a1b39] text-[14px] top-0 whitespace-nowrap">Metadata Assets</p>
      </div>
    </div>
  );
}

function SidebarNavButton() {
  return (
    <div className="h-[46px] relative rounded-[12px] shrink-0 w-[240px]" data-name="SidebarNavButton">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pl-[17px] pr-px py-px relative size-full">
        <Icon10 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M2.5 10H2.50833" id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 15H2.50833" id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 5H2.50833" id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 10H17.5" id="Vector_4" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 15H17.5" id="Vector_5" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 5H17.5" id="Vector_6" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0a1b39] text-[14px] top-0 whitespace-nowrap">Ingestion Tickets</p>
      </div>
    </div>
  );
}

function SidebarNavButton1() {
  return (
    <div className="h-[46px] relative rounded-[12px] shrink-0 w-[240px]" data-name="SidebarNavButton">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pl-[17px] pr-px py-px relative size-full">
        <Icon11 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_285)" id="Icon">
          <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_285">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a1b39] text-[14px] top-0 whitespace-nowrap">Jobs</p>
      </div>
    </div>
  );
}

function SidebarNavButton2() {
  return (
    <div className="bg-[#f5f6f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[240px]" data-name="SidebarNavButton">
      <div aria-hidden="true" className="absolute border border-[#e6e7ec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pl-[17px] pr-px py-px relative size-full">
        <Icon12 />
        <Text7 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col h-[138px] items-start relative shrink-0 w-full" data-name="Container">
      <SidebarNavButton />
      <SidebarNavButton1 />
      <SidebarNavButton2 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[164px] items-start left-[18px] top-[142px] w-[240px]" data-name="Container">
      <SectionLabel />
      <Container50 />
    </div>
  );
}

function SectionLabel1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="SectionLabel">
      <div className="content-stretch flex items-start px-[16px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#83899f] text-[14px]">Related Apps</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[20px] left-[52px] top-[12px] w-[128.766px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0a1b39] text-[14px] top-0 whitespace-nowrap">KATA (Kamus Data)</p>
    </div>
  );
}

function Text9() {
  return <div className="absolute bg-[#f97316] h-[16px] left-[6px] rounded-[33554400px] top-[4px] w-[3px]" data-name="Text" />;
}

function Text10() {
  return <div className="absolute bg-[#fdba74] h-[18px] left-[10px] rounded-[33554400px] top-[3px] w-[3px]" data-name="Text" />;
}

function Text11() {
  return <div className="absolute bg-[#facc15] h-[14px] left-[14px] rounded-[33554400px] top-[5px] w-[3px]" data-name="Text" />;
}

function Text12() {
  return <div className="absolute bg-[#64748b] h-[16px] left-[17px] rounded-[33554400px] top-[4px] w-[2px]" data-name="Text" />;
}

function KataLogo() {
  return (
    <div className="absolute bg-[#e8e8e8] left-[16px] rounded-[8px] size-[24px] top-[10px]" data-name="KataLogo">
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
    </div>
  );
}

function ButtonOpenKataKamusDataInANewTab() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-[240px]" data-name="Button - Open KATA (Kamus Data) in a new tab">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text8 />
        <KataLogo />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[20px] left-[52px] top-[12px] w-[85.516px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0a1b39] text-[14px] top-0 whitespace-nowrap">Data Catalog</p>
    </div>
  );
}

function Text14() {
  return <div className="absolute bg-[#f97316] left-[2.1px] rounded-[2px] size-[19.799px] top-[2.1px]" data-name="Text" />;
}

function Text15() {
  return <div className="absolute bg-white h-[8.484px] left-[7.76px] rounded-[1px] top-[7.76px] w-[8.485px]" data-name="Text" />;
}

function Text16() {
  return <div className="absolute bg-[#60a5fa] h-[7.07px] left-[2.96px] rounded-[1px] top-[8.46px] w-[7.071px]" data-name="Text" />;
}

function Text17() {
  return <div className="absolute bg-[#60a5fa] h-[7.07px] left-[13.96px] rounded-[1px] top-[8.46px] w-[7.071px]" data-name="Text" />;
}

function Text18() {
  return <div className="absolute bg-[#60a5fa] h-[7.07px] left-[8.46px] rounded-[1px] top-[2.96px] w-[7.071px]" data-name="Text" />;
}

function Text19() {
  return <div className="absolute bg-[#60a5fa] h-[7.07px] left-[8.46px] rounded-[1px] top-[13.96px] w-[7.071px]" data-name="Text" />;
}

function DataCatalogLogo() {
  return (
    <div className="absolute bg-[#e8e8e8] left-[16px] rounded-[8px] size-[24px] top-[10px]" data-name="DataCatalogLogo">
      <Text14 />
      <Text15 />
      <Text16 />
      <Text17 />
      <Text18 />
      <Text19 />
    </div>
  );
}

function ButtonOpenDataCatalogInANewTab() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[240px]" data-name="Button - Open Data Catalog in a new tab">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text13 />
        <DataCatalogLogo />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <ButtonOpenKataKamusDataInANewTab />
      <ButtonOpenDataCatalogInANewTab />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[114px] items-start left-[18px] top-[346px] w-[240px]" data-name="Container">
      <SectionLabel1 />
      <Container52 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p38966ca0} id="Vector" stroke="var(--stroke-0, #EE2750)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14ca9100} id="Vector_2" stroke="var(--stroke-0, #EE2750)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 10H7.5" id="Vector_3" stroke="var(--stroke-0, #EE2750)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#ee2750] text-[14px] top-0 whitespace-nowrap">Logout</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">
          <Icon13 />
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #676E85)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_2" stroke="var(--stroke-0, #676E85)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2d3e9980} id="Vector_3" stroke="var(--stroke-0, #676E85)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[95.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#676e85] text-[14px] top-0 whitespace-nowrap">Collapse menu</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">
          <Icon14 />
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] h-[103px] items-start left-[18px] top-[579px] w-[240px]" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white flex-[1_0_0] h-[712px] min-h-px min-w-px relative rounded-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container46 />
        <Container49 />
        <Container51 />
        <Container53 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6e7ec] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[-5px_15px_36px_0px_rgba(0,0,0,0.1),-20px_61px_65px_0px_rgba(0,0,0,0.09),-46px_138px_87px_0px_rgba(0,0,0,0.05),-82px_245px_103px_0px_rgba(0,0,0,0.01),-128px_383px_113px_0px_rgba(0,0,0,0)]" />
    </div>
  );
}

function WorkspaceSidebarOpen() {
  return (
    <div className="absolute content-stretch flex h-[752px] items-start left-0 pt-[20px] px-[20px] top-[100px] w-[316px]" data-name="WorkspaceSidebarOpen">
      <Container45 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1137px] left-0 overflow-clip top-[56px] w-[1918px]" data-name="Container" style={{ backgroundImage: "linear-gradient(rgb(30, 79, 204) 0%, rgb(21, 57, 168) 19.349%, rgb(249, 250, 251) 19.349%, rgb(249, 250, 251) 100%)" }}>
      <JobsContent />
      <WorkspaceSidebarOpen />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[226.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 whitespace-nowrap">© 2026 Mage. All Rights Reserved.</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Indonesia</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white h-[24px] relative rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[65.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] text-center whitespace-nowrap">English</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f3f4f6] h-[32px] relative rounded-[33554400px] shrink-0 w-[157.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[4px] relative size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Container55 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[49px] items-start left-0 pt-[9px] px-[32px] top-[1193px] w-[1918px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container54 />
    </div>
  );
}

function WorkspaceShell() {
  return (
    <div className="bg-white h-[1242px] overflow-clip relative shrink-0 w-full" data-name="WorkspaceShell">
      <TopNavigation />
      <Container1 />
      <Footer />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[32px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <WorkspaceShell />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}