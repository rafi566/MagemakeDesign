import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { JobsPage } from "./pages/JobsPage";
import { MetadataAssetsPage } from "./pages/MetadataAssetsPage";
import { IngestionTicketsPage } from "./pages/IngestionTicketsPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "metadata", Component: MetadataAssetsPage },
      { path: "ingestion", Component: IngestionTicketsPage },
      { path: "jobs", Component: JobsPage },
      {
        path: "*",
        Component: () => (
          <>
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 px-8 pt-10 pb-20">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-white text-[28px] tracking-tight">Not Found</h1>
                <p className="text-blue-200 text-[14px] mt-2">Page not found.</p>
              </div>
            </div>
            <div className="max-w-5xl mx-auto w-full px-6 -mt-12 pb-12">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center text-gray-400 text-[14px]">
                Halaman yang Anda cari tidak ditemukan.
              </div>
            </div>
          </>
        ),
      },
    ],
  },
]);