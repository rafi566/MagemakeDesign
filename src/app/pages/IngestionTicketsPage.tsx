import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface Ticket {
  id: string;
  pageId: string;
  title: string;
  status: "Approved";
  tags: string[];
  date: string;
}

const mockTickets: Ticket[] = [
  {
    id: "FDMI-MM-2026-04-07",
    pageId: "1657158659",
    title: "MIKRO/UMI/USP - fsrv.bri.co.id - SFTP - Ingestion Data BO Piloting",
    status: "Approved",
    tags: ["datalake"],
    date: "9 Apr 2026, 07.59",
  },
  {
    id: "FDMI-MM-2026-04-08",
    pageId: "1658401956",
    title: "<MR/SRM/POR> - <172.18.40.174> - <Datalake> - <CRAS Pinjaman>",
    status: "Approved",
    tags: ["datalake"],
    date: "8 Apr 2026, 17.01",
  },
  {
    id: "FDMI-MM-2026-04-07",
    pageId: "1656217719",
    title: "CONS/WMG/BID/IDP - 172.18.141.50 - DASHBOARD_WMG_FACT - Ingestion Tabel ke Datalake dan Prowlth",
    status: "Approved",
    tags: ["datalake"],
    date: "8 Apr 2026, 15.49",
  },
  {
    id: "FDMI-MM-2026-04-01",
    pageId: "1650558000",
    title: "ITD/EDM/BIV - 172.18.41.31 - 0002_DWHTL_REPORTS - Ingestion data RPT_DWHTL_TRIAL_BALANCE dan RPT_DWHTL_TRIAL_BALANCE_CAB",
    status: "Approved",
    tags: ["datalake"],
    date: "7 Apr 2026, 14.33",
  },
  {
    id: "FDMI-MM-2026-04-07",
    pageId: "1655248955",
    title: "ITD/EDM/ODS - 172.18.41.26 - oaa1_sav_room - Ingestion Data ESA Simpanan BRISIN",
    status: "Approved",
    tags: ["datalake"],
    date: "7 Apr 2026, 12.18",
  },
  {
    id: "FDMI-MM-2026-04-07",
    pageId: "1649328393",
    title: "ITD/EDM/ODS - 172.18.62.100 - DASHBOARD_PILOT - Ingestion Data ESA Pinjaman BRISIN",
    status: "Approved",
    tags: ["datalake"],
    date: "6 Apr 2026, 10.44",
  },
  {
    id: "FDMI-MM-2026-04-01",
    pageId: "1644219148",
    title: "CONN/IA - 172.18.141.65 - GMRA0_EUR/RPTS_SOURCE_FYTIMM - Ingestion Table FACT_LEMBAR_SLTM, dan FACT_BSMR5_RINCI/BTAR5",
    status: "Approved",
    tags: ["datalake"],
    date: "5 Apr 2026, 09.22",
  },
  {
    id: "FDMI-MM-2026-03-30",
    pageId: "1641885432",
    title: "Micro Business/MBS/SWI - <IP ADDRESS> - <NAMA DBA> - PRIMAL>",
    status: "Approved",
    tags: ["datalake"],
    date: "4 Apr 2026, 11.05",
  },
  {
    id: "FDMI-MM-2026-03-28",
    pageId: "1638221977",
    title: "MSO/DOK/MKS/SDP - <SFTP> - sfbrvs.bri.co.id - Ingestion Data Kliring & Dislocation Registration>",
    status: "Approved",
    tags: ["datalake"],
    date: "3 Apr 2026, 16.30",
  },
  {
    id: "FDMI-MM-2026-03-26",
    pageId: "1635790118",
    title: "OPERATIONS/CGS/RIN - 172.18.141.178 - OPS_CONSOLE - INGESTION RATA KLIRING MRDST",
    status: "Approved",
    tags: ["datalake"],
    date: "2 Apr 2026, 08.15",
  },
];

export function IngestionTicketsPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTickets = search
    ? mockTickets.filter(
        (t) =>
          t.title.toLowerCase().includes(search.toLowerCase()) ||
          t.id.toLowerCase().includes(search.toLowerCase())
      )
    : mockTickets;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Hero - Sticky */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 px-8 pt-10 pb-24 shrink-0">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-[28px] tracking-tight">
            Approved ingestion tickets
          </h1>
          {/* Search bar */}
          <div className="mt-6 max-w-xl mx-auto">
            <div className="bg-white rounded-full shadow-lg flex items-center px-5 py-1">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search approved ingestion tickets..."
                className="flex-1 px-3 py-3 text-[14px] bg-transparent outline-none border-none text-gray-800 placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto -mt-12">
        <div className="max-w-5xl mx-auto w-full px-6 pb-12 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h2 className="text-[16px] text-gray-900">Ingestion queue</h2>
                <p className="text-[12px] text-gray-400 mt-0.5">
                  Ticket approved di Confluence yang siap diubah menjadi metadata table baru.
                </p>
              </div>
            </div>

            {/* Ticket List */}
            <div className="divide-y divide-gray-100">
              {filteredTickets.map((ticket, index) => (
                <button
                  key={`${ticket.pageId}-${index}`}
                  className="w-full flex items-start gap-4 px-6 py-5 hover:bg-blue-50/30 transition-colors text-left cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    {/* Status + Page ID */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-emerald-50 text-emerald-700">
                        {ticket.status}
                      </span>
                      <span className="text-[11px] text-gray-400">
                        Page ID {ticket.pageId}
                      </span>
                    </div>
                    {/* Title */}
                    <p className="text-[14px] text-gray-900 leading-relaxed">
                      {ticket.id} - {ticket.title}
                    </p>
                    {/* Tags */}
                    <div className="flex items-center gap-2 mt-2">
                      {ticket.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Date */}
                  <span className="text-[12px] text-gray-400 shrink-0 pt-1">
                    {ticket.date}
                  </span>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
              <p className="text-[12px] text-gray-400">
                Showing <span className="text-gray-700">1-10</span> of{" "}
                <span className="text-gray-700">482</span> tickets
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {[1, 2, 3, 4, 5].map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-[13px] cursor-pointer ${
                      currentPage === p
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(Math.min(49, currentPage + 1))}
                  disabled={currentPage === 49}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-[12px] text-gray-400 pt-2">
            <span>&copy; 2026 MAGE. All Rights Reserved.</span>
            <div className="flex gap-3">
              <button className="hover:text-gray-600 cursor-pointer">Indonesia</button>
              <button className="hover:text-gray-600 cursor-pointer">English</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}