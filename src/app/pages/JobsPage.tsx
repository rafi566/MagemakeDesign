import { useState } from "react";
import { RefreshCw, CheckCircle2, Clock, AlertTriangle, XCircle } from "lucide-react";
import { JobCard } from "../components/JobCard";

const summaryCards = [
  { label: "Enabled Jobs", value: 0, icon: CheckCircle2, bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700" },
  { label: "Overdue Jobs", value: 0, icon: AlertTriangle, bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
  { label: "Running Jobs", value: 0, icon: Clock, bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-700" },
  { label: "Recent Failures", value: 0, icon: XCircle, bg: "bg-red-50", border: "border-red-200", text: "text-red-700" },
];

const jobs = [
  {
    title: "KATA approval tracker",
    description: "Cek workflow yang draft KATA-nya sudah selesai diapprove, lalu naikkan state ke tahap berikutnya.",
    status: "success" as const,
    nextRun: "2 Apr 2026, 07.30",
    lastRun: "1 Apr 2026, 17.06",
    enabled: false,
  },
  {
    title: "Shared glossary sync",
    description: "Sinkronkan glossary KATA ke Informatica Analyst dan siapkan term supaya siap dipakai di EDC.",
    status: "success" as const,
    nextRun: "2 Apr 2026, 08.00",
    lastRun: "1 Apr 2026, 17.06",
    enabled: false,
  },
  {
    title: "Push to EDC",
    description: "Publish metadata table dan column ke Data Catalog EDC untuk workflow yang sudah eligible.",
    status: "success" as const,
    nextRun: "2 Apr 2026, 08.30",
    lastRun: "1 Apr 2026, 17.06",
    enabled: false,
  },
];

const notes = [
  { title: "Tracker first", icon: "🕐", desc: "Jalankan ini setelah approval di KATA selesai untuk menaikkan workflow ke tahap glossary sync." },
  { title: "Sync glossary", icon: "🔄", desc: "Gunakan ini saat term KATA belum terlihat di Analyst atau EDC meski approval KATA sudah selesai." },
  { title: "Push to EDC", icon: "📤", desc: "Gunakan ini untuk memaksa publish metadata ke EDC saat workflow sudah eligible dan table EDC sudah tersedia." },
];

export function JobsPage() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 px-8 pt-10 pb-20 shrink-0">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-[28px] tracking-tight">
            Jobs & Operations
          </h1>
          <p className="text-blue-200 text-[14px] mt-2 max-w-xl mx-auto leading-relaxed">
            Trigger nightly workflow steps secara manual untuk verifikasi KATA, glossary sync, dan publish metadata ke EDC.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto w-full px-6 -mt-12 pb-12 flex flex-col gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div>
              <h2 className="text-[15px] text-gray-900">Manual jobs control</h2>
              <p className="text-[12px] text-gray-400 mt-0.5">
                Gunakan halaman ini untuk trigger job KATA ke EDC secara manual tanpa menunggu scheduler malam.
              </p>
            </div>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-[12px] text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {summaryCards.map((card) => (
              <div
                key={card.label}
                className={`${card.bg} ${card.border} border rounded-2xl p-4 flex flex-col gap-1`}
              >
                <div className="flex items-center gap-2">
                  <card.icon className={`w-3.5 h-3.5 ${card.text}`} />
                  <span className={`text-[11px] uppercase tracking-wider ${card.text}`}>
                    {card.label}
                  </span>
                </div>
                <span className={`text-[24px] ${card.text}`}>{card.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <h3 className="text-[15px] text-gray-900 mb-3">Running now</h3>
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-[13px] text-green-700">
              No jobs are running right now.
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <h3 className="text-[15px] text-gray-900 mb-3">Recent failures</h3>
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-[13px] text-green-700">
              No recent job failures.
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-[15px] text-gray-900 mb-4">Operational notes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {notes.map((note) => (
              <div key={note.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[14px]">{note.icon}</span>
                  <span className="text-[13px] text-gray-900">{note.title}</span>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed">{note.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[12px] text-gray-400 pt-2">
          <span>&copy; 2026 MAGE. All Rights Reserved.</span>
          <div className="flex gap-3">
            <button className="hover:text-gray-600 cursor-pointer">Indonesia</button>
            <button className="hover:text-gray-600 cursor-pointer">English</button>
          </div>
        </div>
      </div>
    </div>
  );
}