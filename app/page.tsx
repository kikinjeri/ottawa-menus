export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#F7F3EB] text-[#0A1A2F]">
      {/* NAVBAR */}
      <nav className="w-full bg-[#0A1A2F] text-[#F7F3EB] py-4 px-8 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            Ottawa‑Menus
          </a>

          <div className="flex gap-8 text-lg">
            <a href="/" className="hover:text-[#3A6EA5] transition">
              Home
            </a>
            <a href="/about" className="hover:text-[#3A6EA5] transition">
              About
            </a>
            <a
              href="/control-center/restaurants"
              className="hover:text-[#3A6EA5] transition"
            >
              Control Center
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full px-8 py-20 text-center bg-[#F7F3EB]">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-[#0A1A2F]">
            Accessible, Search‑Optimized HTML Menus for Ottawa’s Restaurants!
          </h1>

          <p className="text-xl text-[#1A2C45] leading-relaxed">
            No PDFs. No clutter. Just clean, reliable menus that help customers
            find you.
          </p>
        </div>

        {/* FULL-WIDTH HERO IMAGE */}
        <div className="mt-12 w-full">
          <img
            src="/hero.jpg"
            alt="Ottawa restaurant scene"
            className="w-full h-[460px] object-cover object-center shadow-md"
          />
        </div>
      </section>

      {/* BUSINESS VALUE SECTION */}
      <section className="px-8 py-20 bg-white border-t border-[#E5DED3]">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-bold text-[#2F4A6E] leading-snug">
            Our curated menus help customers disccover you on Google, make your
            dishes easier to browse, an expose your menu to more customers.
          </h2>

          <p className="text-lg text-[#1A2C45] leading-relaxed max-w-3xl mx-auto">
            Ottawa‑Menus gives you a clean, accessible, and search‑friendly menu
            that works everywhere.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-8 py-20 bg-[#F7F3EB]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#0A1A2F]">
              Generate Menus Instantly
            </h3>
            <p className="text-lg leading-relaxed text-[#1A2C45]">
              Create clean, structured menu cards and sample menus in seconds —
              perfect for your website, social media, or print. Every design is
              consistent, readable, and built to convert customers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#0A1A2F]">
              Update Items Easily
            </h3>
            <p className="text-lg leading-relaxed text-[#1A2C45]">
              Add or adjust menu items anytime. Every update is instantly
              optimized for Google indexing, helping customers discover your
              dishes faster.
            </p>
          </div>
        </div>
      </section>

      {/* WATERMARK */}
      <div className="absolute bottom-4 right-6 text-sm text-[#0A1A2F] opacity-40">
        M. George
      </div>
    </main>
  );
}
