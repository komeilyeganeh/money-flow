import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

function FinancialSummary() {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {/* Balance */}
      <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400">Total Balance</p>

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
            <CreditCardOutlined />
          </div>
        </div>

        <p className="mt-5 text-3xl font-bold tracking-tight">$12,450.80</p>

        <p className="mt-3 text-xs text-slate-400">Across all your accounts</p>
      </div>

      {/* Income */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">Income</p>

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <ArrowUpOutlined />
          </div>
        </div>

        <p className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
          $4,850.00
        </p>

        <div className="mt-3 flex items-center gap-2 text-xs">
          <span className="font-semibold text-emerald-600">+12.5%</span>

          <span className="text-slate-400">vs last month</span>
        </div>
      </div>

      {/* Expenses */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">Expenses</p>

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
            <ArrowDownOutlined />
          </div>
        </div>

        <p className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
          $1,240.60
        </p>

        <div className="mt-3 flex items-center gap-2 text-xs">
          <span className="font-semibold text-rose-500">+4.2%</span>

          <span className="text-slate-400">vs last month</span>
        </div>
      </div>
    </section>
  );
}

export default FinancialSummary;
