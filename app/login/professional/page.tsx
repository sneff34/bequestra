import Link from "next/link";

const OPTIONS = [
  { label: "Funeral homes", href: "/login/professional/funeral-homes" },
  { label: "Law firms", href: "/login/professional/law-firms" },
  { label: "Hospice centers", href: "/login/professional/hospice-centers" },
  { label: "Nursing homes", href: "/login/professional/nursing-homes" },
];

export default function ProfessionalLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E2A32] px-6">
      <div className="bg-white p-12 shadow-xl rounded-2xl w-full max-w-[420px]">
        <h1 className="text-3xl font-semibold text-[#1E2A32] text-center mb-8">
          Professional Login
        </h1>
        <div className="space-y-3">
          {OPTIONS.map((opt) => (
            <Link
              key={opt.href}
              href={opt.href}
              className="block px-6 py-3 bg-[#2F4F5F] text-white rounded-full text-center font-semibold hover:bg-[#3d5f6f] transition"
            >
              {opt.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
