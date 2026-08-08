import { useAuth } from "../../hooks/useAuth";

function WelcomeSection() {
  const {user} = useAuth();
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight">
        Good morning, {user?.firstName} 👋
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Here’s what’s happening with your finances today.
      </p>
    </section>
  );
}

export default WelcomeSection;
