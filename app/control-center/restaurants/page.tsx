import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function RestaurantsIndex() {
  const { supabase } = createClient();

  const { data: restaurants, error } = await supabase
    .from("restaurants")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error loading restaurants:", error);
    return <p>Failed to load restaurants.</p>;
  }

  return (
    <main className="min-h-screen bg-white text-[#0A1A2F] px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">
        Your Restaurants
      </h1>

      {(!restaurants || restaurants.length === 0) && (
        <p>No restaurants found.</p>
      )}

      <ul className="space-y-6">
        {restaurants?.map((restaurant) => (
          <li key={restaurant.id} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{restaurant.name}</span>

              <Link
                href={`/control-center/restaurants/${restaurant.id}`}
                className="text-blue-600 underline"
              >
                Open
              </Link>
            </div>

            {restaurant.neighbourhood && (
              <p className="text-gray-600 text-sm mt-1">
                {restaurant.neighbourhood}
              </p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
