import { WhatWeDoGrid } from "./WhatWeDoGrid";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lantern.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#1E2A32]/70"></div>
        </div>

        <div className="relative z-10 flex w-full justify-between items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-7xl font-light tracking-tight text-white/95 mb-3 font-[family-name:var(--font-warm)]">
              Bequestra
            </h1>
            <p className="text-3xl text-white/90 mb-10 font-normal font-[family-name:var(--font-warm)]">
              Where Coordination Meets Care
            </p>

            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-5">
                <div className="h-6 w-6 rounded-full border-2 border-[#C6A85B] flex items-center justify-center">
                  <div className="h-2 w-2 bg-[#C6A85B] rounded-full"></div>
                </div>
                <span>Contact Funeral Home</span>
              </div>
              <div className="flex items-center space-x-5">
                <div className="h-6 w-6 rounded-full border-2 border-[#C6A85B] flex items-center justify-center">
                  <div className="h-2 w-2 bg-[#C6A85B] rounded-full"></div>
                </div>
                <span>Close Accounts</span>
              </div>
              <div className="flex items-center space-x-5">
                <div className="h-6 w-6 rounded-full border-2 border-[#C6A85B] flex items-center justify-center">
                  <div className="h-2 w-2 bg-[#C6A85B] rounded-full"></div>
                </div>
                <span>Make a Will</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/elderly-woman.jpg"
              alt="Elderly woman smiling"
              className="rounded-2xl shadow-2xl w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="bg-[#1E2A32] px-6 py-16 md:py-20">
        <p className="max-w-3xl mx-auto text-center text-xl md:text-2xl text-white/95 font-[family-name:var(--font-warm)] leading-relaxed">
          The Bequestra team. We&apos;ll orchestrate and be by your side the entirety of the process.
        </p>
      </section>

      {/* 2×3 What we do grid */}
      <section className="bg-[#1E2A32] px-6 pb-24 pt-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white font-[family-name:var(--font-warm)] text-center mb-10">
          What we do
        </h2>
        <WhatWeDoGrid />
      </section>
    </>
  );
}