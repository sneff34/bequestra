export type Status = "needs_attention" | "needs_review" | "approval";

export type PortalItemData = {
  status: Status;
  familyCommentary: string;
  familyCommentaryAt: string; // ISO date string
  familyUploadLabel: string;
  familyUploadAt: string; // ISO date string
  professionalCommentary: string;
  professionalCommentaryAt: string; // ISO date string
};

/** Format ISO date string as "Month Date, Year" (e.g. February 27, 2025) */
export function formatTimestamp(iso: string): string {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

const STORAGE_KEY = "bequestra_portal_sync";

function getStored(): Record<string, PortalItemData> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setStored(data: Record<string, PortalItemData>) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export function getPortalItem(id: string): Partial<PortalItemData> {
  return getStored()[id] ?? {};
}

export function getAllPortalData(): Record<string, PortalItemData> {
  return getStored();
}

export function setPortalItem(
  id: string,
  update: Partial<PortalItemData>
) {
  const data = getStored();
  const current = data[id] ?? {
    status: "needs_attention",
    familyCommentary: "",
    familyCommentaryAt: "",
    familyUploadLabel: "",
    familyUploadAt: "",
    professionalCommentary: "",
    professionalCommentaryAt: "",
  };
  data[id] = { ...current, ...update };
  setStored(data);
}

export function itemId(si: number, ii: number): string {
  return `s${si}-i${ii}`;
}
