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
  cuisine?: string;
  tags?: string[];
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
      r.categories?.join(" ").toLowerCase().includes(q) ||
      r.cuisine?.toLowerCase().includes(q) ||
      r.tags?.join(" ").toLowerCase().includes(q)
    );
  });

  return (
    <div
      className="flex flex-col gap-8 p-6 min-h-screen"
      style={{ backgroundColor: "#c9cbce" }}
    >
      {/* Search */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search restaurants or cuisine"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg 
                     shadow-sm bg-white focus:outline-none focus:ring-2 
                     focus:ring-[var(--accent)] transition"
        />
      </div>

      {/* Add Restaurant Button */}
      <div className="flex justify-end max-w-6xl mx-auto w-full">
        <a
          href="/control-center/restaurants/new"
          className="px-4 py-2 rounded-lg font-medium 
                     bg-[var(--accent)] text-white shadow-sm 
                     hover:bg-[var(--accent-light)] transition-all duration-200"
        >
          Add Restaurant
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((restaurant) => (
          <div
            key={restaurant.id}
            className="rounded-xl p-5 shadow-xl 
                       bg-[#fdfdfd] border border-gray-300 
                       flex flex-col justify-between h-full 
                       hover:shadow-2xl transition-all duration-200"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-[var(--accent)]">
                {restaurant.name}
              </h2>

              {restaurant.neighbourhood && (
                <p className="text-sm font-semibold text-gray-900">
                  {restaurant.neighbourhood}
                </p>
              )}

              {restaurant.cuisine && (
                <p className="text-sm text-gray-800">
                  Cuisine: {restaurant.cuisine}
                </p>
              )}

              {restaurant.tags?.length > 0 && (
                <p className="text-sm text-gray-800">
                  Tags: {restaurant.tags.join(", ")}
                </p>
              )}
              {restaurant.address && (
                <p className="text-sm text-gray-800">📍 {restaurant.address}</p>
              )}

              {restaurant.address && (
                <p className="text-sm">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      restaurant.address + " Ottawa",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1b3b6f] underline hover:text-[var(--accent-light)] transition"
                  >
                    View on Google Maps
                  </a>
                </p>
              )}
              {restaurant.phone && (
                <p className="text-sm text-gray-800">☎️ {restaurant.phone}</p>
              )}

              {/* Delivery Platforms */}
              {restaurant.delivery_platforms?.length > 0 && (
                <div className="text-sm flex flex-wrap gap-2">
                  {restaurant.delivery_platforms.map((platform) => {
                    const name = platform.toLowerCase();
                    let url = "#";

                    if (name.includes("uber")) {
                      url = `https://www.ubereats.com/ca/search?diningMode=DELIVERY&query=${encodeURIComponent(
                        restaurant.name + " Ottawa",
                      )}`;
                    }

                    if (name.includes("door")) {
                      url = `https://www.doordash.com/search/store/${encodeURIComponent(
                        restaurant.name + " Ottawa",
                      )}`;
                    }

                    if (name.includes("skip")) {
                      url = `https://www.skipthedishes.com/search?q=${encodeURIComponent(
                        restaurant.name + " Ottawa",
                      )}`;
                    }

                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#1b3b6f] hover:text-[var(--accent-light)] underline transition"
                      >
                        {platform}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              {/* ⭐ Correct Preview Button */}
              <a
                href={`/generate-card?id=${restaurant.id}`}
                target="_blank"
                className="flex-1 text-center px-4 py-2 rounded-lg font-medium 
                           bg-[var(--accent)] text-white shadow-sm 
                           hover:bg-[var(--accent-light)] transition-all duration-200"
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
                className="flex-1 text-center px-4 py-2 rounded-lg font-medium 
                           bg-black text-white shadow-sm 
                           hover:bg-gray-800 transition-all duration-200"
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
