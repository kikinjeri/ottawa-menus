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
    const q = query.toLowerCase().trim();

    if (!q) return true;

    const words = q.split(/\s+/);

    const haystack = [
      r.name,
      r.neighbourhood,
      r.cuisine,
      ...(r.categories || []),
      ...(r.tags || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    // every word must match somewhere
    return words.every((w) => haystack.includes(w));
  });

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      {/* HEADER */}
      <header className="w-full bg-[var(--accent)] text-white shadow-md py-5 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Ottawa Menus — Control Center
          </h1>

          <a
            href="/control-center/restaurants/new"
            className="px-4 py-2 rounded-lg font-medium 
                       bg-[var(--warm-yellow)] text-[var(--foreground)] shadow-sm 
                       hover:bg-[var(--warm-orange)] transition-all duration-200"
          >
            Add Restaurant
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex flex-col gap-8 p-6 max-w-6xl mx-auto w-full">
        {/* Search Bar */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search restaurants, cuisine, tags, neighbourhood..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-full 
                       bg-white border border-[var(--card-border)] shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                       text-[var(--foreground)] placeholder-gray-500 transition"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((restaurant) => (
            <div
              key={restaurant.id}
              className="rounded-xl p-5 shadow-lg 
                         bg-white border border-[var(--card-border)] 
                         flex flex-col justify-between h-full 
                         hover:shadow-xl transition-all duration-200"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight text-[var(--accent)]">
                  {restaurant.name}
                </h2>

                {restaurant.neighbourhood && (
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {restaurant.neighbourhood}
                  </p>
                )}

                {restaurant.cuisine && (
                  <p className="text-sm text-[var(--foreground)]">
                    Cuisine: {restaurant.cuisine}
                  </p>
                )}

                {restaurant.tags?.length > 0 && (
                  <p className="text-sm text-[var(--foreground)]">
                    Tags: {restaurant.tags.join(", ")}
                  </p>
                )}

                {restaurant.address && (
                  <p className="text-sm text-[var(--foreground)]">
                    📍 {restaurant.address}
                  </p>
                )}

                {restaurant.address && (
                  <p className="text-sm">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        restaurant.address + " Ottawa",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[var(--accent)] underline hover:text-[var(--accent-light)] transition"
                    >
                      View on Google Maps
                    </a>
                  </p>
                )}

                {restaurant.phone && (
                  <p className="text-sm text-[var(--foreground)]">
                    ☎️ {restaurant.phone}
                  </p>
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
                          className="font-semibold text-[var(--accent)] hover:text-[var(--accent-light)] underline transition"
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
      </main>

      {/* FOOTER */}
      <footer className="w-full text-center py-6 text-sm text-[var(--foreground)] opacity-80">
        Ottawa-menus by M.George
      </footer>
    </div>
  );
}
