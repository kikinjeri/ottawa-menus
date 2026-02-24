import React from "react";

export interface Restaurant {
  id: string;
  name: string;
  slug?: string | null;
  address?: string | null;
  neighbourhood?: string | null;
  website?: string | null;
  phone?: string | null;
  description?: string | null;
  tags?: string[] | null;
  primary_color?: string | null;
  secondary_color?: string | null;
  text_color?: string | null;
  price_range?: string | null;
  vibe?: string | null;
  coordinates?: { lat: number; lng: number } | null;
  ubereats_url?: string | null;
  doordash_url?: string | null;
  skip_url?: string | null;
}

export interface MenuItem {
  id: string;
  restaurant_id: string;
  name: string;
  description?: string | null;
  price?: string | null;
  category?: string | null;
  is_featured?: boolean | null;
  dietary_tags?: string[] | null;
  sort_order?: number | null;
}

type ItemsByCategory = Record<string, MenuItem[]>;

function groupItemsByCategory(items: MenuItem[]): ItemsByCategory {
  const grouped: ItemsByCategory = {};
  for (const item of items) {
    const cat = (item.category || "Other").trim();
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
  }
  return grouped;
}

function pickHighlightedItems(items: MenuItem[], limit = 4): MenuItem[] {
  const featured = items.filter((i) => i.is_featured);
  const source = featured.length > 0 ? featured : items;

  const sorted = [...source].sort((a, b) => {
    const ao = a.sort_order ?? 0;
    const bo = b.sort_order ?? 0;
    if (ao !== bo) return ao - bo;
    return a.name.localeCompare(b.name);
  });

  return sorted.slice(0, limit);
}

function getBrandColors(restaurant: Restaurant) {
  const primary = restaurant.primary_color || "#0a1a2f";
  const secondary = restaurant.secondary_color || "#f5c26b";
  const text = restaurant.text_color || "#111111";
  const bg = "#fdfdfd";
  const surface = "#ffffff";

  return { primary, secondary, text, bg, surface };
}

function formatPrice(price?: string | null) {
  if (!price) return "";
  return `$${Number(price).toFixed(2)}`;
}

