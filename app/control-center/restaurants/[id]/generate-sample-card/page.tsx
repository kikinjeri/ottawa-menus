"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import "@/styles/styles.css";

export default function GenerateSampleCard() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [restaurant, setRestaurant] = useState(null);

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
  }, [id]);

  if (!id) return <p>Missing restaurant id.</p>;
  if (!restaurant) return <p>Loading…</p>;

  // ⭐ Safe fallback for missing menu_items
  const items = Array.isArray(restaurant.menu_items)
    ? restaurant.menu_items
    : [];

  // Contrast correction
  function getContrastColor(hex) {
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

  // Sample menu logic
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

  const filtered = items.filter(
    (item) => !item.category?.toLowerCase().includes("drink"),
  );

  const sorted = [...filtered].sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.category);
    const bIndex = categoryOrder.indexOf(b.category);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });

  const grouped = sorted.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const limitedCategories = Object.keys(grouped).slice(0, 3);

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
          <h2>Sample Menu</h2>

          {limitedCategories.length === 0 && (
            <p className="empty-menu">Menu coming soon.</p>
          )}

          {limitedCategories.map((category) => (
            <section key={category} className="menu-category">
              <h3>{category}</h3>
              <ul className="menu-items">
                {grouped[category].slice(0, 3).map((item) => (
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
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>

        {restaurant.website && (
          <div className="full-menu-link">
            <a
              href={restaurant.website}
              target="_blank"
              rel="noopener noreferrer"
              className="view-full-menu"
            >
              View Full Menu on {restaurant.name}'s Website
            </a>
          </div>
        )}

        <footer className="card-footer">Ottawa Menus</footer>
        <div className="card-watermark">M. George</div>
      </article>
    </main>
  );
}
