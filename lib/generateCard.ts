// lib/generateCard.ts

export interface Restaurant {
  id: string;
  name: string;
  neighbourhood?: string;
  categories?: string[];
  description?: string;
  website?: string;
  address?: string;
  delivery_platforms?: string[];
}

export function generateCardHTML(restaurant: Restaurant): string {
  const {
    name,
    neighbourhood,
    categories = [],
    description,
    website,
    address,
    delivery_platforms = [],
  } = restaurant;

  return `
  <div style="
    width: 100%;
    max-width: 600px;
    padding: 24px;
    border-radius: 16px;
    background: #ffffff;
    color: #1a1a1a;
    font-family: system-ui, sans-serif;
    border: 1px solid #e5e7eb;
  ">
    <h1 style="font-size: 28px; font-weight: 700; color: #0070f3; margin: 0;">
      ${name}
    </h1>

    ${
      neighbourhood
        ? `<p style="margin: 4px 0 12px; color: #6b7280;">
            ${neighbourhood}
          </p>`
        : ""
    }

    ${
      categories.length
        ? `<p style="font-size: 14px; color: #4b5563; margin-bottom: 12px;">
            ${categories.join(", ")}
          </p>`
        : ""
    }

    ${
      description
        ? `<p style="font-size: 16px; line-height: 1.5; margin-bottom: 16px;">
            ${description}
          </p>`
        : ""
    }

    ${
      address
        ? `<p style="font-size: 14px; color: #374151; margin-bottom: 8px;">
            📍 ${address}
          </p>`
        : ""
    }

    ${
      website
        ? `<p style="margin-bottom: 16px;">
            <a href="${website}" style="color: #0070f3; text-decoration: none;">
              Visit Website →
            </a>
          </p>`
        : ""
    }

    ${
      delivery_platforms.length
        ? `<div style="margin-top: 16px;">
            <strong style="font-size: 14px;">Delivery:</strong>
            <p style="font-size: 14px; color: #4b5563;">
              ${delivery_platforms.join(", ")}
            </p>
          </div>`
        : ""
    }

    <footer style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
      Posted via Ottawa‑Menus · Community‑driven restaurant discovery
    </footer>
  </div>
  `;
}
