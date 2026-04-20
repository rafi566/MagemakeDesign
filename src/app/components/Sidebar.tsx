import { MageLogo } from "./MageLogo";
import kataLogo from "../../imports/image.png";
import dataCatalogLogo from "../../imports/image-2.png";
import { useState } from "react";
import { NavLink } from "react-router";
import {
  Database,
  List,
  Zap,
  LogOut,
  PanelLeftClose,
  PanelLeft,
  ExternalLink,
  LayoutDashboard,
} from "lucide-react";

const pages = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Metadata Assets", icon: Database, path: "/metadata" },
  { name: "Ingestion Tickets", icon: List, path: "/ingestion" },
  { name: "Jobs", icon: Zap, path: "/jobs" },
];

const relatedApps = [
  { name: "KATA (Kamus Data)", color: "#f97316" },
  { name: "Data Catalog", color: "#3b82f6" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      style={{
        width: collapsed ? 68 : 260,
        transition: 'width 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'width',
      }}
      className="flex flex-col bg-white border-r border-gray-200 h-screen sticky top-0 shrink-0"
    >
      {/* Logo */}
      <div className={`px-4 pt-5 pb-3 ${collapsed ? "px-3 flex justify-center" : ""}`}>
        {collapsed ? (
          <MageLogo variant="icon" />
        ) : (
          <MageLogo variant="compact" />
        )}
      </div>

      {/* Divider */}
      <div className="mx-3 border-b border-gray-100 mb-2" />

      {/* User */}
      <div className={`p-4 ${collapsed ? "px-3" : ""}`}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center shrink-0">
            <span className="text-white text-[14px]">R</span>
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-[14px] text-gray-900 truncate">Rafi</p>
              <p className="text-[12px] text-gray-400 truncate">PN 00337721</p>
            </div>
          )}
        </div>
      </div>

      {/* Pages */}
      <div className="px-3 mt-2">
        {!collapsed && (
          <p className="text-[12px] text-gray-400 px-3 mb-2 uppercase tracking-wider">
            Pages
          </p>
        )}
        <nav className="flex flex-col gap-0.5">
          {pages.map((page) => (
            <NavLink
              key={page.name}
              to={page.path}
              end={page.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] transition-colors no-underline ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`
              }
            >
              <page.icon className="w-[18px] h-[18px] shrink-0" />
              {!collapsed && <span>{page.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Related Apps */}
      <div className="px-3 mt-6">
        {!collapsed && (
          <p className="text-[12px] text-gray-400 px-3 mb-2 uppercase tracking-wider">
            Related Apps
          </p>
        )}
        <nav className="flex flex-col gap-0.5">
          {relatedApps.map((app) => (
            <button
              key={app.name}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] text-gray-700 hover:bg-gray-50 transition-colors ${
                collapsed ? "justify-center px-0" : ""
              }`}
            >
              {app.name.includes("KATA") ? (
                <img src={kataLogo} alt="KATA Logo" className="w-5 h-5 object-contain shrink-0" />
              ) : app.name.includes("Data Catalog") ? (
                <img src={dataCatalogLogo} alt="Data Catalog Logo" className="w-5 h-5 object-contain shrink-0" />
              ) : (
                <div
                  className="w-5 h-5 rounded shrink-0"
                  style={{ backgroundColor: app.color }}
                />
              )}
              {!collapsed && (
                <>
                  <span className="flex-1 text-left truncate">{app.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto px-3 pb-4 flex flex-col gap-0.5">
        <button
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] text-red-500 hover:bg-red-50 transition-colors ${
            collapsed ? "justify-center px-0" : ""
          }`}
        >
          <LogOut className="w-[18px] h-[18px] shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] text-gray-500 hover:bg-gray-50 transition-colors ${
            collapsed ? "justify-center px-0" : ""
          }`}
        >
          {collapsed ? (
            <PanelLeft className="w-[18px] h-[18px] shrink-0" />
          ) : (
            <>
              <PanelLeftClose className="w-[18px] h-[18px] shrink-0" />
              <span>Collapse menu</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}