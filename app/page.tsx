export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Lantern Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lantern.jpg')" }}
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-2 items-center min-h-screen px-24 text-white">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          <h1 className="text-7xl font-serif tracking-wide">
            Bequestra
          </h1>

          <h2 className="text-5xl font-serif font-bold leading-tight">
            where coordination meets care
          </h2>

          {/* Checklist */}
          <div className="space-y-6 pt-6 text-lg">

            {/* Contact Funeral Home */}
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/30">
              <div className="flex items-center space-x-3">
                <span className="text-white">✔</span>
                <span>Contact funeral home</span>
              </div>
              <span>🏠</span>
            </div>

            {/* Close Accounts */}
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/30">
              <div className="flex items-center space-x-3">
                <span className="text-white">✔</span>
                <span>Close accounts</span>
              </div>
              <span>📄</span>
            </div>

            {/* Make a Will */}
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/30">
              <div className="flex items-center space-x-3">
                <span className="text-white">✔</span>
                <span>Make a will</span>
              </div>
              <span>🖊</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — Elderly Woman */}
        <div className="flex justify-center">
          <img
            src="/elderly-woman.jpg"
            alt="Elderly Woman"
            className="rounded-2xl shadow-2xl w-[450px] object-cover"
          />
        </div>

      </div>
    </div>
  );
}