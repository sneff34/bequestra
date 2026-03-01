"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getAllPortalData, setPortalItem, itemId as getItemId, formatTimestamp, type Status } from "@/app/lib/portalStorage";

const FAMILY_SECTIONS = [
  { title: "Section 1", mandatory: true, items: ["Pronounced death, transport body to funeral home, determine coroner involvement"] },
  { title: "Section 2", mandatory: true, items: ["Obtain certified death certificates", "Notify Social Security Administration and upload to Social Security Administration", "Obtain burial or cremation permit", "Arrange funeral, burial, or cremation", "Coordinate cemetery"] },
  { title: "Section 3", mandatory: true, items: ["Work with funeral home staff to obtain casket", "Work with funeral home staff to schedule dates", "Work with funeral home staff for any celebration of life"] },
  { title: "Section 4", mandatory: true, items: ["Upload person's name, first and last", "Upload address", "Upload driver's license", "Upload passport", "Upload social security"] },
  { title: "Section 5", mandatory: false, items: ["Cancel driver's license and vehicle titles", "Cancel passport", "Notify employer", "Collect final paychecks", "Handle employer-sponsored retirement"] },
  { title: "Section 6", mandatory: false, items: ["Notify banks", "Transfer vehicle titles", "Notice to creditors", "Cancel subscriptions"] },
  { title: "Section 7", mandatory: false, items: ["Locate will and estate docs", "File will with probate court", "Open probate estate", "Obtain letters of authority", "Inventory estate assets", "Transfer or sell real estate", "Pay valid debts", "File Final Individual Income Tax Return", "Distribute assets to beneficiaries"] },
  { title: "Section 8", mandatory: false, items: ["Pay valid debt closure", "Memorialize digital accounts", "Close digital accounts"] },
  { title: "Section 9", mandatory: false, items: ["File final accounting", "Close the estate"] },
];

