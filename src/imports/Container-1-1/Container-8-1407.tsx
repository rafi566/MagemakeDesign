import svgPaths from "./svg-pknf8h8qfe";

function TopNavigation() {
  return <div className="absolute bg-[#1e4fcc] h-[56px] left-0 top-0 w-[1918px]" data-name="TopNavigation" />;
}

function Heading() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[768px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[383.61px] not-italic text-[36px] text-center text-white top-0 whitespace-nowrap">Discover your data assets</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p32110270} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
        <div className="absolute inset-[-23.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.25 5.25">
            <path d={svgPaths.p2b5f6e80} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[527.203_0_0] h-[54px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[15px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(16,24,40,0.5)] whitespace-nowrap">Search data assets...</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 2.66667H9.33333" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 2.66667H2" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 8H8" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 8H2" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 13.3333H10.6667" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 13.3333H2" id="Vector_6" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 1.33333V4" id="Vector_7" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 6.66667V9.33333" id="Vector_8" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 12V14.6667" id="Vector_9" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="h-[36px] relative rounded-[33554400px] shrink-0 w-[96.797px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[60px] not-italic text-[#364153] text-[14px] text-center top-[8px] whitespace-nowrap">Filters</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white content-stretch flex h-[54px] items-center left-[48px] overflow-clip pr-[8px] rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[60px] w-[672px]" data-name="Container">
      <Container4 />
      <TextInput />
      <SlotClone />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[114px] left-[575px] top-[32px] w-[768px]" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Workflow Operations</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Review failed workflows and requeue them safely.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[38px] relative shrink-0 w-[280.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-[142.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[15px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center whitespace-nowrap">Hide Workflow Ops</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-[1150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
        <Container8 />
        <Button />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19bc7f80} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6V8.66667" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[94.266px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Workflow Ops</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Heading2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Review failed KATA to EDC workflows and requeue them without manual database updates.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[40px] relative shrink-0 w-[514.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container11 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[13px] size-[14px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3fb08a80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 1.75V4.66667H9.33333" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p32253d00} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 9.33333H1.75V12.25" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[34px] relative rounded-[10px] shrink-0 w-[93.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[58.5px] not-italic text-[#364153] text-[12px] text-center top-[9px] whitespace-nowrap">Refresh</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Button1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f0fdf4] h-[46px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[17px] not-italic text-[#008235] text-[14px] top-[13px] whitespace-nowrap">No failed KATA workflows at the moment.</p>
    </div>
  );
}

