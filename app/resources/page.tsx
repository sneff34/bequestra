import Link from "next/link";

const LIBRARY_ITEMS = [
  {
    title: "Understanding Grief: A Family Guide",
    type: "Guide",
    href: "#",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
  },
  {
    title: "Supporting Children Through Loss",
    type: "Article",
    href: "#",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
  },
  {
    title: "Estate Planning After a Loss",
    type: "Report",
    href: "#",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
  },
  {
    title: "Conversations That Heal",
    type: "Video",
    href: "#",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    title: "Navigating Funeral Planning",
    type: "Guide",
    href: "#",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
  },
  {
    title: "Financial Steps for Families",
    type: "Article",
    href: "#",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
  },
  {
    title: "Mental Health and Bereavement",
    type: "Report",
    href: "#",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
  },
  {
    title: "When a Parent Dies: A Guide for Adults",
    type: "Guide",
    href: "#",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80",
  },
  {
    title: "Building Resilience as a Family",
    type: "Video",
    href: "#",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top: white */}
      <section className="bg-white px-24 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E2A32] mb-6 font-[family-name:var(--font-warm)]">
          Resources to help you get to work
        </h1>
        <p className="max-w-2xl mx-auto text-[#1E2A32]/90 text-lg leading-relaxed">
          Resources and documents to help you understand what each party faces
          during one of life&apos;s most challenging moments. We are here to help.
        </p>
      </section>

      {/* Bottom: dark blue with scrollable 3x3 library */}
      <section className="flex-1 bg-[#1E2A32] px-24 py-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12 font-[family-name:var(--font-warm)]">
            Library
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 overflow-auto">
            {LIBRARY_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex flex-col rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10 hover:border-[#C6A85B]/50"
              >
                <div className="aspect-video w-full overflow-hidden bg-white/10">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4 flex-1">
                  <span className="text-[#C6A85B] text-xs font-medium uppercase tracking-wide">
                    {item.type}
                  </span>
                  <h3 className="text-white font-bold mt-1 group-hover:text-[#C6A85B] transition">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
