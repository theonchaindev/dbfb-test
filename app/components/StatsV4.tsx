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
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">

          {/* Left: image panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[360px] lg:min-h-[480px]"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=75"
              alt="DBFB team at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(23,15,73,0.93) 0%, rgba(23,15,73,0.72) 100%)" }}
            />
            <div className="relative h-full flex flex-col justify-end p-10 lg:p-14">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "#EB5E5A" }}
              >
                Our track record
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-xs">
                Two decades of keeping UK businesses connected.
              </p>
              <div className="w-12 h-0.5 mt-6" style={{ background: "#EB5E5A" }} />
            </div>
          </motion.div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-px bg-gray-100">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="bg-white flex flex-col items-start p-8 lg:p-10 group hover:bg-[#170F49] transition-colors duration-300"
              >
                <p className="text-4xl lg:text-5xl font-black leading-none tabular-nums mb-3 text-[#170F49] group-hover:text-white transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-1.5 group-hover:text-white/80 transition-colors duration-300">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-400 group-hover:text-white/40 transition-colors duration-300">
                  {stat.detail}
                </p>
                <div className="w-6 h-0.5 bg-[#EB5E5A] mt-4" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