function WorkflowFailuresPanel() {
  return (
    <div className="bg-[rgba(249,250,251,0.6)] h-[135px] relative shrink-0 w-[1150px]" data-name="WorkflowFailuresPanel">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container9 />
        <Container12 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[172.844px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 whitespace-nowrap">4286 Results Found</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 whitespace-nowrap">Sort by:</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[34.5px] not-italic text-[#364153] text-[14px] text-center top-0 whitespace-nowrap">Relevance</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pcae83e0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.91667 11.6667V2.33333" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1bc99400} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.08333 2.33333V11.6667" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] h-[34px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[14px] py-px relative size-full">
          <Text1 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[34px] relative shrink-0 w-[180.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text />
        <Button2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white h-[51px] relative shrink-0 w-[1150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
        <Heading3 />
        <Container14 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[174.531px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_as4_lnflag</p>
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[103.453px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#bfdbfe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#2563eb] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Generated</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <StatusBadge />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[245.328px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_dwh_branch_wilayah</p>
      </div>
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[103.453px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#bfdbfe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#2563eb] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Generated</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <StatusBadge1 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
      <Text15 />
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.391px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_fact_as4_lnresm</p>
      </div>
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[123.219px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#6a7282] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Unprocessed</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <StatusBadge2 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
      <Text20 />
      <Text21 />
      <Text22 />
      <Text23 />
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[240.703px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_process_as4_lnresh</p>
      </div>
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[123.219px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#6a7282] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Unprocessed</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <StatusBadge3 />
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
      <Text28 />
      <Text29 />
      <Text30 />
      <Text31 />
      <Text32 />
      <Text33 />
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[241.891px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_raw_as4_amlcdacc2</p>
      </div>
    </div>
  );
}

function StatusBadge4() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[96.797px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#00a63e] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Approved</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <StatusBadge4 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text34 />
      <Text35 />
      <Text36 />
      <Text37 />
      <Text38 />
      <Text39 />
      <Text40 />
      <Text41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container41 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[239.609px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_raw_as4_amlcdtxn2</p>
      </div>
    </div>
  );
}

function StatusBadge5() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[103.453px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#bfdbfe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#2563eb] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Generated</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <StatusBadge5 />
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text42 />
      <Text43 />
      <Text44 />
      <Text45 />
      <Text46 />
      <Text47 />
      <Text48 />
      <Text49 />
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[242.75px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_raw_as4_amlddacc2</p>
      </div>
    </div>
  );
}

function StatusBadge6() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[123.219px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#6a7282] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Unprocessed</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <StatusBadge6 />
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text50 />
      <Text51 />
      <Text52 />
      <Text53 />
      <Text54 />
      <Text55 />
      <Text56 />
      <Text57 />
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[240.469px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_raw_as4_amlddtxn2</p>
      </div>
    </div>
  );
}

function StatusBadge7() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[123.219px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#6a7282] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Unprocessed</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <StatusBadge7 />
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text58 />
      <Text59 />
      <Text60 />
      <Text61 />
      <Text62 />
      <Text63 />
      <Text64 />
      <Text65 />
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[235.188px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_raw_as4_amldwpar</p>
      </div>
    </div>
  );
}

function StatusBadge8() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[123.219px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#6a7282] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Unprocessed</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <StatusBadge8 />
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text67() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text66 />
      <Text67 />
      <Text68 />
      <Text69 />
      <Text70 />
      <Text71 />
      <Text72 />
      <Text73 />
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container65 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 7.5H17.5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 12.5H17.5" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[224.641px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#2563eb] text-[14px] top-0 whitespace-nowrap">0000_staging_raw_as4_amlfxrat</p>
      </div>
    </div>
  );
}

function StatusBadge9() {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[96.797px]" data-name="StatusBadge">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14px] not-italic text-[#00a63e] text-[12px] top-[4px] tracking-[0.3px] uppercase whitespace-nowrap">Approved</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <StatusBadge9 />
    </div>
  );
}

function Text74() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.891px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">■</p>
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[14.89px] top-0 w-[79.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive_datalake</p>
    </div>
  );
}

function Text76() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[100.02px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text77() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[111.36px] top-0 w-[85.531px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Hive Metastore</p>
    </div>
  );
}

function Text78() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[202.89px] top-0 w-[5.344px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">›</p>
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[214.23px] top-0 w-[47.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">datalake</p>
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[269.95px] top-0 w-[3.109px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap">|</p>
    </div>
  );
}

function Text81() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[16px] items-center left-[281.06px] px-[6px] rounded-[4px] top-0 w-[41.031px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">table</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Text74 />
      <Text75 />
      <Text76 />
      <Text77 />
      <Text78 />
      <Text79 />
      <Text80 />
      <Text81 />
    </div>
  );
}

function Container73() {
  return (
    <div className="flex-[1018_0_0] h-[45px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-white h-[73px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[14px] px-[18px] relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[862_0_0] min-h-px min-w-px relative w-[1150px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pt-[16px] px-[24px] relative size-full">
          <Container16 />
          <Container22 />
          <Container28 />
          <Container34 />
          <Container40 />
          <Container46 />
          <Container52 />
          <Container58 />
          <Container64 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[20px] relative shrink-0 w-[194.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#6a7282] text-[0px] top-0 whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">{`Showing `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] text-[#101828] text-[14px]">1-10</span>
          <span className="leading-[20px] text-[14px]">{` of `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] text-[#101828] text-[14px]">4286</span>
          <span className="leading-[20px] text-[14px]">{` results`}</span>
        </p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
            <path d={svgPaths.p2ab2d800} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="opacity-30 relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#2563eb] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
            <path d={svgPaths.p3ec8f700} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[32px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Button3 />
        <Container79 />
        <Button9 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-white h-[49px] relative shrink-0 w-[1150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-px px-[32px] relative size-full">
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function ResultsList() {
  return (
    <div className="bg-white flex-[962_0_0] min-h-px min-w-px relative w-[1150px]" data-name="ResultsList">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container13 />
        <Container15 />
        <Container76 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[1162px] relative rounded-[14px] shrink-0 w-[1152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container7 />
        <WorkflowFailuresPanel />
        <ResultsList />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[1162px] items-start justify-center left-0 overflow-clip px-[383px] top-[178px] w-[1918px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[1340px] left-0 overflow-clip top-0 w-[1918px]" data-name="MainContent" style={{ backgroundImage: "linear-gradient(rgb(30, 79, 204) 0%, rgb(21, 57, 168) 16.418%, rgb(249, 250, 251) 16.418%, rgb(249, 250, 251) 100%)" }}>
      <Container2 />
      <Container5 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a1b39] text-[15px] top-0 whitespace-nowrap">Rafi</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#83899f] text-[14px] whitespace-nowrap">PN 00337721</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[40px] items-start left-[52px] top-0 w-[87.938px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Text83() {
  return (
    <div className="bg-[rgba(179,179,179,0.5)] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">R</p>
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[33554400px] size-[36px] top-[2px]" data-name="Text">
      <Text83 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Text82 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[72px] items-start left-[18px] pb-px pt-[16px] px-[16px] rounded-[16px] top-[30px] w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e6e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container82 />
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

function Icon17() {
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

function Text84() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a1b39] text-[14px] top-0 whitespace-nowrap">Metadata Assets</p>
      </div>
    </div>
  );
}

function SidebarNavButton() {
  return (
    <div className="bg-[#f5f6f8] h-[46px] relative rounded-[12px] shrink-0 w-[240px]" data-name="SidebarNavButton">
      <div aria-hidden="true" className="absolute border border-[#e6e7ec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pl-[17px] pr-px py-px relative size-full">
        <Icon17 />
        <Text84 />
      </div>
    </div>
  );
}

function Icon18() {
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

function Text85() {
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
        <Icon18 />
        <Text85 />
      </div>
    </div>
  );
}

function Icon19() {
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

function Text86() {
  return (
    <div className="h-[20px] relative shrink-0 w-[31.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0a1b39] text-[14px] top-0 whitespace-nowrap">Jobs</p>
      </div>
    </div>
  );
}

function SidebarNavButton2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[240px]" data-name="SidebarNavButton">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pl-[17px] pr-px py-px relative size-full">
        <Icon19 />
        <Text86 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col h-[138px] items-start relative shrink-0 w-full" data-name="Container">
      <SidebarNavButton />
      <SidebarNavButton1 />
      <SidebarNavButton2 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[164px] items-start left-[18px] top-[142px] w-[240px]" data-name="Container">
      <SectionLabel />
      <Container85 />
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

function Text87() {
  return (
    <div className="absolute h-[20px] left-[52px] top-[12px] w-[128.766px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0a1b39] text-[14px] top-0 whitespace-nowrap">KATA (Kamus Data)</p>
    </div>
  );
}

function Text88() {
  return <div className="absolute bg-[#f97316] h-[16px] left-[6px] rounded-[33554400px] top-[4px] w-[3px]" data-name="Text" />;
}

function Text89() {
  return <div className="absolute bg-[#fdba74] h-[18px] left-[10px] rounded-[33554400px] top-[3px] w-[3px]" data-name="Text" />;
}

function Text90() {
  return <div className="absolute bg-[#facc15] h-[14px] left-[14px] rounded-[33554400px] top-[5px] w-[3px]" data-name="Text" />;
}

function Text91() {
  return <div className="absolute bg-[#64748b] h-[16px] left-[17px] rounded-[33554400px] top-[4px] w-[2px]" data-name="Text" />;
}

function KataLogo() {
  return (
    <div className="absolute bg-[#e8e8e8] left-[16px] rounded-[8px] size-[24px] top-[10px]" data-name="KataLogo">
      <Text88 />
      <Text89 />
      <Text90 />
      <Text91 />
    </div>
  );
}

function ButtonOpenKataKamusDataInANewTab() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-[240px]" data-name="Button - Open KATA (Kamus Data) in a new tab">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text87 />
        <KataLogo />
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="absolute h-[20px] left-[52px] top-[12px] w-[85.516px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0a1b39] text-[14px] top-0 whitespace-nowrap">Data Catalog</p>
    </div>
  );
}

function Text93() {
  return <div className="absolute bg-[#f97316] left-[2.1px] rounded-[2px] size-[19.799px] top-[2.1px]" data-name="Text" />;
}

function Text94() {
  return <div className="absolute bg-white left-[7.76px] rounded-[1px] size-[8.485px] top-[7.76px]" data-name="Text" />;
}

function Text95() {
  return <div className="absolute bg-[#60a5fa] left-[2.96px] rounded-[1px] size-[7.071px] top-[8.46px]" data-name="Text" />;
}

function Text96() {
  return <div className="absolute bg-[#60a5fa] left-[13.96px] rounded-[1px] size-[7.071px] top-[8.46px]" data-name="Text" />;
}

function Text97() {
  return <div className="absolute bg-[#60a5fa] left-[8.46px] rounded-[1px] size-[7.071px] top-[2.96px]" data-name="Text" />;
}

function Text98() {
  return <div className="absolute bg-[#60a5fa] left-[8.46px] rounded-[1px] size-[7.071px] top-[13.96px]" data-name="Text" />;
}

function DataCatalogLogo() {
  return (
    <div className="absolute bg-[#e8e8e8] left-[16px] rounded-[8px] size-[24px] top-[10px]" data-name="DataCatalogLogo">
      <Text93 />
      <Text94 />
      <Text95 />
      <Text96 />
      <Text97 />
      <Text98 />
    </div>
  );
}

function ButtonOpenDataCatalogInANewTab() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[240px]" data-name="Button - Open Data Catalog in a new tab">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text92 />
        <DataCatalogLogo />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <ButtonOpenKataKamusDataInANewTab />
      <ButtonOpenDataCatalogInANewTab />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[114px] items-start left-[18px] top-[346px] w-[240px]" data-name="Container">
      <SectionLabel1 />
      <Container87 />
    </div>
  );
}

function Icon20() {
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

function Text99() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#ee2750] text-[14px] top-0 whitespace-nowrap">Logout</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">
          <Icon20 />
          <Text99 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
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

function Text100() {
  return (
    <div className="h-[20px] relative shrink-0 w-[95.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#676e85] text-[14px] top-0 whitespace-nowrap">Collapse menu</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">
          <Icon21 />
          <Text100 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] h-[103px] items-start left-[18px] top-[579px] w-[240px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-white flex-[1_0_0] h-[712px] min-h-px min-w-px relative rounded-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container81 />
        <Container84 />
        <Container86 />
        <Container88 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6e7ec] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[-5px_15px_36px_0px_rgba(0,0,0,0.1),-20px_61px_65px_0px_rgba(0,0,0,0.09),-46px_138px_87px_0px_rgba(0,0,0,0.05),-82px_245px_103px_0px_rgba(0,0,0,0.01),-128px_383px_113px_0px_rgba(0,0,0,0)]" />
    </div>
  );
}

function WorkspaceSidebarOpen() {
  return (
    <div className="absolute content-stretch flex h-[752px] items-start left-0 pt-[20px] px-[20px] top-[100px] w-[316px]" data-name="WorkspaceSidebarOpen">
      <Container80 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1340px] left-0 overflow-clip top-[56px] w-[1918px]" data-name="Container" style={{ backgroundImage: "linear-gradient(rgb(30, 79, 204) 0%, rgb(21, 57, 168) 16.418%, rgb(249, 250, 251) 16.418%, rgb(249, 250, 251) 100%)" }}>
      <MainContent />
      <WorkspaceSidebarOpen />
    </div>
  );
}

function Text101() {
  return (
    <div className="h-[20px] relative shrink-0 w-[226.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 whitespace-nowrap">© 2026 Mage. All Rights Reserved.</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Indonesia</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white h-[24px] relative rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[65.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] text-center whitespace-nowrap">English</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#f3f4f6] h-[32px] relative rounded-[33554400px] shrink-0 w-[157.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[4px] relative size-full">
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text101 />
      <Container90 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[49px] items-start left-0 pt-[9px] px-[32px] top-[1396px] w-[1918px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container89 />
    </div>
  );
}

function WorkspaceShell() {
  return (
    <div className="bg-white h-[1445px] overflow-clip relative shrink-0 w-full" data-name="WorkspaceShell">
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