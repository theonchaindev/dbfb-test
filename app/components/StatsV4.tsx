"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+",    label: "Years in business",   detail: "Established 2004" },
  { value: "2,400+", label: "UK businesses served", detail: "Across every sector" },
  { value: "99.9%",  label: "Uptime SLA",           detail: "Carrier-grade network" },
  { value: "24/7",   label: "UK-based support",     detail: "Named engineers, always" },
];

export default function StatsV4() {
  return (
    <section style={{ background: "#EBE6DE" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(17,17,17,0.1)" }}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-start p-5 sm:p-8 lg:p-10 group transition-colors duration-300"
            style={{ background: "#EBE6DE" }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#111111"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#EBE6DE"; }}
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none tabular-nums mb-3 transition-colors duration-300 group-hover:text-white" style={{ color: "#111111" }}>
              {stat.value}
            </p>
            <p className="text-sm font-semibold mb-1.5 transition-colors duration-300 group-hover:text-white/80" style={{ color: "rgba(17,17,17,0.7)" }}>
              {stat.label}
            </p>
            <p className="text-xs transition-colors duration-300 group-hover:text-white/40" style={{ color: "rgba(17,17,17,0.4)" }}>
              {stat.detail}
            </p>
            <div className="w-6 h-0.5 bg-[#EB5E5A] mt-4" />
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
