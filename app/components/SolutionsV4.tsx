"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Cloud Communications",
    desc: "Cloud telephony, Microsoft Teams Voice, SIP trunking and hosted contact centre.",
    href: "/solutions/cloud",
    accent: "#EB5E5A",
  },
  {
    title: "Connectivity & Networks",
    desc: "Leased lines, SD-WAN, private 5G, IoT and resilient broadband across every site.",
    href: "/solutions/connectivity",
    accent: "#359D9E",
  },
  {
    title: "Mobile Workforce",
    desc: "Business mobile, MDM, device lifecycle and multi-network SIM solutions.",
    href: "/solutions/mobile",
    accent: "#EB5E5A",
  },
  {
    title: "Managed IT Services",
    desc: "End-to-end IT, cyber security, Microsoft 365 and cloud hosting by UK engineers.",
    href: "/solutions/it",
    accent: "#359D9E",
  },
  {
    title: "Smart Workspaces",
    desc: "Meeting rooms, video conferencing, interactive displays and digital signage.",
    href: "/solutions/workspaces",
    accent: "#EB5E5A",
  },
  {
    title: "Operational Enhancements",
    desc: "Managed print, business messaging, workflow automation and analytics.",
    href: "/solutions/operations",
    accent: "#359D9E",
  },
];

export default function SolutionsV4() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#1E183D" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#EB5E5A" }}
            >
              What we do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Our solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="text-sm leading-relaxed max-w-sm lg:text-right"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Six interconnected service areas, all delivered and supported by our UK team.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <Link
                href={sol.href}
                className="group flex flex-col h-full p-8 transition-all duration-300 relative overflow-hidden"
                style={{ background: "#1E183D" }}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${sol.accent}10 0%, transparent 60%)` }}
                />

                {/* Top accent line */}
                <div
                  className="w-8 h-0.5 mb-6 transition-all duration-300 group-hover:w-14"
                  style={{ background: sol.accent }}
                />

                <h3 className="text-lg font-bold text-white mb-3 relative z-10 group-hover:text-white transition-colors duration-200">
                  {sol.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 relative z-10 mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {sol.desc}
                </p>

                <div className="flex items-center gap-1.5 relative z-10">
                  <span className="text-xs font-semibold transition-colors duration-200" style={{ color: sol.accent }}>
                    Learn more
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: sol.accent }}
                  />
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
          className="mt-10 flex justify-center"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg border transition-all duration-200 hover:bg-white/5"
            style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.12)" }}
          >
            View all solutions <ArrowUpRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
