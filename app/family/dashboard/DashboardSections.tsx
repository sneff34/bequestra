"use client";

import { useState, useCallback, useEffect } from "react";
import { getAllPortalData, setPortalItem, itemId as getItemId, formatTimestamp, type Status } from "@/app/lib/portalStorage";

const SECTIONS = [
  {
    title: "Section 1",
    mandatory: true,
    items: [
      "Pronounced death, transport body to funeral home, determine coroner involvement",
    ],
  },
  {
    title: "Section 2",
    mandatory: true,
    items: [
      "Obtain certified death certificates",
      "Notify Social Security Administration and upload to Social Security Administration",
      "Obtain burial or cremation permit",
      "Arrange funeral, burial, or cremation",
      "Coordinate cemetery",
    ],
  },
  {
    title: "Section 3",
    mandatory: true,
    items: [
      "Work with funeral home staff to obtain casket",
      "Work with funeral home staff to schedule dates",
      "Work with funeral home staff for any celebration of life",
    ],
  },
  {
    title: "Section 4",
    mandatory: true,
    items: [
      "Upload person's name, first and last",
      "Upload address",
      "Upload driver's license",
      "Upload passport",
      "Upload social security",
    ],
  },
  {
    title: "Section 5",
    mandatory: false,
    items: [
      "Cancel driver's license and vehicle titles",
      "Cancel passport",
      "Notify employer",
      "Collect final paychecks",
      "Handle employer-sponsored retirement",
    ],
  },
  {
    title: "Section 6",
    mandatory: false,
    items: [
      "Notify banks",
      "Transfer vehicle titles",
      "Notice to creditors",
      "Cancel subscriptions",
    ],
  },
  {
    title: "Section 7",
    mandatory: false,
    items: [
      "Locate will and estate docs",
      "File will with probate court",
      "Open probate estate",
      "Obtain letters of authority",
      "Inventory estate assets",
      "Transfer or sell real estate",
      "Pay valid debts",
      "File Final Individual Income Tax Return",
      "Distribute assets to beneficiaries",
    ],
  },
  {
    title: "Section 8",
    mandatory: false,
    items: [
      "Pay valid debt closure",
      "Memorialize digital accounts",
      "Close digital accounts",
    ],
  },
  {
    title: "Section 9",
    mandatory: false,
    items: ["File final accounting", "Close the estate"],
  },
];