function StatusBadge({ status }: { status: Status }) {
  const styles = { needs_attention: "bg-amber-500/90 text-white", needs_review: "bg-[#C6A85B] text-[#1E2A32]", approval: "bg-emerald-600 text-white" };
  const labels = { needs_attention: "Needs attention", needs_review: "Needs review", approval: "Approval" };
  return <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold uppercase ${styles[status]}`}>{labels[status]}</span>;
}

const inputClass = "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C6A85B] text-sm";
const labelClass = "block text-xs text-white/70 mb-1 font-medium";

const DASHBOARD_TITLES: Record<string, string> = {
  "funeral-homes": "Funeral home — case dashboard",
  "law-firms": "Law firm — case dashboard",
  "nursing-homes": "Nursing home — case dashboard",
  "hospice-centers": "Hospice center — case dashboard",
};

function ProfessionalDashboardInner() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "funeral-homes";
  const showCeremony = type === "funeral-homes";

  const [familyStatuses, setFamilyStatuses] = useState<Record<string, Status>>({});
  const [familyCommentary, setFamilyCommentary] = useState<Record<string, string>>({});
  const [familyUploadLabel, setFamilyUploadLabel] = useState<Record<string, string>>({});
  const [familyCommentaryAt, setFamilyCommentaryAt] = useState<Record<string, string>>({});
  const [familyUploadAt, setFamilyUploadAt] = useState<Record<string, string>>({});
  const [professionalCommentary, setProfessionalCommentary] = useState<Record<string, string>>({});
  const [professionalCommentaryAt, setProfessionalCommentaryAt] = useState<Record<string, string>>({});

  const itemId = (si: number, ii: number) => getItemId(si, ii);

  useEffect(() => {
    const data = getAllPortalData();
    const st: Record<string, Status> = {};
    const fc: Record<string, string> = {};
    const fu: Record<string, string> = {};
    const fca: Record<string, string> = {};
    const fua: Record<string, string> = {};
    const pc: Record<string, string> = {};
    const pca: Record<string, string> = {};
    Object.entries(data).forEach(([id, item]) => {
      st[id] = item.status;
      fc[id] = item.familyCommentary;
      fu[id] = item.familyUploadLabel;
      if (item.familyCommentaryAt) fca[id] = item.familyCommentaryAt;
      if (item.familyUploadAt) fua[id] = item.familyUploadAt;
      pc[id] = item.professionalCommentary;
      if (item.professionalCommentaryAt) pca[id] = item.professionalCommentaryAt;
    });
    setFamilyStatuses((prev) => ({ ...prev, ...st }));
    setFamilyCommentary((prev) => ({ ...prev, ...fc }));
    setFamilyUploadLabel((prev) => ({ ...prev, ...fu }));
    setFamilyCommentaryAt((prev) => ({ ...prev, ...fca }));
    setFamilyUploadAt((prev) => ({ ...prev, ...fua }));
    setProfessionalCommentary((prev) => ({ ...prev, ...pc }));
    setProfessionalCommentaryAt((prev) => ({ ...prev, ...pca }));
  }, []);

  const setStatus = useCallback((id: string, status: Status) => {
    setFamilyStatuses((s) => ({ ...s, [id]: status }));
    setPortalItem(id, { status });
  }, []);

  const persistProfessionalCommentary = useCallback((id: string, value: string) => {
    const at = new Date().toISOString();
    setPortalItem(id, { professionalCommentary: value, professionalCommentaryAt: at });
    setProfessionalCommentaryAt((prev) => ({ ...prev, [id]: at }));
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-warm)]">
        {DASHBOARD_TITLES[type] ?? "Professional — case dashboard"}
      </h1>

      {/* Deceased person */}
      <section className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-5">
        <h2 className="text-xl font-semibold text-white border-b border-white/10 pb-2">
          Deceased person
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>First name</label>
            <input type="text" name="first_name" className={inputClass} placeholder="First name" />
          </div>
          <div>
            <label className={labelClass}>Last name</label>
            <input type="text" name="last_name" className={inputClass} placeholder="Last name" />
          </div>
          <div>
            <label className={labelClass}>Age</label>
            <input type="number" name="age" className={inputClass} placeholder="Age" />
          </div>
          <div>
            <label className={labelClass}>Birth date</label>
            <input type="date" name="birth_date" className={inputClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Address</label>
          <input type="text" name="address" className={inputClass} placeholder="Full address" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {["Driver's license", "Passport", "Social security number", "Death certificate"].map((label) => (
            <div key={label}>
              <label className={labelClass}>Upload {label.toLowerCase()}</label>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition">Choose file</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          ))}
        </div>
      </section>

      {showCeremony && (
        <>
          {/* Ceremony — only for funeral homes */}
          <section className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-5">
            <h2 className="text-xl font-semibold text-white border-b border-white/10 pb-2">
              Ceremony
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>When the person died</label>
                <input type="date" name="date_of_death" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Requested ceremony date</label>
                <input type="date" name="ceremony_date" className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Religion</label>
              <input type="text" name="religion" className={inputClass} placeholder="Note religion" />
            </div>
            <div>
              <label className={labelClass}>Flowers or banquets</label>
              <textarea name="flowers_banquets" rows={2} className={inputClass} placeholder="Note any flowers or banquets to be held" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Viewing — date</label>
                <input type="date" name="viewing_date" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Viewing — timeframe</label>
                <input type="text" name="viewing_time" className={inputClass} placeholder="e.g. 2:00 PM – 6:00 PM" />
              </div>
            </div>
            <div className="pt-2 border-t border-white/10">
              <h3 className="text-white font-medium mb-3">Point of contact (alive person)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Name</label>
                  <input type="text" name="contact_name" className={inputClass} placeholder="Full name" />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" name="contact_phone" className={inputClass} placeholder="Phone" />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Email</label>
                  <input type="email" name="contact_email" className={inputClass} placeholder="Email" />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Family portal checklist (pulled from family) */}
      <section className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">From family portal</h2>
          <p className="text-white/60 text-sm mt-1">Checklist synced from the associated family. You can mark items as Approval.</p>
        </div>
        <ul className="divide-y divide-white/10">
          {FAMILY_SECTIONS.flatMap((section, si) =>
            section.items.map((item, ii) => {
              const id = itemId(si, ii);
              const status = familyStatuses[id] ?? "needs_attention";
              const fromFamily = familyCommentary[id] ?? "";
              const uploadedFile = familyUploadLabel[id] ?? "";
              const proCommentary = professionalCommentary[id] ?? "";
              return (
                <li key={id} className="px-6 py-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-white/95 font-medium">{item}</p>
                      <span className="text-xs text-white/50">{section.title}{section.mandatory ? " (Mandatory)" : " (Optional)"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={status} />
                      {status === "needs_review" && (
                        <button
                          type="button"
                          onClick={() => setStatus(id, "approval")}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                        >
                          Approve
                        </button>
                      )}
                      {status === "approval" && (
                        <button
                          type="button"
                          onClick={() => setStatus(id, "needs_review")}
                          className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold border border-white/30"
                        >
                          Unapprove
                        </button>
                      )}
                    </div>
                  </div>
                  {(fromFamily || uploadedFile) && (
                    <div className="rounded-lg bg-white/10 border border-white/20 p-3 space-y-1">
                      <p className="text-xs text-white/70 font-medium">From family</p>
                      {fromFamily && (
                        <p className="text-white text-sm">
                          {fromFamily}
                          {familyCommentaryAt[id] && (
                            <span className="block text-white/50 text-xs mt-1">{formatTimestamp(familyCommentaryAt[id])}</span>
                          )}
                        </p>
                      )}
                      {uploadedFile && (
                        <p className="text-white/80 text-sm">
                          Uploaded file: <span className="font-medium">{uploadedFile}</span>
                          {familyUploadAt[id] && (
                            <span className="block text-white/50 text-xs mt-0.5">{formatTimestamp(familyUploadAt[id])}</span>
                          )}
                        </p>
                      )}
                    </div>
                  )}
                  <div>
                    <label className={labelClass}>
                      Your commentary (visible to family)
                      {professionalCommentaryAt[id] && (
                        <span className="font-normal text-white/50 ml-1">— {formatTimestamp(professionalCommentaryAt[id])}</span>
                      )}
                    </label>
                    <textarea
                      value={proCommentary}
                      onChange={(e) => {
                        const v = e.target.value;
                        setProfessionalCommentary((c) => ({ ...c, [id]: v }));
                        persistProfessionalCommentary(id, v);
                      }}
                      onBlur={(e) => persistProfessionalCommentary(id, e.target.value)}
                      placeholder="Add notes for the family..."
                      rows={2}
                      className={inputClass}
                    />
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </section>
    </div>
  );
}

export function ProfessionalDashboard() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading...</div>}>
      <ProfessionalDashboardInner />
    </Suspense>
  );
}
