import { createClient } from "@/utils/supabase/server";

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
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Restaurants</h1>

      <div className="overflow-hidden rounded-xl border border-gray-300">
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 font-semibold">Name</th>
              <th className="p-3 font-semibold">Neighbourhood</th>
              <th className="p-3 font-semibold">Phone</th>
              <th className="p-3 font-semibold w-60">Actions</th>
            </tr>
          </thead>

          <tbody>
            {restaurants?.map((r) => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="p-3 whitespace-nowrap">
                  <a
                    href={`/control-center/restaurants/${r.id}/generate-card`}
                    target="_blank"
                    className="font-bold text-blue-700 hover:underline"
                  >
                    {r.name}
                  </a>
                </td>

                <td className="p-3 whitespace-nowrap">
                  {r.neighbourhood || "—"}
                </td>

                <td className="p-3 whitespace-nowrap">{r.phone || "—"}</td>

                <td className="p-3 whitespace-nowrap flex gap-4">
                  <a
                    href={`/control-center/restaurants/${r.id}/generate-card`}
                    target="_blank"
                    className="font-bold text-blue-700 hover:underline"
                  >
                    Menu Card
                  </a>

                  <a
                    href={`/control-center/restaurants/${r.id}/generate-sample-card`}
                    target="_blank"
                    className="font-bold text-indigo-700 hover:underline"
                  >
                    Sample Menu
                  </a>

                  <a
                    href={`/control-center/restaurants/${r.id}`}
                    className="font-bold text-gray-800 hover:underline"
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
