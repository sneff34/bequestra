import Link from "next/link";

const OPTIONS = [
  { label: "Funeral home", href: "/businesses/funeral-homes/book-demo" },
  { label: "Law firm", href: "/businesses/law-firms/book-demo" },
  { label: "Nursing home", href: "/businesses/nursing-homes/book-demo" },
  { label: "Hospice center", href: "/businesses/hospice-centers/book-demo" },
  { label: "Family", href: "/families/book-demo" },
];

export default function BookDemoLandingPage() {
  return (
    <div className="min-h-screen bg-[#1E2A32] flex flex-col items-center justify-center px-24 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-warm)]">
          Book a demo
        </h1>
        <p className="text-xl text-white/90 mb-12">
          if you are a...
        </p>
        <ul className="space-y-4">
          {OPTIONS.map((opt) => (
            <li key={opt.href}>
              <Link
                href={opt.href}
                className="block w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-lg border border-white/20 hover:border-[#C6A85B]/50 transition"
              >
                {opt.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
