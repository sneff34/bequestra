export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center px-24 overflow-hidden">

      {/* Lantern Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lantern.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#1E2A32]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full justify-between items-center">

        {/* LEFT SIDE */}
        <div className="max-w-xl text-white">

          <h1 className="text-7xl font-light tracking-tight text-white/95 mb-3 font-[family-name:var(--font-warm)]">
            Bequestra
          </h1>
          <p className="text-3xl text-white/90 mb-10 font-normal font-[family-name:var(--font-warm)]">
            Where Coordination Meets Care
          </p>

          <div className="space-y-6 text-lg">

            {/* Item 1 */}
            <div className="flex items-center space-x-5">
              <div className="h-6 w-6 rounded-full border-2 border-[#C6A85B] flex items-center justify-center">
                <div className="h-2 w-2 bg-[#C6A85B] rounded-full"></div>
              </div>
              <span>Contact Funeral Home</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-5">
              <div className="h-6 w-6 rounded-full border-2 border-[#C6A85B] flex items-center justify-center">
                <div className="h-2 w-2 bg-[#C6A85B] rounded-full"></div>
              </div>
              <span>Close Accounts</span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-5">
              <div className="h-6 w-6 rounded-full border-2 border-[#C6A85B] flex items-center justify-center">
                <div className="h-2 w-2 bg-[#C6A85B] rounded-full"></div>
              </div>
              <span>Make a Will</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div>
          <img
            src="/elderly-woman.jpg"
            alt="Elderly woman smiling"
            className="rounded-2xl shadow-2xl w-[500px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}