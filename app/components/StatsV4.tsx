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
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white flex flex-col items-start p-8 lg:p-10 group hover:bg-[#170F49] transition-colors duration-300"
            >
              <p
                className="text-4xl lg:text-5xl font-black leading-none tabular-nums mb-3 text-[#170F49] group-hover:text-white transition-colors duration-300"
              >
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-1 group-hover:text-white/80 transition-colors duration-300">
                {stat.label}
              </p>
              <div className="w-6 h-0.5 bg-[#EB5E5A] mt-2" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
