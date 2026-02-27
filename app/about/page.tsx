export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#F7F3EB] text-[#0A1A2F] px-8 py-20">
      {/* PAGE TITLE */}
      <h1 className="text-5xl font-extrabold tracking-tight text-center mb-16">
        About Ottawa‑Menus
      </h1>

      {/* INTRO SECTION WITH IMAGE ON RIGHT */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#2F4A6E]">
            Making websites accessible — M. George
          </h2>

          <p className="text-lg leading-relaxed text-[#1A2C45]">
            I’m Mwihaki George, a web developer passionate about accessible,
            reliable, and search‑friendly design. I believe every restaurant
            deserves a menu that works for everyone — including customers using
            screen readers, mobile devices, or assistive technology.
          </p>

          <p className="text-lg leading-relaxed text-[#1A2C45]">
            Ottawa‑Menus was built to solve a simple problem: PDF menus and
            image‑based menus are hard to read, impossible for Google to index,
            and frustrating for customers. HTML menus are practical, steady,
            accessible, and effective — and they help your restaurant get found.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/about.jpg"
            alt="Portrait of M. George"
            className="w-full max-w-sm rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      {/* VALUE OF HTML MENUS */}
      <section className="max-w-5xl mx-auto mt-20 space-y-12">
        <h2 className="text-3xl font-bold text-[#2F4A6E] text-center">
          Why HTML Menus Matter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Accessibility</h3>
            <p className="text-lg leading-relaxed text-[#1A2C45]">
              HTML menus are readable by screen readers, keyboard‑friendly, and
              fully responsive — ensuring every customer can browse your dishes
              without barriers.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Google Ranking</h3>
            <p className="text-lg leading-relaxed text-[#1A2C45]">
              Search engines can’t index PDFs or images. HTML menus help Google
              understand your dishes, improving your visibility and local search
              ranking.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Google Business</h3>
            <p className="text-lg leading-relaxed text-[#1A2C45]">
              When your menu is structured and readable, Google Business can
              display your items directly in search results — helping customers
              discover you faster.
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
