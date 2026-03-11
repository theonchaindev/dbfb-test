"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "Cloud Communications", href: "/solutions/cloud" },
    { label: "Connectivity & Networks", href: "/solutions/connectivity" },
    { label: "Mobile Workforce", href: "/solutions/mobile" },
    { label: "IT Services", href: "/solutions/it" },
    { label: "Smart Workspaces", href: "/solutions/workspaces" },
    { label: "Operational Enhancements", href: "/solutions/operations" },
  ],
  Company: [
    { label: "About DBFB", href: "/about" },
    { label: "Why DBFB?", href: "/why-dbfb" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ],
  Resources: [
    { label: "Insights & Blogs", href: "/insights" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Whitepapers", href: "/resources/whitepapers" },
    { label: "Webinars", href: "/resources/webinars" },
    { label: "Support Centre", href: "/support" },
    { label: "Self-Service Portal", href: "/portal" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "GDPR", href: "/legal/gdpr" },
    { label: "Accessibility", href: "/legal/accessibility" },
    { label: "Modern Slavery Act", href: "/legal/modern-slavery" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: "#15112e",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <img src="/logo.png" alt="DBFB" className="h-7 w-auto" />
            </Link>
            <p className="text-xs text-white/40 leading-relaxed mb-6">
              UK-based telecommunications and business technology provider. Powering serious businesses since 2003.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:support@dbfb.co.uk"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-[#359D9E] transition-colors"
              >
                <Mail size={13} />
                support@dbfb.co.uk
              </a>
              <a
                href="tel:03301359900"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-[#359D9E] transition-colors"
              >
                <Phone size={13} />
                0330 135 9900
              </a>
              <span className="flex items-start gap-2 text-xs text-white/40">
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                United Kingdom
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/6 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} DBFB Ltd. All rights reserved.
            Registered in England & Wales.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href={`/legal/${item.toLowerCase()}`}
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
