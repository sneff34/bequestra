import Link from "next/link";

export default function FamilyLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4EDE4]">
      <div className="bg-white p-12 shadow-lg rounded-xl text-center space-y-6 w-[400px]">
        <h1 className="text-3xl font-semibold text-[#1E2A32]">
          Family Login
        </h1>

        <p className="text-[#4A5A63]">
          Secure access for families managing coordination and legacy planning.
        </p>

        <Link
          href="#"
          className="block px-6 py-3 border border-[#2F4F5F] text-[#2F4F5F] rounded-full hover:bg-[#2F4F5F] hover:text-white transition"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}