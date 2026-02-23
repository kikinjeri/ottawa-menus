import ControlCenterShell from "@/components/ControlCenterShell";

export default function ControlCenterHome() {
  return (
    <ControlCenterShell>
      <h2 className="text-2xl font-bold mb-4">Welcome to Ottawa‑Menus</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/control-center/restaurants" className="dashboard-card">
          <h3 className="text-lg font-semibold">Restaurants</h3>
          <p>Manage restaurant profiles, branding, and details.</p>
        </a>

        <a href="/control-center/menu" className="dashboard-card">
          <h3 className="text-lg font-semibold">Menu Items</h3>
          <p>Manage menu items and categories.</p>
        </a>

        <a href="/control-center/cards" className="dashboard-card">
          <h3 className="text-lg font-semibold">Menu Cards</h3>
          <p>Generate styled restaurant menu cards.</p>
        </a>

        <a href="/control-center/posting" className="dashboard-card">
          <h3 className="text-lg font-semibold">Posting</h3>
          <p>Post cards to Bluesky and future platforms.</p>
        </a>
      </div>
    </ControlCenterShell>
  );
}
