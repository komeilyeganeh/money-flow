import {
  BankOutlined,
  DashboardOutlined,
  SettingOutlined,
  SwapOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-sm">
          M
        </div>

        <span className="text-xl font-bold tracking-tight">MoneyFlow</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Overview
        </p>

        <button className="flex w-full items-center gap-3 rounded-xl bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-600">
          <DashboardOutlined />
          Dashboard
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
          <BankOutlined />
          Accounts
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
          <SwapOutlined />
          Transactions
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
          <TagOutlined />
          Categories
        </button>

        <p className="mb-3 mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          System
        </p>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
          <SettingOutlined />
          Settings
        </button>
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <Avatar className="bg-indigo-100! text-indigo-600!">A</Avatar>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800">
              Alex Morgan
            </p>

            <p className="truncate text-xs text-slate-400">alex@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AppSidebar;
