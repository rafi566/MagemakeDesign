import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  RefreshCw,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type AssetStatus = "GENERATED" | "APPROVED" | "UNPROCESSED";

interface Asset {
  name: string;
  path: string[];
  type: string;
  status: AssetStatus;
}

const statusStyles: Record<AssetStatus, { bg: string; text: string; border: string }> = {
  GENERATED: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  APPROVED: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  UNPROCESSED: { bg: "bg-gray-50", text: "text-gray-500", border: "border-gray-200" },
};

const mockAssets: Asset[] = [
  { name: "0000_staging_as4_lnflag", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "GENERATED" },
  { name: "0000_staging_dwh_branch_wilayah", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "GENERATED" },
  { name: "0000_staging_fact_as4_lnresm", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "UNPROCESSED" },
  { name: "0000_staging_process_as4_lnresh", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "UNPROCESSED" },
  { name: "0000_staging_raw_as4_amlcdacc2", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "APPROVED" },
  { name: "0000_staging_raw_as4_amlcdtxn2", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "GENERATED" },
  { name: "0000_staging_raw_as4_amlddacc2", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "UNPROCESSED" },
  { name: "0000_staging_raw_as4_amlddtxn2", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "UNPROCESSED" },
  { name: "0000_staging_raw_as4_amldwpar", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "UNPROCESSED" },
  { name: "0000_staging_raw_as4_amlfxrat", path: ["Hive_datalake", "Hive Metastore", "datalake"], type: "table", status: "APPROVED" },
];

const totalResults = 4286;

export function MetadataAssetsPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showWorkflowOps, setShowWorkflowOps] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const totalPages = Math.ceil(totalResults / 10);

  const filteredAssets = search
    ? mockAssets.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))
    : mockAssets;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Hero - Sticky */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 px-8 pt-10 pb-24 shrink-0">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-[28px] tracking-tight">
            Discover your data assets
          </h1>
          {/* Search bar */}
          <div className="mt-6 max-w-xl mx-auto">
            <div className="bg-white rounded-full shadow-lg flex items-center px-5 py-1">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search data assets..."
                className="flex-1 px-3 py-3 text-[14px] bg-transparent outline-none border-none text-gray-800 placeholder:text-gray-400"
              />
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 -mt-12 px-6 pb-4">
        <div className="max-w-5xl mx-auto w-full h-full flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* Sticky Headers */}
            <div className="shrink-0">
              {/* Workflow Ops Header */}
              <div className="bg-white flex items-center justify-between px-6 py-3.5 border-b border-gray-100">
                <div>
                  <h2 className="text-[14px] text-gray-900">Workflow Operations</h2>
                  <p className="text-[12px] text-gray-400 mt-0.5">
                    Review failed workflows and requeue them safely.
                  </p>
                </div>
                <button
                  onClick={() => setShowWorkflowOps(!showWorkflowOps)}
                  className="px-4 py-2 rounded-xl border border-gray-200 text-[12px] text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {showWorkflowOps ? "Hide Workflow Ops" : "Show Workflow Ops"}
                </button>
              </div>

              {/* Workflow Ops Panel */}
              {showWorkflowOps && (
                <div className="px-6 py-4 bg-gray-50/60 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <div>
                        <p className="text-[13px] text-gray-900">Workflow Ops</p>
                        <p className="text-[11px] text-gray-400">
                          Review failed KATA to EDC workflows and requeue them without manual database updates.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setRefreshing(true);
                        setTimeout(() => setRefreshing(false), 1000);
                      }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] text-gray-600 hover:bg-white transition-colors cursor-pointer"
                    >
                      <RefreshCw className={`w-3 h-3 ${refreshing ? "animate-spin" : ""}`} />
                      Refresh
                    </button>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-[13px] text-green-700">
                    No failed KATA workflows at the moment.
                  </div>
                </div>
              )}

              {/* Results Header */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-gray-100">
                <h3 className="text-[16px] text-gray-900">
                  {totalResults.toLocaleString()} Results Found
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] text-gray-400">Sort by:</span>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-[13px] text-gray-700 hover:bg-gray-50 cursor-pointer">
                    Relevance
                    <SlidersHorizontal className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable Asset List + Pagination */}
            <div className="flex-1 overflow-y-auto min-h-0">
              {/* Asset List */}
              <div className="divide-y divide-gray-100">
                {filteredAssets.map((asset) => {
                  const s = statusStyles[asset.status];
                  return (
                    <button
                      key={asset.name}
                      className="w-full flex items-center gap-4 px-6 py-4 hover:bg-blue-50/40 transition-colors text-left cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Grid3X3 className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] text-blue-600 truncate">{asset.name}</p>
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400">
                          {asset.path.map((segment, i) => (
                            <span key={i} className="flex items-center gap-1">
                              {i > 0 && <span className="text-gray-300">›</span>}
                              <span>{segment}</span>
                            </span>
                          ))}
                          <span className="text-gray-200 mx-1">|</span>
                          <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded text-[11px]">
                            {asset.type}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-[11px] uppercase tracking-wider px-3 py-1 rounded border ${s.bg} ${s.text} ${s.border}`}
                      >
                        {asset.status}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                <p className="text-[12px] text-gray-400">
                  Showing <span className="text-gray-700">1-10</span> of{" "}
                  <span className="text-gray-700">{totalResults.toLocaleString()}</span> results
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
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-[12px] text-gray-400 pt-2 shrink-0">
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