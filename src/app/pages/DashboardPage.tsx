import {
  Table2,
  Percent,
  Columns3,
  Ticket,
  TableProperties,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Mock data
const totalTables = 3247;
const completeTables = 2114; // tables where >=80% columns are defined
const incompleteTables = totalTables - completeTables;
const coverageTablePct = ((completeTables / totalTables) * 100).toFixed(1);

const totalColumns = 48920;
const definedColumns = 35104;
const undefinedColumns = totalColumns - definedColumns;
const coverageColumnPct = ((definedColumns / totalColumns) * 100).toFixed(1);

const totalTicketIngestion = 482;
const totalTableIngestion = 1893;

const tableChartData = [
  { name: "Lengkap", value: completeTables },
  { name: "Belum Lengkap", value: incompleteTables },
];

const columnChartData = [
  { name: "Terdefinisi", value: definedColumns },
  { name: "Belum Terdefinisi", value: undefinedColumns },
];

const COLORS_TABLE = ["#2563eb", "#e5e7eb"];
const COLORS_COLUMN = ["#0ea5e9", "#e5e7eb"];

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  bg: string;
  iconColor: string;
  trend?: { value: string; positive: boolean };
  subtitle?: string;
}

function StatCard({ label, value, icon: Icon, bg, iconColor, trend, subtitle }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-gray-500 uppercase tracking-wider">{label}</span>
        <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
      <div>
        <span className="text-[34px] text-gray-900 tracking-tight">{value}</span>
        {subtitle && (
          <p className="text-[12px] text-gray-400 mt-1">{subtitle}</p>
        )}
      </div>
      {trend && (
        <div className="flex items-center gap-1.5">
          {trend.positive ? (
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5 text-red-500" />
          )}
          <span
            className={`text-[12px] ${
              trend.positive ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {trend.value} dari bulan lalu
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
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-md transition-shadow">
      <div className="mb-5">
        <h3 className="text-[16px] text-gray-900">{title}</h3>
        <p className="text-[13px] text-gray-400 mt-0.5">{subtitle}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Chart */}
        <div className="relative w-[220px] h-[220px] shrink-0">
          <ResponsiveContainer width={220} height={220}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={95}
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
            <span className="text-[26px] text-gray-900">{percentage}%</span>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider">Coverage</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-4 flex-1 w-full">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
            <div
              className="w-3.5 h-3.5 rounded-full shrink-0"
              style={{ backgroundColor: colors[0] }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] text-gray-500">{filledLabel}</p>
              <p className="text-[18px] text-gray-900">
                {filledValue.toLocaleString()}
              </p>
            </div>
            <span className="text-[13px] text-gray-400">
              {((filledValue / total) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
            <div
              className="w-3.5 h-3.5 rounded-full shrink-0"
              style={{ backgroundColor: colors[1] }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] text-gray-500">{emptyLabel}</p>
              <p className="text-[18px] text-gray-900">
                {emptyValue.toLocaleString()}
              </p>
            </div>
            <span className="text-[13px] text-gray-400">
              {((emptyValue / total) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center gap-3 border-t border-gray-100 pt-4 px-1">
            <span className="text-[13px] text-gray-400">Total</span>
            <span className="text-[16px] text-gray-700 ml-auto">
              {total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardPage() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 px-8 pt-10 pb-20 shrink-0">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-[28px] tracking-tight">
            Metadata Dashboard
          </h1>
          <p className="text-blue-200 text-[14px] mt-2 max-w-2xl mx-auto leading-relaxed">
            Monitor statistik metadata MAGE (Metadata Automated Generation Engine) — cakupan tabel, kolom, dan status ingestion ke EDC.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto w-full px-6 -mt-16 pb-8 flex flex-col gap-8">
        {/* Stat Cards - Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <StatCard
            label="Total Table"
            value={totalTables.toLocaleString()}
            icon={Table2}
            bg="bg-blue-50"
            iconColor="text-blue-600"
            subtitle="Jumlah tabel di MAGE / EDC"
            trend={{ value: "+128", positive: true }}
          />
          <StatCard
            label="Coverage Table"
            value={`${coverageTablePct}%`}
            icon={Percent}
            bg="bg-emerald-50"
            iconColor="text-emerald-600"
            subtitle="Tabel lengkap (≥80% kolom terdefinisi)"
            trend={{ value: "+2.3%", positive: true }}
          />
          <StatCard
            label="Coverage Column"
            value={`${coverageColumnPct}%`}
            icon={Columns3}
            bg="bg-sky-50"
            iconColor="text-sky-600"
            subtitle="Kolom terdefinisi vs total kolom"
            trend={{ value: "+1.8%", positive: true }}
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
            trend={{ value: "+24", positive: true }}
          />
          <StatCard
            label="Total Table Ingestion"
            value={totalTableIngestion.toLocaleString()}
            icon={TableProperties}
            bg="bg-amber-50"
            iconColor="text-amber-600"
            subtitle="Tabel di semua tiket ingestion"
            trend={{ value: "+86", positive: true }}
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