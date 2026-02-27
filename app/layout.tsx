import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAF8] text-gray-800">
        
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center px-8 py-4 border-b bg-white">
          <Link href="/" className="font-serif text-xl">
            Bequestra
          </Link>

          <div className="space-x-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/company" className="hover:underline">
              Company
            </Link>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>

      </body>
    </html>
  );
}