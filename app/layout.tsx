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

        {/* ================= NAVIGATION ================= */}
        <nav className="flex items-center justify-between px-12 py-6 bg-[#F4EDE4] relative z-50">

          {/* LEFT — LOGO */}
          <div className="flex items-center">
          <img
  src="/logo.png"
  alt="Bequestra Logo"
  className="h-20 w-auto object-contain mix-blend-multiply"
/>
          </div>

          {/* CENTER — DROPDOWNS */}
          <div className="flex space-x-14 text-lg font-bold text-[#1E2A32]">

            {/* Businesses */}
            <div className="relative group">
              <button className="hover:text-[#2F4F5F] transition">
                Businesses
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-3 p-4 space-y-2 text-sm text-[#2F4F5F] rounded-lg">                <a href="#">For Funeral Homes</a>
                <a href="#">For Law Firms</a>
                <a href="#">For Nursing Homes</a>
                <a href="#">For Hospice Centers</a>
              </div>
            </div>

            {/* Families */}
            <div className="relative group">
              <button>Families</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-3 p-4 space-y-2 text-[#2F4F5F] rounded-lg">
                <a href="#">Loss Support</a>
                <a href="#">Legacy Planning</a>
              </div>
            </div>

            {/* Resources */}
            <div className="relative group">
              <button>Resources</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-3 p-4 space-y-2 text-[#2F4F5F] rounded-lg">
                <a href="#">Resource Center</a>
              </div>
            </div>

            {/* Company */}
            <div className="relative group">
              <button>Company</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-3 p-4 space-y-2 text-[#2F4F5F] rounded-lg">
                <a href="/company">About Us</a>
              </div>
            </div>

          </div>

          {/* RIGHT — ACTION BUTTONS */}
          <div className="flex space-x-4">
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
        {/* ================= END NAVIGATION ================= */}

        {/* PAGE CONTENT */}
        <main>{children}</main>

      </body>
    </html>
  );
}