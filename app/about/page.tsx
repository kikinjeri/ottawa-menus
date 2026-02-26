export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#0A1A2F] px-8 py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* FOUNDER SECTION */}
        <section className="space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight">
            About Ottawa‑Menus
          </h1>

          <div className="flex items-start gap-6">
            <img
              src="/images/two.jpg"
              alt="Founder photo"
              className="w-32 h-32 rounded-full object-cover border border-gray-300 shadow-sm"
            />

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Meet the Founder</h2>
              <p className="text-lg leading-relaxed text-[#1A2C45]">
                Ottawa‑Menus was created by <strong>Mwihaki</strong>, a
                developer and business architect based in Ottawa with a deep
                commitment to accessibility, editorial design, and helping local
                businesses thrive online. The platform reflects a belief that
                every restaurant — no matter its size — deserves a clean,
                modern, and inclusive digital presence.
              </p>
            </div>
          </div>
        </section>

        {/* PLATFORM PURPOSE */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            A Modern Approach to Restaurant Menus
          </h2>
          <p className="text-lg leading-relaxed">
            Ottawa‑Menus is an accessible, editorial‑grade platform designed to
            help local restaurants present their menus clearly, beautifully, and
            consistently. Instead of relying on PDFs, screenshots, or outdated
            layouts, restaurants get fast, responsive HTML menus that work on
            every device and support customers with diverse accessibility needs.
          </p>
        </section>

        {/* WHY HTML MENUS MATTER */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Why HTML Menus Matter</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              <strong>Accessible:</strong> Built with semantic structure,
              screen‑reader support, and keyboard navigation.
            </li>
            <li>
              <strong>SEO‑friendly:</strong> Search engines can index menu
              items, improving local visibility and ranking.
            </li>
            <li>
              <strong>Fast & Mobile‑Ready:</strong> No downloads, no
              pinch‑zooming — just clean, readable menus.
            </li>
            <li>
              <strong>Easy to Update:</strong> Restaurants can adjust items
              instantly without re‑exporting PDFs or images.
            </li>
          </ul>
        </section>

        {/* HOW OTTAWA-MENUS HELPS */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Supporting Local Restaurants
          </h2>
          <p className="text-lg leading-relaxed">
            Ottawa‑Menus is built to strengthen the digital presence of Ottawa’s
            food community. By combining accessibility, editorial design, and
            structured data, the platform helps restaurants reach more customers
            and build trust online.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              Improves search visibility with structured, indexable content
            </li>
            <li>Strengthens brand identity with consistent editorial design</li>
            <li>
              Supports accessibility compliance with AA/AAA contrast and
              readable typography
            </li>
            <li>Provides analytics to understand customer engagement</li>
            <li>
              Generates social‑ready menu cards for platforms like Bluesky
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="pt-6">
          <a
            href="/control-center/restaurants"
            className="inline-block bg-[#0A1A2F] text-[#F7F3EB] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#13263F] transition"
          >
            Go to Control Center →
          </a>
        </section>
      </div>
    </main>
  );
}
