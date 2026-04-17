import { Play, Zap } from "lucide-react";

interface JobCardProps {
  title: string;
  description: string;
  status: "success" | "failed" | "running";
  nextRun: string;
  lastRun: string;
  enabled: boolean;
  onRun?: () => void;
}

const statusConfig = {
  success: { label: "Success", bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  failed: { label: "Failed", bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  running: { label: "Running", bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
};

export function JobCard({ title, description, status, nextRun, lastRun, enabled, onRun }: JobCardProps) {
  const s = statusConfig[status];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
            <Zap className="w-4 h-4 text-blue-600" />
          </div>
          <h3 className="text-[15px] text-gray-900">{title}</h3>
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wide ${s.bg} ${s.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
          {s.label}
        </span>
      </div>

      <p className="text-[13px] text-gray-500 leading-relaxed">{description}</p>

      <div className="flex flex-col gap-2 text-[12px]">
        <div className="flex justify-between">
          <span className="text-gray-400">Next run</span>
          <span className="text-gray-700">{nextRun}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Last run</span>
          <span className="text-gray-700">{lastRun}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Enabled</span>
          <span className="text-gray-700">{enabled ? "Yes" : "No"}</span>
        </div>
      </div>

      <button
        onClick={onRun}
        className="mt-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-[13px] transition-colors cursor-pointer"
      >
        <Play className="w-3.5 h-3.5" />
        Run manually
      </button>
    </div>
  );
}
