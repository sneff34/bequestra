"use client";

import { useState } from "react";

const FOLDERS: { label: string; icon: "pen" | "insurance" | "funeral" | "lawyer" | "trust" | "healthcare" | "person" | "asset" | "termlife" | "home" | "bank" | "mortgage" }[] = [
  { label: "Will and trust documents", icon: "pen" },
  { label: "Insurance", icon: "insurance" },
  { label: "Funeral options", icon: "funeral" },
  { label: "Power of Attorney", icon: "lawyer" },
  { label: "Living trust", icon: "trust" },
  { label: "Healthcare Directives", icon: "healthcare" },
  { label: "Personal information", icon: "person" },
  { label: "Asset information", icon: "asset" },
  { label: "Term life insurance", icon: "termlife" },
  { label: "Primary home", icon: "home" },
  { label: "Chase account", icon: "bank" },
  { label: "Mortgage papers", icon: "mortgage" },
];

function FolderPopIcon({ type }: { type: string }) {
  if (type === "pen")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" />
      </svg>
    );
  if (type === "insurance")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" /><rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    );
  if (type === "funeral")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-4h6v4M9 12h6" />
      </svg>
    );
  if (type === "lawyer")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6M7 8V3h10v5M7 8l5 5 5-5M7 8H2v13h20V8h-5" />
      </svg>
    );
  if (type === "trust")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    );
  if (type === "healthcare")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    );
  if (type === "person")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 10-16 0" />
      </svg>
    );
  if (type === "asset")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" /><path d="M18 9l-5 5-4-4-3 3" />
      </svg>
    );
  if (type === "termlife")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" /><rect x="4" y="4" width="16" height="16" rx="2" />
      </svg>
    );
  if (type === "home")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" />
      </svg>
    );
  if (type === "bank")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    );
  if (type === "mortgage")
    return (
      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /><path d="M9 12h6" />
      </svg>
    );
  return null;
}

const PIE_SECTORS = [
  { label: "Insurance", percent: 25, color: "#C6A85B" },
  { label: "Bank accounts", percent: 30, color: "#ffffff" },
  { label: "Real estate", percent: 25, color: "#2F4F5F" },
  { label: "Physical assets", percent: 20, color: "#4a6b7c" },
];

export default function LegacyPlanningPage() {
  const [openFolder, setOpenFolder] = useState<number | null>(null);
  const [hoveredFolder, setHoveredFolder] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#1E2A32]">
      {/* Top section: dark blue, centered */}
      <section className="px-24 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-warm)]">
          A family standard for estate and legacy planning
        </h1>
        <p className="max-w-2xl mx-auto text-white/90 text-lg leading-relaxed">
          Bequestra&apos;s Safe Deposit helps companies and families prepare
          with conviction. The Safe Deposit platform makes it easy for all
          parties to create, store, share, and communicate estate and legacy
          plans.
        </p>
      </section>

      {/* Folders */}
      <section className="px-24 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {FOLDERS.map((folder, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredFolder(index)}
              onMouseLeave={() => setHoveredFolder(null)}
            >
              <button
                type="button"
                onClick={() => setOpenFolder(openFolder === index ? null : index)}
                className="flex flex-col items-center gap-2 text-left focus:outline-none focus:ring-2 focus:ring-[#C6A85B] rounded-lg p-2 w-full"
              >
                <div
                  className={`relative w-20 h-16 rounded-t-lg rounded-b shadow-md transition-all ${
                    openFolder === index
                      ? "bg-[#C6A85B] scale-105 ring-2 ring-white/30"
                      : "bg-[#E8C547] hover:bg-[#d4b96a]"
                  }`}
                >
                  <div className="absolute -top-0.5 left-0 w-8 h-3 bg-[#d4af37] rounded-t transform -skew-x-6 origin-left" />
                  <div className="absolute inset-0 flex items-center justify-center pt-1">
                    <svg className="w-8 h-6 text-[#1E2A32]/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                    </svg>
                  </div>
                </div>
                <span className="text-white/90 text-xs font-medium text-center leading-tight line-clamp-2 w-full">
                  {folder.label}
                </span>
              </button>
              {/* Pop-out box to the right: light yellow outer, white inner with icon + label */}
              {hoveredFolder === index && (
                <div className="absolute left-full top-0 ml-2 z-10 w-36 rounded-xl bg-[#E8C547] p-1.5 shadow-xl border border-[#d4af37]/50 pointer-events-none">
                  <div className="rounded-lg bg-white p-3 w-full">
                    <FolderPopIcon type={folder.icon} />
                    <p className="text-xs text-[#1E2A32] font-medium text-center mt-2 leading-tight">
                      {folder.label}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pie chart: bottom-right segment white so it doesn't blend with background */}
      <section className="px-24 pb-24">
        <div className="max-w-md mx-auto flex flex-col items-center gap-8">
          <div
            className="w-64 h-64 rounded-full shrink-0 shadow-lg"
            style={{
              background: `conic-gradient(
                ${PIE_SECTORS[0].color} 0% 25%,
                ${PIE_SECTORS[1].color} 25% 55%,
                ${PIE_SECTORS[2].color} 55% 80%,
                ${PIE_SECTORS[3].color} 80% 100%
              )`,
            }}
          />
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white text-sm font-medium">
            {PIE_SECTORS.map((s) => (
              <li key={s.label} className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full shrink-0 ${s.color === "#ffffff" ? "border-2 border-white/80" : ""}`}
                  style={{ backgroundColor: s.color }}
                />
                <span>
                  {s.label} {s.percent}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
