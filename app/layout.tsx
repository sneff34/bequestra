import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-nunito",
  display: "swap",
});

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
      <body className={`${nunito.variable} bg-[#F7F5F0] text-[#1E2A32]`}>

        {/* ================= HEADER ================= */}
        <nav className="flex items-center justify-between px-16 py-6 bg-[#F4EDE4] relative z-50">

          {/* LOGO */}
          <Link href="/" className="block">
            <img
              src="/logo.png"
              alt="Bequestra Logo"
              className="h-36 w-auto object-contain mix-blend-multiply"
            />
          </Link>

          {/* CENTER NAV */}
          <div className="flex space-x-16 text-xl font-bold text-[#1E2A32] font-[family-name:var(--font-warm)]">

            {/* Businesses - pb-2 extends hover zone so dropdown doesn't disappear in the gap */}
            <div className="relative group pb-2">
              <button>Businesses</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-0 pt-2 top-full left-0 px-6 py-4 text-sm text-[#2F4F5F] rounded-lg space-y-2 whitespace-nowrap">
                <Link href="/businesses/funeral-homes" className="block hover:text-[#1E2A32]">For Funeral Homes</Link>
                <Link href="/businesses/law-firms" className="block hover:text-[#1E2A32]">For Law Firms</Link>
                <Link href="/businesses/nursing-homes" className="block hover:text-[#1E2A32]">For Nursing Homes</Link>
                <Link href="/businesses/hospice-centers" className="block hover:text-[#1E2A32]">For Hospice Centers</Link>
              </div>
            </div>

            {/* Families - pb-2 extends hover zone so dropdown doesn't disappear in the gap */}
            <div className="relative group pb-2">
              <button>Families</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-0 pt-2 top-full left-0 px-6 py-4 text-sm text-[#2F4F5F] rounded-lg space-y-2 whitespace-nowrap">
                <Link href="/families/loss-support" className="block hover:text-[#1E2A32]">Loss Support</Link>
                <Link href="#" className="block hover:text-[#1E2A32]">Legacy Planning</Link>
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
                <Link href="/company" className="block">About Us</Link>
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