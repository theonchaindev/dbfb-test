"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const sectors = [
  { title: "Public Sector",   tags: ["G-Cloud", "PSN", "GDPR"],           href: "/sectors/public" },
  { title: "Enterprise",      tags: ["Multi-site", "SLA-backed"],          href: "/sectors/corporate" },
  { title: "Finance",         tags: ["FCA", "Audit trails"],               href: "/sectors/finance" },
  { title: "Healthcare",      tags: ["NHS Digital", "CQC"],                href: "/sectors/healthcare" },
  { title: "Education",       tags: ["Schools", "BYOD", "Wi-Fi"],          href: "/sectors/education" },
  { title: "Construction",    tags: ["Mobile", "Rapid deploy"],            href: "/sectors/construction" },
  { title: "Legal",           tags: ["High availability", "Encrypted"],    href: "/sectors/legal" },
  { title: "Retail",          tags: ["EPOS", "Multi-branch"],              href: "/sectors/retail" },
  { title: "Hospitality",     tags: ["Guest Wi-Fi", "IoT"],                href: "/sectors/hospitality" },
  { title: "Manufacturing",   tags: ["Industrial", "IoT", "5G"],           href: "/sectors/manufacturing" },
];

export default function SectorsV4() {
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
              Industries
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 }}
              className="text-4xl lg:text-5xl font-bold text-[#170F49] leading-tight"
            >
              Sectors we serve
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="text-gray-500 text-sm max-w-xs lg:text-right leading-relaxed"
          >
            Deep regulatory and operational knowledge across every major UK industry.
          </motion.p>
        </div>

        {/* Row list */}
        <div className="border-t border-gray-100">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link
                href={sector.href}
                className="group flex items-center gap-6 py-5 px-3 -mx-3 border-b border-gray-100 hover:bg-gray-50/70 rounded-lg transition-all duration-200"
              >
                <span className="text-[10px] font-mono font-bold text-gray-300 w-6 flex-shrink-0 group-hover:text-[#EB5E5A] transition-colors duration-200">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-bold text-[#170F49] flex-1 group-hover:text-[#EB5E5A] transition-colors duration-200">
                  {sector.title}
                </h3>

                <div className="hidden md:flex items-center gap-2">
                  {sector.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] font-medium rounded-full text-gray-500 transition-colors duration-200"
                      style={{ background: "#F3F4F6" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-gray-300 flex-shrink-0 group-hover:text-[#170F49] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
