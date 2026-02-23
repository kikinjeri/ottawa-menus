import ControlCenterShell from "@/components/ControlCenterShell";
import { supabase } from "@/lib/supabaseClient";

export default async function RestaurantsPage() {
  const { data: restaurants, error } = await supabase
    .from("restaurants")
    .select("*")
    .order("name", { ascending: true });

  return (
    <ControlCenterShell>
      <h2 className="text-2xl font-bold mb-6">Restaurants</h2>

      {error && (
        <p className="text-red-600 mb-4">
          Error loading restaurants: {error.message}
        </p>
      )}

      <div className="space-y-4">
        {restaurants?.map((r) => (
          <a
            key={r.id}
            href={`/control-center/restaurants/${r.id}`}
            className="block p-4 border rounded-lg bg-white hover:bg-gray-50 transition"
          >
            <h3 className="text-lg font-semibold">{r.name}</h3>
            <p className="text-sm text-gray-600">{r.neighbourhood}</p>
            {r.website && (
              <p className="text-sm text-blue-600 underline">{r.website}</p>
            )}
          </a>
        ))}
      </div>
    </ControlCenterShell>
  );
}
