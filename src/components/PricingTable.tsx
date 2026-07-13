import { KeyRound } from "lucide-react";
import { coursePackages, pricingRows } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function PricingTable() {
  return (
    <Reveal className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[var(--shadow-soft)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50/80">
              <th className="p-4 text-sm font-semibold text-neutral-500 sm:p-5">
                Pricing
              </th>
              {coursePackages.map((p) => (
                <th key={p.id} className="p-4 text-center sm:p-5">
                  <span className="block font-display text-sm font-bold text-ink">
                    {p.code}
                  </span>
                  <span className="text-[0.7rem] font-medium text-brand-500">
                    {p.vehicle}
                  </span>
                  {p.popular && (
                    <span className="mt-1 inline-block rounded-full bg-brand-500 px-2 py-0.5 text-[0.6rem] font-bold uppercase text-white">
                      Popular
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingRows.map((row, ri) => (
              <tr
                key={row.label}
                className={ri % 2 ? "bg-neutral-50/40" : "bg-white"}
              >
                <td className="p-4 text-sm font-medium text-ink sm:p-5">
                  {row.label}
                </td>
                {row.values.map((v, vi) => (
                  <td
                    key={vi}
                    className="p-4 text-center text-sm font-bold text-ink sm:p-5"
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-2.5 border-t border-neutral-100 bg-green-50/60 px-4 py-3.5 text-sm text-green-800 sm:px-5">
        <KeyRound className="h-4 w-4 shrink-0 text-green-600" />
        <span>
          <strong className="font-semibold">Free car or truck hire for testing</strong>{" "}
          is included with all full courses.
        </span>
      </div>
    </Reveal>
  );
}
