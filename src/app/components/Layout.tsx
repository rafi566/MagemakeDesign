import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}