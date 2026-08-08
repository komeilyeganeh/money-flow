import { Progress } from "antd";
import { formatCurrency } from "../../utils/format-currency";

const spendingCategories = [
  {
    name: "Food",
    amount: 420,
    percentage: 42,
  },
  {
    name: "Entertainment",
    amount: 180,
    percentage: 24,
  },
  {
    name: "Transport",
    amount: 145,
    percentage: 18,
  },
  {
    name: "Utilities",
    amount: 120,
    percentage: 16,
  },
];

function SpendingOverview() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="font-bold">Spending Overview</h3>

        <p className="mt-1 text-xs text-slate-400">This month</p>
      </div>

      <div className="mb-7 flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold">$865.00</p>

          <p className="mt-1 text-xs text-slate-400">Total spending</p>
        </div>

        <span className="text-sm font-semibold text-emerald-600">-8.4%</span>
      </div>

      <div className="space-y-5">
        {spendingCategories.map((category) => (
          <div key={category.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">
                {category.name}
              </span>

              <span className="font-semibold text-slate-900">
                {formatCurrency(category.amount)}
              </span>
            </div>

            <Progress
              percent={category.percentage}
              showInfo={false}
              strokeWidth={7}
              className="[&_.ant-progress-bg]:bg-indigo-500!"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpendingOverview;
