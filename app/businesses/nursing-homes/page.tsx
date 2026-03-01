import Link from "next/link";

export default function NursingHomesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top half: lighter cream */}
      <section className="min-h-[50vh] flex-1 flex items-center justify-center relative bg-[#FAF8F5] px-24 py-20">
        {/* Image behind the text: nursing home attendant at front desk */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
            {/* Replace src with /nursing-desk.jpg when you add your own image to public */}
            <img
              src="https://images.pexels.com/photos/16364306/pexels-photo-16364306.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Nursing home care facility"
              className="absolute inset-0 w-full h-full object-contain opacity-25"
            />
          </div>
        </div>

        {/* Text content on top */}
        <div className="relative z-10 max-w-3xl text-center space-y-6">
          <h1 className="text-6xl font-[family-name:var(--font-warm)] font-semibold text-[#1E2A32]">
            For Nursing Homes
          </h1>
          <p className="text-xl text-[#1E2A32] font-medium leading-relaxed">
            Bequestra supports nursing homes and care facilities with
            coordination tools for residents and their families.
          </p>
        </div>
      </section>

      {/* Bottom half: dark blue with CTA */}
      <section className="min-h-[50vh] bg-[#1E2A32] flex flex-col items-center justify-center px-24 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          For businesses and human outcomes
        </h2>
        <p className="max-w-2xl text-white/90 text-lg mb-10">
          Improve efficiency. Increase client satisfaction. And unlock opportunities through coordinated, on-demand family support.
        </p>
        <Link
          href="/businesses/nursing-homes/book-demo"
          className="inline-block px-8 py-4 rounded-full bg-[#C6A85B] text-[#1E2A32] font-semibold hover:bg-[#d4b96a] transition"
        >
          Book a Demo
        </Link>
      </section>
    </div>
  );
}
