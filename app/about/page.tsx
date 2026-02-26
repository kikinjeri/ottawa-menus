export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold">About Ottawa‑Menus</h1>

      <p>
        Ottawa‑Menus is an accessible, editorial platform that helps local
        restaurants present their menus clearly, beautifully, and consistently
        online. Instead of relying on PDFs or screenshots, Ottawa‑Menus uses
        clean, responsive HTML menus that load fast, work on every device, and
        support customers with different accessibility needs.
      </p>

      <h2 className="text-2xl font-semibold">Why HTML Menus Matter</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Accessible:</strong> Screen‑reader friendly, keyboard
          navigable, and built with semantic structure.
        </li>
        <li>
          <strong>SEO‑friendly:</strong> Search engines can index menu items for
          better local visibility.
        </li>
        <li>
          <strong>Fast & Mobile‑Ready:</strong> No downloads or
          pinch‑zooming—just clean, readable menus.
        </li>
        <li>
          <strong>Easy to Update:</strong> Restaurants can adjust items
          instantly without re‑exporting PDFs.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">
        How Ottawa‑Menus Helps Local Restaurants
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Improves online visibility with structured, SEO‑friendly markup</li>
        <li>Strengthens brand identity with consistent editorial design</li>
        <li>
          Supports accessibility compliance with AA/AAA contrast and readable
          typography
        </li>
        <li>Provides analytics to understand what customers view and click</li>
        <li>Creates social‑ready menu cards for platforms like Bluesky</li>
      </ul>

      <h2 className="text-2xl font-semibold">About the Founder</h2>
      <p>
        My name is <strong>Mwihaki</strong>, and I’m a web developer based in
        Ottawa with a passion for accessibility, editorial design, and SEO. I
        created Ottawa‑Menus to give local restaurants a modern, inclusive way
        to share their menus online—one that reflects the care they put into
        their food and helps customers discover them more easily.
      </p>

      <div className="mt-6">
        <img
          src="/images/two.jpg"
          alt="Founder photo placeholder"
          className="w-40 h-40 rounded-full object-cover border"
        />
        <p className="text-sm text-gray-500 mt-2">
          Replace this with your photo when ready.
        </p>
      </div>

      <a
        href="/control-center/restaurants"
        className="inline-block mt-8 text-blue-600 underline"
      >
        Go to Control Center
      </a>
    </main>
  );
}
