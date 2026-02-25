import { getRestaurantById } from "@/lib/db/restaurants";
import { getMenuItemsForRestaurant } from "@/lib/db/menuItems";

export default async function SampleMenuCardPage(props: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await props.searchParams;

  if (!id) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Missing restaurant ID</h1>
      </div>
    );
  }

  const restaurant = await getRestaurantById(id);
  const items = await getMenuItemsForRestaurant(id);

  if (!restaurant) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Restaurant not found</h1>
      </div>
    );
  }

  // --- REFINED, SOFTER, ACCESSIBLE PALETTE ---
  const palette = {
    primary: "#2E0C0C",
    text: "#F4EDE6",
    muted: "#E3D6CC",
    secondary: "#F5A96A",
    divider: "rgba(255,255,255,0.18)",
  };

  // Categories to exclude (including alcohol)
  const excluded = [
    "drinks",
    "drink",
    "dessert",
    "desserts",
    "beverages",
    "smoothies",
    "milkshakes",
    "alcohol",
    "beer",
    "wine",
    "cocktails",
    "liquor",
    "spirits",
    "bar",
    "happy hour",
    "alcoholic beverages",
  ];

  // Updated human-friendly category ordering
  const categoryOrder = [
    "Breakfast",
    "Brunch",
    "Appetizers",
    "Starters",
    "Small Plates",
    "Soups",
    "Salads",
    "Sides",
    "Extras",
    "Sandwiches",
    "Burgers",
    "Wraps",
    "Lunch",
    "Mains",
    "Entrees",
    "Dinner",
    "Specials",
    "Combos",
    "Platters",
  ].map((c) => c.toLowerCase());

  // Extract categories in original menu order
  const rawOrderedCategories: string[] = [];
  items.forEach((item) => {
    const cat = item.category?.trim();
    if (!cat) return;

    const normalized = cat.toLowerCase();
    if (excluded.includes(normalized)) return;

    if (!rawOrderedCategories.includes(cat)) {
      rawOrderedCategories.push(cat);
    }
  });

  // Sort categories using human-friendly order
  const orderedCategories = [...rawOrderedCategories].sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.toLowerCase());
    const bIndex = categoryOrder.indexOf(b.toLowerCase());

    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;

    return rawOrderedCategories.indexOf(a) - rawOrderedCategories.indexOf(b);
  });

  // Build category → items map
  const categories: Record<string, any[]> = {};
  orderedCategories.forEach((cat) => {
    categories[cat] = items.filter((item) => item.category?.trim() === cat);
  });

  // LIMIT TO MAX 3 CATEGORIES
  const limitedCategories = orderedCategories.slice(0, 3);

  // For each category, pick up to 3 items
  const curatedCategories = limitedCategories.map((cat) => {
    const shuffled = [...categories[cat]].sort(() => Math.random() - 0.5);
    return {
      category: cat,
      items: shuffled.slice(0, 3),
    };
  });

  // Intro sentence rotation
  const intros = [
    "A quick look at a few dishes from their menu.",
    "Here are a few highlights from their menu today.",
    "A small sample of what they’re serving right now.",
    "A quick peek at some of their menu favourites.",
  ];
  const intro = intros[Math.floor(Math.random() * intros.length)];

  // Google Maps link
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${restaurant.address}, ${restaurant.city}`,
  )}`;

  // Full menu link
  const fullMenuUrl = `https://ottawa-menus.ca/generate-card?id=${id}`;

  // Ordering link priority
  const orderOnlineUrl =
    restaurant.order_online_url ||
    restaurant.uber_eats_url ||
    restaurant.door_dash_url ||
    restaurant.skip_the_dishes_url ||
    null;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "1.5rem auto",
        padding: "1.25rem",
        background: palette.primary,
        color: palette.text,
        borderRadius: "0.75rem",
        border: `2px solid ${palette.secondary}`,
        boxShadow: "0 0 30px rgba(0,0,0,0.35)",
        position: "relative",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: "1.45rem",
          fontWeight: 800,
          color: palette.secondary,
          marginBottom: "0.25rem",
        }}
      >
        {restaurant.name}
      </h1>

      <p style={{ fontSize: "0.92rem", marginBottom: "0.25rem" }}>
        {restaurant.address}, {restaurant.city} • {restaurant.phone}
      </p>

      {/* NEIGHBOURHOOD (Option C placement) */}
      {restaurant.neighborhood && (
        <p
          style={{
            fontSize: "0.88rem",
            marginBottom: "0.35rem",
            color: palette.text,
          }}
        >
          📍 <strong>Neighbourhood:</strong> {restaurant.neighborhood}
        </p>
      )}

      {/* SERVES ALCOHOL BADGE */}
      {restaurant.serves_alcohol && (
        <div
          style={{
            display: "inline-block",
            marginBottom: "0.5rem",
            padding: "0.15rem 0.5rem",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "0.35rem",
            fontSize: "0.78rem",
            fontWeight: 600,
            color: palette.text,
          }}
        >
          🍷 Serves Alcohol
        </div>
      )}

      {/* LINKS */}
      <p
        style={{
          fontSize: "0.88rem",
          marginBottom: "0.75rem",
          color: palette.text,
        }}
      >
        <a
          href={mapsUrl}
          target="_blank"
          style={{
            color: palette.secondary,
            textDecoration: "underline",
            fontWeight: 600,
          }}
        >
          Google Maps
        </a>

        {orderOnlineUrl && (
          <>
            {" • "}
            <a
              href={orderOnlineUrl}
              target="_blank"
              style={{
                color: palette.secondary,
                textDecoration: "underline",
                fontWeight: 600,
              }}
            >
              Order Online
            </a>
          </>
        )}

        {" • "}
        <a
          href={fullMenuUrl}
          target="_blank"
          style={{
            color: palette.secondary,
            textDecoration: "underline",
            fontWeight: 600,
          }}
        >
          Full Menu
        </a>

        {restaurant.website_url && (
          <>
            {" • "}
            <a
              href={restaurant.website_url}
              target="_blank"
              style={{
                color: palette.secondary,
                textDecoration: "underline",
                fontWeight: 600,
              }}
            >
              Website
            </a>
          </>
        )}
      </p>

      {/* INTRO */}
      <p
        style={{
          marginTop: "0.5rem",
          marginBottom: "1rem",
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: palette.muted,
        }}
      >
        {intro}
      </p>

      {/* CURATED SAMPLE */}
      {curatedCategories.map(({ category, items }) => (
        <div key={category} style={{ marginBottom: "1rem" }}>
          <h2
            style={{
              color: palette.secondary,
              fontSize: "1.1rem",
              fontWeight: 700,
              marginBottom: "0.35rem",
            }}
          >
            {category}
          </h2>

          {items.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: "0.4rem",
                paddingBottom: "0.4rem",
                borderBottom: `1px solid ${palette.divider}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.95rem",
                }}
              >
                <strong>{item.name}</strong>
                <span style={{ color: palette.secondary }}>{item.price}</span>
              </div>

              {item.description && (
                <p
                  style={{
                    margin: 0,
                    opacity: 0.9,
                    fontSize: "0.82rem",
                    lineHeight: 1.35,
                    color: palette.muted,
                  }}
                >
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}

      {/* FOOTER + WATERMARK */}
      <footer
        style={{
          marginTop: "1.25rem",
          textAlign: "center",
          fontSize: "0.8rem",
          opacity: 0.75,
          position: "relative",
        }}
      >
        Ottawa Sample Menu Card
        <span
          style={{
            position: "absolute",
            right: "0.5rem",
            bottom: "0.25rem",
            fontSize: "0.7rem",
            opacity: 0.22,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          M. George
        </span>
      </footer>
    </div>
  );
}
