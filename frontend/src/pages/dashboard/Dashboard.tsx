import AppSidebar from "../../components/layout/AppSidebar";
import AppHeader from "../../components/layout/AppHeader";
import WelcomeSection from "../../components/dashboard/WelcomeSection";
import FinancialSummary from "../../components/dashboard/FinancialSummary";
import RecentTransaction from "../../components/dashboard/RecentTransactions";
import SpendingOverview from "../../components/dashboard/SpendingOverview";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <AppSidebar />

      {/* Main */}
      <main className="lg:ml-64">
        <AppHeader />

        {/* Content */}
        <div className="p-6 lg:p-10">
          <WelcomeSection />

          <FinancialSummary />

          {/* Bottom section */}
          <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            <RecentTransaction />

            <SpendingOverview />
          </section>
        </div>
      </main>
    </div>
  );
}
