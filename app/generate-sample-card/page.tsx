"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import "@/styles/styles.css";

export default function GenerateSampleCard() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [restaurant, setRestaurant] = useState<any | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchRestaurant() {
      const { data, error } = await supabase
        .from("restaurants")
        .select(
          `
          *,
          menu_items:menu_items!restaurant_id (*)
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

  const drinkCategories = [
    "Drinks",
    "Alcohol",
    "Beverages",
    "Cocktails",
    "Wine",
    "Beer",
    "Liquor",
    "Spirits",
    "Martinis",
    "Daiquiris",
    "Mixed Drinks",
    "Cider",
    "Coolers",
  ];

  const editorialOrder = [
    "Breakfast",
    "Appetizers",
    "Starters",
    "Lunch",
    "Mains",
    "Dinner",
    "Entrees",
    "Sides",
    "Desserts",
    "Drinks",
  ];

  const drinkItems = items.filter((item: any) =>
    drinkCategories.includes(item.category),
  );

  const nonDrinkItems = items.filter(
    (item: any) => !drinkCategories.includes(item.category),
  );

  const sortedNonDrink = [...nonDrinkItems].sort((a, b) => {
    const aIndex = editorialOrder.indexOf(a.category);
    const bIndex = editorialOrder.indexOf(b.category);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });

  const grouped: Record<string, any[]> = sortedNonDrink.reduce(
    (acc: any, item: any) => {
      const category = item.category || "Other";
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    },
    {},
  );

  if (restaurant.serves_alcohol && drinkItems.length > 0) {
    grouped["Drinks"] = drinkItems;
  }

  let orderedCategories = editorialOrder.filter(
    (cat) => grouped[cat] && grouped[cat].length > 0,
  );

  // Sample card: max 4 categories
  orderedCategories = orderedCategories.slice(0, 4);

  return (
    <main>
      <article className="restaurant-card sample-card">
        <header className="card-header">
          <h1>{restaurant.name}</h1>
          {restaurant.neighbourhood && (
            <p className="neighbourhood">{restaurant.neighbourhood}</p>
          )}
        </header>

        {restaurant.description && (
          <section className="description">
            <p>{restaurant.description}</p>
          </section>
        )}

        <section className="info-section">
          {restaurant.address && (
            <p>
              <strong>Address:</strong> {restaurant.address}
            </p>
          )}
          {restaurant.hours && (
            <p>
              <strong>Hours:</strong> {restaurant.hours}
            </p>
          )}
          {restaurant.phone && (
            <p>
              <strong>Phone:</strong> {restaurant.phone}
            </p>
          )}
          {restaurant.email && (
            <p>
              <strong>Email:</strong> {restaurant.email}
            </p>
          )}

          {restaurant.address && (
            <p style={{ marginTop: "0.5rem" }}>
              <a
                className="map-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  restaurant.address,
                )}`}
                target="_blank"
              >
                View on Map
              </a>
            </p>
          )}

          {restaurant.serves_alcohol && (
            <p className="tag alcohol">Serves Alcohol</p>
          )}

          {restaurant.website && (
            <p style={{ marginTop: "0.5rem" }}>
              <a className="website" href={restaurant.website} target="_blank">
                View Restaurant Website
              </a>
            </p>
          )}
        </section>

        <section className="menu-section">
          <h2>Menu</h2>

          {orderedCategories.length === 0 && (
            <p className="empty-menu">Menu coming soon.</p>
          )}

          {orderedCategories.map((category) => {
            const itemsForCategory = grouped[category] || [];
            const limit = category === "Drinks" ? 4 : 3; // sample card limits

            return (
              <section key={category} className="menu-category">
                <h3 className="category-title">{category}</h3>
                <ul className="category-list">
                  {itemsForCategory.slice(0, limit).map((item: any) => (
                    <li key={item.id} className="menu-item">
                      <div className="item-header">
                        <span className="dish">{item.name}</span>
                        {item.price && (
                          <span className="price">${item.price}</span>
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
            );
          })}
        </section>

        <footer className="card-footer">Ottawa Menus</footer>
        <div className="card-watermark">M. George</div>
      </article>
    </main>
  );
}