function StatusBadge({ status }: { status: Status }) {
  const styles = {
    needs_attention: "bg-amber-500/90 text-white",
    needs_review: "bg-[#C6A85B] text-[#1E2A32]",
    approval: "bg-emerald-600 text-white",
  };
  const labels = {
    needs_attention: "Needs attention",
    needs_review: "Needs review",
    approval: "Approval",
  };
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

export function DashboardSections() {
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [comments, setComments] = useState<Record<string, string>>({});
  const [uploads, setUploads] = useState<Record<string, string>>({});
  const [professionalComments, setProfessionalComments] = useState<Record<string, string>>({});
  const [professionalCommentaryAt, setProfessionalCommentaryAt] = useState<Record<string, string>>({});
  const [familyCommentaryAt, setFamilyCommentaryAt] = useState<Record<string, string>>({});
  const [familyUploadAt, setFamilyUploadAt] = useState<Record<string, string>>({});

  const itemId = (si: number, ii: number) => getItemId(si, ii);

  useEffect(() => {
    const data = getAllPortalData();
    const st: Record<string, Status> = {};
    const co: Record<string, string> = {};
    const up: Record<string, string> = {};
    const pc: Record<string, string> = {};
    const pca: Record<string, string> = {};
    const fca: Record<string, string> = {};
    const fua: Record<string, string> = {};
    Object.entries(data).forEach(([id, item]) => {
      st[id] = item.status;
      co[id] = item.familyCommentary;
      up[id] = item.familyUploadLabel;
      if (item.professionalCommentary) pc[id] = item.professionalCommentary;
      if (item.professionalCommentaryAt) pca[id] = item.professionalCommentaryAt;
      if (item.familyCommentaryAt) fca[id] = item.familyCommentaryAt;
      if (item.familyUploadAt) fua[id] = item.familyUploadAt;
    });
    setStatuses((prev) => ({ ...prev, ...st }));
    setComments((prev) => ({ ...prev, ...co }));
    setUploads((prev) => ({ ...prev, ...up }));
    setProfessionalComments((prev) => ({ ...prev, ...pc }));
    setProfessionalCommentaryAt((prev) => ({ ...prev, ...pca }));
    setFamilyCommentaryAt((prev) => ({ ...prev, ...fca }));
    setFamilyUploadAt((prev) => ({ ...prev, ...fua }));
  }, []);

  const handleCommentOrUpload = useCallback((si: number, ii: number) => {
    const id = itemId(si, ii);
    setStatuses((prev) => {
      const current = prev[id] ?? "needs_attention";
      const next = current === "needs_attention" ? "needs_review" : current;
      setPortalItem(id, { status: next });
      return { ...prev, [id]: next };
    });
  }, []);

  const persistFamily = useCallback((
    id: string,
    status: Status,
    commentary: string,
    uploadLabel: string,
    commentaryAt?: string,
    uploadAt?: string
  ) => {
    setPortalItem(id, {
      status,
      familyCommentary: commentary,
      familyUploadLabel: uploadLabel,
      ...(commentaryAt && { familyCommentaryAt: commentaryAt }),
      ...(uploadAt && { familyUploadAt: uploadAt }),
    });
    if (commentaryAt) setFamilyCommentaryAt((prev) => ({ ...prev, [id]: commentaryAt }));
    if (uploadAt) setFamilyUploadAt((prev) => ({ ...prev, [id]: uploadAt }));
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-warm)]">
        Family dashboard
      </h1>

      {SECTIONS.map((section, si) => (
        <div
          key={si}
          className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              {section.title}
              <span className="ml-2 text-xs font-normal text-white/70">
                {section.mandatory ? "(Mandatory)" : "(Optional)"}
              </span>
            </h2>
          </div>
          <ul className="divide-y divide-white/10">
            {section.items.map((item, ii) => {
              const id = itemId(si, ii);
              const status = statuses[id] ?? "needs_attention";
              const comment = comments[id] ?? "";
              const uploadLabel = uploads[id];
              return (
                <li key={id} className="px-6 py-4 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <p className="text-white/95 font-medium">{item}</p>
                    <StatusBadge status={status} />
                  </div>
                  {professionalComments[id] && (
                    <div className="rounded-lg bg-[#C6A85B]/20 border border-[#C6A85B]/40 p-3">
                      <p className="text-xs text-white/80 font-medium mb-1">
                        From your professional
                        {professionalCommentaryAt[id] && (
                          <span className="font-normal text-white/60 ml-1">({formatTimestamp(professionalCommentaryAt[id])})</span>
                        )}
                        :
                      </p>
                      <p className="text-white text-sm">{professionalComments[id]}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-xs text-white/60 mb-1">
                        Commentary
                        {familyCommentaryAt[id] && (
                          <span className="font-normal text-white/50 ml-1">— {formatTimestamp(familyCommentaryAt[id])}</span>
                        )}
                      </label>
                      <textarea
                        value={comment}
                        onChange={(e) => {
                          const v = e.target.value;
                          setComments((c) => ({ ...c, [id]: v }));
                          if (v.trim()) handleCommentOrUpload(si, ii);
                        }}
                        onBlur={(e) => persistFamily(id, status, (e.target as HTMLTextAreaElement).value, uploadLabel ?? "", new Date().toISOString(), undefined)}
                        placeholder="Add notes..."
                        rows={2}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C6A85B] text-sm"
                      />
                    </div>
                    <div className="min-w-[140px]">
                      <label className="block text-xs text-white/60 mb-1">
                        Upload
                      </label>
                      <div className="flex items-center gap-2">
                        <label className="cursor-pointer px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition">
                          {uploadLabel ? "Change file" : "Upload file"}
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const name = file.name;
                                setUploads((u) => ({ ...u, [id]: name }));
                                handleCommentOrUpload(si, ii);
                                persistFamily(id, "needs_review", comment, name, undefined, new Date().toISOString());
                              }
                            }}
                          />
                        </label>
                        {uploadLabel && (
                          <span className="text-white/80 text-xs truncate max-w-[120px]" title={familyUploadAt[id] ? formatTimestamp(familyUploadAt[id]) : undefined}>
                            {uploadLabel}
                            {familyUploadAt[id] && (
                              <span className="block text-white/50 text-[10px] mt-0.5">{formatTimestamp(familyUploadAt[id])}</span>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <p className="text-white/60 text-sm">
        When you add commentary or upload a file, an item moves to &quot;Needs review.&quot; Only your professional portal can change it to &quot;Approval.&quot;
      </p>
    </div>
  );
}
