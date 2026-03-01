"use client";

import { useState } from "react";

const ITEMS = [
  {
    title: "Planning the funeral",
    description:
      "Our team will support with locating the correct funeral home and coordinating logistics.",
  },
  {
    title: "Managing digital accounts",
    description:
      "We will help cancel or transfer all accounts and subscriptions.",
  },
  {
    title: "Insurance claims and benefits",
    description:
      "We help orchestrate and coordinate all benefits that the family is entitled to.",
  },
  {
    title: "Time for the house",
    description:
      "Understand and learn how to handle all the decisions that come with the house.",
  },
  {
    title: "Navigating Probate Law",
    description:
      "Understand the probate process and legally close your loved one's estate with our partnered law firms.",
  },
  {
    title: "Ongoing loss and grief support",
    description:
      "Where to receive the resources and constant care to feel the emotions of these difficult days.",
  },
];

export function WhatWeDoGrid() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
      {ITEMS.map((item, id) => {
        const isOpen = openId === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setOpenId(isOpen ? null : id)}
            className={`
              text-left rounded-2xl border-2 transition-all duration-300 overflow-hidden
              ${isOpen
                ? "border-[#C6A85B] bg-[#1E2A32] shadow-lg scale-[1.02]"
                : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
              }
            `}
          >
            <div className="px-6 py-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-warm)]">
                  {item.title}
                </h3>
                <span className="text-white/50 text-xs shrink-0 mt-0.5">
                  {isOpen ? "−" : "+"}
                </span>
              </div>
              <div
                className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}
              >
                <p className="text-white/85 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
