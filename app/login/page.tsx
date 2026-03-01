import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E2A32]">
      <div className="bg-white p-12 shadow-xl rounded-2xl text-center space-y-6 w-[400px]">
        <h1 className="text-3xl font-semibold text-[#1E2A32]">Log In</h1>

        <Link
          href="/login/professional"
          className="block px-6 py-3 bg-[#2F4F5F] text-white rounded-full font-semibold hover:bg-[#3d5f6f] transition"
        >
          Professional Login
        </Link>

        <Link
          href="/login/family"
          className="block px-6 py-3 bg-[#1E2A32] text-white rounded-full font-semibold hover:bg-white hover:text-[#1E2A32] border-2 border-transparent hover:border-[#1E2A32] transition"
        >
          Family Login
        </Link>
      </div>
    </div>
  );
}
