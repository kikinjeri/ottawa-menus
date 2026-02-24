"use client";

function Section({ title, children }) {
  return (
    <div className="mb-3">
      <p
        className="text-[15px] font-bold mb-1"
        style={{ color: "var(--accent)" }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

export function MenuCard({ restaurant, items }) {
  const accent = restaurant.primary_color || "var(--accent)";

  return (
    <div
      className="w-full mx-auto p-7 font-sans min-h-screen"
      style={{
        maxWidth: "900px",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* ADMIN ACTIONS */}
      <div className="flex justify-end gap-3 mb-6">
        <a
          href={`/control-center/restaurants/${restaurant.id}`}
          className="px-4 py-2 rounded-lg bg-[var(--warm-yellow)] text-[var(--foreground)] font-semibold shadow"
        >
          Edit Restaurant
        </a>

        <button
          onClick={async () => {
            await fetch("/api/bsky/post-restaurant", {
              method: "POST",
              body: JSON.stringify({ id: restaurant.id }),
            });
            alert("Posted to Bluesky!");
          }}
          className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white font-semibold shadow"
        >
          Post to Bluesky
        </button>
      </div>

      {/* CARD */}
      <div
        className="w-full mx-auto p-8 rounded-2xl shadow-lg"
        style={{
          background: "#FAFAFA",
          border: `4px solid var(--accent)`,
        }}
      >
        {/* HEADER — TWO COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* LEFT COLUMN */}
          <div>
            <h1
              className="text-[32px] font-extrabold leading-tight mb-1"
              style={{ color: "var(--accent)" }}
            >
              {restaurant.name}
            </h1>

            {restaurant.neighbourhood && (
              <p className="text-[16px] font-semibold opacity-80 mb-2">
                {restaurant.neighbourhood}
              </p>
            )}

            {restaurant.vibe && (
              <p className="text-[14px] italic opacity-80 mb-2">
                {restaurant.vibe}
              </p>
            )}

            {restaurant.description && (
              <p className="text-[14px] opacity-90 leading-relaxed">
                {restaurant.description}
              </p>
            )}

            {restaurant.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {restaurant.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded"
                    style={{
                      background: "var(--warm-yellow)",
                      color: "var(--foreground)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="text-[14px] opacity-90">
            {restaurant.address && (
              <p className="mb-1">
                <strong>Address:</strong> {restaurant.address}
              </p>
            )}

            {restaurant.phone && (
              <p className="mb-1">
                <strong>Phone:</strong> {restaurant.phone}
              </p>
            )}

            {restaurant.hours && (
              <p className="mb-1">
                <strong>Hours:</strong> {restaurant.hours}
              </p>
            )}

            {restaurant.delivery_platforms?.length > 0 && (
              <p className="mb-1">
                <strong>Delivery:</strong>{" "}
                {restaurant.delivery_platforms.join(" • ")}
              </p>
            )}

            {restaurant.address && (
              <p className="mt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    restaurant.address + " Ottawa",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline"
                  style={{ color: accent }}
                >
                  View on Google Maps
                </a>
              </p>
            )}
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="border-t-4 border-[var(--accent)]/30 my-6" />

        {/* MENU ITEMS */}
        <h2
          className="text-[26px] font-extrabold mb-4"
          style={{ color: "var(--accent)" }}
        >
          Menu Highlights
        </h2>

        {items.length === 0 && (
          <p className="text-[15px]">No menu items available.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl shadow-sm border"
              style={{
                background: "#FFFFFF",
                borderColor: "var(--accent)33",
              }}
            >
              <h3
                className="text-[18px] font-bold mb-1"
                style={{ color: "var(--accent)" }}
              >
                {item.name}
              </h3>

              {item.description && (
                <p className="text-[14px] text-gray-600 mb-1 leading-snug">
                  {item.description}
                </p>
              )}

              <p className="text-[15px] font-bold">
                ${Number(item.price).toFixed(2)}
              </p>

              {item.tags?.length > 0 && (
                <p className="text-[13px] text-gray-600 mt-1">
                  <strong>Tags:</strong> {item.tags.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-7 pt-4 border-t text-center text-[14px] text-gray-600">
          Brought to you by{" "}
          <span className="font-bold" style={{ color: "var(--accent)" }}>
            @ottawa-menus
          </span>
        </div>
      </div>
    </div>
  );
}
