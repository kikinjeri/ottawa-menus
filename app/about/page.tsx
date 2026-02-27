export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#0A1A2F]">
      {/* NAVBAR */}
      <nav className="w-full bg-[#0A1A2F] text-[#F7F3EB] py-4 px-8 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            Ottawa‑Menus
          </a>

          <div className="flex gap-8 text-lg">
            <a href="/" className="hover:text-[#D9D3C7] transition">
              Home
            </a>
            <a href="/about" className="hover:text-[#D9D3C7] transition">
              About
            </a>
            <a
              href="/control-center/restaurants"
              className="hover:text-[#D9D3C7] transition"
            >
              Control Center
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-8 py-24 bg-[#F7F3EB]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-6xl font-extrabold tracking-tight">
            Modern Menus for Ottawa’s Restaurants
          </h1>

          <p className="text-2xl text-[#1A2C45] max-w-3xl mx-auto leading-relaxed">
            A clean, accessible, search‑optimized platform that helps
            restaurants present their menus beautifully — without PDFs, clutter,
            or outdated designs. Built for owners who want a strong digital
            presence with zero hassle.
          </p>

          <a
            href="/control-center/restaurants"
            className="inline-block bg-[#0A1A2F] text-[#F7F3EB] px-10 py-4 rounded-lg text-xl font-semibold hover:bg-[#13263F] transition"
          >
            Open Control Center →
          </a>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="px-8 py-24 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">
              Why Restaurants Choose Ottawa‑Menus
            </h2>
            <p className="text-lg text-[#1A2C45] max-w-3xl mx-auto">
              A modern menu isn’t just a list of dishes — it’s a business asset.
              Ottawa‑Menus helps restaurants stand out with clarity,
              accessibility, and professional presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">SEO‑Optimized</h3>
              <p className="text-lg leading-relaxed">
                Structured HTML menus help Google index your dishes, improving
                local search visibility and attracting more customers.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Accessible by Design</h3>
              <p className="text-lg leading-relaxed">
                High contrast, readable typography, and screen‑reader‑friendly
                structure ensure every customer can explore your menu.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Beautiful & Consistent</h3>
              <p className="text-lg leading-relaxed">
                Editorial‑grade layouts give your restaurant a polished,
                professional presence that builds trust instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-8 py-24 bg-[#F7F3EB]">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">What You Can Do</h2>
            <p className="text-lg text-[#1A2C45] max-w-3xl mx-auto">
              Everything you need to manage your restaurant’s digital presence —
              simple, fast, and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Generate Menu Cards</h3>
              <p className="text-lg leading-relaxed">
                Create clean, structured menu cards instantly — perfect for your
                website, social media, or print.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Create Sample Menus</h3>
              <p className="text-lg leading-relaxed">
                Build promotional menus for events, specials, or seasonal
                offerings with just a few clicks.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Update Items Easily</h3>
              <p className="text-lg leading-relaxed">
                Add, remove, or adjust menu items anytime — no re‑exporting PDFs
                or redesigning layouts.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Consistent Branding</h3>
              <p className="text-lg leading-relaxed">
                Every menu follows the same editorial style, giving your
                restaurant a cohesive, premium identity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
