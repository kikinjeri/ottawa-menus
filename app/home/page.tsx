export default function HomePage() {
  return (
    <main className="bg-[#FAF7F3] text-[#2A2A2A] min-h-screen">
      {/* Navigation */}
      <nav className="bg-[#FAF7F3] border-b border-[#E5D8C8]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Brand — biggest text */}
          <a
            href="/home"
            className="text-5xl font-extrabold tracking-tight text-[#B9472E]"
          >
            Ottawa‑Menus
          </a>

          <div className="flex gap-8 text-lg font-bold">
            {/* Disabled Home link */}
            <span className="text-[#B9472E] cursor-default">Home</span>

            <a href="/about" className="hover:text-[#B9472E] transition">
              About
            </a>

            <a
              href="/control-center/restaurants"
              className="hover:text-[#B9472E] transition"
            >
              Control Center
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-[#2A2A2A]">
          Modern, Accessible Menus for Ottawa Restaurants
        </h2>

        <p className="mt-6 text-xl leading-relaxed text-[#4A4A4A] max-w-3xl mx-auto">
          Ottawa‑Menus helps local restaurants replace outdated PDFs and
          screenshots with clean, responsive HTML menus that load fast, look
          beautiful, and improve accessibility and SEO.
        </p>

        <a
          href="/control-center/restaurants"
          className="inline-block mt-10 bg-[#B9472E] text-white px-8 py-3 rounded-md text-lg font-medium shadow-sm hover:bg-[#4F7F5A] transition"
        >
          Add Your Restaurant
        </a>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A] text-center">
          What Ottawa‑Menus Does
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-[#4A4A4A] max-w-3xl mx-auto text-center">
          We create accessible, mobile‑friendly HTML menus for restaurants
          across Ottawa. Our menus are fast, readable, and optimized for search
          engines — helping customers find your dishes and visit your
          restaurant.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5D8C8]">
            <h3 className="text-xl font-semibold text-[#2A2A2A]">
              Accessible Menus
            </h3>
            <p className="mt-3 text-[#4A4A4A]">
              Screen‑reader friendly, keyboard navigable, and built with
              semantic HTML.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5D8C8]">
            <h3 className="text-xl font-semibold text-[#2A2A2A]">
              SEO Optimized
            </h3>
            <p className="mt-3 text-[#4A4A4A]">
              Search engines can index your menu items and neighborhood,
              improving your google ranking so customers can find you more
              easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5D8C8]">
            <h3 className="text-xl font-semibold text-[#2A2A2A]">
              Easy to Update
            </h3>
            <p className="mt-3 text-[#4A4A4A]">
              Update prices, add specials, or change items instantly — no PDFs
              required.
            </p>
          </div>
        </div>
      </section>

      {/* Why HTML Menus Matter */}
      <section className="bg-white border-t border-[#E5D8C8] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A] text-center">
            Why Restaurants Choose HTML Menus
          </h2>

          <ul className="mt-10 space-y-4 max-w-3xl mx-auto text-lg text-[#4A4A4A]">
            <li>
              • Customers don’t need to download anything — menus load
              instantly.
            </li>
            <li>• Menus look clean and readable on every device.</li>
            <li>• Search engines can understand your dishes and categories.</li>
            <li>
              • Accessible for customers with visual or motor impairments.
            </li>
            <li>• Easy to maintain without re‑exporting PDFs.</li>
          </ul>
        </div>
      </section>

      {/* Sample Restaurants */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A] text-center">
          Restaurants Using Ottawa‑Menus
        </h2>

        <p className="mt-4 text-center text-[#4A4A4A]">
          (Replace this with your real list once you’re ready.)
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5D8C8]">
            <h3 className="text-xl font-semibold">El Camino</h3>
            <p className="text-[#4A4A4A] mt-2">Tacos • Cocktails • Bank St.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5D8C8]">
            <h3 className="text-xl font-semibold">Mati</h3>
            <p className="text-[#4A4A4A] mt-2">Mediterranean • Preston St.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5D8C8]">
            <h3 className="text-xl font-semibold">The Green Door</h3>
            <p className="text-[#4A4A4A] mt-2">Vegetarian • Main St.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B9472E] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Ready to Modernize Your Menu?
        </h2>

        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join Ottawa‑Menus and give your customers a fast, accessible,
          beautifully designed menu experience.
        </p>

        <a
          href="/control-center/restaurants"
          className="inline-block mt-8 bg-white text-[#B9472E] px-8 py-3 rounded-md text-lg font-medium shadow-sm hover:bg-[#F2C98A] transition"
        >
          Add Your Restaurant
        </a>
      </section>
    </main>
  );
}
