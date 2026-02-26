export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#0A1A2F] px-8 py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-6xl font-extrabold tracking-tight">
            Ottawa‑Menus
          </h1>
          <p className="text-2xl leading-relaxed text-[#1A2C45] max-w-3xl">
            A modern, accessible, search‑optimized platform that helps Ottawa’s
            restaurants present their menus with clarity, confidence, and
            professionalism. Built for owners who want a strong digital presence
            without the complexity.
          </p>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Built for real business impact
          </h2>
          <p className="text-lg leading-relaxed">
            Customers judge a restaurant within seconds of landing on its
            website. Ottawa‑Menus ensures that first impression is clean,
            readable, mobile‑friendly, and aligned with modern accessibility
            standards. No PDFs. No clutter. Just a beautiful, structured menu
            that works everywhere.
          </p>
        </section>

        {/* SEO SECTION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Designed for Google visibility
          </h2>
          <p className="text-lg leading-relaxed">
            Search engines reward clarity, structure, and accessibility.
            Ottawa‑Menus uses semantic HTML, optimized headings, and clean
            metadata to help your restaurant appear more prominently in Google
            search results. A well‑structured menu isn’t just good design — it’s
            good SEO.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Readable, structured menu content Google can index</li>
            <li>Fast‑loading pages that improve ranking signals</li>
            <li>Accessible markup that meets WCAG AA/AAA standards</li>
            <li>Consistent formatting that builds trust with customers</li>
          </ul>
        </section>

        {/* ACCESSIBILITY SECTION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Accessibility as a core principle
          </h2>
          <p className="text-lg leading-relaxed">
            Every menu card is built with inclusive design: high contrast,
            readable typography, keyboard navigation, and screen‑reader‑friendly
            structure. Accessibility isn’t an afterthought — it’s a competitive
            advantage.
          </p>
        </section>

        {/* WHAT YOU CAN DO */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            What you can do with Ottawa‑Menus
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Create beautiful, structured menu cards instantly</li>
            <li>Generate sample menus for social media and promotions</li>
            <li>Update your business details and menu items anytime</li>
            <li>Maintain a consistent, professional online presence</li>
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
