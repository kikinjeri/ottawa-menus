"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import "@/styles/styles.css";

export default function GenerateCard() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [restaurant, setRestaurant] = useState<any | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchRestaurant() {
      const { data } = await supabase
        .from("restaurants")
        .select(
          `
          *,
          menu_items (*)
        `,
        )
        .eq("id", id)
        .single();

      setRestaurant(data);
    }

    fetchRestaurant();
  }, [id, supabase]);

  if (!id) return <p>Missing restaurant id.</p>;
  if (!restaurant) return <p>Loading…</p>;

  const items = Array.isArray(restaurant.menu_items)
    ? restaurant.menu_items
    : [];

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
    <main>
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

        <section className="restaurant-info">
          <div className="info-left">
            {restaurant.address && (
              <p className="address">{restaurant.address}</p>
            )}
            {restaurant.hours && <p className="hours">{restaurant.hours}</p>}
            {restaurant.phone && <p className="phone">{restaurant.phone}</p>}
            {restaurant.email && <p className="email">{restaurant.email}</p>}
          </div>

          <div className="info-right">
            {restaurant.address && (
              <a
                className="map-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  restaurant.address,
                )}`}
                target="_blank"
              >
                View on Map
              </a>
            )}

            {restaurant.serves_alcohol && (
              <span className="tag alcohol">Serves Alcohol</span>
            )}

            {restaurant.website && (
              <a className="website" href={restaurant.website} target="_blank">
                Website
              </a>
            )}
          </div>
        </section>

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
    </main>
  );
}
