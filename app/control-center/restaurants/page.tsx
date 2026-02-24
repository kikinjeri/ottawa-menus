"use client";

import { useEffect, useState } from "react";

interface Restaurant {
  id: string;
  name: string;
  address?: string;
  phone?: string;
  neighbourhood?: string;
  categories?: string[];
  delivery_platforms?: string[];
}

export default function RestaurantsControlPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/restaurants", { cache: "no-store" });
      const data = await res.json();
      setRestaurants(data);
    }
    load();
  }, []);

  const filtered = restaurants.filter((r) => {
    const q = query.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      r.neighbourhood?.toLowerCase().includes(q) ||
      r.categories?.join(" ").toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Search */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search restaurants or cuisine"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-3 border rounded-lg shadow-sm"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((restaurant) => (
          <div
            key={restaurant.id}
            className="border rounded-xl p-5 shadow-sm bg-white flex flex-col justify-between h-full"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>

              {restaurant.neighbourhood && (
                <p className="text-sm text-gray-600">
                  {restaurant.neighbourhood}
                </p>
              )}

              {restaurant.categories?.length > 0 && (
                <p className="text-sm text-gray-700">
                  Cuisine: {restaurant.categories.join(", ")}
                </p>
              )}

              {restaurant.address && (
                <p className="text-sm text-gray-700">📍 {restaurant.address}</p>
              )}

              {restaurant.phone && (
                <p className="text-sm text-gray-700">☎️ {restaurant.phone}</p>
              )}

              {restaurant.delivery_platforms?.length > 0 && (
                <p className="text-sm text-gray-700">
                  Delivery: {restaurant.delivery_platforms.join(", ")}
                </p>
              )}
            </div>

            <div className="flex gap-2 mt-4">
              <a
                href={`/api/generate-card?id=${restaurant.id}`}
                target="_blank"
                className="btn btn-primary flex-1 text-center"
              >
                Preview
              </a>

              <button
                onClick={async () => {
                  await fetch("/api/bsky/post-restaurant", {
                    method: "POST",
                    body: JSON.stringify({ id: restaurant.id }),
                  });
                  alert("Posted to Bluesky!");
                }}
                className="btn btn-secondary flex-1"
              >
                Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
