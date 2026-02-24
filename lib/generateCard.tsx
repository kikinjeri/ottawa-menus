"use client";

export function MenuCard({ restaurant, items }) {
  // Ottawa‑Menus vibrant poster palette
  const OM_BG = "#FDFCFB"; // warm soft white (poster-friendly)
  const OM_TEXT = "#111827"; // rich charcoal
  const OM_TEXT_SECONDARY = "#4B5563";
  const OM_ACCENT = "#FF6B35"; // vibrant modern orange
  const OM_ACCENT_DARK = "#1E3A8A"; // deep blue for balance
  const OM_CARD = "#FFFFFF"; // crisp white for item cards

  // Restaurant accent used only for links
  const accent = restaurant.primary_color || OM_ACCENT;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 650,
        margin: "0 auto",
        padding: 28,
        fontFamily: "Inter, system-ui, sans-serif",
        background: OM_BG,
        color: OM_TEXT,
        borderRadius: 20,
        border: `5px solid ${OM_ACCENT}`,
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Restaurant Name */}
      <h1
        style={{
          fontSize: 36,
          marginBottom: 8,
          color: OM_ACCENT,
          fontWeight: 800,
          letterSpacing: "-0.5px",
        }}
      >
        {restaurant.name}
      </h1>

      {/* Neighborhood */}
      {restaurant.neighbourhood && (
        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 12,
            color: OM_ACCENT_DARK,
          }}
        >
          {restaurant.neighbourhood}
        </p>
      )}

      {/* HOURS */}
      {restaurant.hours && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: OM_ACCENT }}>
            Hours
          </p>
          <p style={{ fontSize: 15, color: OM_TEXT_SECONDARY }}>
            {restaurant.hours}
          </p>
        </div>
      )}

      {/* DELIVERY OPTIONS */}
      {restaurant.delivery_platforms?.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: OM_ACCENT }}>
            Delivery Options
          </p>
          <p style={{ fontSize: 15, color: OM_TEXT_SECONDARY }}>
            {restaurant.delivery_platforms.join(" • ")}
          </p>
        </div>
      )}

      {/* DESCRIPTION */}
      {restaurant.description && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: OM_ACCENT }}>
            About
          </p>
          <p
            style={{ fontSize: 15, color: OM_TEXT_SECONDARY, lineHeight: 1.5 }}
          >
            {restaurant.description}
          </p>
        </div>
      )}

      {/* VIBE */}
      {restaurant.vibe && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: OM_ACCENT }}>
            Vibe
          </p>
          <p style={{ fontSize: 15, color: OM_TEXT_SECONDARY }}>
            {restaurant.vibe}
          </p>
        </div>
      )}

      {/* TAGS */}
      {restaurant.tags?.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: OM_ACCENT }}>
            Tags
          </p>
          <p style={{ fontSize: 15, color: OM_TEXT_SECONDARY }}>
            {restaurant.tags.join(" • ")}
          </p>
        </div>
      )}

      {/* ADDRESS */}
      {restaurant.address && (
        <p style={{ fontSize: 15, marginBottom: 4, color: OM_TEXT_SECONDARY }}>
          📍 {restaurant.address}
        </p>
      )}

      {/* PHONE */}
      {restaurant.phone && (
        <p style={{ fontSize: 15, marginBottom: 4, color: OM_TEXT_SECONDARY }}>
          ☎️ {restaurant.phone}
        </p>
      )}

      {/* GOOGLE MAPS LINK */}
      {restaurant.address && (
        <p style={{ marginBottom: 16 }}>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              restaurant.address + " Ottawa",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: 700,
              color: accent,
              textDecoration: "underline",
            }}
          >
            View on Google Maps
          </a>
        </p>
      )}

      {/* DIVIDER */}
      <hr
        style={{
          border: "none",
          borderTop: `3px solid ${OM_ACCENT}55`,
          margin: "20px 0",
        }}
      />

      {/* MENU ITEMS */}
      <h2
        style={{
          fontSize: 26,
          marginBottom: 16,
          color: OM_ACCENT,
          fontWeight: 800,
        }}
      >
        Menu Highlights
      </h2>

      {items.length === 0 && (
        <p style={{ fontSize: 15 }}>No menu items available.</p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              padding: 16,
              borderRadius: 16,
              background: OM_CARD,
              border: `1px solid ${OM_ACCENT}33`,
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: 20,
                marginBottom: 6,
                fontWeight: 700,
                color: OM_ACCENT,
              }}
            >
              {item.name}
            </h3>

            {item.description && (
              <p
                style={{
                  fontSize: 15,
                  marginBottom: 6,
                  color: OM_TEXT_SECONDARY,
                  lineHeight: 1.4,
                }}
              >
                {item.description}
              </p>
            )}

            <p style={{ fontSize: 16, fontWeight: 700 }}>
              ${Number(item.price).toFixed(2)}
            </p>

            {item.tags?.length > 0 && (
              <p
                style={{ fontSize: 14, marginTop: 6, color: OM_TEXT_SECONDARY }}
              >
                <strong>Tags:</strong> {item.tags.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: 28,
          paddingTop: 14,
          borderTop: `2px solid ${OM_ACCENT}33`,
          textAlign: "center",
          fontSize: 14,
          color: OM_TEXT_SECONDARY,
        }}
      >
        Brought to you by{" "}
        <span style={{ fontWeight: 700, color: OM_ACCENT }}>@ottawa-menus</span>
      </div>
    </div>
  );
}
