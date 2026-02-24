"use client";

function Section({ title, children }) {
  return (
    <div className="mb-4">
      <p
        className="text-[16px] font-bold mb-1"
        style={{ color: "var(--accent)" }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

export function MenuCard({ restaurant, items }) {
  const accent = restaurant.primary_color || "#0EA5E9";

  return (
    <div className="w-full max-w-[700px] mx-auto p-7 font-sans bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      {/* ADMIN ACTIONS */}
      <div className="flex justify-end gap-3 mb-5">
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
        className="w-full max-w-[650px] mx-auto p-7 rounded-2xl shadow-lg"
        style={{
          background: "#FAFAFA",
          border: `4px solid var(--accent)`,
        }}
      >
        {/* NAME */}
        <h1
          className="text-[38px] font-extrabold mb-1"
          style={{ color: "var(--accent)" }}
        >
          {restaurant.name}
        </h1>

        {/* NEIGHBOURHOOD */}
        {restaurant.neighbourhood && (
          <p className="text-lg font-semibold mb-4 text-sky-500">
            {restaurant.neighbourhood}
          </p>
        )}

        {/* HOURS */}
        {restaurant.hours && (
          <Section title="Hours">
            <p className="text-[15px] text-gray-600">{restaurant.hours}</p>
          </Section>
        )}

        {/* DELIVERY */}
        {restaurant.delivery_platforms?.length > 0 && (
          <Section title="Delivery Options">
            <p className="text-[15px] text-gray-600">
              {restaurant.delivery_platforms.join(" • ")}
            </p>
          </Section>
        )}

        {/* DESCRIPTION */}
        {restaurant.description && (
          <Section title="About">
            <p className="text-[15px] text-gray-600 leading-relaxed">
              {restaurant.description}
            </p>
          </Section>
        )}

        {/* VIBE */}
        {restaurant.vibe && (
          <Section title="Vibe">
            <p className="text-[15px] text-gray-600">{restaurant.vibe}</p>
          </Section>
        )}

        {/* TAGS */}
        {restaurant.tags?.length > 0 && (
          <Section title="Tags">
            <p className="text-[15px] text-gray-600">
              {restaurant.tags.join(" • ")}
            </p>
          </Section>
        )}

        {/* ADDRESS */}
        {restaurant.address && (
          <p className="text-[15px] text-gray-600 mb-1">
            📍 {restaurant.address}
          </p>
        )}

        {/* PHONE */}
        {restaurant.phone && (
          <p className="text-[15px] text-gray-600 mb-4">
            ☎️ {restaurant.phone}
          </p>
        )}

        {/* MAP LINK */}
        {restaurant.address && (
          <p className="mb-5">
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

        <hr className="border-t-4 border-[var(--accent)]/30 my-6" />

        {/* MENU ITEMS */}
        <h2
          className="text-[28px] font-extrabold mb-4"
          style={{ color: "var(--accent)" }}
        >
          Menu Highlights
        </h2>

        {items.length === 0 && (
          <p className="text-[15px]">No menu items available.</p>
        )}

        <div className="flex flex-col gap-4">
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
                className="text-[20px] font-bold mb-1"
                style={{ color: "var(--accent)" }}
              >
                {item.name}
              </h3>

              {item.description && (
                <p className="text-[15px] text-gray-600 mb-1 leading-snug">
                  {item.description}
                </p>
              )}

              <p className="text-[16px] font-bold">
                ${Number(item.price).toFixed(2)}
              </p>

              {item.tags?.length > 0 && (
                <p className="text-[14px] text-gray-600 mt-1">
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
