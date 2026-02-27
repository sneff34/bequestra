import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4EDE4]">
      <div className="bg-white p-12 shadow-lg rounded-xl text-center space-y-6 w-[400px]">
        <h1 className="text-3xl font-semibold text-[#1E2A32]">Log In</h1>

        <Link
          href="/login/professional"
          className="block px-6 py-3 bg-[#2F4F5F] text-white rounded-full hover:opacity-90 transition"
        >
          Professional Login
        </Link>

        <Link
          href="/login/family"
          className="block px-6 py-3 border border-[#2F4F5F] rounded-full hover:bg-[#2F4F5F] hover:text-white transition"
        >
          Family Login
        </Link>
      </div>
    </div>
  );
}