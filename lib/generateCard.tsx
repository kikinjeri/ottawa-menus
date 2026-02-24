"use client";

export function MenuCard({ restaurant, items }) {
  // Ottawa‑Menus brand system
  const OM_BG = "#FAF9F6"; // warm editorial off‑white
  const OM_TEXT = "#1A1A1A"; // deep charcoal
  const OM_TEXT_SECONDARY = "#444444";
  const OM_ACCENT = "#8B1E3F"; // rich berry red
  const OM_CARD = "#FFFFFF"; // item card background

  // Restaurant accent used only for links
  const accent = restaurant.primary_color || OM_ACCENT;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
        padding: 24,
        fontFamily: "system-ui, sans-serif",
        background: OM_BG,
        color: OM_TEXT,
        border: `4px solid ${OM_ACCENT}`,
        borderRadius: 16,
      }}
    >
      {/* Restaurant Name */}
      <h1
        style={{
          fontSize: 32,
          marginBottom: 8,
          color: OM_ACCENT,
          fontWeight: "bold",
        }}
      >
        {restaurant.name}
      </h1>

      {/* Neighbourhood */}
      {restaurant.neighbourhood && (
        <p style={{ fontSize: 16, fontWeight: "bold", marginBottom: 4 }}>
          {restaurant.neighbourhood}
        </p>
      )}

      {/* Address */}
      {restaurant.address && (
        <p style={{ fontSize: 15, marginBottom: 4, color: OM_TEXT_SECONDARY }}>
          📍 {restaurant.address}
        </p>
      )}

      {/* Phone */}
      {restaurant.phone && (
        <p style={{ fontSize: 15, marginBottom: 4, color: OM_TEXT_SECONDARY }}>
          ☎️ {restaurant.phone}
        </p>
      )}

      {/* View on Google Maps */}
      {restaurant.address && (
        <p style={{ marginBottom: 12 }}>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              restaurant.address + " Ottawa",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: "bold",
              color: accent,
              textDecoration: "underline",
            }}
          >
            View on Google Maps
          </a>
        </p>
      )}

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: `2px solid ${OM_ACCENT}55`,
          margin: "16px 0",
        }}
      />

      {/* Menu Items */}
      <h2
        style={{
          fontSize: 24,
          marginBottom: 12,
          color: OM_ACCENT,
          fontWeight: "bold",
        }}
      >
        Menu Highlights
      </h2>

      {items.length === 0 && (
        <p style={{ fontSize: 15 }}>No menu items available.</p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              padding: 12,
              borderRadius: 12,
              background: OM_CARD,
              border: `1px solid ${OM_ACCENT}33`,
            }}
          >
            <h3
              style={{
                fontSize: 18,
                marginBottom: 4,
                fontWeight: "bold",
                color: OM_ACCENT,
              }}
            >
              {item.name}
            </h3>

            {item.description && (
              <p
                style={{
                  fontSize: 14,
                  marginBottom: 4,
                  color: OM_TEXT_SECONDARY,
                }}
              >
                {item.description}
              </p>
            )}

            <p style={{ fontSize: 15, fontWeight: "bold" }}>
              ${Number(item.price).toFixed(2)}
            </p>

            {item.tags?.length > 0 && (
              <p
                style={{ fontSize: 13, marginTop: 4, color: OM_TEXT_SECONDARY }}
              >
                <strong>Tags:</strong> {item.tags.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
