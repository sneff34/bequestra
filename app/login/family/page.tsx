"use client";

import { useRouter } from "next/navigation";

export default function FamilyLogin() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/family/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E2A32] px-6">
      <div className="bg-white p-12 shadow-xl rounded-2xl w-full max-w-[400px]">
        <h1 className="text-3xl font-semibold text-[#1E2A32] text-center mb-2">
          Family Login
        </h1>
        <p className="text-[#4A5A63] text-sm text-center mb-8">
          Secure access for families managing coordination and legacy planning.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-[#1E2A32] mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-3 rounded-lg border border-[#1E2A32]/20 text-[#1E2A32] focus:outline-none focus:ring-2 focus:ring-[#C6A85B] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1E2A32] mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 rounded-lg border border-[#1E2A32]/20 text-[#1E2A32] focus:outline-none focus:ring-2 focus:ring-[#C6A85B] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="login-number" className="block text-sm font-medium text-[#1E2A32] mb-2">
              Login number
            </label>
            <input
              type="text"
              id="login-number"
              name="login_number"
              className="w-full px-4 py-3 rounded-lg border border-[#1E2A32]/20 text-[#1E2A32] focus:outline-none focus:ring-2 focus:ring-[#C6A85B] focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#1E2A32] text-white font-semibold hover:bg-[#2a3d48] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
