import Link from "next/link";

export default function LawFirmsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top half: lighter cream */}
      <section className="min-h-[50vh] flex-1 flex items-center justify-center relative bg-[#FAF8F5] px-24 py-20">
        {/* Lawyer image behind the text - centered, behind content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
            {/* Replace src with /lawyer-handshake.jpg when you add your own image to public */}
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80"
              alt="Lawyer and client"
              className="absolute inset-0 w-full h-full object-contain opacity-25"
            />
          </div>
        </div>

        {/* Text content on top */}
        <div className="relative z-10 max-w-3xl text-center space-y-6">
          <h1 className="text-6xl font-[family-name:var(--font-warm)] font-semibold text-[#1E2A32]">
            For Law Firms
          </h1>
          <p className="text-xl text-[#1E2A32] font-medium leading-relaxed">
            Bequestra helps law firms support clients with estate planning,
            probate, and legacy coordination.
          </p>
        </div>
      </section>

      {/* Bottom half: dark blue with CTA */}
      <section className="min-h-[50vh] bg-[#1E2A32] flex flex-col items-center justify-center px-24 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          For businesses and human outcomes
        </h2>
        <p className="max-w-2xl text-white/90 text-lg mb-10">
          Strengthen client loyalty and drive long-term growth by offering seamless, on-demand coordination when families need it most.
        </p>
        <Link
          href="/businesses/law-firms/book-demo"
          className="inline-block px-8 py-4 rounded-full bg-[#C6A85B] text-[#1E2A32] font-semibold hover:bg-[#d4b96a] transition"
        >
          Book a Demo
        </Link>
      </section>
    </div>
  );
}
