"use client";

import { useState } from "react";

const items = [
  {
    title: "Match with a Bequestrian",
    content: "full" as const,
  },
  {
    title: "Receive a step-by-step checklist",
    content: "checklist" as const,
  },
  {
    title: "Handle logistics and administration",
    content: "logistics" as const,
  },
  {
    title: "Nurture emotional needs",
    content: "emotional" as const,
  },
  {
    title: "Constant access to support",
    content: "access" as const,
  },
];

const PANEL_TRANSITION_MS = 350;

export function SupportChecklist() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ol className="max-w-4xl w-full space-y-0 list-none text-white/90 text-lg pl-0">
      {items.map((item, index) => {
        const isOpen = hoveredIndex === index;
        return (
          <li
            key={index}
            className="relative [contain:layout]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-start gap-3 py-3 cursor-default">
              <span className="font-bold text-[#C6A85B] shrink-0 w-8">
                {index + 1}.
              </span>
              <span
                className={
                  isOpen ? "font-bold text-white" : "text-white/90"
                }
              >
                {item.title}
              </span>
            </div>

            {/* Dropdown panel - grid 0fr/1fr for smooth height transition */}
            <div
              className="grid ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: `grid-template-rows ${PANEL_TRANSITION_MS}ms ease-out`,
              }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pl-11 pb-6 pt-1">
              {item.content === "full" ? (
                <div className="flex gap-8 items-start flex-wrap">
                  <div className="flex-1 min-w-[280px] text-white/90 leading-relaxed">
                    <p>
                      All you need to do is answer a few questions so we can
                      understand your unique situation. A dedicated Bequestrian
                      will help you, your family and loved ones to provide
                      hands-on support.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-64 rounded-2xl bg-[#E8C547] p-5 shadow-lg border border-[#d4af37]/30">
                      <div className="bg-white/95 rounded-xl p-4 shadow-inner">
                        <p className="text-xs font-semibold text-[#1E2A32] mb-3">
                          How can we help you?
                        </p>
                        <ul className="space-y-1.5 text-sm text-[#1E2A32]">
                          <li>• The funeral</li>
                          <li>• Applying for benefits</li>
                          <li>• Plan a service</li>
                          <li>• Digital securitization</li>
                          <li>• Estate planning</li>
                        </ul>
                        <div className="flex gap-2 mt-4">
                          <button
                            type="button"
                            className="flex-1 py-2 rounded-lg bg-[#1E2A32] text-white text-sm font-medium"
                          >
                            Call
                          </button>
                          <button
                            type="button"
                            className="flex-1 py-2 rounded-lg bg-[#C6A85B] text-[#1E2A32] text-sm font-medium"
                          >
                            Text
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.content === "logistics" ? (
                <div className="flex gap-8 items-start flex-wrap">
                  <div className="flex-1 min-w-[280px] text-white/90 leading-relaxed">
                    <p>
                      Hands-on navigational support with the family. Whether it
                      be finding a funeral home, an estate firm, closing your
                      loved one&apos;s physical and digital accounts, or
                      navigating probate—our time-saving infrastructure and
                      tools will be by you for the entire process.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-64 rounded-2xl bg-[#E8C547] p-5 shadow-lg border border-[#d4af37]/30">
                      <div className="rounded-xl overflow-hidden aspect-square w-full bg-white/20">
                        {/* OpenStreetMap tile - © OpenStreetMap contributors */}
                        <img
                          src="https://tile.openstreetmap.org/6/10/23.png"
                          alt="Map"
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.content === "checklist" ? (
                <div className="flex gap-8 items-start flex-wrap">
                  <div className="flex-1 min-w-[280px] text-white/90 leading-relaxed">
                    <p>
                      Our custom plans are designed to meet all family needs.
                      With personalized support and guidance through one of
                      life&apos;s hardest moments.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-64 rounded-2xl bg-[#E8C547] p-5 shadow-lg border border-[#d4af37]/30">
                      <div className="bg-white/95 rounded-xl p-4 shadow-inner">
                        <p className="text-sm font-semibold text-[#1E2A32] mb-3">
                          Our checklist includes:
                        </p>
                        <ul className="space-y-1.5 text-sm text-[#1E2A32]">
                          <li>• Personal belongings</li>
                          <li>• Family belongings</li>
                          <li>• The estate</li>
                          <li>• Account care</li>
                          <li>• Documentation care</li>
                          <li>• Insurance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.content === "emotional" ? (
                <div className="flex gap-8 items-start flex-wrap">
                  <div className="flex-1 min-w-[280px] text-white/90 leading-relaxed">
                    <p>
                      Bequestra&apos;s technological support allows families to
                      focus on the most important aspect: grieving. Rather than
                      dealing with the stressful logistical processes, Bequestra&apos;s
                      advanced support follows the family every step of the way
                      and deploys ongoing support, therapy resources, and
                      follow-on check-ins to ensure the process goes smoothly.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-64 rounded-2xl bg-[#E8C547] p-5 shadow-lg border border-[#d4af37]/30">
                      <div className="rounded-xl overflow-hidden aspect-square w-full bg-white/20">
                        <img
                          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80"
                          alt="Friendly therapist or counselor offering support"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.content === "access" ? (
                <div className="flex gap-8 items-start flex-wrap">
                  <div className="flex-1 min-w-[280px] text-white/90 leading-relaxed">
                    <p>
                      Our guide contains resources such as articles, reviews,
                      and video and audio guides that cover the entirety of the
                      loss process—from the death certificate to funeral
                      planning, to taxes, to estate planning, to managing family
                      dynamics—to ensure that the loss of a loved one is a
                      positive process.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-64 rounded-2xl bg-[#E8C547] p-5 shadow-lg border border-[#d4af37]/30">
                      <div className="rounded-xl overflow-hidden aspect-square w-full bg-white/20">
                        <img
                          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80"
                          alt="Person guiding or supporting another through a process"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-white/70 text-sm">
                  More details coming soon.
                </div>
              )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
