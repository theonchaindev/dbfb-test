"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    index: "01",
    title: "Cloud Communications",
    desc: "Cloud telephony, Microsoft Teams for Voice, SIP trunking and hosted contact centre — fully managed and always on.",
    href: "/solutions/cloud",
  },
  {
    index: "02",
    title: "Connectivity & Networks",
    desc: "Dedicated leased lines, SD-WAN, private 5G, IoT connectivity and resilient business broadband across every site.",
    href: "/solutions/connectivity",
  },
  {
    index: "03",
    title: "Mobile Workforce",
    desc: "Business mobile plans, MDM, device lifecycle management and multi-network SIM solutions for distributed teams.",
    href: "/solutions/mobile",
  },
  {
    index: "04",
    title: "Managed IT Services",
    desc: "End-to-end IT management, cyber security, Microsoft 365, cloud hosting and backup — handled by our UK engineers.",
    href: "/solutions/it",
  },
  {
    index: "05",
    title: "Smart Workspaces",
    desc: "Meeting room solutions, video conferencing, interactive displays and digital signage for modern workplaces.",
    href: "/solutions/workspaces",
  },
  {
    index: "06",
    title: "Operational Enhancements",
    desc: "Managed print, business messaging, workflow automation and analytics to streamline how your business runs.",
    href: "/solutions/operations",
  },
];

export default function SolutionsV3() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold text-[#EB5E5A] uppercase tracking-widest mb-4"
            >
              What we do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="text-4xl lg:text-5xl font-bold text-[#170F49] leading-tight"
            >
              Our<br />solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-500 text-base leading-relaxed self-end max-w-xl"
          >
            Six interconnected service areas, each delivered and supported in-house by our UK team.
            Mix and match or take the full stack — we flex around you.
          </motion.p>
        </div>

        {/* Solution rows */}
        <div className="border-t border-gray-100">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Link
                href={sol.href}
                className="group flex items-center gap-8 py-6 border-b border-gray-100 hover:bg-gray-50/60 transition-all duration-200 px-4 -mx-4 rounded-lg"
              >
                {/* Number */}
                <span className="text-xs font-mono font-bold text-gray-300 w-8 flex-shrink-0 group-hover:text-[#EB5E5A] transition-colors duration-200">
                  {sol.index}
                </span>

                {/* Accent line */}
                <div className="w-0 group-hover:w-6 h-px bg-[#EB5E5A] transition-all duration-300 flex-shrink-0" />

                {/* Title */}
                <h3 className="text-lg font-bold text-[#170F49] w-64 flex-shrink-0 group-hover:text-[#EB5E5A] transition-colors duration-200">
                  {sol.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1 hidden md:block">
                  {sol.desc}
                </p>

                {/* Arrow */}
                <ArrowUpRight
                  size={18}
                  className="text-gray-300 flex-shrink-0 group-hover:text-[#170F49] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex justify-end"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#170F49] border border-[#170F49]/20 px-5 py-2.5 rounded-lg hover:border-[#170F49]/50 hover:bg-[#170F49]/4 transition-all duration-200"
          >
            View all solutions
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
