import { SwapOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import { formatCurrency } from "../../utils/format-currency";

const transactions = [
  {
    id: 1,
    title: "Grocery Shopping",
    category: "Food",
    date: "Today, 10:32 AM",
    amount: -85.4,
  },
  {
    id: 2,
    title: "Salary",
    category: "Income",
    date: "Yesterday, 09:00 AM",
    amount: 3200,
  },
  {
    id: 3,
    title: "Netflix",
    category: "Entertainment",
    date: "Mar 12, 08:15 PM",
    amount: -15.99,
  },
  {
    id: 4,
    title: "Electricity Bill",
    category: "Utilities",
    date: "Mar 10, 02:40 PM",
    amount: -120,
  },
];

function RecentTransaction() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="font-bold">Recent Transactions</h3>

          <p className="mt-1 text-xs text-slate-400">
            Your latest financial activity
          </p>
        </div>

        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
          View all
        </button>
      </div>

      <div className="space-y-1">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-xl px-3 py-4 transition hover:bg-slate-50"
          >
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <SwapOutlined />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {transaction.title}
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <Tag
                    bordered={false}
                    className="m-0! rounded-md! bg-slate-100! text-xs! text-slate-500!"
                  >
                    {transaction.category}
                  </Tag>

                  <span className="text-xs text-slate-400">
                    {transaction.date}
                  </span>
                </div>
              </div>
            </div>

            <span
              className={`ml-4 shrink-0 text-sm font-bold ${
                transaction.amount > 0 ? "text-emerald-600" : "text-slate-800"
              }`}
            >
              {transaction.amount > 0 ? "+" : ""}
              {formatCurrency(transaction.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransaction;
