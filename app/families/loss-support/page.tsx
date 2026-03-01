import { SupportChecklist } from "./SupportChecklist";

export default function LossSupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top half: lighter cream - For Families */}
      <section className="min-h-[50vh] flex-1 flex items-center justify-center relative bg-[#FAF8F5] px-24 py-20">
        {/* Image behind the text: elderly man and woman, smiling or looking into distance */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=900&q=80"
              alt="Elderly couple smiling"
              className="absolute inset-0 w-full h-full object-contain opacity-25"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-3xl text-center space-y-6">
          <h1 className="text-6xl font-[family-name:var(--font-warm)] font-semibold text-[#1E2A32]">
            For Families
          </h1>
          <p className="text-xl text-[#1E2A32] font-medium leading-relaxed">
            Bequestra partners with families to coordinate and support through every step.
          </p>
        </div>
      </section>

      {/* Bottom: dark blue - For families. To receive constant support. + numbered list */}
      <section className="min-h-[80vh] bg-[#1E2A32] flex flex-col items-center px-24 pt-20 pb-32">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          For families. To receive constant support.
        </h2>
        <h3 className="text-xl font-semibold text-white/95 text-center mb-10">
          A unique and custom support approach
        </h3>
        <SupportChecklist />
      </section>
    </div>
  );
}
