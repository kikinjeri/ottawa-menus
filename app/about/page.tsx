export default function AboutPage() {
  return (
    <main className="bg-[#FAF7F3] text-[#2A2A2A] min-h-screen">
      {/* Navigation */}
      <nav className="bg-[#FAF7F3] border-b border-[#E5D8C8]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Brand */}
          <a
            href="/home"
            className="text-5xl font-extrabold tracking-tight text-[#B9472E]"
          >
            Ottawa‑Menus
          </a>

          <div className="flex gap-8 text-lg font-bold">
            <a href="/home" className="hover:text-[#B9472E] transition">
              Home
            </a>

            {/* Disabled About link */}
            <span className="text-[#B9472E] cursor-default">About</span>

            <a
              href="/control-center/restaurants"
              className="hover:text-[#B9472E] transition"
            >
              Control Center
            </a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Founder Section */}
        <section className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-[#2A2A2A]">
              About the Founder
            </h1>

            <p className="text-lg leading-relaxed">
              I’m <strong className="font-semibold">Mwihaki</strong>, a web
              developer based in Ottawa focused on accessibility, editorial
              design, and SEO. I created Ottawa‑Menus to give local restaurants
              a modern, inclusive way to share their menus online — one that
              reflects the care they put into their food and helps customers
              discover them more easily.
            </p>
          </div>

          <div className="shrink-0 flex items-start">
            <img
              src="/images/two.jpg"
              alt="Portrait of Mwihaki, founder of Ottawa‑Menus"
              className="w-48 h-auto max-h-[220px] rounded-md object-cover border border-[#E5D8C8] shadow-sm"
            />
          </div>
        </section>

        <hr className="my-10 border-[#E5D8C8]" />

        {/* About Ottawa-Menus */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
            About Ottawa‑Menus
          </h2>

          <p className="text-lg leading-relaxed">
            Ottawa‑Menus is an accessible, editorial platform that helps local
            restaurants present their menus clearly, beautifully, and
            consistently online. Instead of relying on PDFs or screenshots,
            Ottawa‑Menus uses clean, responsive HTML menus that load fast, work
            on every device, and support customers with different accessibility
            needs.
          </p>

          <h3 className="text-2xl font-semibold text-[#2A2A2A] mt-8">
            Why HTML Menus Matter
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Accessible</strong> — Screen‑reader friendly, keyboard
              navigable, and semantic.
            </li>
            <li>
              <strong>SEO‑friendly</strong> — Search engines can index menu
              items for better visibility.
            </li>
            <li>
              <strong>Fast & Mobile‑Ready</strong> — No downloads or
              pinch‑zooming.
            </li>
            <li>
              <strong>Easy to Update</strong> — Restaurants can adjust items
              instantly.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#2A2A2A] mt-8">
            How Ottawa‑Menus Helps Local Restaurants
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Improves online visibility with structured, SEO‑friendly markup
            </li>
            <li>Strengthens brand identity with consistent editorial design</li>
            <li>Supports accessibility compliance with AA/AAA contrast</li>
            <li>Provides analytics to understand customer behavior</li>
            <li>Creates social‑ready menu cards for platforms like Bluesky</li>
          </ul>
        </section>

        <div className="mt-12">
          <a
            href="/control-center/restaurants"
            className="text-[#B9472E] hover:text-[#4F7F5A] underline text-lg font-medium"
          >
            Go to Control Center →
          </a>
        </div>
      </div>
    </main>
  );
}
