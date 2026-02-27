"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-serif mb-6">Bequestra</h1>

      <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
        Orchestrating What Comes Next.
        A modern coordination platform for families, funeral homes,
        and estate professionals.
      </p>

      <div className="flex gap-4">
        <a
          href="#"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Family Portal
        </a>

        <a
          href="#"
          className="border px-6 py-3 rounded-xl"
        >
          Professional Portal
        </a>
      </div>
    </main>
  );
}