function buildGoogleMapsUrl(restaurant: Restaurant) {
  if (restaurant.coordinates) {
    const { lat, lng } = restaurant.coordinates;
    return `https://www.google.com/maps/@${lat},${lng},17z`;
  }
  if (restaurant.address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      restaurant.address + " Ottawa",
    )}`;
  }
  return null;
}

export function MenuCard({
  restaurant,
  items,
}: {
  restaurant: Restaurant;
  items: MenuItem[];
}) {
  const { primary, secondary, text, bg, surface } = getBrandColors(restaurant);
  const grouped = groupItemsByCategory(items);
  const categories = Object.keys(grouped).sort();
  const mapsUrl = buildGoogleMapsUrl(restaurant);

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: bg,
        color: text,
        padding: "24px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: primary,
          color: "#ffffff",
          borderRadius: "16px",
          padding: "20px 24px",
          marginBottom: "16px",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            margin: 0,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          {restaurant.name}
        </h1>
        <p style={{ margin: "8px 0 0", fontSize: "14px", opacity: 0.9 }}>
          {restaurant.neighbourhood}
          {restaurant.price_range ? ` • ${restaurant.price_range}` : ""}
          {restaurant.vibe ? ` • ${restaurant.vibe}` : ""}
        </p>
        {restaurant.description && (
          <p
            style={{
              margin: "10px 0 0",
              fontSize: "14px",
              lineHeight: 1.5,
              maxWidth: "640px",
            }}
          >
            {restaurant.description}
          </p>
        )}
        {restaurant.tags && restaurant.tags.length > 0 && (
          <p style={{ margin: "10px 0 0", fontSize: "12px", opacity: 0.9 }}>
            {restaurant.tags.join(" • ")}
          </p>
        )}
      </div>

      {/* Info + Links */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: surface,
            borderRadius: "12px",
            padding: "12px 14px",
            border: "1px solid #e2e2e2",
          }}
        >
          {restaurant.address && (
            <p style={{ margin: "0 0 6px", fontSize: "13px" }}>
              📍 {restaurant.address}
            </p>
          )}
          {restaurant.phone && (
            <p style={{ margin: "0 0 6px", fontSize: "13px" }}>
              ☎️ {restaurant.phone}
            </p>
          )}
          {mapsUrl && (
            <p style={{ margin: "0 0 6px", fontSize: "13px" }}>
              <a
                href={mapsUrl}
                style={{
                  color: secondary,
                  textDecoration: "underline",
                  fontWeight: 600,
                }}
              >
                View on Google Maps
              </a>
            </p>
          )}
          {restaurant.website && (
            <p style={{ margin: 0, fontSize: "13px" }}>
              🌐{" "}
              <a
                href={restaurant.website}
                style={{
                  color: secondary,
                  textDecoration: "underline",
                  fontWeight: 600,
                }}
              >
                View full menu on website
              </a>
            </p>
          )}
        </div>

        <div
          style={{
            backgroundColor: surface,
            borderRadius: "12px",
            padding: "12px 14px",
            border: "1px solid #e2e2e2",
            fontSize: "13px",
          }}
        >
          <p style={{ margin: "0 0 6px", fontWeight: 600 }}>Delivery</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {restaurant.ubereats_url && (
              <li style={{ marginBottom: 4 }}>
                <a
                  href={restaurant.ubereats_url}
                  style={{
                    color: secondary,
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                >
                  Uber Eats
                </a>
              </li>
            )}
            {restaurant.doordash_url && (
              <li style={{ marginBottom: 4 }}>
                <a
                  href={restaurant.doordash_url}
                  style={{
                    color: secondary,
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                >
                  DoorDash
                </a>
              </li>
            )}
            {restaurant.skip_url && (
              <li style={{ marginBottom: 0 }}>
                <a
                  href={restaurant.skip_url}
                  style={{
                    color: secondary,
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                >
                  SkipTheDishes
                </a>
              </li>
            )}
            {!restaurant.ubereats_url &&
              !restaurant.doordash_url &&
              !restaurant.skip_url && (
                <li style={{ opacity: 0.7 }}>Delivery links coming soon</li>
              )}
          </ul>
        </div>
      </div>

      {/* Menu Highlights */}
      <div
        style={{
          backgroundColor: surface,
          borderRadius: "16px",
          padding: "18px 20px",
          border: "1px solid #e2e2e2",
        }}
      >
        <h2
          style={{
            margin: "0 0 12px",
            fontSize: "18px",
            letterSpacing: "-0.02em",
          }}
        >
          Menu Highlights
        </h2>

        {categories.length === 0 && (
          <p style={{ fontSize: "13px", opacity: 0.8 }}>
            Menu items will appear here once added.
          </p>
        )}

        {categories.map((category) => {
          const itemsInCategory = grouped[category];
          if (!itemsInCategory || itemsInCategory.length === 0) return null;

          const highlighted = pickHighlightedItems(itemsInCategory, 4);

          return (
            <div key={category} style={{ marginBottom: "14px" }}>
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: primary,
                }}
              >
                {category}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "6px",
                }}
              >
                {highlighted.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      fontSize: "13px",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600 }}>{item.name}</div>
                      {item.description && (
                        <div
                          style={{
                            opacity: 0.85,
                            fontSize: "12px",
                            marginTop: 2,
                          }}
                        >
                          {item.description}
                        </div>
                      )}
                      {item.dietary_tags && item.dietary_tags.length > 0 && (
                        <div
                          style={{
                            marginTop: 2,
                            fontSize: "11px",
                            opacity: 0.8,
                          }}
                        >
                          {item.dietary_tags.join(" • ")}
                        </div>
                      )}
                    </div>
                    {item.price && (
                      <div
                        style={{
                          whiteSpace: "nowrap",
                          marginLeft: "8px",
                          fontWeight: 600,
                        }}
                      >
                        {formatPrice(item.price)}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <p
        style={{
          marginTop: "10px",
          fontSize: "11px",
          opacity: 0.7,
          textAlign: "right",
        }}
      >
        Menu highlights only. For full menu and latest prices, visit the
        restaurant website.
      </p>
    </div>
  );
}
