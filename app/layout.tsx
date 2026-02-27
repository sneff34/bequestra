import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bequestra",
  description: "Where coordination meets care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F5F0] text-[#1E2A32]">

        {/* ================= HEADER ================= */}
        <nav className="flex items-center justify-between px-16 py-6 bg-[#F4EDE4] relative z-50">

          {/* LOGO */}
          <div>
            <img
              src="/logo.png"
              alt="Bequestra Logo"
              className="h-32 w-auto object-contain mix-blend-multiply"
            />
          </div>

          {/* CENTER NAV */}
          <div className="flex space-x-16 text-lg font-bold text-[#1E2A32]">

            {/* Businesses */}
            <div className="relative group">
              <button>Businesses</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-3 px-6 py-4 text-sm text-[#2F4F5F] rounded-lg space-y-2 whitespace-nowrap">
                <a href="#" className="block">For Funeral Homes</a>
                <a href="#" className="block">For Law Firms</a>
                <a href="#" className="block">For Nursing Homes</a>
                <a href="#" className="block">For Hospice Centers</a>
              </div>
            </div>

            {/* Families */}
            <div className="relative group">
              <button>Families</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-3 px-6 py-4 text-sm text-[#2F4F5F] rounded-lg space-y-2 whitespace-nowrap">
                <a href="#" className="block">Loss Support</a>
                <a href="#" className="block">Legacy Planning</a>
              </div>
            </div>

            {/* Resources */}
            <div className="relative group">
              <button>Resources</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-3 px-6 py-4 text-sm text-[#2F4F5F] rounded-lg space-y-2 whitespace-nowrap">
                <a href="#" className="block">Resource Center</a>
              </div>
            </div>

            {/* Company */}
            <div className="relative group">
              <button>Company</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-3 px-6 py-4 text-sm text-[#2F4F5F] rounded-lg space-y-2 whitespace-nowrap">
                <a href="/company" className="block">About Us</a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex space-x-5">
            <a
              href="/login"
              className="px-6 py-2 rounded-full border border-[#2F4F5F] text-[#2F4F5F] bg-white font-semibold hover:bg-[#2F4F5F] hover:text-white transition"
            >
              Log In
            </a>

            <a
              href="#"
              className="px-6 py-2 rounded-full bg-[#2F4F5F] text-white font-semibold hover:opacity-90 transition"
            >
              Book a Demo
            </a>
          </div>

        </nav>

        <main>{children}</main>

      </body>
    </html>
  );
}