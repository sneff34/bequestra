export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top: white with title, copy, and transparent path-in-woods image */}
      <section className="relative bg-white px-24 py-24 md:py-32 flex items-center justify-center min-h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 z-0 flex items-center justify-center"
          style={{ animation: "zoom-in-out 14s ease-in-out infinite" }}
        >
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-[0.2]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E2A32] font-[family-name:var(--font-warm)]">
            Where coordination meets care
          </h1>
          <p className="text-xl md:text-2xl font-bold text-[#1E2A32] leading-relaxed font-[family-name:var(--font-warm)]">
            We are here to redefine the end of life experience by creating an
            organized and coordinated support ecosystem that prioritizes dignity,
            simplicity, and healing. For every family.
          </p>
        </div>
      </section>

      {/* Bottom: dark blue */}
      <section className="flex-1 bg-[#1E2A32] px-24 py-20 pb-28">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-lg font-bold text-[#C6A85B] uppercase tracking-wide mb-4">
              Who we are
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Bequestra is a pioneering technology platform designed to
              modernize and simplify funeral arrangements and end-of-life
              planning. We provide compassionate, professional coordination
              services that help families navigate the overwhelming logistical,
              administrative, and emotional tasks that arise immediately
              following the death of a loved one. By leveraging technology, we
              aim to eliminate inefficiencies, reduce stress, and empower users
              with tools to make informed decisions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#C6A85B] uppercase tracking-wide mb-4">
              Our Approach
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              We combine human empathy with operational excellence, ensuring
              families receive the support they need during one of life&apos;s
              most difficult moments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
