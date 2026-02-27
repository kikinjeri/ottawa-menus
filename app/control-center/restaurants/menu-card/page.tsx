"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import "@/styles/styles.css";

export default function MenuCardPage() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [restaurant, setRestaurant] = useState<any | null>(null);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      // Fetch restaurant
      const { data: restaurantData } = await supabase
        .from("restaurants")
        .select("*")
        .eq("id", id)
        .single();

      // Fetch menu items separately
      const { data: itemsData } = await supabase
        .from("menu_items")
        .select("*")
        .eq("restaurant_id", id);

      setRestaurant(restaurantData || null);
      setItems(itemsData || []);
      setLoading(false);
    }

    fetchData();
  }, [id, supabase]);

  if (!id) return <p>Missing restaurant id.</p>;
  if (loading) return <p>Loading…</p>;
  if (!restaurant) return <p>Restaurant not found.</p>;

  function getContrastColor(hex?: string | null) {
    if (!hex) return "#000";
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "#000" : "#fff";
  }

  const primary = restaurant.primary_color || "#333";
  const secondary = restaurant.secondary_color || "#666";
  const textColor = getContrastColor(restaurant.background_color);

  const categoryOrder = [
    "Breakfast",
    "Appetizers",
    "Starters",
    "Lunch",
    "Mains",
    "Dinner",
    "Entrees",
    "Sides",
    "Desserts",
    "Kids",
  ];

  const sortedItems = [...items].sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.category);
    const bIndex = categoryOrder.indexOf(b.category);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });

  const grouped = sortedItems.reduce((acc: any, item: any) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#0A1A2F]">
      <nav className="w-full bg-[#0A1A2F] text-[#F7F3EB] py-4 px-8 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Ottawa‑Menus
          </Link>

          <div className="flex gap-8 text-lg">
            <Link href="/" className="hover:text-[#6FA8DC] transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#6FA8DC] transition">
              About
            </Link>
            <Link
              href="/control-center/restaurants"
              className="hover:text-[#6FA8DC] transition"
            >
              Control Center
            </Link>
          </div>
        </div>
      </nav>

      <div className="px-8 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">
          Menu — {restaurant.name}
        </h1>

        <article
          className="restaurant-card"
          style={{
            "--primary": primary,
            "--secondary": secondary,
            "--text": textColor,
          }}
        >
          <header className="restaurant-header">
            <h1>{restaurant.name}</h1>
            {restaurant.neighbourhood && (
              <p className="neighbourhood">{restaurant.neighbourhood}</p>
            )}
          </header>

          {restaurant.description && (
            <section className="restaurant-description">
              <p>{restaurant.description}</p>
            </section>
          )}

          <section className="menu-section">
            <h2>Menu</h2>

            {Object.keys(grouped).length === 0 && (
              <p className="empty-menu">Menu coming soon.</p>
            )}

            {Object.keys(grouped).map((category) => (
              <section key={category} className="menu-category">
                <h3>{category}</h3>
                <ul className="menu-items">
                  {grouped[category].map((item: any) => (
                    <li key={item.id} className="menu-item">
                      <div className="item-header">
                        <span className="dish">{item.name}</span>
                        {item.price && (
                          <span className="price">{item.price}</span>
                        )}
                      </div>

                      {item.description && (
                        <p className="item-description">{item.description}</p>
                      )}

                      {item.tags?.length > 0 && (
                        <ul className="item-tags">
                          {item.tags.map((tag: string) => (
                            <li key={tag} className="tag">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </section>

          <footer className="card-footer">Ottawa Menus</footer>
          <div className="card-watermark">M. George</div>
        </article>
      </div>
    </main>
  );
}
