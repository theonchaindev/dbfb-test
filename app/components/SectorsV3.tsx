"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const sectors = [
  {
    title: "Public Sector",
    desc: "G-Cloud procurement, PSN-compliant connectivity and GDPR-compliant infrastructure for local authorities and government bodies.",
    tags: ["G-Cloud", "PSN", "GDPR"],
    href: "/sectors/public",
  },
  {
    title: "Enterprise",
    desc: "Multi-site estates, global connectivity and dedicated account management for organisations that need scale and single accountability.",
    tags: ["Multi-site", "SLA-backed", "Custom terms"],
    href: "/sectors/corporate",
  },
  {
    title: "Finance",
    desc: "FCA-aligned infrastructure with full audit trails, encrypted communications and regulatory compliance built into every layer.",
    tags: ["FCA", "Audit trails", "Encrypted"],
    href: "/sectors/finance",
  },
  {
    title: "Healthcare",
    desc: "Secure communications meeting NHS Digital and CQC standards — from GP surgeries to multi-site NHS trusts.",
    tags: ["NHS Digital", "CQC", "IG Toolkit"],
    href: "/sectors/healthcare",
  },
  {
    title: "Education",
    desc: "Scalable networks, managed Wi-Fi and IT support for schools, colleges and universities of every size.",
    tags: ["Schools", "Universities", "BYOD"],
    href: "/sectors/education",
  },
  {
    title: "Construction",
    desc: "Robust mobile and site connectivity for dispersed workforces, with rapid deployment on new development sites.",
    tags: ["Mobile", "Rapid deploy", "Multi-site"],
    href: "/sectors/construction",
  },
  {
    title: "Legal",
    desc: "High-availability, encrypted communications for law firms — compliant, resilient and always on when it matters most.",
    tags: ["High availability", "Encrypted", "Compliant"],
    href: "/sectors/legal",
  },
  {
    title: "Retail",
    desc: "Unified communications and reliable connectivity keeping every store, HQ and supply chain seamlessly in sync.",
    tags: ["Unified comms", "EPOS", "Multi-branch"],
    href: "/sectors/retail",
  },
];

export default function SectorsV3() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold text-[#EB5E5A] uppercase tracking-widest mb-4"
            >
              Sector expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="text-4xl lg:text-5xl font-bold text-[#170F49] leading-tight"
            >
              Industries<br />we serve
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm lg:text-right"
          >
            Deep sector knowledge means we understand your regulatory environment and operational challenges before you explain them.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Link
                href={sector.href}
                className="group flex flex-col h-full bg-white p-6 hover:bg-[#170F49] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-bold text-[#170F49] group-hover:text-white transition-colors duration-300">
                    {sector.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-300 flex-shrink-0 mt-0.5 group-hover:text-[#EB5E5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-4 group-hover:text-white/70 transition-colors duration-300">
                  {sector.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {sector.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-gray-100 text-gray-500 group-hover:bg-white/10 group-hover:text-white/60 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/sectors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#170F49] border border-[#170F49]/20 px-5 py-2.5 rounded-lg hover:border-[#170F49]/50 hover:bg-[#170F49]/4 transition-all duration-200"
          >
            View all sectors <ArrowUpRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
