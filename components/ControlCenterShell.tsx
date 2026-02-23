export default function ControlCenterShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white px-6 py-4">
        <h1 className="text-xl font-semibold">Ottawa‑Menus Control Center</h1>
      </nav>
      <main className="max-w-5xl mx-auto p-6">{children}</main>
    </div>
  );
}
