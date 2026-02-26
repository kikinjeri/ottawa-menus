import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function RestaurantsPage() {
  const supabase = await createClient();

  const { data: restaurants, error } = await supabase
    .from("restaurants")
    .select("id, name, neighbourhood, phone")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error loading restaurants:", error);
    return <div className="p-10">Failed to load restaurants.</div>;
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <nav className="flex items-center justify-between mb-8 border-b pb-4">
        <div className="font-semibold text-lg">Ottawa-Menus Control Center</div>
        <div className="flex gap-4 text-sm">
          <Link href="/home" className="text-blue-700 hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-blue-700 hover:underline">
            About
          </Link>
        </div>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Restaurants</h1>

      <div className="overflow-hidden rounded-xl border border-gray-300">
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 font-semibold">Name</th>
              <th className="p-3 font-semibold">Neighbourhood</th>
              <th className="p-3 font-semibold">Phone</th>
              <th className="p-3 font-semibold w-40">Actions</th>
            </tr>
          </thead>

          <tbody>
            {restaurants?.map((r) => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.neighbourhood || "—"}</td>
                <td className="p-3">{r.phone || "—"}</td>

                <td className="p-3 flex gap-2">
                  <a
                    href={`/generate-card?id=${r.id}`}
                    className="px-3 py-1 rounded bg-blue-600 text-white text-sm"
                    target="_blank"
                  >
                    Menu Card
                  </a>

                  <a
                    href={`/generate-sample-card?id=${r.id}`}
                    className="px-3 py-1 rounded bg-indigo-600 text-white text-sm"
                    target="_blank"
                  >
                    Sample Menu
                  </a>

                  <a
                    href={`/control-center/restaurants/${r.id}`}
                    className="px-3 py-1 rounded bg-gray-800 text-white text-sm"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
