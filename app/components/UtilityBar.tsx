"use client";

import { Mail, Phone } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="hidden md:block w-full py-2 px-4" style={{ background: "#EB5E5A" }}>
      <div className="max-w-7xl mx-auto flex justify-end items-center gap-6">
        <a
          href="mailto:support@dbfb.co.uk"
          className="flex items-center gap-1.5 text-xs hover:text-white/80 transition-colors"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          <Mail size={12} className="opacity-60" />
          <span className="text-white/70">Contact:</span>&nbsp;support@dbfb.co.uk
        </a>
        <a
          href="tel:01604673630"
          className="flex items-center gap-1.5 text-xs hover:text-white/80 transition-colors"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          <Phone size={12} className="opacity-60" />
          <span className="text-white/70">Phone:</span>&nbsp;01604 673630
        </a>
      </div>
    </div>
  );
}
