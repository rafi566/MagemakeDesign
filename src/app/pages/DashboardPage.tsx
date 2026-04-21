import {
  Table2,
  Percent,
  Columns3,
  Ticket,
  TableProperties,
  TrendingUp,
  TrendingDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";

// Generate 7 days of mock data
function generateDailyData() {
  const days: {
    date: Date;
    totalTables: number;
    completeTables: number;
    totalColumns: number;
    definedColumns: number;
    totalTicketIngestion: number;
    totalTableIngestion: number;
  }[] = [];

  const baseDate = new Date(2026, 3, 20); // April 20, 2026

  const configs = [
    { tables: 3120, complete: 1980, cols: 47200, defined: 33100, tickets: 445, tableIng: 1760 },
    { tables: 3145, complete: 2010, cols: 47600, defined: 33500, tickets: 452, tableIng: 1790 },
    { tables: 3168, complete: 2035, cols: 47900, defined: 33900, tickets: 458, tableIng: 1810 },
    { tables: 3190, complete: 2058, cols: 48200, defined: 34200, tickets: 465, tableIng: 1835 },
    { tables: 3210, complete: 2075, cols: 48450, defined: 34500, tickets: 470, tableIng: 1855 },
    { tables: 3230, complete: 2095, cols: 48700, defined: 34800, tickets: 476, tableIng: 1875 },
    { tables: 3247, complete: 2114, cols: 48920, defined: 35104, tickets: 482, tableIng: 1893 },
  ];

  for (let i = 0; i < 7; i++) {
    const d = new Date(baseDate);
    d.setDate(d.getDate() - (6 - i));
    const c = configs[i];
    days.push({
      date: d,
      totalTables: c.tables,
      completeTables: c.complete,
      totalColumns: c.cols,
      definedColumns: c.defined,
      totalTicketIngestion: c.tickets,
      totalTableIngestion: c.tableIng,
    });
  }
  return days;
}

const dailyData = generateDailyData();

// Generate 6 months of mock data (Nov 2025 - Apr 2026)
function generateMonthlyData() {
  const months: {
    date: Date;
    totalTables: number;
    completeTables: number;
    totalColumns: number;
    definedColumns: number;
    totalTicketIngestion: number;
    totalTableIngestion: number;
  }[] = [];

  const configs = [
    { year: 2025, month: 10, tables: 2710, complete: 1520, cols: 41200, defined: 26500, tickets: 320, tableIng: 1410 },
    { year: 2025, month: 11, tables: 2845, complete: 1655, cols: 42800, defined: 28100, tickets: 352, tableIng: 1490 },
    { year: 2026, month: 0,  tables: 2960, complete: 1780, cols: 44200, defined: 29800, tickets: 381, tableIng: 1570 },
    { year: 2026, month: 1,  tables: 3055, complete: 1870, cols: 45500, defined: 31200, tickets: 408, tableIng: 1650 },
    { year: 2026, month: 2,  tables: 3140, complete: 1955, cols: 46700, defined: 32500, tickets: 432, tableIng: 1725 },
    { year: 2026, month: 3,  tables: 3247, complete: 2114, cols: 48920, defined: 35104, tickets: 482, tableIng: 1893 },
  ];

  for (const c of configs) {
    months.push({
      date: new Date(c.year, c.month, 1),
      totalTables: c.tables,
      completeTables: c.complete,
      totalColumns: c.cols,
      definedColumns: c.defined,
      totalTicketIngestion: c.tickets,
      totalTableIngestion: c.tableIng,
    });
  }
  return months;
}

const monthlyData = generateMonthlyData();

const COLORS_TABLE = ["#2563eb", "#e5e7eb"];
const COLORS_COLUMN = ["#0ea5e9", "#e5e7eb"];

function formatDate(date: Date) {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function formatMonth(date: Date) {
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  bg: string;
  iconColor: string;
  trend?: { value: string; positive: boolean };
  subtitle?: string;
  trendLabel?: string;
}

function StatCard({ label, value, icon: Icon, bg, iconColor, trend, subtitle, trendLabel = "dari hari lalu" }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col gap-4 hover:shadow-xl transition-shadow"
      style={{ boxShadow: '0 4px 24px -4px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)' }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[14px] text-gray-500 uppercase tracking-wider">{label}</span>
        <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
      <div>
        <span className="text-[38px] text-gray-900 tracking-tight">{value}</span>
        {subtitle && (
          <p className="text-[13px] text-gray-400 mt-1">{subtitle}</p>
        )}
      </div>
      {trend && (
        <div className="flex items-center gap-1.5">
          {trend.positive ? (
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span
            className={`text-[13px] ${
              trend.positive ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {trend.value} {trendLabel}
          </span>
        </div>
      )}
    </div>
  );
}

interface CoverageChartProps {
  title: string;
  subtitle: string;
  data: { name: string; value: number }[];
  colors: string[];
  percentage: string;
  total: number;
  filledLabel: string;
  filledValue: number;
  emptyLabel: string;
  emptyValue: number;
}

function CoverageChart({
  title,
  subtitle,
  data,
  colors,
  percentage,
  total,
  filledLabel,
  filledValue,
  emptyLabel,
  emptyValue,
}: CoverageChartProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-9 hover:shadow-xl transition-shadow"
      style={{ boxShadow: '0 4px 24px -4px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)' }}
    >
      <div className="mb-6">
        <h3 className="text-[18px] text-gray-900">{title}</h3>
        <p className="text-[14px] text-gray-400 mt-0.5">{subtitle}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Chart */}
        <div className="relative w-[240px] h-[240px] shrink-0">
          <ResponsiveContainer width={240} height={240}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={105}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => value.toLocaleString()}
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  fontSize: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[30px] text-gray-900">{percentage}%</span>
            <span className="text-[12px] text-gray-400 uppercase tracking-wider">Coverage</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-4 flex-1 w-full">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-5">
            <div
              className="w-3.5 h-3.5 rounded-full shrink-0"
              style={{ backgroundColor: colors[0] }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] text-gray-500">{filledLabel}</p>
              <p className="text-[20px] text-gray-900">
                {filledValue.toLocaleString()}
              </p>
            </div>
            <span className="text-[14px] text-gray-400">
              {((filledValue / total) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-5">
            <div
              className="w-3.5 h-3.5 rounded-full shrink-0"
              style={{ backgroundColor: colors[1] }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] text-gray-500">{emptyLabel}</p>
              <p className="text-[20px] text-gray-900">
                {emptyValue.toLocaleString()}
              </p>
            </div>
            <span className="text-[14px] text-gray-400">
              {((emptyValue / total) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center gap-3 border-t border-gray-100 pt-4 px-1">
            <span className="text-[14px] text-gray-400">Total</span>
            <span className="text-[18px] text-gray-700 ml-auto">
              {total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardPage() {
  const [viewMode, setViewMode] = useState<"daily" | "monthly">("daily");
  const [dailyIdx, setDailyIdx] = useState(dailyData.length - 1);
  const [monthlyIdx, setMonthlyIdx] = useState(monthlyData.length - 1);

  const isDaily = viewMode === "daily";
  const dataset = isDaily ? dailyData : monthlyData;
  const selectedIdx = isDaily ? dailyIdx : monthlyIdx;
  const setSelectedIdx = isDaily ? setDailyIdx : setMonthlyIdx;
  const current = dataset[selectedIdx];
  const prev = selectedIdx > 0 ? dataset[selectedIdx - 1] : null;
  const trendLabel = isDaily ? "dari hari lalu" : "dari bulan lalu";

  const totalTables = current.totalTables;
  const completeTables = current.completeTables;
  const incompleteTables = totalTables - completeTables;
  const coverageTablePct = ((completeTables / totalTables) * 100).toFixed(1);

  const totalColumns = current.totalColumns;
  const definedColumns = current.definedColumns;
  const undefinedColumns = totalColumns - definedColumns;
  const coverageColumnPct = ((definedColumns / totalColumns) * 100).toFixed(1);

  const totalTicketIngestion = current.totalTicketIngestion;
  const totalTableIngestion = current.totalTableIngestion;

  const tableChartData = [
    { name: "Lengkap", value: completeTables },
    { name: "Belum Lengkap", value: incompleteTables },
  ];

  const columnChartData = [
    { name: "Terdefinisi", value: definedColumns },
    { name: "Belum Terdefinisi", value: undefinedColumns },
  ];

  // Compute trends vs previous day
  const trendTable = prev
    ? { value: `${totalTables - prev.totalTables >= 0 ? "+" : ""}${totalTables - prev.totalTables}`, positive: totalTables >= prev.totalTables }
    : undefined;
  const trendCovTable = prev
    ? {
        value: `${((completeTables / totalTables) * 100 - (prev.completeTables / prev.totalTables) * 100) >= 0 ? "+" : ""}${((completeTables / totalTables) * 100 - (prev.completeTables / prev.totalTables) * 100).toFixed(1)}%`,
        positive: (completeTables / totalTables) >= (prev.completeTables / prev.totalTables),
      }
    : undefined;
  const trendCovCol = prev
    ? {
        value: `${((definedColumns / totalColumns) * 100 - (prev.definedColumns / prev.totalColumns) * 100) >= 0 ? "+" : ""}${((definedColumns / totalColumns) * 100 - (prev.definedColumns / prev.totalColumns) * 100).toFixed(1)}%`,
        positive: (definedColumns / totalColumns) >= (prev.definedColumns / prev.totalColumns),
      }
    : undefined;
  const trendTicket = prev
    ? { value: `${totalTicketIngestion - prev.totalTicketIngestion >= 0 ? "+" : ""}${totalTicketIngestion - prev.totalTicketIngestion}`, positive: totalTicketIngestion >= prev.totalTicketIngestion }
    : undefined;
  const trendTableIng = prev
    ? { value: `${totalTableIngestion - prev.totalTableIngestion >= 0 ? "+" : ""}${totalTableIngestion - prev.totalTableIngestion}`, positive: totalTableIngestion >= prev.totalTableIngestion }
    : undefined;

  const isLatest = selectedIdx === dataset.length - 1;
  const latestBadge = isDaily ? "Hari ini" : "Bulan ini";
  const displayDate = isDaily ? formatDate(current.date) : formatMonth(current.date);

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 px-8 pt-10 pb-24 shrink-0">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-[32px] tracking-tight">
            Metadata Dashboard
          </h1>
          <p className="text-blue-200 text-[15px] mt-2 max-w-2xl mx-auto leading-relaxed">
            Monitor statistik metadata MAGE (Metadata Automated Generation Engine) — cakupan tabel, kolom, dan status ingestion ke EDC.
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-center mt-6">
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1">
              <button
                onClick={() => setViewMode("daily")}
                className={`px-5 py-1.5 rounded-full text-[13px] transition-colors ${
                  isDaily ? "bg-white text-blue-700" : "text-blue-100 hover:text-white"
                }`}
              >
                Harian
              </button>
              <button
                onClick={() => setViewMode("monthly")}
                className={`px-5 py-1.5 rounded-full text-[13px] transition-colors ${
                  !isDaily ? "bg-white text-blue-700" : "text-blue-100 hover:text-white"
                }`}
              >
                Bulanan
              </button>
            </div>
          </div>

          {/* Date Navigator */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setSelectedIdx((i: number) => Math.max(0, i - 1))}
              disabled={selectedIdx === 0}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2.5 min-w-[260px] justify-center">
              <Calendar className="w-4 h-4 text-blue-200" />
              <span className="text-white text-[14px]">
                {displayDate}
              </span>
              {isLatest && (
                <span className="bg-emerald-400 text-emerald-950 text-[11px] px-2 py-0.5 rounded-full ml-1">
                  {latestBadge}
                </span>
              )}
            </div>

            <button
              onClick={() => setSelectedIdx((i: number) => Math.min(dataset.length - 1, i + 1))}
              disabled={selectedIdx === dataset.length - 1}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Period dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {dataset.map((d, i) => (
              <button
                key={i}
                onClick={() => setSelectedIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === selectedIdx
                    ? "bg-white w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                title={isDaily ? formatDate(d.date) : formatMonth(d.date)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto w-full px-6 -mt-16 pb-8 flex flex-col gap-8">
        {/* Stat Cards - Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <StatCard
            label="Total Table"
            value={totalTables.toLocaleString()}
            icon={Table2}
            bg="bg-blue-50"
            iconColor="text-blue-600"
            subtitle="Jumlah tabel di MAGE / EDC"
            trend={trendTable}
            trendLabel={trendLabel}
          />
          <StatCard
            label="Coverage Table"
            value={`${coverageTablePct}%`}
            icon={Percent}
            bg="bg-emerald-50"
            iconColor="text-emerald-600"
            subtitle="Tabel lengkap (≥80% kolom terdefinisi)"
            trend={trendCovTable}
            trendLabel={trendLabel}
          />
          <StatCard
            label="Coverage Column"
            value={`${coverageColumnPct}%`}
            icon={Columns3}
            bg="bg-sky-50"
            iconColor="text-sky-600"
            subtitle="Kolom terdefinisi vs total kolom"
            trend={trendCovCol}
            trendLabel={trendLabel}
          />
        </div>

        {/* Stat Cards - Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <StatCard
            label="Total Ticket Ingestion"
            value={totalTicketIngestion.toLocaleString()}
            icon={Ticket}
            bg="bg-violet-50"
            iconColor="text-violet-600"
            subtitle="Tiket ingestion masuk ke MAGE"
            trend={trendTicket}
            trendLabel={trendLabel}
          />
          <StatCard
            label="Total Table Ingestion"
            value={totalTableIngestion.toLocaleString()}
            icon={TableProperties}
            bg="bg-amber-50"
            iconColor="text-amber-600"
            subtitle="Tabel di semua tiket ingestion"
            trend={trendTableIng}
            trendLabel={trendLabel}
          />
        </div>

        {/* Pie Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <CoverageChart
            title="Coverage Table"
            subtitle="Perbandingan tabel lengkap vs belum lengkap"
            data={tableChartData}
            colors={COLORS_TABLE}
            percentage={coverageTablePct}
            total={totalTables}
            filledLabel="Tabel Lengkap"
            filledValue={completeTables}
            emptyLabel="Belum Lengkap"
            emptyValue={incompleteTables}
          />
          <CoverageChart
            title="Coverage Column"
            subtitle="Perbandingan kolom terdefinisi vs belum"
            data={columnChartData}
            colors={COLORS_COLUMN}
            percentage={coverageColumnPct}
            total={totalColumns}
            filledLabel="Kolom Terdefinisi"
            filledValue={definedColumns}
            emptyLabel="Belum Terdefinisi"
            emptyValue={undefinedColumns}
          />
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
  );
}