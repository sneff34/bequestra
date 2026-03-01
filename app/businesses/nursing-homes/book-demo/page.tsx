export default function NursingHomesBookDemoPage() {
  return (
    <div className="min-h-screen bg-[#1E2A32] flex items-center justify-center px-24 py-20">
      <div className="w-full max-w-5xl flex items-center gap-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Comprehensive support for life&apos;s most challenging moments
          </h1>
        </div>
        <form className="flex-1 bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1E2A32] mb-2">
              Nursing home email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@nursinghome.com"
              className="w-full px-4 py-3 rounded-lg border border-[#1E2A32]/20 text-[#1E2A32] placeholder:text-[#1E2A32]/50 focus:outline-none focus:ring-2 focus:ring-[#C6A85B] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-[#1E2A32] mb-2">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full px-4 py-3 rounded-lg border border-[#1E2A32]/20 text-[#1E2A32] bg-white focus:outline-none focus:ring-2 focus:ring-[#C6A85B] focus:border-transparent"
            >
              <option value="">Select country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div>
            <label htmlFor="hear-about" className="block text-sm font-medium text-[#1E2A32] mb-2">
              How did you hear about us?
            </label>
            <input
              type="text"
              id="hear-about"
              name="hear_about"
              placeholder="e.g. referral, search, conference"
              className="w-full px-4 py-3 rounded-lg border border-[#1E2A32]/20 text-[#1E2A32] placeholder:text-[#1E2A32]/50 focus:outline-none focus:ring-2 focus:ring-[#C6A85B] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="help" className="block text-sm font-medium text-[#1E2A32] mb-2">
              How can we help you?
            </label>
            <textarea
              id="help"
              name="help"
              rows={4}
              placeholder="Tell us about your needs..."
              className="w-full px-4 py-3 rounded-lg border border-[#1E2A32]/20 text-[#1E2A32] placeholder:text-[#1E2A32]/50 focus:outline-none focus:ring-2 focus:ring-[#C6A85B] focus:border-transparent resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#1E2A32] text-white font-semibold hover:bg-[#2a3d48] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
