"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Cloud Communications",
    desc: "Cloud telephony, Teams Voice, SIP trunking and hosted contact centre.",
    href: "/solutions/cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=75",
    accent: "#EB5E5A",
  },
  {
    title: "Connectivity & Networks",
    desc: "Leased lines, SD-WAN, private 5G and resilient broadband everywhere.",
    href: "/solutions/connectivity",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=75",
    accent: "#359D9E",
  },
  {
    title: "Mobile Workforce",
    desc: "Business mobile, MDM, device lifecycle and multi-network SIM plans.",
    href: "/solutions/mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=75",
    accent: "#EB5E5A",
  },
  {
    title: "Managed IT Services",
    desc: "End-to-end IT, cyber security, Microsoft 365 and UK-based engineers.",
    href: "/solutions/it",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=75",
    accent: "#359D9E",
  },
  {
    title: "Smart Workspaces",
    desc: "Meeting rooms, video conferencing, displays and digital signage.",
    href: "/solutions/workspaces",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
    accent: "#EB5E5A",
  },
  {
    title: "Operational Enhancements",
    desc: "Managed print, messaging, workflow automation and analytics.",
    href: "/solutions/operations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75",
    accent: "#359D9E",
  },
];

export default function SolutionsV4() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#170F49" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-widest mb-4"
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
            className="text-sm leading-relaxed max-w-xs lg:text-right"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Six service areas — all delivered and supported by our UK team.
          </motion.p>
        </div>

        {/* Image card grid — 3 col, 2 row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link
                href={sol.href}
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ height: "280px" }}
              >
                {/* Background image */}
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(23,15,73,0.97) 0%, rgba(23,15,73,0.75) 50%, rgba(23,15,73,0.2) 100%)" }}
                />

                {/* Accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: sol.accent }} />

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-white">
                    {sol.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {sol.desc}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5" style={{ color: sol.accent }}>
                    Learn more
                    <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
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
